'use client';

import React from 'react';
import { Search, MoreHorizontal, User, Mail, Send } from 'lucide-react';

const FeaturesGrid = () => {
  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight mb-6">
            How AIDES-T2D supports you <br className="hidden md:block" />
            {/* throughout your study journey */}
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* --- CARD 1: DAILY CHECK-IN SUPPORT (Blue) --- */}
          <div className="bg-[#5B95F8] rounded-[32px] p-8 h-[480px] relative overflow-hidden flex flex-col justify-between group">
            
            {/* Mock UI: Stampley Conversation */}
            <div className="absolute top-8 left-8 right-8 h-[300px] bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 p-4 shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2">
               {/* Floating Prompt */}
               <div className="absolute top-4 right-4 bg-[#1F2125] text-white text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-700 shadow-lg">
                 How did today feel?
               </div>
               
               {/* Mock Reflection Text */}
               <div className="mt-12 space-y-3 opacity-90">
                 <p className="text-white/90 text-sm leading-relaxed">
                   “It sounds like managing meals and blood sugar took a lot of energy today. That can feel overwhelming.”
                 </p>
               </div>

               {/* Bottom Input Bar */}
               <div className="absolute bottom-4 left-4 right-4 bg-white/10 rounded-lg h-10 flex items-center px-3 border border-white/10">
                  <div className="w-4 h-4 rounded-sm border border-white/30 mr-2"></div>
                  <div className="w-20 h-1.5 bg-white/20 rounded-full"></div>
               </div>
            </div>

            {/* Spacer */}
            <div className="flex-grow"></div>

            {/* Text Content */}
            <div className="relative z-10 mt-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Daily emotional check-ins
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed opacity-90">
                Share how diabetes affected your day and receive supportive, personalized responses from Stampley.
              </p>
            </div>
          </div>


          {/* --- CARD 2: REFLECTION & FOLLOW-UP (Gray) --- */}
          <div className="bg-[#F3F5F8] rounded-[32px] p-8 h-[480px] relative overflow-hidden flex flex-col group">
             {/* Text Content */}
             <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Thoughtful reflections after each check-in
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Stampley summarizes what you shared and offers gentle guidance tailored to your focus area.
              </p>
            </div>

            {/* Abstract Visual */}
            <div className="flex-grow relative">
               <div className="absolute -bottom-10 left-8 right-8 bg-white rounded-t-2xl shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-6 border border-gray-100 h-[250px] transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4 mb-4">
                     <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <Mail size={14} />
                     </div>
                     <div className="h-2 w-32 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                     <div className="h-2 w-full bg-gray-50 rounded-full"></div>
                     <div className="h-2 w-5/6 bg-gray-50 rounded-full"></div>
                     <div className="h-2 w-4/6 bg-gray-50 rounded-full"></div>
                  </div>
               </div>
            </div>
          </div>


          {/* --- CARD 3: WEEKLY FOCUS DOMAIN (Gray) --- */}
          <div className="bg-[#F3F5F8] rounded-[32px] p-8 h-[400px] relative overflow-hidden flex items-center group">
            
            {/* Left: Text */}
            <div className="w-1/2 pr-4 relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Focus on what matters <br /> this week
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed">
                Each week centers on one diabetes distress domain—emotional, regimen, interpersonal, or physician-related.
              </p>
            </div>

            {/* Right: Mock Domain Card */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[280px] bg-white rounded-xl shadow-xl border border-gray-100 p-5 transform rotate-[-3deg] transition-all duration-500 group-hover:rotate-0 group-hover:scale-105">
               <div className="text-xs text-gray-400 font-medium mb-4 uppercase tracking-wider">
                 Weekly Focus
               </div>
               <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                     <User className="text-gray-400" size={24} />
                  </div>
                  <div>
                     <div className="h-3 w-24 bg-gray-200 rounded mb-1"></div>
                     <div className="h-2 w-16 bg-gray-100 rounded"></div>
                  </div>
               </div>
               <div className="bg-gray-50 rounded p-3 mb-2">
                  <p className="text-[10px] text-gray-500 leading-snug">
                     Exploring emotional burden and feelings of overwhelm related to diabetes.
                  </p>
               </div>
            </div>
          </div>


          {/* --- CARD 4: PROGRESS & CONTINUITY (Gray) --- */}
          <div className="bg-[#F3F5F8] rounded-[32px] p-8 h-[400px] relative overflow-hidden flex flex-col justify-between group">
             
             {/* Top: Mock Progress UI */}
             <div className="relative w-full h-[180px] bg-white rounded-xl shadow-sm border border-gray-100 p-5 overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="space-y-3">
                   <div className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                     Progress Summary
                   </div>
                   <div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
                   <div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
                </div>
             </div>

             {/* Bottom: Text */}
             <div className="mt-8 relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Track patterns over time
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Review summaries of your check-ins to notice trends and reflect on your experience across the study.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
