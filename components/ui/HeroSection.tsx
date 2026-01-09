'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight, Lock, Activity, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onLoginClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onLoginClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount to prevent hydration mismatch
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative pt-20 w-full min-h-screen bg-white flex flex-col items-center overflow-hidden selection:bg-blue-50 selection:text-blue-900 font-sans">
      
      {/* --- CSS for Custom Animations --- */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes beam-slide {
          0% { transform: translate(-100%, -100%); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translate(100%, 100%); opacity: 0; }
        }
        .animate-beam {
          animation: beam-slide 8s linear infinite;
        }
        .delay-2000 { animation-delay: 2s; }
      `}} />

      {/* --- Background: Geometric Grid --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* SVG Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(to right, #E2E8F0 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)'
          }}
        />

        {/* Moving Beam Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Beam 1 */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-beam">
            <div className="w-full h-[100px] bg-gradient-to-r from-transparent via-blue-100/40 to-transparent -rotate-45 transform translate-y-[50vh] blur-xl" />
          </div>
          {/* Beam 2 (Delayed) */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-beam delay-2000">
             <div className="w-full h-[80px] bg-gradient-to-r from-transparent via-teal-100/30 to-transparent -rotate-45 transform translate-y-[60vh] blur-xl" />
          </div>
        </div>

        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* --- Main Content --- */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 flex flex-col items-center">
        
        {/* Hero Text */}
        <div className={`text-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur-md shadow-sm mb-8 hover:border-blue-300 transition-colors cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-xs font-semibold text-slate-600 tracking-wide uppercase">
              Secure Study Portal
            </span>
            <span className="h-3 w-px bg-slate-300 mx-1" />
            <span className="text-xs font-medium text-slate-500 flex items-center">
              v1.0 <ChevronRight size={12} className="ml-0.5 text-slate-400" />
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-5xl  tracking-tight text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
            Emotional support tailored for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-500">
              Type 2 Diabetes care.
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10 leading-relaxed font-light">
            Welcome to <strong className="text-slate-900 font-semibold">AIDES-T2D</strong>. 
            Connect with Stampley, your AI companion, to track daily progress 
            and find balance through personalized insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-24">
            <button 
              onClick={onLoginClick}
              className="
                group relative px-8 py-3.5 bg-slate-900 text-white rounded-lg font-medium text-base
                shadow-[0_0_0_1px_rgba(0,0,0,1),0_4px_14px_rgba(0,0,0,0.4)] 
                hover:shadow-[0_0_0_1px_rgba(0,0,0,1),0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5
                transition-all duration-200 flex items-center gap-2 overflow-hidden ring-offset-2 focus:ring-2 ring-slate-900 outline-none
              "
            >
              <span className="relative z-10">Log In to Dashboard</span>
              <ArrowRight className="relative z-10 w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              {/* Button Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
            </button>
            <button className="px-8 py-3.5 bg-white text-slate-600 border border-slate-200 rounded-lg font-medium hover:text-slate-900 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200">
              Learn More
            </button>
          </div>
        </div>

        {/* --- Bento Grid Features --- */}
        <div 
          className={`
            w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8
            transition-all duration-1000 delay-300 ease-out transform
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
          `}
        >
          {/* Feature 1 */}
          <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
              <Sparkles size={120} className="rotate-12" />
            </div>
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 text-blue-600 border border-blue-100 group-hover:scale-110 transition-transform duration-300">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Meet Stampley</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Your empathetic AI partner. Stampley adapts to your mood, offering coping strategies and a listening ear 24/7.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
              <ShieldCheck size={120} className="rotate-12" />
            </div>
            <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 text-teal-600 border border-teal-100 group-hover:scale-110 transition-transform duration-300">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Private & Secure</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Built on strict clinical protocols. Your data is encrypted and only accessible via your unique Study ID key.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
             <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none">
              <Activity size={120} className="rotate-12" />
            </div>
            <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6 text-indigo-600 border border-indigo-100 group-hover:scale-110 transition-transform duration-300">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Daily Insights</h3>
            <p className="text-slate-500 leading-relaxed text-sm">
              Visualize your stress and energy levels over time. Identify triggers and see how your emotional health improves.
            </p>
          </div>

        </div>

        {/* Footer Authority */}
        <div className={`mt-20 pt-8 border-t border-slate-100 w-full text-center transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest">
            University of Massachusetts Boston • PCRG Research Study
          </p>
        </div>

      </main>
    </div>
  );
};