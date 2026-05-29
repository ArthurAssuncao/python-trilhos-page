// src/components/RailwayTimeline.tsx
import { CheckCircle2, Circle, Train, TrainTrack } from "lucide-react";
import React from "react";
import { ALL_WORKSHOPS, type Workshop } from "../data/projectData";

export const RailwayTimeline: React.FC = () => {
  return (
    <div className="w-full overflow-x-auto py-12 px-4 scrollbar-thin scrollbar-thumb-slate-700">
      <div className="min-w-250 md:min-w-0 md:w-full flex flex-col md:flex-row justify-between items-start relative native-railway-path">
        {/* Linha de Trilho Horizontal de Fundo (Apenas Desktop) */}
        <div className="hidden md:block absolute top-2 left-4 right-4 h-2  rounded-full z-0">
          {/* Dormentes do Trilho */}
          {/* <div
            className="absolute inset-0 bg-repeat-x pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to right, #475569 2px, transparent 2px)",
              backgroundSize: "16px 100%",
            }}
          ></div> */}
          <div className="flex flex-row overflow-hidden items-center justify-center ">
            {Array.from({ length: 41 }).map((_, index) => (
              <TrainTrack
                key={index}
                size={36}
                className={`text-amber-400 rotate-45 mx-[-1.5px]`}
              />
            ))}
          </div>
        </div>

        {/* Linha de Trilho Vertical de Fundo (Apenas Mobile/Tablet Pequeno via CSS custom ou Flow) */}
        {/* Usaremos fluxo de blocos nativos mobile com borda esquerda simulando o trilho vertical */}
        <div className="md:hidden absolute top-0 bottom-0 left-5.75 w-6 bg-slate-700 z-0">
          {/* <div
            className="absolute inset-0 bg-repeat-y pointer-events-none opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, #475569 2px, transparent 2px)",
              backgroundSize: "100% 16px",
            }}
          ></div> */}
          <div className="flex flex-col overflow-hidden items-center justify-center ">
            {Array.from({ length: 25 }).map((_, index) => (
              <TrainTrack
                key={index}
                size={36}
                className={`text-amber-400 rotate-135 my-[-1.5px]`}
              />
            ))}
          </div>
        </div>

        {ALL_WORKSHOPS.map((workshop: Workshop) => {
          const isCompleted = workshop.status === "completed";
          const isCurrent = workshop.status === "current";

          return (
            <div
              key={workshop.id}
              className={`flex md:flex-col items-start md:items-center relative z-10 w-full md:w-1/7 mb-12 md:mb-0 text-left md:text-center px-2 transition-all duration-300`}
            >
              {/* Indicador / Nó Ferroviário (Trem ou Círculo) */}
              <div className="flex items-center justify-center min-w-13.5 min-h-13.5 md:mb-4 bg-slate-900 rounded-full border-2 border-slate-700 shadow-xl z-20 mr-4 md:mr-0">
                {isCurrent ? (
                  <div className="p-2 bg-amber-500 rounded-full animate-bounce text-slate-900 shadow-lg shadow-amber-500/30">
                    <Train size={24} />
                  </div>
                ) : isCompleted ? (
                  <CheckCircle2
                    size={24}
                    className="text-emerald-500 bg-slate-900 rounded-full"
                  />
                ) : (
                  <Circle size={16} className="text-slate-500 fill-slate-800" />
                )}
              </div>

              {/* Informações da Oficina */}
              <div className="flex flex-col md:items-center">
                <span
                  className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1 ${
                    isCurrent
                      ? "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      : isCompleted
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {workshop.date}
                </span>

                <h4
                  className={`text-sm font-bold tracking-tight ${isCurrent ? "text-amber-400 font-extrabold text-base" : "text-slate-100"}`}
                >
                  {workshop.title.split(":")[0]}
                </h4>

                <p
                  className="text-xs font-medium text-slate-300 mt-1  max-w-45 md:max-w-none"
                  lang="pt-br"
                  style={{ hyphens: "auto", wordBreak: "break-word" }}
                >
                  {workshop.title.split(":")[1] || workshop.title}
                </p>

                <p
                  className="hidden md:block text-[11px] text-slate-400 mt-2 px-1 max-w-40 leading-relaxed text-justify "
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
