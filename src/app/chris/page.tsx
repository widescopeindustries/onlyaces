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
      
      {/* ─── HERO: THE INSIGHT ────────────────────────────────────────── */}
      <section className="relative h-[70vh] w-full overflow-hidden border-b border-white/10">
        <Image
          src="/images/exterior.png"
          alt="Only Aces Rendering"
          fill
          className="object-cover opacity-50"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07131d] via-transparent to-transparent" />
        <div className="container-frame relative z-10 flex h-full flex-col justify-end pb-16">
          <Link href="/" className="text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white transition">
            Only Aces
          </Link>
          <h1 className="mt-6 font-display text-5xl md:text-7xl tracking-tighter leading-[0.9]">
            The lake was a visual.<br />
            <span className="text-blue-400">The prize is the business.</span>
          </h1>
        </div>
      </section>

      <div className="container-frame py-20 space-y-32">
        
        {/* ─── PHASE 1: THE LAB ────────────────────────────────────────── */}
        <section className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-blue-400 font-bold mb-6">Phase 1: The Lab</div>
            <h2 className="font-display text-4xl mb-8 tracking-tight">2895 CR 341, McKinney</h2>
            <div className="space-y-6 text-lg text-white/60 leading-relaxed">
              <p>
                A 1.25-acre "Goldilocks" site located in the McKinney ETJ. 
                <strong className="text-white block mt-2">Zero city restrictions. Zero permits.</strong>
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">→</span>
                  <span><strong>$2,500/mo</strong> lease for a fenced, gated, and level yard.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Existing power, water, and 12x16 office shed on-site.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">→</span>
                  <span><strong>$25k Buildout:</strong> 40ft beacon towers + climate-controlled bay.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-xl uppercase tracking-widest">
              McKinney Sandbox
            </div>
          </div>
        </section>

        {/* ─── PHASE 2: THE SCALE ──────────────────────────────────────── */}
        <section className="grid gap-12 md:grid-cols-2 items-center md:flex-row-reverse">
          <div className="md:order-2">
            <div className="text-xs uppercase tracking-[0.3em] text-white/40 font-bold mb-6">Phase 2: The Scale</div>
            <h2 className="font-display text-4xl mb-8 tracking-tight">Eldorado & 75</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Once the unit economics are dead-proven in the McKinney Lab, we hit the high-gravity 121/75 corridor. We trade "low friction" for <strong>unavoidable visibility</strong> and massive retail traffic.
            </p>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 md:order-1">
            <Image
              src="/images/interior.png"
              alt="Flagship Interior"
              fill
              className="object-cover opacity-60"
              unoptimized
            />
          </div>
        </section>

        {/* ─── THE MATH ────────────────────────────────────────────────── */}
        <section className="bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-16 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-green-400 font-bold mb-10">The Economics</div>
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="text-4xl font-display text-white">$10</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">Per Ball (Avg)</div>
            </div>
            <div>
              <div className="text-4xl font-display text-white">~$300k</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">Year 1 Profit</div>
            </div>
            <div>
              <div className="text-4xl font-display text-white">$1.3M+</div>
              <div className="text-xs uppercase tracking-widest text-white/40 mt-2">Year 5 Potential</div>
            </div>
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
            Only Aces | McKinney Lab
          </p>
        </footer>

      </div>
    </main>
  );
}
