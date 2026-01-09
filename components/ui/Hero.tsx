import React from 'react';
import { ShieldCheck, LineChart, MessageSquare, Fingerprint, ArrowRight } from 'lucide-react';

interface HeroProps {
  studyId: string;
  participantName?: string;
}

const Hero = ({ studyId, participantName }: HeroProps) => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white"
      style={{
        backgroundImage: "url('/image_bg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 100px", // Move the image a little down
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Overlays to ensure text readability while keeping the image visible */}
      {/* <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" /> */}

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
         
          {/* Left Column: Content */}
          <div className="flex flex-col items-start">
            {/* Cluely-style Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-sm mb-10">
              <Fingerprint size={14} className="text-black" />
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-500">
                Secure Session ID: <span className="text-black font-mono">{studyId}</span>
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl  tracking-tight text-slate-900 leading-[1.05] mb-8">
              Welcome{participantName ? `, ${participantName}` : ''} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">
                AIDES-T2D Study
              </span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-xl font-light">
              Experience the next generation of <span className="font-medium text-black underline decoration-blue-500/30 underline-offset-4">Emotional Support</span> for Type 2 Diabetes through secure, AI-driven reflections.
            </p>

            {/* Cluely Primary & Secondary Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <button className="group px-10 py-4 bg-black text-white rounded-2xl font-semibold shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-4 bg-white/50 backdrop-blur-md border border-slate-200 hover:border-black text-slate-900 rounded-2xl font-semibold transition-all active:scale-95">
                Portal Guide
              </button>
            </div>

            {/* Minimalist Feature Icons */}
            <div className="mt-16 flex gap-10">
              {[
                { icon: MessageSquare, label: "Daily Support" },
                { icon: ShieldCheck, label: "Private" },
                { icon: LineChart, label: "Insights" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400 hover:text-black transition-colors">
                  <item.icon size={18} strokeWidth={1.5} />
                  <span className="text-xs font-bold uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: The "Floating Glass" UI Element */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-white/40 backdrop-blur-xl py-30 px-10 rounded-[40px] border border-white/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]">
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-12">
                <div className="h-3 w-12 bg-black rounded-full" />
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
              </div>
             
              <div className="space-y-8">
                <div className="p-6 rounded-3xl bg-white/60 border border-white shadow-sm">
                   <div className="h-2 w-24 bg-slate-100 rounded mb-4" />
                   <div className="h-2 w-full bg-slate-200 rounded" />
                </div>
                
                <div className="text-center space-y-4">
                  <p className="text-xs text-slate-400 font-mono tracking-tighter uppercase">Encryption Status: Active</p>
                  <p className="text-[13px] text-slate-500 italic leading-relaxed px-4">
                    "Your data is processed locally to ensure your privacy remains the top priority."
                  </p>
                </div>
              </div>
            </div>

            {/* Soft decorative glow behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100/20 to-indigo-100/20 blur-3xl -z-10 rounded-[50px]" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;