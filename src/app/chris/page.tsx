import type { Metadata } from "next";
import Link from "next/link";

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
  "The visible jackpot is the hook.",
  "The fixed challenge shot drives repeat attempts.",
  "The math favors the operator more than a normal range model does.",
];

const customerLayers = [
  {
    title: "Casual players",
    body:
      "They are buying the moment, the prize, and the story. The money is the gravity.",
  },
  {
    title: "Avid golfers",
    body:
      "They still get real reps, but now there is a reason to care beyond empty bucket volume.",
  },
  {
    title: "Better players",
    body:
      "For strong players and pros, the draw becomes precision, status, leaderboard position, and content.",
  },
];

const proAngle = [
  "The base case does not depend on pros showing up. Retail demand has to work on its own.",
  "If pros materially change payout risk, that layer can be structured separately with capped attempts, sponsor-backed prizes, or event-specific rules.",
  "The real upside of pros is attention: spectators, clips, legitimacy, and a reason for the broader market to care.",
];

const siteCandidates = [
  {
    title: "Eldorado Parkway + US-75 corridor",
    strength: "Dream-corner flagship profile",
    risk:
      "Best visibility and demographics, but also the biggest rent and the biggest consequence if the first format is wrong.",
  },
  {
    title: "SWQ DNT + Longwood, Frisco",
    strength: "North DFW corridor exposure",
    risk:
      "Still in the right gravity zone, but likely less emotionally obvious than Eldorado/75 as a flagship statement.",
  },
  {
    title: "Craig Ranch / 121 corridor",
    strength: "Golf-adjacent customer comprehension",
    risk:
      "May help the story click faster, but the site still has to work as a standalone premium challenge venue.",
  },
];

const proofPath = [
  "Choose one North DFW location profile that validates the actual market thesis, not just cheap mechanics.",
  "Lock the exact 111-yard format, target design, camera stack, and payout adjudication flow.",
  "Build the first site as a flagship with identity and energy, not a half-built kiosk pretending to be a concept.",
];

const edgeChoices = [
  "One iconic shot instead of a watered-down multi-range product.",
  "Premium pricing architecture instead of bucket-value comparison shopping.",
  "Cameras, rules, and leaderboard logic that make the challenge feel real and content-ready.",
];

const asks = [
  "Pressure-test the non-lake thesis together in 15-20 minutes.",
  "Pick one North DFW location profile worth diligencing first.",
  "If the thesis still holds, define a structure where I stay involved as founding concept partner.",
];

