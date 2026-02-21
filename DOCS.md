  Global Associates — Technical Documentation
Zilhak
## 1. Projec#t Overview
Zilhak Global Associates is a premium AI & technology company based in Pakistan. This project is a production-ready, high-performance website designed with a "Linear/Vercel" aesthetic, focusing on Agentic AI solutions and community-driven innovation through **DigiNext Society**.

- **URL:** [https://zilhak-global.netlify.app](https://zilhak-global.netlify.app)
- **Primary Objective:** Showcase AI expertise, agency services, and the 150+ builder talent pipeline.

## 2. Technical Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Static Export)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** 
  - [Framer Motion](https://www.framer.com/motion/) (Entry/Staggered animations)
  - [Three.js / React Three Fiber](https://r3f.docs.pmnd.rs/) (Hero 3D particles)
  - [GSAP](https://gsap.com/) (Sophisticated timeline control)
  - [Lenis](https://lenis.darkroom.engineering/) (Smooth scrolling)
- **UI Components:** Premium custom implementations inspired by [Aceternity UI](https://ui.aceternity.com/) and [Magic UI](https://magicui.design/).

## 3. Design System
The site follows a **Deep Dark** theme with high-contrast typography and subtle glassmorphism.

- **Background:** `#030712` (Slate-950)
- **Accents:** 
  - Primary: Cyan-400 (`#22d3ee`)
  - Secondary: Blue-600 (`#2563eb`)
- **Typography:** `Inter` (Inter-system stack) with `tracking-tighter` headlines.
- **Glassmorphism:** `backdrop-blur-lg` with 3-6% opacity white fills.

## 4. Architecture & Directory Structure

```text
src/
├── app/                 # Next.js App Router (Layouts, Pages, SEO)
├── components/          # React Components
│   ├── sections/        # Main landing page sections (Hero, Services, etc.)
│   ├── ui/              # Reusable premium animation components
│   └── ...              # Global parts (Navbar, Footer, Cursor)
├── lib/                 # Logic & Data
│   ├── data.ts          # Central data store (Projects, Services, Stats)
│   ├── animations.ts    # Custom animation utilities (CountUp, etc.)
│   └── utils.ts         # Utility helpers (cn-merge)
└── ...
```

## 5. Key Components

### UI Layer (`src/components/ui/`)
- `Spotlight.tsx`: SVG-based radial glow following or fixed.
- `BackgroundBeams.tsx`: Animated light beam paths.
- `BorderBeam.tsx`: Animated light tracing container borders.
- `ShineBorder.tsx`: Rotating gradient border for cards.
- `AnimatedBeam.tsx`: Connection beams between two ref points.

### Landing Sections (`src/components/sections/`)
- `Hero.tsx`: Dynamic 3D particle Z-shape background + Aceternity Spotlight.
- `Services.tsx`: Bento Grid with six verticals, each featuring Magic UI Shine borders.
- `WorkGrid.tsx`: Filterable bento grid of projects with GitHub/Live links.
- `Testimonials.tsx`: Dual-row infinite infinite marquee with "Magic Cards".
- `Process.tsx`: 4-step workflow connected by Animated Beams.
- `DigiNextSpotlight.tsx`: Innovation arm showcase with count-up stats.
- `InvestorCTA.tsx`: High-conversion block with dual border beams.

## 6. Data Management
All content is managed in `src/lib/data.ts`. This allows for easy updates to:
- **Services:** Title, Descriptions, Icons, Colors.
- **Projects:** Name, Tech stack, GitHub/Live links, Categories.
- **Testimonials:** Name, Role, Quote.
- **Process:** The 4-phase methodology.

## 7. Performance & SEO
- **Static Export:** The project is configured as `output: 'export'` for sub-second load times.
- **SEO Elements:**
  - Automated `sitemap.xml` generation.
  - Optimized `robots.txt`.
  - JSON-LD Structured Data for Organization and Local Business.
  - Meta tags for OpenGraph/Twitter.

## 8. Deployment Workflow
1. **Build:** `npm run build` (generates the `out/` directory).
2. **Push:** Git push to `master` branch.
3. **Deploy:** Automated or CLI-based deployment to **Netlify**.
