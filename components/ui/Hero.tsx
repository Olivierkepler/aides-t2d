import React from 'react';
import { ShieldCheck, LineChart, MessageSquare, Fingerprint } from 'lucide-react';

interface HeroProps {
  studyId: string;
  participantName?: string; // Optional: personalize if you have the data
}

const Hero = ({ studyId, participantName }: HeroProps) => {
  return (
    <section className="relative pt-20 overflow-hidden bg-white ">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-72 h-72 bg-teal-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
         
          {/* Left Column: Content */}
          <div>
            {/* Study ID Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-600 mb-8 border border-slate-200 shadow-sm">
              <Fingerprint size={14} className="text-blue-600" />
              <span className="text-xs font-mono font-bold tracking-wider uppercase">
                Study ID: <span className="text-black">{studyId}</span>
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight mb-6">
              Welcome{participantName ? `, ${participantName}` : ''} to the <br />
              <span className="text-black">
                AIDES-T2D Study Portal
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Thank you for joining the <span className="font-semibold text-slate-800">Artificial Intelligence–Driven Emotional Support for Type 2 Diabetes</span> study. This secure environment is designed to support your journey.
            </p>

            {/* Quick Feature Grid */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: MessageSquare, text: "Daily Reflections", color: "text-blue-600" },
                { icon: ShieldCheck, text: "Personal Support", color: "text-teal-600" },
                { icon: LineChart, text: "Track Progress", color: "text-indigo-600" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <item.icon size={18} className={item.color} />
                  <span className="text-sm font-medium text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-2 bg-black cursor-pointer  hover:bg-black/50 text-white rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95 text-center">
                Get Started
              </button>
              <button className="px-8 py-2 cursor-pointer bg-white border border-slate-200 hover:border-slate-300 text-slate-700 rounded-xl font-semibold transition-all hover:bg-slate-50 text-center">
                Portal Guide
              </button>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="hidden lg:block relative">
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 transition-transform hover:rotate-1">
              {/* This acts as a mock UI/Identity card */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold">
                  {studyId.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 uppercase">Participant Active</p>
                  <p className="text-xs text-slate-500 tracking-wide">Encrypted Session: Secure</p>
                </div>
              </div>
             
              <div className="space-y-2">
                <div className="h-0.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-black rounded-full" />
                </div>
                <p className="text-xs text-slate-400 italic text-center leading-relaxed">
                  "Your reflections help the AI tailor support specific to your Type 2 Diabetes management."
                </p>
              </div>
            </div>

            {/* Subtle background glow for the card */}
            <div className="absolute inset-0 bg-black blur-[80px] opacity-20 -z-10 animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;