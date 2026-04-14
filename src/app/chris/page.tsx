import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Only Aces | Brief for Chris Koerner",
  description:
    "A guided private brief for the Only Aces land-based flagship thesis.",
};

const proofPoints = [
  {
    stat: "48M+",
    label: "Total U.S. golf participants in 2025",
    sourceLabel: "NGF growth update",
    href: "https://www.ngf.org/short-game/golfs-growth-era-the-road-to-50-million-golfers/",
  },
  {
    stat: "29M+",
    label: "On-course golfers in 2025",
    sourceLabel: "NGF growth update",
    href: "https://www.ngf.org/short-game/golfs-growth-era-the-road-to-50-million-golfers/",
  },
  {
    stat: "~20 PGA",
    label: "PGA Tour pros reported in and around Dallas",
    sourceLabel: "D Magazine, Apr. 15, 2024",
    href: "https://www.dmagazine.com/publications/d-magazine/2024/april/meet-some-of-north-texass-pro-swingers/",
  },
  {
    stat: "2022",
    label: "PGA of America HQ opened in Frisco",
    sourceLabel: "City of Frisco",
    href: "https://www.friscotexas.gov/1487/PGA-of-America",
  },
];

const behaviorPoints = [
  { label: "The hook", body: "The visible jackpot is the draw. Not the range. Not the bucket." },
  { label: "The engine", body: "A fixed challenge shot creates repeat attempts — the exact loop operators want." },
  { label: "The math", body: "Prize structure favors the operator in a way that a normal range model never does." },
];

const customerLayers = [
  {
    title: "Casual players",
    body: "They are buying the moment, the prize, and the story. The money is the gravity.",
    icon: "◎",
  },
  {
    title: "Avid golfers",
    body: "They still get real reps, but now there is a reason to care beyond empty bucket volume.",
    icon: "◈",
  },
  {
    title: "Better players",
    body: "For strong players and pros, the draw becomes precision, status, leaderboard, and content.",
    icon: "◉",
  },
];

const proAngle = [
  {
    label: "Base case",
    body: "The math works without pros. Retail demand has to stand on its own.",
  },
  {
    label: "Risk management",
    body: "If pros change payout dynamics, that layer can be ring-fenced: capped attempts, sponsor-backed prizes, event rules.",
  },
  {
    label: "Real upside",
    body: "Pros bring attention — spectators, clips, legitimacy, and a reason for the broader Dallas golf market to care.",
  },
];

const siteCandidates = [
  {
    title: "2895 CR 341, McKinney, TX",
    strength: "The 'Goldilocks' Sandbox (Zero Restrictions)",
    risk:
      "1.25 - 5 acres outside city limits. Listing explicitly states: 'No HOA or city restrictions.' 5 mins from TX-121. Includes existing power, water, and a 12x16 shed. At ~$2,500/mo, this is the lowest-friction, highest-gravity lab possible.",
    tier: "1 (Test)",
  },
  {
    title: "Eldorado Pkwy + US-75",
    strength: "The Scale Target: Dream-corner flagship",
    risk:
      "Unmatched retail gravity. High visibility removes the need for expensive customer acquisition. This is where we go once the McKinney site proves the conversion math.",
    tier: "2 (Scale)",
  },
  {
    title: "SWQ DNT + Longwood, Frisco",
    strength: "North DFW corridor",
    risk:
      "High demographics and proximity to PGA HQ, but requires more intentional 'destination' marketing than the 121/75 corridors.",
    tier: "3",
  },
];

const proofPath = [
  "Choose one North DFW location that validates the actual market thesis, not just cheap mechanics.",
  "Lock the exact 111-yard format, target design, camera stack, and payout adjudication flow.",
  "Build the first site as a flagship with identity and energy — not a half-built kiosk.",
];

const edgeChoices = [
  "One iconic shot distance instead of a watered-down multi-range product.",
  "Premium pricing architecture instead of bucket-value comparison shopping.",
  "Cameras, rules, and leaderboard logic that make the challenge feel real and content-ready.",
];

const asks = [
  "Pressure-test the 'McKinney Sandbox' vs. 'Eldorado Flagship' timelines.",
  "Define the 'Annex' partnership structure for existing ranges.",
  "Confirm a structure where I stay involved as founding concept partner.",
];

const navItems = [
  { href: "#the-update", label: "The Update" },
  { href: "#mvp", label: "Low-Friction MVP" },
  { href: "#economics", label: "Economics" },
  { href: "#thesis", label: "Thesis" },
  { href: "#sites", label: "Scale" },
];

