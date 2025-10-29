import type { ReactNode } from "react";

type FeatureCategory = {
  category: string;
  features: string[];
};

type Persona = {
  name: string;
  headline: string;
  needs: string[];
};

type RoadmapPhase = {
  phase: string;
  duration: string;
  focus: string;
};

type Objective = {
  title: string;
  description: string;
};

const coreObjectives: Objective[] = [
  {
    title: "AI-assisted mastery",
    description:
      "Deliver professional-grade photos and videos through guided capture and intelligent Pro Mode recommendations.",
  },
  {
    title: "On-device cinematic finishing",
    description:
      "Provide a rich auto-edit suite with real-time previews, LUTs, and export profiles tailored to modern platforms.",
  },
  {
    title: "Zero-knowledge privacy",
    description:
      "Guarantee that only the user can view their content with end-to-end encryption and private, local AI models.",
  },
  {
    title: "Universal accessibility",
    description:
      "Offer a minimalist, adaptable interface that scales across screen sizes, abilities, and preferred interactions.",
  },
];

const featureMatrix: FeatureCategory[] = [
  {
    category: "Camera AI & Capture",
    features: [
      "Real-time composition guides with color-coded feedback",
      "Haptic confirmation on optimal framing",
      "Scene-aware exposure and focus suggestions",
      "Adaptive Pro Mode with ISO, aperture, and shutter hints",
    ],
  },
  {
    category: "Cinematic Editing",
    features: [
      "Auto-edit tone mapping with LUT presets (Teal-Orange, Filmic, Vintage, B&W)",
      "Precision controls for exposure, highlights, shadows, and grain",
      "Aspect tools for 2.39:1, 16:9, 9:16, 4:3, and 1:1",
      "Before/after toggle and social-ready export settings",
    ],
  },
  {
    category: "Video Intelligence",
    features: [
      "Stabilized recording with gyro fusion",
      "Frame-rate selector (24/30/60/120 fps)",
      "Audio meters with clipping alerts",
      "Orientation lock and cinematic framing presets",
    ],
  },
  {
    category: "Accessibility & Control",
    features: [
      "Voice commands for capture and mode switching",
      "Scalable UI density with high-contrast themes",
      "Customizable control layout with saved profiles",
      "Adjustable haptic feedback strength",
    ],
  },
  {
    category: "Security & Privacy",
    features: [
      "AES-256-GCM per-asset encryption",
      "Hardware-keystore key management",
      "Zero-knowledge backups with wrapped CEKs",
      "On-device AI models with optional TEE cloud fallback",
    ],
  },
];

const personas: Persona[] = [
  {
    name: "The Enthusiast Creator",
    headline: "DSLR-level control without the friction",
    needs: [
      "Relies on Pro Mode to fine-tune ISO, shutter, and focus",
      "Needs fast cinematic edits for YouTube, Reels, and shorts",
      "Expects detailed feedback like histograms and focus peaking",
    ],
  },
  {
    name: "The Casual User",
    headline: "Beautiful by default",
    needs: [
      "Depends on AI suggestions to improve shots automatically",
      "Uses one-tap auto-editing and ready-to-share exports",
      "Wants clear guidance without overwhelming controls",
    ],
  },
  {
    name: "The Privacy-Conscious User",
    headline: "Absolute ownership of memories",
    needs: [
      "Refuses to upload personal media without encryption",
      "Prefers on-device AI and offline-first workflows",
      "Demands transparent security indicators and controls",
    ],
  },
];

const roadmap: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    duration: "3 months",
    focus: "Capture core, Pro Mode foundation, composition overlays, local encryption",
  },
  {
    phase: "Phase 2",
    duration: "3 months",
    focus: "Cinematic editing suite, AI scene recognition, stabilization engine",
  },
  {
    phase: "Phase 3",
    duration: "4 months",
    focus: "Zero-knowledge cloud sync, deep accessibility, layout customization",
  },
  {
    phase: "Phase 4",
    duration: "Continuous",
    focus: "Optimization, security hardening, multi-language rollout",
  },
];

const successMetrics = [
  "≥90% satisfaction on ease-of-use surveys",
  "≥70% adoption of AI-driven Pro Mode",
  "<1% crash rate across tested devices",
  "Zero data breaches and ≥95% successful decryptions",
];

