import React, { useState } from "react";
import {
  Phone,
  Mail,
  Users,
  CalendarCheck,
  Globe,
  Target,
  Headset,
  Network,
  ShieldCheck,
  Brain,
  Star,
  TrendingUp,
  Quote,
  PlayCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Boxes,
  Cloud,
  CreditCard,
  HeartPulse,
  Factory,
  Database,
  Shield,
  Linkedin,
  Youtube,
  Twitter,
  MapPin,
} from "lucide-react";

/**
 * Callbox homepage \u2014 mockup V2 "Bulletin"
 * A lighter, editorial take: serif display headlines, hairline dividers,
 * a tabbed services panel, and a radar-sweep hero illustration instead
 * of the orbiting-icon version.
 *
 * Stack: React + Tailwind CSS (arbitrary hex values, no config changes needed)
 * + lucide-react icons. Same palette and sample content as the other mockups,
 * styled differently on purpose for comparison.
 */

/* ----------------------------- sample content ---------------------------- */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Callbox", href: "#why-callbox" },
  { label: "Results", href: "#results" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
];

const TRUST_LOGOS = ["NORTHPEAK", "VELORA", "ORBITAL", "ARKHAUS", "FINWAVE", "GRIDLINE"];

const RADAR_SERVICES = [
  { icon: Phone, label: "Calling" },
  { icon: Mail, label: "Email" },
  { icon: Users, label: "ABM" },
  { icon: CalendarCheck, label: "Events" },
  { icon: Globe, label: "Cross-border" },
];

const STATS = [
  { value: "20+", label: "Years in B2B lead generation" },
  { value: "15K+", label: "Companies engaged" },
  { value: "10K+", label: "Campaigns delivered" },
  { value: "60+", label: "Countries reached" },
];

const AWARDS = [
  { icon: Star, label: "Clutch \u2014 Top B2B Agency" },
  { icon: TrendingUp, label: "G2 \u2014 High Performer" },
  { icon: ShieldCheck, label: "DesignRush \u2014 Verified Partner" },
];

const SERVICES = [
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Build a pipeline of sales-ready leads matched to your ideal customer profile. Our research team qualifies every contact before it reaches your SDRs, so outreach starts with people who are actually worth calling.",
  },
  {
    icon: Headset,
    title: "Appointment Setting & SDR",
    desc: "Dedicated SDR pods book qualified meetings straight onto your calendar. You get a named team that learns your pitch, not a rotating shared queue.",
  },
  {
    icon: Users,
    title: "Account-Based Marketing",
    desc: "Coordinated, multi-touch campaigns that open doors at priority accounts, combining research, content and outreach around the buying committees that matter most.",
  },
  {
    icon: CalendarCheck,
    title: "Event & Webinar Marketing",
    desc: "Fill the room and the follow-up pipeline, before and after the event, with registration drives and structured post-event nurture sequences.",
  },
  {
    icon: Globe,
    title: "Cross-Border Expansion",
    desc: "Local market know-how to launch outbound in a new region with confidence, covering language, compliance and buyer behaviour differences.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "Human + AI, working together",
    desc: "AI handles the research and signals; real SDRs handle the conversation.",
  },
  {
    icon: Headset,
    title: "A dedicated pod, not a shared queue",
    desc: "A named team learns your pitch and owns your pipeline end to end.",
  },
  {
    icon: Network,
    title: "Every channel, one cadence",
    desc: "Phone, email, LinkedIn and events sequenced into a single outreach rhythm.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    desc: "Verified, consent-aware data sourced and handled the right way, everywhere you sell.",
  },
];

const RESULTS = [
  {
    tag: "An enterprise MSP growing in North America",
    stat: "3x",
    statLabel: "qualified meetings in 90 days",
    quote: "Callbox didn\u2019t just hit our target \u2014 they reset what we thought was possible.",
    person: "VP of Sales",
  },
  {
    tag: "An AI SaaS company expanding into APAC and SEA",
    stat: "52",
    statLabel: "appointments, 140 MQLs from one ABM program",
    quote: "We opened three new accounts in our first month of outbound.",
    person: "Head of Growth",
  },
  {
    tag: "An office solutions provider in the United States",
    stat: "57",
    statLabel: "appointments, 41 MQLs in one campaign cycle",
    quote: "Our reps stopped prospecting and started closing.",
    person: "Sales Director",
  },
];

