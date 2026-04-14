import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Only Aces | The Plan",
  description: "Phase 1: The Lab. Phase 2: The Scale.",
};

export default function ChrisPlanPage() {
  return (
    <main className="chris-shell min-h-screen bg-[#07131d] text-white selection:bg-blue-500/30">
      
      {/* ─── OPENER: THE OPPORTUNITY ───────────────────────────────────── */}
      <section className="relative h-[70vh] w-full overflow-hidden border-b border-white/10">
        <a 
          href="https://www.loopnet.com/Listing/2895-County-Road-341-McKinney-TX/38424674/" 
          target="_blank" 
          rel="noreferrer"
          className="block relative h-full w-full group"
        >
          <Image
            src="/images/loopnet-listing.png"
            alt="McKinney Site Listing"
            fill
            className="object-cover opacity-50 transition duration-700 group-hover:scale-105 group-hover:opacity-70"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07131d] via-transparent to-transparent" />
          <div className="container-frame relative z-10 flex h-full flex-col justify-end pb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
              Current Target Site: McKinney ETJ
            </div>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter leading-[0.9]">
              The lake was a visual.<br />
              <span className="text-blue-400">The math is the business.</span>
            </h1>
            <div className="mt-8">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest">
                View Site on LoopNet
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* ─── POSSIBLE RENDERING ────────────────────────────────────────── */}
      <section className="container-frame py-16 border-b border-white/5">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Exterior View</div>
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/exterior.png"
                alt="Only Aces Flagship Rendering"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Island Target Concept</div>
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/rendering-2.png"
                alt="Alternative Concept Rendering"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40">Visual Motion</div>
            <div className="relative aspect-video rounded-[40px] overflow-hidden border border-white/10 shadow-2xl bg-black">
              <video 
                src="/videos/aces-concept.mp4" 
                controls 
                autoPlay 
                muted 
                loop 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARKET GRAVITY ────────────────────────────────────────────── */}
      <section className="container-frame py-20 border-b border-white/5">
        <div className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-10">The Market Gravity</div>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="space-y-8">
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              If it works in Taupo, it <span className="italic text-white/60 text-3xl md:text-4xl">crushes</span> in DFW.
            </h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                The original model was proven in Lake Taupo, NZ—a town of 26,000. 
                Our target is the epicenter of the global golf world.
              </p>
              <ul className="grid grid-cols-2 gap-6 text-sm">
                <li className="space-y-1">
                  <div className="text-white font-bold text-xl">$14.2B</div>
                  <div className="text-white/40 uppercase tracking-widest text-[0.6rem]">Texas Golf Economy</div>
                </li>
                <li className="space-y-1">
                  <div className="text-white font-bold text-xl">200+</div>
                  <div className="text-white/40 uppercase tracking-widest text-[0.6rem]">DFW Golf Courses</div>
                </li>
                <li className="space-y-1">
                  <div className="text-white font-bold text-xl">~20</div>
                  <div className="text-white/40 uppercase tracking-widest text-[0.6rem]">PGA Pros in Area</div>
                </li>
                <li className="space-y-1">
                  <div className="text-white font-bold text-xl">PGA HQ</div>
                  <div className="text-white/40 uppercase tracking-widest text-[0.6rem]">Frisco (15 mins away)</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="chris-callout p-8 bg-blue-500/5 border border-blue-500/20 rounded-3xl">
            <p className="text-white text-lg leading-relaxed italic">
              "Texas ranks 2nd nationally for on-course participation with 1.89 million golfers—a figure that could fill AT&T Stadium 23 times."
            </p>
            <div className="mt-6 text-xs uppercase tracking-widest text-white/30">— 2025 Texas Golf Economic Impact Report</div>
          </div>
        </div>
      </section>

      <div className="container-frame py-20 space-y-32">
        
        {/* ─── PHASE 1: THE MCKINNEY LAB ────────────────────────────────── */}
        <section className="grid gap-12 md:grid-cols-2 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-6">Phase 1: The Lab</div>
            <h2 className="font-display text-4xl mb-6 tracking-tight">2895 CR 341, McKinney</h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                A 1.25-acre "Goldilocks" site in the McKinney ETJ. 
                <strong className="text-white block mt-2">Outside McKinney city limits (ETJ) so less red tape involved.</strong>
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Lease</div>
                  <div className="text-xl font-display">$2,500/mo <span className="text-[0.65rem] text-white/40 block">per 1.25 AC / 5 AC available</span></div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                  <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Status</div>
                  <div className="text-xl font-display text-green-400">Power/Water On-site</div>
                </div>
              </div>

              <p className="text-white/40 text-sm italic mt-4">
                Listing explicitly seeks &quot;Outdoor Recreation concepts (e.g. pickleball).&quot; 
                Includes fenced yard, level grading, and existing 12x16 shed.
              </p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-xs uppercase tracking-[0.2em] text-white/40 mb-6">The "Shoestring" Buildout</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <a href="https://www.usnetting.com/sports-netting/golf-netting/driving-range-netting/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Netting (25k sq ft)</a>
                <span className="text-white">$8,270</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <a href="https://www.facebook.com/groups/735361224811178/posts/1506513927695900/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">15x Utility Poles ($1/ft)</a>
                <span className="text-white">$600</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <a href="https://www.uscargocontrol.com/collections/rigging-supplies" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Hauling & Rigging</a>
                <span className="text-white">$4,700</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <a href="https://www.tractorsupply.com/tsc/product/behlen-country-10-ft-galvanized-round-tank-2177170" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">2x 10ft Stock Tank Targets</a>
                <span className="text-white">$1,600</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <a href="https://www.sylvane.com/mrcool-diy-5th-gen-12k-btu-115v-mini-split-heat-pump.html" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition text-left">DIY Climate (Mini-split/Misters)</a>
                <span className="text-white">$3,300</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <a href="https://flightscope.com/products/flightscope-mevo" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">Tracking (2x Mevo) + Misc</a>
                <span className="text-white">$4,500</span>
              </li>
              <li className="pt-2 flex justify-between font-bold text-lg text-blue-400">
                <span>Total Upfront</span>
                <span>~$22,970</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ─── THE BREAK-EVEN MATH ───────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-blue-500/10 to-transparent border border-white/10 rounded-[40px] p-10 md:p-16">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-4">The Floor</div>
            <h2 className="font-display text-4xl md:text-5xl">11 Balls an Hour.</h2>
            <p className="mt-4 text-white/40 text-lg">That is the operational break-even at a $3 blended average.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <div className="text-xs uppercase tracking-widest text-white/30 mb-2">Pricing</div>
              <div className="text-2xl font-display">$3 / Ball</div>
              <div className="text-[0.6rem] text-white/40 mt-1 uppercase">Blended Avg</div>
            </div>
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <div className="text-xs uppercase tracking-widest text-white/30 mb-2">OpEx</div>
              <div className="text-2xl font-display">$10k / Mo</div>
              <div className="text-[0.6rem] text-white/40 mt-1 uppercase">Incl. Labor/Lease</div>
            </div>
            <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
              <div className="text-xs uppercase tracking-widest text-white/30 mb-2">Volume Goal</div>
              <div className="text-2xl font-display">38 Balls / Hr</div>
              <div className="text-[0.6rem] text-white/40 mt-1 uppercase">To hit $300k/yr Profit</div>
            </div>
            <div className="bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
              <div className="text-xs uppercase tracking-widest text-green-400/50 mb-2">The Upside</div>
              <div className="text-2xl font-display">$1.3M+</div>
              <div className="text-[0.6rem] text-white/40 mt-1 uppercase">Year 5 Potential</div>
            </div>
          </div>
        </section>

        {/* ─── PHASE 2: THE SCALE ──────────────────────────────────────── */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          <div className="md:order-2">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Phase 2: The Scale</div>
            <h2 className="font-display text-4xl mb-8 tracking-tight text-blue-400">Eldorado & 75</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Once the unit economics are dead-proven in the McKinney Lab, we hit the high-gravity corridors. We trade "low friction" for <strong>unavoidable visibility</strong> and premium $10/ball pricing architecture.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 md:order-1 grayscale hover:grayscale-0 transition duration-700">
            <Image
              src="/images/interior.png"
              alt="Flagship Interior"
              fill
              className="object-cover opacity-60"
              unoptimized
            />
          </div>
        </section>

        {/* ─── CONTACT ─────────────────────────────────────────────────── */}
        <footer className="text-center pb-20">
          <h3 className="font-display text-3xl mb-8">Ready to pressure-test?</h3>
          <a
            href="tel:6829990953"
            className="inline-block bg-white text-black font-bold py-5 px-10 rounded-full hover:bg-blue-400 hover:text-white transition transform hover:scale-105"
          >
            Call Lyndon: 682.999.0953
          </a>
          <p className="mt-8 text-white/30 text-xs uppercase tracking-[0.2em]">
            Only Aces | The McKinney Lab
          </p>
        </footer>

      </div>
    </main>
  );
}
