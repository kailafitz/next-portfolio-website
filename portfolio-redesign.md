# Portfolio landing page — implementation brief

## Objective
Redesign mikhailafitzpatrick.com into a memorable personal brand that demonstrates engineering ability, product thinking, commercial awareness and personality. Target recruiters and hiring managers across Sales Engineering, Solutions Engineering, Product and frontend engineering.

## 1. Audit before implementation
- Inspect the existing codebase, routes, components, styling, assets and project content.
- Reuse existing functionality and components where practical. Preserve working links, résumé download and contact functionality.
- Verify project names, metrics and disclosure permissions. Do not invent projects, screenshots or outcomes.

## 2. Visual direction
- Aim for a contemporary editorial aesthetic: bold typography, generous whitespace, numbered sections, asymmetric layouts and occasional playful annotations.
- Suggested palette: ivory `#F4F1E8`, ink `#202020`, vermilion `#D24A29`, sage `#B8C1AE`. Check contrast before using accent colours for text.
- Suggested fonts: Space Grotesk or Manrope for headings, Inter for body, IBM Plex Mono for technical labels. Reuse existing fonts if they suit the direction.
- Use bento grids selectively and real product screenshots in prominent project cards.
- Add restrained micro-interactions and scroll transitions; respect reduced-motion preferences.
- Avoid generic glowing gradients, floating technology logos and excessive animation.

## 3. Landing page structure
1. **Navigation:** personal wordmark (e.g. MF.), Work, About, Contact.
2. **Hero:** distinctive positioning, concise introduction, primary CTA to explore work, secondary résumé CTA.
3. **Impact in numbers:** commercial and engineering achievements.
4. **Selected work:** three or four strongest projects, with professional and personal work visible without switching tabs.
5. **How I think:** engineering, product and business capabilities.
6. **The Playground:** optional smaller experiments, AI workflows and technical explorations.
7. **Behind the screen:** concise personal introduction, humour and interests.
8. **Contact:** clear invitation to connect, LinkedIn, GitHub, résumé and existing contact options.

## 4. Hero copy and impact
Suggested headline:

> Curious by nature.  
> Technical by trade.  
> Commercially minded.

Suggested introduction:

> I'm Mikhaila — a developer, product thinker and problem solver exploring what happens when technology meets business.

Optional location label: Irish roots. Currently in NYC. Verify that this remains current.

Primary CTA: **Explore my work**. Secondary CTA: **My résumé**.

Alternative headlines if needed: “I speak both business and technology.” / “Part engineer. Part product thinker. Entirely curious.”

Suggested impact metrics (verify before publishing):
- 5 years of engineering experience.
- AUD $200k in revenue in the first two months following a subscription product launch I helped deliver.
- 40-minute internal workflow reduced to a single click.

## 5. Project presentation
- Remove any public-facing WIP label from the selected-work section; only present projects that are ready to showcase, or clearly label their actual development status.
- Prioritise the Honahlee subscription service and workflow automation if disclosure is permitted.
- Use actual screenshots or approved, anonymised visuals; never imply illustrative imagery is a real product screenshot.
- Cards should show project title, problem/value proposition, role, key outcome, relevant technical tags and a case-study link.
- Build reusable case-study pages covering: problem, target users, solution, personal contribution, architecture, technical/product trade-offs, outcomes or lessons, and demo/repository links where available.
- Highlight technology in context rather than relying on a wall of technology logos.

## 6. About and capabilities
- Shorten the About section and preserve authentic humour (including the existing wall-empathy joke if appropriate).
- Remove negative stereotypes about engineers.
- Show three complementary strengths: engineering (building and integrating systems), product (user needs and prioritisation), and business (communication, commercial outcomes and problem solving).

## 7. Optional differentiators — later phases
- Interactive architecture diagrams explaining frontend, backend, database, authentication and API decisions.
- An “Ask my portfolio” AI assistant grounded in approved portfolio content, with safeguards against fabricated answers and exposure of private information.
- The Playground: small demos, automation tools, API integrations and AI experiments.
- A curiosity/journal section for short articles about technology, startups, product and business.

Do not make these features prerequisites for launching the redesigned landing page.

## 8. Implementation priorities
- **P0:** Audit, hero, navigation, visual system, responsive layout, impact metrics, selected work and contact.
- **P1:** Reusable case-study pages, capabilities section, refined About section, polished project imagery and micro-interactions.
- **P2:** Playground, interactive diagrams, AI assistant and journal, subject to approval.

## 9. Acceptance criteria
- Within five seconds, a visitor can understand who I am, what I build and the value I offer.
- Featured work is easy to find and accessible from the hero CTA.
- All published metrics and project claims are accurate and approved.
- Layout works across mobile, tablet and desktop without overflow.
- Semantic headings, keyboard navigation, visible focus, alt text, sufficient contrast and reduced-motion support are implemented.
- Images are optimised; avoid unnecessary dependencies and heavy animation. Preserve or improve loading performance and SEO metadata.
- Existing links and functionality remain working; run available lint, type-check, test and build commands.
- Report changed files, validation results, assumptions and any remaining content/assets needed from me.

## Agent guidance
Treat the copy, palette and layout as proposed creative direction, not rigid requirements. Adapt them to the existing codebase and available content. Focus on a polished, maintainable landing page first; do not add unnecessary infrastructure or fabricate missing content. Flag significant architectural changes or paid external services before implementing them.