const securityMatrix = [
  {
    title: "Files",
    items: ["AES-256-GCM per asset", "Unique content encryption keys"],
  },
  {
    title: "Master Keys",
    items: ["Secure Enclave / StrongBox storage", "Argon2id passphrase recovery"],
  },
  {
    title: "Metadata",
    items: ["Encrypted & HMAC-signed", "No plaintext thumbnails on disk"],
  },
  {
    title: "Cloud",
    items: ["Zero-knowledge encrypted blobs", "Optional social key splitting"],
  },
  {
    title: "AI Models",
    items: ["On-device inference", "TEE-wrapped opt-in cloud tasks"],
  },
  {
    title: "Network",
    items: ["TLS 1.3 with certificate pinning", "Differentially private analytics (opt-in)"],
  },
];

function Section({
  title,
  eyebrow,
  children,
  id,
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="relative z-10 mx-auto w-full max-w-6xl px-6 py-12 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-col gap-2">
          {eyebrow ? (
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-300/80">
              {eyebrow}
            </span>
          ) : null}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-200">
          {children}
        </div>
      </div>
    </section>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="group rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur transition hover:border-teal-500/60 hover:bg-teal-500/5">
      <div className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {subtitle ? (
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-teal-300/70">
              {subtitle}
            </span>
          ) : null}
        </div>
        <div className="text-sm text-slate-200/90">{children}</div>
      </div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex min-h-[32px] items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-3 text-sm font-medium text-slate-200">
      {label}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(35,199,182,0.35)_0%,_rgba(5,5,7,0)_55%)]" />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 pb-16 pt-20 sm:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-teal-200/80">
              CineVeo AI · PRD v1.0 · Oct 2025
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-5xl">
              CineVeo AI: Cinematic capture, guided by intelligence, secured by design.
            </h1>
            <p className="text-lg text-slate-200/90 sm:text-xl">
              A privacy-first mobile camera platform blending real-time AI composition guidance, intelligent Pro controls, and an on-device cinematic editing suite for creators and everyday storytellers.
            </p>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300/90">
              <Pill label="AI-first capture" />
              <Pill label="Zero-knowledge architecture" />
              <Pill label="On-device editing" />
              <Pill label="Accessibility built-in" />
            </div>
          </div>
          <div className="grid w-full max-w-sm grid-cols-2 gap-3 rounded-3xl border border-white/5 bg-white/[0.03] p-4 text-sm sm:text-base">
            <div className="flex flex-col gap-1 border-r border-white/5 pr-3">
              <span className="text-xs uppercase tracking-[0.3em] text-teal-200/80">Vision</span>
              <span className="font-medium text-white">AI-powered mobile cinematography for everyone</span>
            </div>
            <div className="flex flex-col gap-1 pl-3">
              <span className="text-xs uppercase tracking-[0.3em] text-teal-200/80">Mission</span>
              <span className="font-medium text-white">Empower creators while preserving absolute privacy</span>
            </div>
            <div className="col-span-2 mt-3 rounded-2xl bg-[#0B0B0D] p-4 text-xs text-slate-300/90">
              <p>Prepared for Product, Design & Engineering · Deployment-aligned for web, with parity to native roadmap.</p>
            </div>
          </div>
        </div>
      </header>

      <Section eyebrow="01" title="Vision & Core Objectives" id="vision">
        <div className="grid gap-6 md:grid-cols-2">
          {coreObjectives.map((objective) => (
            <Card key={objective.title} title={objective.title}>
              {objective.description}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="02" title="Key Feature System" id="features">
        <div className="grid gap-6 lg:grid-cols-2">
          {featureMatrix.map((group) => (
            <Card key={group.category} title={group.category}>
              <ul className="flex flex-col gap-2 text-sm">
                {group.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-300" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="03" title="Personas & Journeys" id="personas">
        <div className="grid gap-6 lg:grid-cols-3">
          {personas.map((persona) => (
            <Card key={persona.name} title={persona.name} subtitle={persona.headline}>
              <ul className="mt-4 flex flex-col gap-3 text-sm">
                {persona.needs.map((need) => (
                  <li key={need} className="flex gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-teal-400" />
                    <span>{need}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="04" title="Experience Principles" id="ux">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card title="Clarity & Focus">
            Live view dominates the interface, composition overlays fade in and out with 180ms transitions, and subtle micro-animations (120–180ms) confirm capture state.
          </Card>
          <Card title="Speed & Control">
            One-tap toggles switch between Auto, AI, and Pro modes, while power users retain manual overrides with tooltips that explain AI suggestions.
          </Card>
          <Card title="Feedback & Trust">
            Haptic cues signal optimal framing, histogram and focus peaking overlays offer precision, and security indicators surface encryption status.
          </Card>
          <Card title="Accessibility & Customization">
            Voice commands, scalable typography, high-contrast themes, and drag-and-drop control placement ensure the interface adapts to every user.
          </Card>
        </div>
      </Section>

      <Section eyebrow="05" title="Security Architecture" id="security">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {securityMatrix.map((bucket) => (
            <Card key={bucket.title} title={bucket.title}>
              <ul className="flex flex-col gap-2 text-sm">
                {bucket.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <div className="rounded-3xl border border-white/5 bg-white/[0.04] p-6 text-sm text-slate-200/90">
          <p className="font-semibold text-teal-200">Privacy-first Contract</p>
          <p className="mt-3">
            Client-side encryption precedes any sync operation. Optional cloud processing executes within TEEs using ephemeral keys, never persisting user media.
            Analytics are strictly opt-in and anonymized via differential privacy.
          </p>
        </div>
      </Section>

      <Section eyebrow="06" title="Non-Functional Guardrails" id="nfr">
        <div className="grid gap-6 lg:grid-cols-3">
          <Card title="Performance">
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />Overlay latency under 100ms with GPU-accelerated rendering.</li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />App launch targets under 2 seconds on mid-tier hardware.</li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />Adaptive AI cadence throttles inference to preserve battery life.</li>
            </ul>
          </Card>
          <Card title="Compatibility">
            <p>
              Native roadmap focuses on Android 10+ and iOS 15+, with responsive web prototype mirroring layout across device classes, honoring 8pt grid and edge-to-edge live preview priorities.
            </p>
          </Card>
          <Card title="Localization & Scaling">
            <p>
              English launch builds in hooks for Hindi, Spanish, and French translations. Modular AI pipeline allows future low-light, HDR, and experimental models without refactoring core UX.
            </p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="07" title="Delivery Roadmap" id="roadmap">
        <div className="grid gap-6 lg:grid-cols-2">
          {roadmap.map((phase) => (
            <Card key={phase.phase} title={phase.phase} subtitle={phase.duration}>
              <p>{phase.focus}</p>
            </Card>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Testing & QA Stack">
            <ul className="flex flex-col gap-2 text-sm">
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />Functional: capture flows, AI guidance, export fidelity.</li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />Performance: FPS stability, thermal profiling, low battery simulations.</li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />Security: pen tests, static & dynamic code analysis, encryption audits.</li>
              <li className="flex gap-2"><span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />Accessibility: screen reader, voice control, typography scaling validation.</li>
            </ul>
          </Card>
          <Card title="Success Metrics">
            <ul className="flex flex-col gap-2 text-sm">
              {successMetrics.map((metric) => (
                <li key={metric} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-teal-400" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <footer className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-8 sm:px-12">
        <div className="rounded-3xl border border-white/5 bg-[#0B0B0D]/90 p-8 text-sm text-slate-300/80">
          <p className="text-teal-200">Compliance & Legal</p>
          <p className="mt-3">
            CineVeo AI honors GDPR and CCPA requirements with zero-knowledge architecture, OS-level biometric integration, and transparent auditability. No developer has access to user media, keys, or metadata.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
            <Pill label="GDPR" />
            <Pill label="CCPA" />
            <Pill label="TLS 1.3" />
            <Pill label="Differential Privacy" />
          </div>
          <p className="mt-6 text-slate-400">
            Future enhancements: AI object removal, LUT marketplace, collaborative encrypted editing, key recovery with social guardians, third-party AI filter SDK.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-3 text-xs text-slate-500/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 CineVeo AI · Product, Design & Engineering Partnership</p>
          <p>Contact: product@cineveo.ai</p>
        </div>
      </footer>
    </div>
  );
}
