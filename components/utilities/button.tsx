import React from 'react';
import { Apple } from 'lucide-react';

const MacButtonBlack = () => {
  return (
    <button className="
      /* Layout & Typography */
      flex items-center gap-3 px-4 py-2
      text-white text-xl font-medium
      
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
      <Apple size={28} fill="currentColor" />
      <span>Get for Mac</span>
    </button>
  );
};

export default MacButtonBlack;