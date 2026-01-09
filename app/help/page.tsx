'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, Phone, MessageCircle, ChevronDown, 
  ChevronUp, LifeBuoy, AlertTriangle, FileText, 
  ArrowLeft 
} from 'lucide-react';

// --- Configuration: FAQ Data ---
const FAQS = [
  {
    question: "I forgot my Study ID. How do I log in?",
    answer: "Your Study ID was sent to you in your welcome email from the PCRG team. If you cannot find it, please contact the study coordinator using the email form below, and we will securely resend your credentials."
  },
  {
    question: "What if I miss a daily check-in?",
    answer: "It is okay to miss a day. Life happens! Just log in the next day and continue your journey. However, consistent check-ins help Stampley provide better insights into your distress patterns."
  },
  {
    question: "Who sees my answers?",
    answer: "Your data is encrypted and private. Only the authorized research team at UMass Boston can view anonymized data for study purposes. Your personal reflections are primarily for your own tracking and for Stampley to support you."
  },
  {
    question: "Is Stampley a real person?",
    answer: "No, Stampley is an AI companion designed to offer support and coping strategies. While Stampley is very smart, it is not a human therapist. If you are in crisis, please use the emergency resources listed at the bottom of this page."
  },
  {
    question: "How do I report a bug or technical issue?",
    answer: "If the app isn't working as expected, please email our technical support team at pcrg@umb.edu with a screenshot of the issue, if possible."
  }
];

export default function HelpPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- Navigation / Back Button --- */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Dashboard
        </Link>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-slate-100 mb-6 text-blue-600">
            <LifeBuoy size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            How can we help you?
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find answers to common questions about the AIDES-T2D study, 
            troubleshoot technical issues, or contact the research team.
          </p>
        </div>

        {/* --- Contact Cards Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          
          {/* Card 1: Study Coordinator */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Mail size={100} className="text-blue-600 -rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Study Questions</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Questions about the protocol, payments, or your participation rights?
              </p>
              <a 
                href="mailto:pcrg@umb.edu?subject=AIDES-T2D Study Question"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Email Coordinator <ArrowRightIcon />
              </a>
            </div>
          </div>

          {/* Card 2: Technical Support */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <MessageCircle size={100} className="text-teal-600 -rotate-12" />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Technical Support</h3>
              <p className="text-slate-500 mb-6 leading-relaxed">
                Having trouble with the Stampley chat, logging in, or loading pages?
              </p>
              <a 
                href="mailto:tech@umb.edu?subject=AIDES-T2D Tech Support"
                className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-800 transition-colors"
              >
                Contact Tech Support <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

        {/* --- FAQ Section --- */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`border border-slate-100 rounded-xl transition-all duration-200 ${openFaqIndex === index ? 'bg-slate-50 border-slate-200' : 'bg-white hover:border-blue-200'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className={`font-medium text-lg ${openFaqIndex === index ? 'text-blue-700' : 'text-slate-700'}`}>
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-blue-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="text-slate-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/0">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Crisis / Emergency Resource Section --- */}
        {/* IMPORTANT: Essential for health/distress studies */}
        <div className="bg-rose-50 border border-rose-100 rounded-2xl p-8 flex flex-col md:flex-row gap-6 md:items-center">
          <div className="flex-shrink-0">
             <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
               <AlertTriangle size={28} />
             </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-rose-900 mb-2">
              Are you in immediate distress?
            </h3>
            <p className="text-rose-800/80 text-sm leading-relaxed mb-4">
              The AIDES-T2D app and Stampley are not designed for medical emergencies or crisis intervention. 
              If you are feeling unsafe or need immediate medical attention, please do not wait.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:988" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-rose-200 text-rose-700 rounded-lg font-semibold text-sm hover:bg-rose-100 transition-colors"
              >
                <Phone size={14} /> Call 988 (Suicide & Crisis Lifeline)
              </a>
              <a 
                href="tel:911" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-lg font-semibold text-sm hover:bg-rose-700 transition-colors shadow-sm"
              >
                <Phone size={14} /> Call 911
              </a>
            </div>
          </div>
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
            University of Massachusetts Boston • PCRG Research Study
          </p>
          <p className="text-xs text-slate-400 mt-2">
            IRB Protocol #2024-001 • Support Hours: Mon-Fri 9am-5pm EST
          </p>
        </div>

      </main>
    </div>
  );
}

// Simple Helper Component for the small arrows
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);