const INDUSTRIES = [
  { icon: Boxes, label: "Software & SaaS" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Cloud, label: "Cloud & IT" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: CreditCard, label: "FinTech" },
  { icon: HeartPulse, label: "Healthcare Tech" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Database, label: "ERP & CRM" },
];

const FAQS = [
  {
    q: "What does Callbox actually do?",
    a: "Callbox is a B2B lead generation agency. We combine AI-driven research and outreach with dedicated human SDRs to book qualified sales meetings for your team.",
  },
  {
    q: "How fast can we see meetings on the calendar?",
    a: "Most programs start generating qualified appointments within the first two to three weeks of launch, once your ICP and messaging are locked.",
  },
  {
    q: "Do we get a dedicated team?",
    a: "Yes. Every engagement is staffed with a named SDR pod that learns your product \u2014 not a rotating shared queue.",
  },
  {
    q: "Which regions do you cover?",
    a: "We run live outbound campaigns across North America, APAC, Europe and Latin America, with local-market expertise in each.",
  },
  {
    q: "Is your contact data compliant?",
    a: "Yes. Our data sourcing and handling practices are built around GDPR, CCPA and regional consent requirements.",
  },
];

/* --------------------------------- shared --------------------------------- */

function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

function Kicker({ children }) {
  return <p className="text-sm font-medium text-[#0b0b0d]/45 mb-3">{children}</p>;
}

