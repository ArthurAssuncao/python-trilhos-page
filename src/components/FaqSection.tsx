// src/components/FaqSection.tsx
import { ChevronDown, HelpCircle } from "lucide-react";
import React, { useState } from "react";
import { FAQ_ITEMS } from "../data/projectData";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-slate-800/60 border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-slate-600 shadow-sm"
          >
            <button
              onClick={() => toggleFaq(item.id)}
              className="w-full flex justify-between items-center p-5 text-left text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition hover:cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <HelpCircle size={18} className="text-amber-400 shrink-0" />
                <span className="text-sm md:text-base leading-snug">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-amber-400" : ""}`}
              />
            </button>

            {/* Animação CSS nativa via max-height/grid layout para fluidez de abertura */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="p-5 pt-2 text-sm md:text-base text-slate-300 border-t border-slate-700/30 leading-relaxed bg-slate-800/30">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
