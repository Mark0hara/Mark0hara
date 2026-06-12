# Portfolio Redesign Plan — Enterprise / Cloud Engineer Aesthetic

Inspired by AWS, Stripe, Vercel, Linear. Goal: recruiter-friendly, credible, low-noise.

## 1. Design System (`src/index.css` + `tailwind.config.ts`)

Replace current tokens with a strict, two-mode palette:

**Dark (default)**
- `--background`: #0F172A (slate-900)
- `--surface / --card`: #111827 (gray-900)
- `--border`: #1F2937
- `--foreground`: #F8FAFC
- `--muted-foreground`: #94A3B8
- `--primary`: #3B82F6
- `--accent`: #60A5FA

**Light**
- `--background`: #FFFFFF
- `--surface / --card`: #F8FAFC
- `--border`: #E2E8F0
- `--foreground`: #0F172A
- `--primary`: #2563EB

Remove:
- `gradient-hero`, `animate-gradient`, animated multicolor backgrounds
- `text-gradient-shimmer` rainbow effect → replace with single solid foreground or subtle primary
- All glitch keyframes (`glitch-anim`, `glitch-color`, `scanlines`, `glitch-skew`, `.language-glitch`, `.glitch-overlay`, `.glitch-scanlines`)
- `pulse-glow`, `magnetic`, `radial-pulse`, `floating` blobs, `btn-shine`, `ripple-effect`, `border-glow-animate`
- Star/particle backgrounds, custom cursor

Keep / add (subtle only):
- `fade-up` (0.5s, ease-out, 12px translate)
- `fade-in` (0.4s)
- `subtle-grid` background pattern (very low opacity SVG grid, static)
- Optional: slow 25s `bg-pan` on a single muted radial accent (extremely faint)

Typography: Inter for body, **Geist** or **Space Grotesk** for headings (Vercel/Linear feel). Scale: H1 56/64, H2 36/44, H3 24/32, body 16/26.

## 2. Components to Edit

**`src/pages/Index.tsx`**
- Remove `ParticlesBackground`, `language-glitch` class, `glitch-overlay`, `glitch-scanlines`, konami confetti animation tweaks
- Single static gradient bg layer (or solid)
- Increase section spacing (`py-24 md:py-32`)

**`src/contexts/LanguageContext.tsx`**
- Remove `isTransitioning`, timeouts, glitch logic
- `setLanguage` becomes instant state change
- Keep simple 200ms opacity fade on root via CSS class if desired

**`src/components/Navbar.tsx`**
- Cleaner: smaller height, subtle bottom border on scroll instead of glass shimmer
- Language switcher: Globe icon + `EN/ES` toggle, simple fade
- Remove `text-gradient-shimmer`, `magnetic-hover`, animated underlines → single underline-animate on hover only

**`src/components/Hero.tsx`**
- Role title: "IT Support Engineer | AWS Cloud Enthusiast | Infrastructure & Monitoring"
- Tech badge row: AWS, Zabbix, Python, Networking, IT Support, Cloud Infrastructure (as pill chips)
- CTA row: **LinkedIn**, **GitHub** (new), **Resume / Download CV**, **Contact**
- Remove typewriter (or keep static), remove floating blurs, remove parallax
- Clean two-column or centered layout with generous whitespace

**`src/components/Portfolio.tsx` + `translations.ts`**
- Featured projects (5 cards):
  1. AWS Monitoring Platform
  2. Zabbix Enterprise Deployment
  3. CCNA / Networking Labs
  4. Python Automation Scripts
  5. IT Support Documentation
- Card style: flat surface, 1px border, hover = border brightens + 2px lift, no shimmer

**`src/components/Skills.tsx` / `SkillsCloud.tsx`**: grid of categorized chips, no animated cloud.

**`src/components/HowIWork.tsx`, `Experience.tsx`, `Education.tsx`, `Certifications.tsx`, `Contact.tsx`**: unify card style, remove flashy hovers, keep fade-up on scroll.

**Delete / disable**: `ParticlesBackground.tsx`, `CustomCursor.tsx`, `AnimatedWaves.tsx` (unused imports cleaned up).

## 3. Animations Policy

| Element | Animation |
|---|---|
| Section reveal | fade-up 0.5s ease-out, once |
| Card hover | border + translateY(-2px), 200ms |
| Button hover | bg darken 150ms |
| Theme toggle | 300ms color transition |
| Language switch | 200ms opacity fade on content |
| Background | static or single radial @ 25s linear loop, opacity ≤ 0.05 |

No: blink, rainbow, shimmer, glitch, parallax, magnetic, ripple, scanlines.

## 4. Hero Copy (EN / ES)

- Title: **Marco Antonio Jara Cuevas**
- Subtitle: *IT Support Engineer · AWS Cloud Enthusiast · Infrastructure & Monitoring*
- Bullets: AWS Certified Path · L1/L2 Incident Response · Zabbix + CloudWatch Monitoring · English Advanced (C1)
- Description: 2 lines, technical, recruiter-scannable

## 5. Performance

- Drop heavy continuous animations (particles, gradient pan, glitch)
- Use `will-change` only on hover targets
- Lazy `IntersectionObserver` reveals (already via `useScrollAnimation`)
- Defer non-critical components

## 6. Implementation Order

1. Tokens + global CSS rewrite (foundation)
2. LanguageContext cleanup (kill glitch)
3. Index.tsx layout cleanup
4. Navbar
5. Hero (with GitHub + Resume buttons, tech chips)
6. Portfolio projects + translations updates
7. Sweep remaining sections for consistent card styles
8. Verify build + visual QA in both themes & both languages

After approval I'll execute in this order with parallel file edits.