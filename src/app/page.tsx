const demandSignals = [
  {
    label: "Core idea",
    value: "Prize model",
    detail:
      "The engine is a visible jackpot plus operator-favorable math, not natural water.",
  },
  {
    label: "Flagship shot",
    value: "111 yards",
    detail:
      "One iconic distance keeps the concept legible, memorable, and content-friendly.",
  },
  {
    label: "Prototype posture",
    value: "Portable",
    detail:
      "A land-based water target removes the site chokehold and opens replication.",
  },
];

const thesisPoints = [
  "The lake made the original concept memorable, but it also hid the fact that the real business is the prize structure.",
  "North Texas is unusually attractive because it combines affluent suburbs, golf culture, heavy traffic corridors, and a high concentration of serious players.",
  "The first site should behave like a flagship with a face and identity, not an anonymous kiosk optimized only for labor savings.",
];

const workstreams = [
  "Private flagship pitch site rather than public consumer marketing",
  "One-page operator memo plus call-ready talking points",
  "Research-backed sections for demand, competitive blind spots, and MVP buildout",
  "Follow-up path if Chris wants economics, scope, or a live walkthrough",
];

const marketProof = [
  {
    stat: "28.1M",
    label: "Americans played on-course golf in 2024",
    sourceLabel: "NGF, 2024 participation snapshot",
    href: "https://www.ngf.org/short-game/golfs-state-of-industry-in-3-minutes/",
  },
  {
    stat: "1.89M",
    label: "Texas individual on-course golfers",
    sourceLabel: "Texas Golf Economic Impact",
    href: "https://www.texasgolfimpact.org/abouttexasgolfimpact",
  },
  {
    stat: "$121.6K",
    label: "Collin County median household income",
    sourceLabel: "U.S. Census QuickFacts, 2020-2024 dollars",
    href: "https://www.census.gov/quickfacts/fact/table/collincountytexas/PST045225",
  },
  {
    stat: "20+",
    label: "PGA Tour pros reported in and around Dallas",
    sourceLabel: "D Magazine, April 15, 2024",
    href: "https://www.dmagazine.com/publications/d-magazine/2024/april/meet-some-of-north-texass-pro-swingers/",
  },
];

const deckOutline = [
  "1. The blind spot: why the model never spread",
  "2. The unlock: land-based water-target flagship",
  "3. Why North Texas and why Lucas",
  "4. MVP spec: bays, target, tracking, cameras, pricing",
  "5. Economics: flagship path vs replication path",
  "6. Programming upside: pro board, content, earned media",
  "7. Team shape: operator, advisor, golf-world connector",
  "8. Next step: pilot diligence and flagship build path",
];

const diligenceQuestions = [
  "What is the cleanest MVP hardware stack for scoring, cameras, and target verification?",
  "What is the real installed capex for one flagship lane with 3-4 bays?",
  "What customer throughput supports the Year 1 model without fantasy assumptions?",
  "Which parts must be flagship-grade from day one, and which can stay modular?",
];

