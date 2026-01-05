import React from 'react';
import { Apple, Sparkles } from 'lucide-react';

const MacButtonBlack = () => {
  return (
    <button className="
      /* Layout & Typography */
      flex items-center gap-3 px-4 py-2
      text-white  font-medium
      
      /* Background & Shape (Dark Gradient) */
      bg-gradient-to-b from-[#333333] to-[#000000]
      rounded-[24px]
      
      /* Borders & Depth (Subtle top highlight) */
      border-t border-white/10
      
      /* Shadow (Neutral deep shadow) */
      shadow-[0_10px_30px_rgba(0,0,0,0.4)]
      
      /* Interaction */
      transition-all duration-200
      hover:from-[#444444] hover:to-[#111111]
      active:scale-95
      cursor-pointer
    ">
      
      <Sparkles size={16} />
      <span>Start Mock Interview</span>
    </button>
  );
};

export default MacButtonBlack;