export default function ChrisBriefPage() {
  return (
    <main className="page-shell chris-shell pb-28">

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="chris-hero-section">
        <div className="chris-hero-bg-image">
          <Image
            src="/images/exterior.png"
            alt="Only Aces flagship concept rendering"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="chris-hero-bg-overlay" />
        </div>
        <div className="container-frame relative z-10 pt-10 pb-12 md:pt-14 md:pb-16">
          <Link href="/" className="eyebrow transition hover:bg-white/14">
            Only Aces
          </Link>
          <h1 className="section-title mt-6 max-w-5xl">
            De-risking the "Aces" Thesis.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
            "I think you're onto something." — Now the goal is to prove it without the "bet-the-farm" exposure.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="chris-chip">Capital Efficient MVP</span>
            <span className="chris-chip">Revenue-Share Model</span>
            <span className="chris-chip">Low-Friction Entry</span>
            <span className="chris-read-badge">Updated Apr 14</span>
          </div>
        </div>
      </section>

      {/* ─── STICKY NAV ───────────────────────────────────────────────────── */}
      <div className="container-frame pt-4 md:pt-5">
        <nav className="chris-nav sticky top-4 z-20 rounded-[24px] px-3 py-3 md:px-4">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/62">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="chris-pill">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* ─── 0. THE UPDATE ────────────────────────────────────────────────── */}
      <section id="the-update" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[34px] bg-white/[0.03] border border-white/10 px-6 py-7 md:px-8 md:py-8">
          <div className="eyebrow text-blue-400">The "Backyard" Logic</div>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-white">
                Resource Optimization vs. Location Scarcity.
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                My original pitch for Lucas Road wasn't about the specific address—it was about <strong>de-risking</strong>. I saw what I thought was an unused resource under your control and thought: <em>"That's the perfect playground to prove the unit economics with zero rent and minimal friction."</em>
              </p>
              <p className="mt-4 text-white/60 leading-relaxed">
                Now that we've cleared that up (and the city's reputation), the mission remains: <strong>How do we test this for $50k-$100k instead of $1M+?</strong>
              </p>
            </div>
            <div className="chris-callout bg-blue-500/10 border-blue-500/20 px-6 py-6 rounded-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold mb-4">The Shift</p>
              <h3 className="text-xl font-display text-white mb-4">From Flagship to "Annex"</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Instead of a massive land-based undertaking at Eldorado, we look for "Annex" opportunities: high-traffic existing venues (ranges, parks, commercial lots) where we can drop a <strong>single-lane prototype</strong> on a revenue-share basis.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-white/40 italic">"Prove the behavior on someone else's turf first."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 0.5 THE MVP ──────────────────────────────────────────────────── */}
      <section id="mvp" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[34px] px-6 py-7 md:px-8 md:py-8">
          <div className="eyebrow text-gold">The Frictionless MVP</div>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div className="chris-feature p-6">
              <h3 className="text-white font-semibold">The "Drop-In" Lane</h3>
              <p className="mt-2 text-sm text-white/60">A self-contained, automated hitting bay and target system that can be deployed on a 0.5 acre footprint.</p>
            </div>
            <div className="chris-feature p-6">
              <h3 className="text-white font-semibold">Revenue-Share Land</h3>
              <p className="mt-2 text-sm text-white/60">Partner with existing range owners who have dead space. We provide the "Prize Engine," they provide the traffic.</p>
            </div>
            <div className="chris-feature p-6">
              <h3 className="text-white font-semibold">Rapid Iteration</h3>
              <p className="mt-2 text-sm text-white/60">Use a stock-tank target and basic camera stack to validate the jackpot behavior before investing in the "Flagship" aesthetic.</p>
            </div>
          </div>
          
          <div className="faint-rule my-8" />
          
          <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] items-center">
            <div className="bg-gradient-to-br from-blue-500/20 to-transparent p-6 rounded-3xl border border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-blue-400 font-bold mb-4">Physical Growth Hack</p>
              <h3 className="text-2xl font-display text-white mb-4">The 40-Foot Beacon</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                At the Anna site (ETJ), we aren't limited by standard city sign ordinances. We turn the 40-foot net poles into a <strong>Marketing Tower</strong>.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-blue-400">✓</span> Visible from Hwy 5 (0.6 miles away)
                </li>
                <li className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-blue-400">✓</span> Zero-permit "Vegas-style" lit signage
                </li>
                <li className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-blue-400">✓</span> Bonus: High-visibility ad inventory for site partners
                </li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/exterior.png"
                alt="Visibility concept"
                fill
                className="object-cover opacity-60 grayscale"
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-6">
                  <div className="w-1 h-32 bg-blue-500 mx-auto mb-4 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                  <p className="text-[0.6rem] uppercase tracking-[0.3em] text-blue-400 font-bold">40ft Marketing Tower</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 1. THESIS ────────────────────────────────────────────────────── */}
      <section id="thesis" className="container-frame pt-10 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <article className="chris-card rounded-[34px] px-6 py-7 md:px-8 md:py-8">
            <div className="eyebrow">1. The thesis</div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white md:text-5xl">
              Less a golf business. More a business built on golf behavior.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              The original model got remembered as a lake business because the
              lake is the memorable visual. The deeper truth is that the engine
              is a simple challenge shot attached to a highly visible prize and
              repeat-attempt psychology. Remove the lake dependency and the whole
              thing becomes portable.
            </p>
            <div className="faint-rule my-7" />
            <div className="chris-callout px-5 py-5">
              <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                The cleanest version of this
              </p>
              <p className="mt-3 font-display text-2xl tracking-[-0.03em] text-white">
                Category-level proof exists already. The open question is what
                the best U.S. land-based flagship format looks like.
              </p>
            </div>
          </article>

          <aside className="chris-card rounded-[34px] p-4 md:p-5">
            <div className="lane chris-lane">
              <div className="lane-pool">
                <div className="lane-green" />
                <div className="lane-flag" />
              </div>
              <div className="absolute left-1/2 top-[39%] -translate-x-1/2 rounded-full border border-white/16 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">
                111 yards
              </div>
              <div className="absolute left-1/2 top-[48%] -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm">
                one iconic shot
              </div>
              <div className="lane-bay">
                <div className="lane-bay-top" />
                <div className="absolute left-1/2 top-[-1.5rem] -translate-x-1/2 rounded-full bg-panel-strong px-4 py-1 font-display text-sm tracking-[0.28em] text-foreground">
                  ONLY ACES
                </div>
                <div className="lane-bay-body">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div className="lane-stall" key={index} />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── 2. BEHAVIOR ──────────────────────────────────────────────────── */}
      <section id="behavior" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[36px] px-6 py-7 md:px-8 md:py-8">
          <div className="eyebrow">2. What survives without the lake</div>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_1.1fr]">
            <div>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white">
                It may look like a range. It should not feel or monetize like one.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                Nets, bays, targets, and golf swings will make this look like a
                compact range from the outside. The customer is not paying for
                anonymous bucket volume. They are paying for a focused shot, a
                visible prize, and a reason to care.
              </p>
              <div className="mt-6 grid gap-3">
                {behaviorPoints.map((item) => (
                  <div key={item.label} className="chris-feature px-4 py-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full overflow-hidden rounded-[26px] border border-white/10 aspect-[4/3] shadow-2xl">
                <Image
                  src="/images/interior.png"
                  alt="Premium interior bay with jackpot leaderboard"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-4">Who responds</p>
                <div className="grid gap-3">
                  {customerLayers.map((item) => (
                    <div key={item.title} className="chris-feature flex items-start gap-3 px-4 py-4">
                      <span className="mt-0.5 text-xl text-white/30">{item.icon}</span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-xs leading-5 text-white/60">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MARKET ────────────────────────────────────────────────────── */}
      <section id="market" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[36px] px-6 py-7 md:px-8 md:py-8">
          <div className="eyebrow">3. Why North DFW</div>
          <div className="mt-5 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white">
                Not just Texas.<br />North DFW specifically.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                If this were being localized anywhere in the U.S., North DFW is
                one of the cleanest places to try. Affluent households, deep golf
                gravity, high-traffic suburban corridors, and a real shot at word
                of mouth and content acceleration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {proofPoints.map((item) => (
                <article
                  key={item.stat + item.label}
                  className="chris-feature px-4 py-5"
                >
                  <div className="metric-value text-white">{item.stat}</div>
                  <p className="mt-3 text-sm font-medium leading-6 text-white">
                    {item.label}
                  </p>
                  <a
                    className="source-link mt-3 inline-block text-xs uppercase tracking-[0.2em] text-white/45"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.sourceLabel}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3.5 THE ECONOMICS ────────────────────────────────────────────── */}
      <section id="economics" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[36px] bg-gradient-to-b from-white/[0.05] to-transparent px-6 py-7 md:px-8 md:py-8 border border-white/10">
          <div className="eyebrow text-green-400">The Math</div>
          <div className="mt-6 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white">
                Premium impulse pricing.<br />Not volume-based buckets.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/70">
                The error most ranges make is competing on volume (cost per ball). Only Aces competes on the <strong>moment</strong>. By treating each shot as a high-stakes event, the margin per ball is effectively 10-20x a traditional range.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <p className="text-[0.6rem] uppercase tracking-widest text-white/40 mb-1">Pricing Model</p>
                  <p className="text-xl font-display text-white">1 for $10</p>
                  <p className="text-sm text-white/60 italic">3 for $20 • 20 for $60</p>
                </div>
                <div className="bg-green-500/10 rounded-2xl p-4 border border-green-500/20">
                  <p className="text-[0.6rem] uppercase tracking-widest text-green-400/70 mb-1">Y1 Target Profit</p>
                  <p className="text-2xl font-display text-white">~$300k</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6">
              <div className="chris-feature px-6 py-6 border-l-2 border-green-500/40 bg-white/[0.02]">
                <h3 className="text-white font-semibold">The "Jackpot" Multiplier</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  Profitability scales non-linearly. As the prize grows, the "cost to acquire a shot" drops as the jackpot itself does the marketing. Year 5 potential exceeds $1.3M annually per site.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="h-1 bg-green-500/20 rounded-full" />
                <div className="h-1 bg-green-500/50 rounded-full" />
                <div className="h-1 bg-green-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. PRO ANGLE ─────────────────────────────────────────────────── */}
      <section id="pros" className="container-frame pt-10 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <article className="chris-card rounded-[34px] px-6 py-7 md:px-8 md:py-8">
            <div className="eyebrow">4. The pro angle</div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white">
              Pros are upside, not the foundation.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              One fair concern is that strong players could change the odds
              against the house. The core economics should work without pros. If
              the pro layer ever changes payout dynamics, it gets treated as a
              separate programmed event — not mixed into the everyday retail model.
            </p>
          </article>

          <article className="chris-card rounded-[34px] px-6 py-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Why it still matters</p>
            <div className="mt-4 grid gap-3">
              {proAngle.map((item) => (
                <div key={item.label} className="chris-feature px-4 py-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-white/45">{item.label}</p>
                  <p className="mt-1.5 text-sm leading-6 text-white/78">{item.body}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* ─── 5. SITES ─────────────────────────────────────────────────────── */}
      <section id="sites" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[36px] px-6 py-7 md:px-8 md:py-8">
          <div className="eyebrow">5. The first flagship profile</div>
          <div className="mt-5 grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <h2 className="font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white">
                Find the right corridor. Don't defend one address.
              </h2>
              <p className="mt-4 text-base leading-7 text-white/70">
                The real question is which North DFW location gives the flagship
                the best chance to prove the model correctly and read immediately
                as a premium challenge concept.
              </p>
            </div>
            <div className="grid gap-4">
              {siteCandidates.map((item) => (
                <article key={item.title} className="chris-feature chris-site-card px-5 py-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                        {item.strength}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-6 text-white">
                        {item.title}
                      </h3>
                    </div>
                    <span className="chris-tier-badge">#{item.tier}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/60">{item.risk}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PROOF / CTA ───────────────────────────────────────────────── */}
      <section id="proof" className="container-frame pt-10 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
          <article className="chris-card rounded-[34px] px-6 py-7 md:px-8 md:py-8">
            <div className="eyebrow">6. How to prove it correctly</div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-white">
              The real question is how to prove it without half-assing it.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/70">
              The odds are already structurally in our favor. The work is
              choosing the format and the site discipline that tilt them even
              further.
            </p>
            <div className="mt-6 grid gap-3">
              {proofPath.map((item, i) => (
                <div key={item} className="chris-feature flex items-start gap-3 px-4 py-4">
                  <span className="chris-step-num">{i + 1}</span>
                  <p className="text-sm leading-6 text-white/78">{item}</p>
                </div>
              ))}
            </div>
            <div className="faint-rule my-7" />
            <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-4">What tilts the odds further</p>
            <div className="grid gap-3">
              {edgeChoices.map((item) => (
                <div key={item} className="chris-feature flex items-start gap-2 px-4 py-3">
                  <span className="mt-0.5 text-green-400/70">✓</span>
                  <p className="text-sm leading-6 text-white/78">{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="flex flex-col gap-5">
            <article className="chris-card rounded-[34px] px-6 py-7">
              <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                If this still feels live
              </p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.04em] text-white leading-tight">
                Here is what I would value next.
              </h3>
              <div className="mt-5 grid gap-3">
                {asks.map((item, i) => (
                  <div key={item} className="chris-feature flex items-start gap-3 px-4 py-4">
                    <span className="chris-step-num">{i + 1}</span>
                    <p className="text-sm leading-6 text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </article>

            <div className="chris-cta-card rounded-[34px] px-6 py-7">
              <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                Let&apos;s talk
              </p>
              <p className="mt-4 font-display text-4xl tracking-[-0.04em] text-white">
                Lyndon
              </p>
              <a
                href="tel:6829990953"
                className="mt-2 block font-display text-3xl tracking-[-0.02em] text-white/70 transition hover:text-white"
              >
                682.999.0953
              </a>
              <p className="mt-4 text-sm leading-6 text-white/50">
                Private brief · North DFW flagship · Only Aces
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
