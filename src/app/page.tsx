import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07131d] flex flex-col items-center justify-center p-4 selection:bg-white/10">
      <div className="w-full max-w-5xl aspect-video relative group rounded-[40px] overflow-hidden shadow-[0_48px_100px_rgba(0,0,0,0.6)] border border-white/8 transition-transform duration-700 hover:scale-[1.01]">
        <video
          src="/videos/aces-concept.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to keep it feeling deep and premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="mt-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-white/90 font-display text-4xl sm:text-5xl tracking-[-0.05em] uppercase italic font-black">
          Only Aces
        </h1>
        <div className="flex items-center gap-4 mt-4 justify-center">
          <div className="h-[1px] w-8 bg-white/10" />
          <p className="text-white/30 uppercase tracking-[0.4em] text-[10px] sm:text-xs font-medium">
            The Flagship Concept
          </p>
          <div className="h-[1px] w-8 bg-white/10" />
        </div>
      </div>
      
      {/* Absolute background elements for texture */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] aspect-square bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] aspect-square bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>
    </main>
  );
}