export default function Home() {
  return (
    <main className="page-shell pb-20">
      <section className="container-frame pt-6 md:pt-8">
        <div className="glass-panel rounded-[32px] px-5 py-4 md:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="eyebrow">Private flagship brief</div>
              <p className="mt-3 max-w-2xl text-sm text-ink-soft md:text-base">
                Internal pitch materials for <strong>Only Aces</strong>. Built to
                explain the unlock, the flagship case for Lucas, and the path to
                a repeatable U.S. template.
              </p>
            </div>
            <div className="rounded-full border border-line bg-panel-strong px-4 py-2 text-xs uppercase tracking-[0.24em] text-ink-soft">
              onlyaces.biz now • onlyaces.com later
            </div>
          </div>
        </div>
      </section>

      <section className="container-frame pt-6 md:pt-8">
        <div className="hero-grid items-stretch">
          <div className="glass-panel rounded-[36px] px-5 py-6 md:px-8 md:py-8">
            <div className="eyebrow">The flagship thesis</div>
            <h1 className="section-title mt-5 max-w-4xl">
              The prize model is the engine. The land-based water target is the
              unlock.
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink-soft">
              The original concept got remembered as a lake business. It is not.
              It is a premium, skill-based jackpot business with a highly legible
              challenge shot and operator-favorable math. Recreate the same
              emotional pull on land and the whole thing becomes portable.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {demandSignals.map((signal) => (
                <article
                  key={signal.label}
                  className="metric-card rounded-[26px] border border-line bg-panel-strong"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-ink-soft">
                    {signal.label}
                  </p>
                  <div className="metric-value mt-4">{signal.value}</div>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">
                    {signal.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="glass-panel rounded-[36px] p-4 md:p-5">
            <div className="lane">
              <div className="lane-pool">
                <div className="lane-green" />
                <div className="lane-flag" />
              </div>
              <div className="absolute left-1/2 top-[39%] -translate-x-1/2 rounded-full border border-white/16 bg-black/14 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/80">
                111 yards
              </div>
              <div className="absolute left-1/2 top-[48%] -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm">
                single iconic target
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

      <section className="container-frame pt-10 md:pt-14">
        <div className="section-grid">
          <article className="glass-panel info-card col-span-12 rounded-[32px] md:col-span-7">
            <div className="eyebrow">What changes in America</div>
            <p className="mt-4 text-2xl font-semibold leading-9 text-foreground">
              The overlooked opportunity is not that the concept works in Taupo.
              It is that nobody seems to have properly localized the model for a
              golf-rich, traffic-heavy U.S. corridor.
            </p>
            <div className="faint-rule my-6" />
            <div className="grid gap-4 md:grid-cols-3">
              {thesisPoints.map((point) => (
                <p
                  key={point}
                  className="rounded-[24px] border border-line bg-panel-strong px-4 py-4 text-sm leading-6 text-ink-soft"
                >
                  {point}
                </p>
              ))}
            </div>
          </article>

          <aside className="glass-panel quote-card col-span-12 rounded-[32px] md:col-span-5">
            <div className="eyebrow">Operator posture</div>
            <p className="mt-4 font-display text-3xl leading-[1.05] tracking-[-0.04em]">
              This should feel like a flagship with a face, not a sterile kiosk.
            </p>
            <p className="mt-4 text-sm leading-6 text-ink-soft">
              The first site should optimize for identity, credibility, and
              energy. Automation matters later. The flagship needs a story, a
              local anchor, and a visible operator brand.
            </p>
          </aside>
        </div>
      </section>

      <section className="container-frame pt-10 md:pt-14">
        <div className="glass-panel rounded-[36px] px-5 py-6 md:px-8 md:py-8">
          <div className="eyebrow">Demand proof</div>
          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-4xl tracking-[-0.04em]">
                The market backdrop is not theoretical
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-ink-soft">
                The case for a Lucas flagship gets stronger when you zoom out:
                golf participation is large and growing, Texas is already one of
                the deepest golf states in the country, and the North Texas
                corridor now has institutional golf gravity through PGA Frisco.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {marketProof.map((item) => (
              <article
                key={item.stat}
                className="rounded-[24px] border border-line bg-panel-strong px-4 py-5"
              >
                <div className="metric-value">{item.stat}</div>
                <p className="mt-3 text-sm font-medium leading-6 text-foreground">
                  {item.label}
                </p>
                <a
                  className="source-link mt-3 inline-block text-xs uppercase tracking-[0.2em] text-ink-soft"
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

      <section className="container-frame pt-10 md:pt-14">
        <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <article className="glass-panel rounded-[32px] px-5 py-6 md:px-7">
            <div className="eyebrow">What we are building</div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em]">
              Asset pack for the call
            </h2>
            <ul className="deck-list mt-6">
              {workstreams.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="glass-panel rounded-[32px] px-5 py-6 md:px-7">
            <div className="eyebrow">Deck spine</div>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em]">
              The private pitch flow
            </h2>
            <ol className="deck-list mt-6">
              {deckOutline.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </article>
        </div>
      </section>

      <section className="container-frame pt-10 md:pt-14">
        <div className="glass-panel rounded-[36px] px-5 py-6 md:px-8 md:py-8">
          <div className="eyebrow">Open diligence</div>
          <div className="mt-5 grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="font-display text-4xl tracking-[-0.04em]">
                What needs to harden next
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft">
                The thesis is ahead of the detail right now. That is normal. The
                next step is converting instinct into defendable operating
                assumptions, with the flagship positioned as a serious first proof
                rather than a mood board.
              </p>
            </div>
            <ul className="deck-list">
              {diligenceQuestions.map((question) => (
                <li key={question}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
