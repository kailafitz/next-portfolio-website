const CONSENT_KEY = "consentMode";

type ConsentChoices = {
  ad_storage: boolean;
  analytics_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
};

const denied: ConsentChoices = {
  ad_storage: false,
  analytics_storage: false,
  ad_user_data: false,
  ad_personalization: false,
};

const granted: ConsentChoices = {
  ad_storage: true,
  analytics_storage: true,
  ad_user_data: true,
  ad_personalization: true,
};

function track(eventName: string, params: Record<string, string>) {
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params);
}

function readConsent(): ConsentChoices | null {
  const raw = localStorage.getItem(CONSENT_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentChoices>;
    return {
      ad_storage: !!parsed.ad_storage,
      analytics_storage: !!parsed.analytics_storage,
      ad_user_data: !!parsed.ad_user_data,
      ad_personalization: !!parsed.ad_personalization,
    };
  } catch {
    localStorage.removeItem(CONSENT_KEY);
    return null;
  }
}

function applyConsent(choices: ConsentChoices) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(choices));
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    const toStatus = (value: boolean) => (value ? "granted" : "denied");
    gtag("consent", "update", {
      ad_storage: toStatus(choices.ad_storage),
      analytics_storage: toStatus(choices.analytics_storage),
      ad_user_data: toStatus(choices.ad_user_data),
      ad_personalization: toStatus(choices.ad_personalization),
    });
  }
  closeConsent();
  showToast(
    `Your preferences have been saved. You can change them any time from the <a class="font-semibold underline" href="/privacy-policy">Privacy Policy</a>.`,
  );
}

function setConsentOptionsVisible(dialog: HTMLElement, visible: boolean) {
  dialog.querySelector("[data-consent-options]")?.classList.toggle("hidden", !visible);
}

function syncConsentInputs(dialog: HTMLElement, choices: ConsentChoices) {
  dialog.querySelectorAll<HTMLInputElement>("[data-consent]").forEach((input) => {
    const key = input.dataset.consent as keyof ConsentChoices;
    input.checked = choices[key];
  });
}

function closeConsent() {
  const dialog = document.getElementById("consent-dialog");
  dialog?.classList.add("hidden");
  if (dialog) setConsentOptionsVisible(dialog, false);
  const url = new URL(window.location.href);
  if (url.searchParams.has("modal")) {
    url.searchParams.delete("modal");
    history.replaceState({}, "", url.pathname + url.search + url.hash);
  }
}

function openConsent(showOptions = false) {
  const dialog = document.getElementById("consent-dialog");
  if (!dialog) return;
  const stored = readConsent() ?? granted;
  syncConsentInputs(dialog, stored);
  setConsentOptionsVisible(dialog, showOptions);
  dialog.classList.remove("hidden");
}

function showToast(html: string) {
  const toast = document.getElementById("consent-toast");
  const message = document.getElementById("consent-toast-message");
  if (!toast || !message) return;
  message.innerHTML = html;
  toast.classList.remove("hidden");
  window.setTimeout(() => toast.classList.add("hidden"), 5000);
}

function initConsent() {
  const dialog = document.getElementById("consent-dialog");
  if (!dialog || dialog.dataset.ready === "true") return;
  dialog.dataset.ready = "true";

  const params = new URLSearchParams(window.location.search);
  if (params.get("modal") === "true") {
    openConsent(true);
  } else if (localStorage.getItem(CONSENT_KEY) === null) {
    openConsent(false);
  }

  dialog.querySelector("[data-consent-customize]")?.addEventListener("click", () => {
    const stored = readConsent() ?? granted;
    syncConsentInputs(dialog, stored);
    setConsentOptionsVisible(dialog, true);
  });

  dialog.querySelector("[data-consent-save]")?.addEventListener("click", () => {
    const choices = { ...denied };
    dialog.querySelectorAll<HTMLInputElement>("[data-consent]").forEach((input) => {
      choices[input.dataset.consent as keyof ConsentChoices] = input.checked;
    });
    applyConsent(choices);
  });

  dialog.querySelector("[data-consent-accept]")?.addEventListener("click", () => {
    applyConsent(granted);
  });

  dialog.querySelector("[data-consent-reject]")?.addEventListener("click", () => {
    applyConsent(denied);
  });

  document.getElementById("consent-toast-close")?.addEventListener("click", () => {
    document.getElementById("consent-toast")?.classList.add("hidden");
  });
}

function initForm() {
  const form = document.querySelector<HTMLFormElement>("#contact-form");
  if (!form || form.dataset.ready === "true") return;
  form.dataset.ready = "true";
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
    if (button) button.disabled = true;
    const error = form.querySelector<HTMLElement>("[data-form-error]");
    if (error) error.textContent = "";
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Could not send");
      form.replaceWith(
        Object.assign(document.createElement("p"), {
          className: "text-center font-display text-2xl",
          textContent: "Your message has been sent!",
        }),
      );
    } catch {
      if (error) error.textContent = "Something went wrong. Please try again.";
      if (button) button.disabled = false;
    }
  });
}

function initAnalytics() {
  document.querySelectorAll<HTMLElement>("[data-ga]").forEach((node) => {
    if (node.dataset.gaReady === "true") return;
    node.dataset.gaReady = "true";
    node.addEventListener("click", () => {
      const kind = node.dataset.ga;
      const label = node.dataset.gaLabel ?? "";
      if (kind === "contact") track("contact_click", { method: label });
      if (kind === "project-details") {
        track("select_content", { content_type: "project_details", item_id: label });
      }
      if (kind === "project-url") {
        track("select_content", { content_type: "project_url", item_id: label });
      }
      if (kind === "external-portfolio") {
        track("select_content", { content_type: "external_portfolio", item_id: label });
      }
    });
  });

  const measurementId = document.body.dataset.gaId;
  if (!measurementId) return;
  const url = window.location.pathname + window.location.search;
  if (document.body.dataset.pageViewSent === url) return;
  let attempts = 0;
  const send = () => {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag !== "function") return false;
    document.body.dataset.pageViewSent = url;
    gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
      send_to: measurementId,
    });
    return true;
  };
  if (send()) return;
  const interval = window.setInterval(() => {
    attempts += 1;
    if (send() || attempts > 50) window.clearInterval(interval);
  }, 100);
}

export function initSite() {
  initConsent();
  initForm();
  initAnalytics();
}
