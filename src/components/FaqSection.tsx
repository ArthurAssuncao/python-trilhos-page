// src/components/FaqSection.tsx
import { ChevronDown, HelpCircle } from "lucide-react";
import React, { useState } from "react";
import { COLOR_CSS_VARIABLES } from "../constants/colors"; // Importando as variáveis unificadas
import { FAQ_ITEMS } from "../data/projectData";

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div style={COLOR_CSS_VARIABLES} className="mx-auto space-y-4">
      {FAQ_ITEMS.map((item) => {
        const isOpen = openId === item.id;
        return (
          // Alterado para fundo branco sólido, destacando os cards do fundo geral da página
          <div
            key={item.id}
            className="overflow-hidden rounded-xl border-2 border-slate-200 bg-white shadow-xs transition-all duration-300 hover:border-(--accent-color)"
          >
            <button
              onClick={() => toggleFaq(item.id)}
              // Alterado o texto para o PrimaryColor e o anel de foco para o AccentColor
              className="flex w-full items-center justify-between p-5 text-left font-bold text-(--primary-color) transition hover:cursor-pointer focus:ring-2 focus:ring-(--accent-color)/50 focus:outline-none"
            >
              <div className="flex items-center gap-3">
                {/* Ícone de ajuda adaptado para a cor primária ou de destaque */}
                <HelpCircle
                  size={18}
                  className="shrink-0 text-(--accent-color)"
                />
                <span className="text-sm leading-snug md:text-base">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-(--accent-color)" : ""}`}
              />
            </button>

            {/* Animação CSS nativa via max-height/grid layout para fluidez de abertura */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                {/* Resposta com fundo cinza/bege bem suave (bg-slate-50) e texto escuro legível */}
                <div className="border-t border-slate-100 bg-white p-5 pt-3 text-sm leading-relaxed text-slate-700 md:text-base">
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
