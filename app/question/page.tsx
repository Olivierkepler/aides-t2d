'use client'

import React, { useState } from 'react';
import { 
  Mic, Type, Send, Check, 
  Battery, BatteryCharging, 
  Smile, Frown, AlertCircle 
} from 'lucide-react';

// --- Configuration Data ---
const CONTEXT_TAGS = [
  { id: 'appt', label: "Doctor’s appointment" },
  { id: 'sugar', label: "High or low blood sugar" },
  { id: 'missed', label: "Missed a medication or meal" },
  { id: 'work_stress', label: "Stress at work or school" },
  { id: 'conflict', label: "Conflict or tension" },
  { id: 'support', label: "Felt supported by someone" },
  { id: 'physical', label: "Felt physically unwell/tired" },
];

export default function DailyCheckIn() {
  // --- State Management ---
  const [step, setStep] = useState(1); // Optional: Could be multi-step, but kept as single scroll for simplicity
  const [distress, setDistress] = useState<number>(5);
  const [mood, setMood] = useState<number>(5);
  const [energy, setEnergy] = useState<number>(5);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [inputMode, setInputMode] = useState<'text' | 'voice'>('text');
  const [reflection, setReflection] = useState('');
  const [coping, setCoping] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Handlers ---
  const toggleTag = (tagId: string) => {
    setSelectedTags(prev => 
      prev.includes(tagId) 
        ? prev.filter(t => t !== tagId) 
        : [...prev, tagId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to backend
    console.log({
      distress,
      mood,
      energy,
      context: selectedTags,
      reflection,
      coping,
      mode: inputMode
    });

    // In a real app, router.push('/stampley-chat') would happen here
    setTimeout(() => {
      alert("Check-in saved! Stampley is ready to chat.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Daily Check-In</h1>
          <p className="text-slate-500 mt-2">Take a moment to reflect on your day with diabetes.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* --- Section 1: Diabetes Distress --- */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <label className="block text-lg font-semibold text-slate-800 mb-4">
              How stressful did diabetes feel today?
            </label>
            
            <div className="px-2 py-4">
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={distress} 
                onChange={(e) => setDistress(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-sm font-medium text-slate-500 mt-3">
                <span>0 (Not stressful)</span>
                <span className="text-blue-600 font-bold text-lg">{distress}</span>
                <span>10 (Very stressful)</span>
              </div>
            </div>
          </div>

          {/* --- Section 2: Affect (Mood & Energy) --- */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 space-y-8">
            <h2 className="text-lg font-semibold text-slate-800">How are you feeling right now?</h2>

            {/* Mood Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="flex items-center gap-2 text-slate-600"><Frown size={20}/> Unpleasant</span>
                <span className="flex items-center gap-2 text-slate-600">Pleasant <Smile size={20}/></span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={mood} 
                onChange={(e) => setMood(parseInt(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-slate-300 via-yellow-200 to-green-300 rounded-lg appearance-none cursor-pointer accent-slate-800"
              />
            </div>

            {/* Energy Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="flex items-center gap-2 text-slate-600"><Battery size={20}/> Drained</span>
                <span className="flex items-center gap-2 text-slate-600">Energized <BatteryCharging size={20}/></span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={energy} 
                onChange={(e) => setEnergy(parseInt(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-slate-300 via-blue-200 to-yellow-300 rounded-lg appearance-none cursor-pointer accent-slate-800"
              />
            </div>
          </div>

          {/* --- Section 3: Context Tags --- */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <label className="block text-lg font-semibold text-slate-800 mb-4">
              Which of these applied to your day?
            </label>
            <div className="flex flex-wrap gap-2">
              {CONTEXT_TAGS.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                    ${selectedTags.includes(tag.id) 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md transform scale-105' 
                      : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:bg-blue-50'}
                  `}
                >
                  {tag.label}
                </button>
              ))}
            </div>
          </div>

          {/* --- Section 4: Open Reflection --- */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <div className="flex justify-between items-center mb-4">
              <label className="text-lg font-semibold text-slate-800">
                What most shaped your day with diabetes?
              </label>
              
              {/* Input Toggle */}
              <div className="flex bg-slate-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setInputMode('text')}
                  className={`p-2 rounded-md transition-all ${inputMode === 'text' ? 'bg-white shadow text-blue-600' : 'text-slate-400'}`}
                >
                  <Type size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setInputMode('voice')}
                  className={`p-2 rounded-md transition-all ${inputMode === 'voice' ? 'bg-white shadow text-blue-600' : 'text-slate-400'}`}
                >
                  <Mic size={18} />
                </button>
              </div>
            </div>

            {inputMode === 'text' ? (
              <textarea
                value={reflection}
                onChange={(e) => setReflection(e.target.value)}
                placeholder="Type your thoughts here..."
                className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-h-[120px] resize-none"
              />
            ) : (
              <div className="flex flex-col items-center justify-center py-8 bg-slate-50 rounded-xl border-2 border-dashed border-slate-300">
                <button
                  type="button"
                  onClick={() => setIsRecording(!isRecording)}
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                    ${isRecording ? 'bg-red-500 animate-pulse shadow-red-200 shadow-xl' : 'bg-blue-600 shadow-lg hover:bg-blue-700'}
                  `}
                >
                  <Mic size={32} className="text-white" />
                </button>
                <p className="mt-4 text-sm font-medium text-slate-600">
                  {isRecording ? "Listening... Tap to stop" : "Tap to record your reflection"}
                </p>
              </div>
            )}
          </div>

          {/* --- Section 5: Coping Action --- */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
            <label className="block text-lg font-semibold text-slate-800 mb-2">
              What helped you get through the day?
            </label>
            <input
              type="text"
              value={coping}
              onChange={(e) => setCoping(e.target.value)}
              placeholder="e.g., A short walk, calling a friend..."
              className="w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* --- Submit --- */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg 
                shadow-lg shadow-slate-200 hover:shadow-xl hover:bg-slate-800 
                active:scale-[0.99] transition-all flex items-center justify-center gap-3
              "
            >
              {isSubmitting ? (
                <>Saving...</>
              ) : (
                <>
                  Submit to Stampley <Send size={20} />
                </>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4">
              Your entries are private and secure.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}