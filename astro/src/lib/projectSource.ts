/** `astro dev` → local TS data; production build → Supabase only. */
export function usesLocalProjectData(): boolean {
  return import.meta.env.DEV;
}