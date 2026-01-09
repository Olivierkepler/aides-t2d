'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  // 1. DATA FROM THE IMAGE
  const faqs = [
    {
      question: "How is AIDES-T2D different from other diabetes apps?",
      answer: "Unlike standard apps that focus primarily on tracking blood glucose numbers or calories, AIDES-T2D focuses on the emotional side of living with diabetes. It combines daily reflection with Stampley, an AI companion designed to provide immediate empathy and coping strategies for diabetes distress."
    },
    {
      question: "Who is eligible to use this portal?",
      answer: "The AIDES-T2D portal is exclusively for participants currently enrolled in the PCRG clinical research study at UMass Boston. You must have a valid, active Study ID provided by the research coordinator to log in."
    },
    {
      question: "Is there a cost to use Stampley?",
      answer: "No. Participation in the study and access to the AIDES-T2D dashboard—including the Stampley AI companion—is completely free for all enrolled participants."
    },
    {
      question: "Is my data private and secure?",
      answer: "Your privacy is paramount. We use clinical-grade encryption to protect your conversations and daily check-ins. Your personal identity is separated from your data using your Study ID, ensuring your reflections remain confidential."
    },
    {
      question: "Do I need to download an app?",
      answer: "No, AIDES-T2D is a secure web-based platform. You can access it directly through the browser on your smartphone, tablet, or computer without downloading anything from an app store."
    },
    {
      question: "Who do I contact for help?",
      answer: "For technical issues with the website, please email our tech support. For questions regarding the study protocol, payments, or your rights as a participant, please contact the Study Coordinator listed in your welcome email."
    }
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default like the image

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <h2  className="text-4xl lg:text-5xl tracking-tight text-slate-900 leading-tight mb-16">
          Frequently asked questions
        </h2>

        {/* List */}
        <div className="border-t border-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-gray-100"
              >
                {/* Question Row (Clickable) */}
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 flex items-center cursor-pointer justify-between text-left focus:outline-none group"
                >
                  <span className="text-lg font-medium text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  
                  {/* Chevron Icon with Rotation */}
                  <ChevronDown 
                    className={`text-gray-400 transition-transform duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    size={20} 
                  />
                </button>

                {/* Answer Row (Animated Height) */}
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-6' : 'grid-rows-[0fr] opacity-0 mb-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;