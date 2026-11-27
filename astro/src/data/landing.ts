/**
 * Landing page copy and feature flags.
 * See ../CONTENT.md for assets still needed from you.
 */

export const hero = {
  headlineLines: [
    "Curious by nature.",
    "Technical by trade.",
    "Commercially minded.",
  ],
  intro:
    "I'm Mikhaila — a developer, product thinker and problem solver exploring what happens when technology meets business.",
  showLocation: false,
  locationLabel: "Irish roots · Currently in NYC",
  primaryCta: { label: "Explore my work", href: "#projects" },
  resumeCta: {
    label: "My résumé",
    href: "/MikhailaFitzpatrick_Tech_CurriculumVitae.pdf",
    download: "MikhailaFitzpatrick_Tech_CurriculumVitae",
  },
} as const;

export type ImpactMetric = {
  value: string;
  label: string;
  verified: boolean;
};

/** Placeholder metrics — set verified: true after you approve copy. */
export const impactMetrics: ImpactMetric[] = [
  {
    value: "5+",
    label: "Years of engineering experience",
    verified: false,
  },
  {
    value: "AUD $250k+",
    label: "Revenue in the first two months after a subscription launch I lead on the frontend side",
    verified: false,
  },
  {
    value: "1 hour → 1 click",
    label: "Internal workflows reduced to a single action",
    verified: false,
  },
];

export const capabilitiesSection = {
  number: "04",
  eyebrow: "Approach",
  title: "How I think",
  pillars: [
    {
      title: "Engineering",
      body: "Building and integrating systems — APIs, frontends, automation, and the glue that keeps products reliable.",
    },
    {
      title: "Product",
      body: "User needs, prioritisation, and shipping iteratively so technical work maps to real outcomes.",
    },
    {
      title: "Business",
      body: "Clear communication, commercial context, and problem-solving across engineering and stakeholders.",
    },
  ],
} as const;

export const behindTheScreen = {
  number: "05",
  eyebrow: "Personal",
  title: "Behind the screen",
  lede:
    "Business and technology at the intersection of engineering and product — motivated by momentum, curiosity, and people who are optimistic about what we can build.",
  aside:
    "Someone who feeds off being productive and fueled by momentum, genuinely curious—I like becoming multifaceted enough to take on whatever the work demands once I lock in. I love talking product and business in a world full of problems worth solving, and figuring out how to fill the gaps. You could have me talk to a wall, empathise with it and probably do soemthing for it (leaving that typo in because I wrote this myself — I'm still using my brain).",
  interests: "When I'm not shipping, you'll often find me on the golf course.",
} as const;

export const workSection = {
  number: "03",
  eyebrow: "Portfolio",
  title: "Selected work",
} as const;

export const impactSection = {
  number: "02",
  eyebrow: "Impact",
  title: "In numbers",
} as const;