export default function ChrisBriefPage() {
  return (
    <main className="page-shell chris-shell pb-20">
      <section className="container-frame pt-6 md:pt-8">
        <div className="chris-hero rounded-[34px] px-5 py-5 md:px-8 md:py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="max-w-4xl">
              <Link
                href="/"
                className="eyebrow transition hover:bg-white/14"
              >
                Only Aces
              </Link>
              <h1 className="section-title mt-5 max-w-5xl">
                The lake was never the business. The prize behavior is.
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/74 md:text-lg md:leading-8">
                This is the tightest version of the idea: a land-based flagship
                built around one iconic shot, visible prize gravity, and a
                format that can scale without needing natural water.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/62">
                <span className="chris-chip">111-yard challenge</span>
                <span className="chris-chip">North DFW flagship</span>
                <span className="chris-chip">Prize-first economics</span>
              </div>
            </div>

            <div className="chris-aside md:max-w-xs">
              <p className="text-xs uppercase tracking-[0.24em]">
                Private brief
              </p>
              <p className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                5 minutes
              </p>
              <p className="mt-2 leading-6 text-white/72">
                Short, direct, and built around the real question: can the draw
                become stronger once the format is freed from the lake?
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-frame pt-5 md:pt-6">
        <nav className="chris-nav sticky top-4 z-20 rounded-[24px] px-3 py-3 md:px-4">
          <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.16em] text-white/62">
            <a
              href="#thesis"
              className="chris-pill"
            >
              1 Thesis
            </a>
            <a
              href="#behavior"
              className="chris-pill"
            >
              2 Behavior
            </a>
            <a
              href="#market"
              className="chris-pill"
            >
              3 Market
            </a>
            <a
              href="#pros"
              className="chris-pill"
            >
              4 Pro Angle
            </a>
            <a
              href="#sites"
              className="chris-pill"
            >
              5 Location
            </a>
            <a
              href="#proof"
              className="chris-pill"
            >
              6 Proof
            </a>
          </div>
        </nav>
      </section>

      <section id="thesis" className="container-frame pt-8 md:pt-10">
        <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
          <article className="chris-card rounded-[34px] px-5 py-6 md:px-7 md:py-7">
            <div className="eyebrow">1. The thesis</div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white">
              This is less a golf business than a business built on golf behavior.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/74">
              I think the original model got remembered as a lake business
              because the lake is the memorable visual. The deeper truth is that
              the engine is a simple challenge shot attached to a highly visible
              prize and repeat-attempt psychology.
            </p>
            <div className="faint-rule my-6" />
            <div className="chris-feature px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Cleanest version
              </p>
              <p className="mt-3 font-display text-3xl tracking-[-0.04em] text-white">
                Category-level proof exists already.
              </p>
              <p className="mt-3 text-sm leading-6 text-white/68">
                The open question is not whether people respond to the behavior.
                It is what the best U.S. land-based flagship format looks like.
              </p>
            </div>
          </article>

          <aside className="chris-card rounded-[34px] p-4 md:p-5">
            <div className="lane chris-lane">
              <div className="lane-pool">
                <div className="lane-green" />
                <div className="lane-flag" />
              </div>
              <div className="absolute left-1/2 top-[39%] -translate-x-1/2 rounded-full border border-white/16 bg-black/14 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
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

      <section id="behavior" className="container-frame pt-10 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <article className="chris-card rounded-[34px] px-5 py-6 md:px-7 md:py-7">
            <div className="eyebrow">2. What survives without the lake</div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white">
              It may look like a range, but it should not feel or monetize like one.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/74">
              Nets, bays, targets, and golf swings will make this look like a
              compact range from the outside. That is fine. The customer is not
              paying for anonymous bucket volume. They are paying for a focused
              shot, a visible prize, and a reason to care.
            </p>
            <ul className="deck-list mt-6">
              {behaviorPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="chris-card rounded-[34px] px-5 py-6 md:px-7 md:py-7">
            <div className="eyebrow">Who responds</div>
            <div className="mt-4 grid gap-4">
              {customerLayers.map((item) => (
                <article
                  key={item.title}
                  className="chris-feature px-4 py-5"
                >
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="market" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[36px] px-5 py-6 md:px-8 md:py-8">
          <div className="eyebrow">3. Why North DFW</div>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white">
            Not just Texas. North DFW specifically.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/74">
            If this were being localized anywhere in the U.S., North DFW is one
            of the cleanest places to try. It has affluent households, deep golf
            gravity, high-traffic suburban corridors, and a real shot at word of
            mouth and content acceleration.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                  className="source-link mt-3 inline-block text-xs uppercase tracking-[0.2em] text-white/58"
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
      </section>

      <section id="pros" className="container-frame pt-10 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
          <article className="chris-card rounded-[34px] px-5 py-6 md:px-7 md:py-7">
            <div className="eyebrow">4. The pro angle</div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white">
              Pros are upside, not the foundation.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/74">
              One fair concern is that strong players could change the odds
              against the house. I do not think that should drive the base-case
              model. The core economics should work without pros. If the pro
              layer ever changes payout dynamics, it should be treated as a
              separate programmed event product rather than mixed into the
              everyday retail model.
            </p>
          </article>

          <article className="chris-card rounded-[34px] px-5 py-6 md:px-7 md:py-7">
            <div className="eyebrow">Why it still matters</div>
            <ul className="deck-list mt-5">
              {proAngle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="sites" className="container-frame pt-10 md:pt-14">
        <div className="chris-card rounded-[36px] px-5 py-6 md:px-8 md:py-8">
          <div className="eyebrow">5. The first flagship profile</div>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white">
            The job is finding the right corridor, not defending one address.
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/74">
            The real question is which North DFW location gives the flagship
            the best chance to prove the model correctly and read immediately
            as a premium challenge concept.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {siteCandidates.map((item) => (
              <article
                key={item.title}
                className="chris-feature px-5 py-5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                  {item.strength}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-7 text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  {item.risk}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="container-frame pt-10 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
          <article className="chris-card rounded-[34px] px-5 py-6 md:px-7 md:py-7">
            <div className="eyebrow">6. How to prove it correctly</div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white">
              The real question is how to prove it without half-assing it.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/74">
              I think the odds are already structurally in our favor. The work
              is choosing the format and the site discipline that tilt them even
              further.
            </p>
            <ul className="deck-list mt-6">
              {proofPath.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="chris-card rounded-[34px] px-5 py-6 md:px-7 md:py-7">
            <div className="eyebrow">What tilts the odds further</div>
            <ul className="deck-list mt-5">
              {edgeChoices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="faint-rule my-6" />
            <h3 className="font-display text-3xl tracking-[-0.04em]">
              If this still feels live, here is what I would value next.
            </h3>
            <ul className="deck-list mt-5">
              {asks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="chris-feature mt-6 px-4 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                Contact
              </p>
              <p className="mt-2 font-display text-3xl tracking-[-0.04em] text-white">
                Lyndon | 682.999.0953
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