function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#0b0b0d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#303035] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcbb00] ${className}`}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-[#0b0b0d]/15 px-6 py-3 text-sm font-semibold text-[#0b0b0d] transition hover:border-[#0b0b0d]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75c7fa] ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------------------------------- nav ----------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#0b0b0d]/10 bg-[#f7f7f8]/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0b0b0d] text-[#fcbb00] font-bold font-serif">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight text-[#0b0b0d] font-serif">Callbox</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-[#0b0b0d]/60 hover:text-[#0b0b0d] transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton>Book a Call</PrimaryButton>
        </div>

        <button className="md:hidden text-[#0b0b0d]" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-[#0b0b0d]/10 bg-[#f7f7f8] px-6 py-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-[#0b0b0d]/70" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <PrimaryButton className="w-full mt-2">Book a Call</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------- 1. hero + illustration ----------------------- */

function RadarIllustration() {
  const radius = 128;
  const sweepDuration = 6; // seconds per revolution
  return (
    <div className="relative mx-auto h-[340px] w-[340px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0b0b0d] p-6 shadow-2xl">
      {/* concentric radar rings */}
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className="absolute inset-0 m-auto rounded-full border border-white/10"
          style={{ height: `${n * 88}px`, width: `${n * 88}px` }}
        />
      ))}

      {/* rotating sweep beam */}
      <div
        className="cb-sweep absolute inset-0 m-auto h-[264px] w-[264px] rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(117,199,250,0.45) 28deg, transparent 70deg)",
        }}
      />

      {/* fixed service blips */}
      {RADAR_SERVICES.map(({ icon: Icon, label }, i) => {
        const angle = (360 / RADAR_SERVICES.length) * i - 90;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        const delay = (i / RADAR_SERVICES.length) * sweepDuration;
        return (
          <div
            key={label}
            className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#161619]"
            style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
          >
            <span
              className="cb-blip absolute inset-0 rounded-full bg-[#75c7fa]"
              style={{ animationDelay: `${delay}s` }}
            />
            <Icon className="relative h-4 w-4 text-[#75c7fa]" />
          </div>
        );
      })}

      {/* center mark */}
      <div className="absolute inset-0 m-auto flex h-16 w-16 flex-col items-center justify-center rounded-full bg-[#fcbb00] text-[#0b0b0d]">
        <Phone className="h-5 w-5" />
      </div>
      <p className="absolute bottom-6 left-0 right-0 text-center text-xs font-semibold tracking-tight text-white/70 font-serif">
        Callbox
      </p>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-[#f7f7f8] pt-16 pb-24">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-[#0b0b0d] sm:text-6xl">
            A pipeline built on real conversations.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#303035]/80">
            Callbox pairs dedicated SDRs with AI-driven data and outreach to
            book qualified meetings for B2B teams, across every channel and
            region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton>
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <GhostButton>See how it works</GhostButton>
          </div>

          <div className="mt-14 border-t border-[#0b0b0d]/10 pt-6">
            <p className="text-xs text-[#0b0b0d]/40">Trusted by sales teams at</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {TRUST_LOGOS.map((name) => (
                <span key={name} className="text-sm font-semibold tracking-wide text-[#0b0b0d]/30">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <RadarIllustration />
      </Container>
    </section>
  );
}

/* --------------------------- 2. proof in numbers --------------------------- */

function ProofStats() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="divide-y divide-[#0b0b0d]/10 border-y border-[#0b0b0d]/10">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline justify-between py-6">
              <p className="font-serif text-4xl text-[#0b0b0d] sm:text-5xl">{s.value}</p>
              <p className="max-w-xs text-right text-sm text-[#303035]/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          {AWARDS.map((a) => (
            <div key={a.label} className="flex items-center gap-2 text-xs font-medium text-[#303035]/70">
              <a.icon className="h-4 w-4 text-[#fcbb00]" />
              {a.label}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- 3. services ------------------------------ */

function ServicesSection() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];
  return (
    <section id="services" className="bg-[#f7f7f8] py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker>What we do</Kicker>
          <h2 className="font-serif text-4xl text-[#0b0b0d] sm:text-5xl">
            Everything you need to start more sales conversations.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col divide-y divide-[#0b0b0d]/10 border-t border-[#0b0b0d]/10">
            {SERVICES.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className={`flex items-center justify-between gap-4 py-4 text-left transition ${
                  active === i ? "text-[#0b0b0d]" : "text-[#0b0b0d]/40 hover:text-[#0b0b0d]/70"
                }`}
              >
                <span className="text-lg font-medium">{s.title}</span>
                {active === i && <ArrowRight className="h-4 w-4 flex-shrink-0 text-[#fcbb00]" />}
              </button>
            ))}
          </div>

          <div className="rounded-3xl bg-white p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0b0b0d]">
              <current.icon className="h-6 w-6 text-[#fcbb00]" />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-[#0b0b0d]">{current.title}</h3>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#303035]/75">{current.desc}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ 4. why callbox ------------------------------ */

function WhyCallbox() {
  return (
    <section id="why-callbox" className="bg-white py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker>Why Callbox</Kicker>
          <h2 className="font-serif text-4xl text-[#0b0b0d] sm:text-5xl">
            Human judgment, backed by AI at scale.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-[#0b0b0d]/10 border-t border-[#0b0b0d]/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="flex gap-5 py-8 sm:px-8 sm:py-10">
              <d.icon className="h-6 w-6 flex-shrink-0 text-[#75c7fa]" />
              <div>
                <h3 className="text-base font-semibold text-[#0b0b0d]">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#303035]/70">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- 5. results -------------------------------- */

function ResultsSection() {
  return (
    <section id="results" className="bg-[#f7f7f8] py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Kicker>Results that speak</Kicker>
            <h2 className="font-serif text-4xl text-[#0b0b0d] sm:text-5xl">
              Pipeline outcomes from real Callbox programs.
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b0b0d]">
            <PlayCircle className="h-5 w-5 text-[#fcbb00]" />
            Watch client stories
          </button>
        </div>

        <div className="mt-14 space-y-14">
          {RESULTS.map((r, i) => (
            <div
              key={r.tag}
              className={`grid grid-cols-1 gap-6 border-t border-[#0b0b0d]/10 pt-10 sm:grid-cols-[auto_1fr] sm:items-start ${
                i === 0 ? "border-t-0 pt-0" : ""
              }`}
            >
              <p className="font-serif text-5xl text-[#0b0b0d] sm:w-32">{r.stat}</p>
              <div>
                <p className="text-sm text-[#0b0b0d]/50">{r.tag}</p>
                <p className="mt-1 text-sm font-medium text-[#303035]">{r.statLabel}</p>
                <div className="mt-4 flex items-start gap-3">
                  <Quote className="mt-1 h-4 w-4 flex-shrink-0 text-[#75c7fa]" />
                  <p className="font-serif text-xl italic leading-snug text-[#0b0b0d]">{r.quote}</p>
                </div>
                <p className="mt-3 text-xs font-semibold text-[#0b0b0d]/50">{r.person}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- 6. industries ------------------------------ */

function IndustriesSection() {
  return (
    <section id="industries" className="bg-white py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker>Industries we serve</Kicker>
          <h2 className="font-serif text-4xl text-[#0b0b0d] sm:text-5xl">
            Deep campaign experience across B2B tech.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.label}
              className="flex items-center gap-2 rounded-full border border-[#0b0b0d]/15 px-5 py-2.5 transition hover:border-[#0b0b0d]/40"
            >
              <ind.icon className="h-4 w-4 text-[#0b0b0d]/60" />
              <span className="text-sm font-medium text-[#303035]">{ind.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- 7. faq ---------------------------------- */

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-[#0b0b0d]/10 py-6">
      <button
        className="flex w-full items-center justify-between gap-6 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-[#0b0b0d]">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[#0b0b0d]/40 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#303035]/70">{item.a}</p>}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="bg-[#f7f7f8] py-24">
      <Container className="max-w-3xl">
        <Kicker>FAQ</Kicker>
        <h2 className="font-serif text-4xl text-[#0b0b0d] sm:text-5xl">Your questions, answered.</h2>

        <div className="mt-10">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- 8. final cta -------------------------------- */

function FinalCTA() {
  return (
    <section className="bg-[#fcbb00] py-24">
      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-4xl text-[#0b0b0d] sm:text-5xl">
          Ready to fill your pipeline?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[#0b0b0d]/70">
          Book a free 30-minute strategy call and see what a dedicated SDR
          pod could do for your pipeline.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0b0b0d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#303035]">
            Book a Call <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0b0b0d]/25 px-6 py-3 text-sm font-semibold text-[#0b0b0d] transition hover:border-[#0b0b0d]/50">
            Talk to Sales
          </button>
        </div>
        <p className="mt-6 text-xs text-[#0b0b0d]/50">No contracts. No setup fees. Cancel anytime.</p>
      </Container>
    </section>
  );
}

/* --------------------------------- footer ----------------------------------- */

function Footer() {
  return (
    <footer className="bg-[#0b0b0d] py-14">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fcbb00] text-[#0b0b0d] font-bold font-serif">
                C
              </span>
              <span className="font-serif text-lg tracking-tight">Callbox</span>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/40">
              <MapPin className="h-4 w-4" /> Global B2B lead generation
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>Lead Generation</li>
              <li>Appointment Setting</li>
              <li>ABM</li>
              <li>Event Marketing</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>About Us</li>
              <li>Careers</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Follow</p>
            <div className="mt-4 flex gap-3">
              <Linkedin className="h-5 w-5 text-white/50" />
              <Twitter className="h-5 w-5 text-white/50" />
              <Youtube className="h-5 w-5 text-white/50" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
          {"\u00a9 2026 Callbox Inc. Mockup for internal review \u2014 sample content only."}
        </div>
      </Container>
    </footer>
  );
}

/* ---------------------------------- app ------------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f7f8] font-sans text-[#0b0b0d] antialiased">
      <style>{`
        .cb-sweep { animation: cb-sweep-spin 6s linear infinite; }
        .cb-blip { animation: cb-blip-pulse 6s ease-in-out infinite; opacity: 0; }
        @keyframes cb-sweep-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cb-blip-pulse {
          0%, 92%, 100% { opacity: 0; transform: scale(0.6); }
          4% { opacity: 0.55; transform: scale(1.6); }
          14% { opacity: 0; transform: scale(0.6); }
        }
        @media (prefers-reduced-motion: reduce) {
          .cb-sweep, .cb-blip {
            animation: none !important;
          }
        }
      `}</style>

      <Nav />
      <main>
        <Hero />
        <ProofStats />
        <ServicesSection />
        <WhyCallbox />
        <ResultsSection />
        <IndustriesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
