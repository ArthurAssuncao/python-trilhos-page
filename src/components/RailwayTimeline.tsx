// src/components/RailwayTimeline.tsx
import { CheckCircle2, Circle, Train, TrainTrack } from "lucide-react";
import React from "react";
import { COLOR_CSS_VARIABLES } from "../constants/colors";
import { ALL_WORKSHOPS, type Workshop } from "../data/projectData";

export const RailwayTimeline: React.FC = () => {
  return (
    <div style={COLOR_CSS_VARIABLES} className="w-full px-4 py-2">
      <div className="native-railway-path relative flex min-w-auto flex-col items-start justify-between md:w-full md:min-w-0 md:flex-row">
        {/* Linha de Trilho Horizontal de Fundo (Apenas Desktop) */}
        <div className="absolute top-2 right-4 left-4 z-0 hidden h-2 rounded-full md:block">
          <div className="flex flex-row items-center justify-center overflow-hidden">
            {Array.from({ length: 41 }).map((_, index) => (
              <TrainTrack
                key={index}
                size={36}
                className="mx-[-1.5px] rotate-45 text-(--accent-color)"
              />
            ))}
          </div>
        </div>

        {/* Linha de Trilho Vertical de Fundo (Apenas Mobile/Tablet Pequeno) */}
        <div className="absolute top-0 bottom-0 left-5.75 z-0 w-6 bg-transparent md:hidden">
          <div className="flex flex-col items-center justify-center overflow-hidden">
            {Array.from({ length: 25 }).map((_, index) => (
              <TrainTrack
                key={index}
                size={34}
                className="my-[-1.5px] rotate-135 text-(--accent-color)"
              />
            ))}
          </div>
        </div>

        {ALL_WORKSHOPS.map((workshop: Workshop) => {
          const finalDate = new Date(workshop.finalDatetime); // Converte a string ISO de volta para objeto Date
          const now = new Date();
          const isCompleted =
            workshop.status === "completed" || now > finalDate;
          const isCurrent = workshop.status === "current" && now < finalDate;

          return (
            <div
              key={workshop.id}
              className="relative z-10 mb-12 flex w-auto items-start px-2 text-left transition-all duration-300 md:mb-0 md:w-full md:flex-col md:items-center md:text-center"
            >
              {/* Indicador / Nó Ferroviário (Trem ou Círculo) */}
              <div className="z-20 mr-4 flex min-h-13.5 min-w-13.5 items-center justify-center rounded-full border-2 border-(--primary-color) bg-(--bg-color) shadow-xl md:mr-0 md:mb-4">
                {isCurrent ? (
                  <div className="animate-bounce rounded-full bg-(--accent-color) p-2 text-(--primary-color) shadow-(--accent-color)/30 shadow-lg">
                    <Train size={24} />
                  </div>
                ) : isCompleted ? (
                  <CheckCircle2
                    size={24}
                    className="bg-(--bg-color)-[var(--secondary-color)] rounded-full"
                  />
                ) : (
                  <Circle size={16} className="fill-slate-200 text-slate-400" />
                )}
              </div>

              {/* Informações da Oficina */}
              <div className="flex flex-col md:items-center">
                {/* Tag de Data */}
                <span
                  className={`mb-1 rounded px-2 py-0.5 text-xs font-bold tracking-wider uppercase ${
                    isCurrent
                      ? "border border-(--accent-color)/40 bg-(--accent-color)/20 text-(--primary-color)"
                      : isCompleted
                        ? "bg-(--secondary-color)/10 text-(--secondary-color)"
                        : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {workshop.date}
                </span>

                {/* Título (Oficina X) */}
                <h4
                  className={`text-sm font-bold tracking-tight ${
                    isCurrent
                      ? "text-base font-extrabold text-(--accent-color)"
                      : "text-(--primary-color)"
                  }`}
                >
                  {workshop.title.split(":")[0]}
                </h4>

                {/* Descrição Curta */}
                <p
                  className="mt-1 max-w-45 text-xs font-medium text-slate-800 md:max-w-none"
                  lang="pt-br"
                  style={{ hyphens: "auto", wordBreak: "break-word" }}
                >
                  {workshop.title.split(":")[1] || workshop.title}
                </p>

                {/* Descrição Longa */}
                <p
                  className="mt-2 hidden max-w-40 px-1 text-justify text-[11px] leading-relaxed text-slate-600 md:block"
                  lang="pt-br"
                  style={{ hyphens: "auto", wordBreak: "break-word" }}
                >
                  {workshop.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
