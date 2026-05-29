import { ChevronDown, ChevronUp, ExternalLink, Info } from "lucide-react";
import { useState } from "react";

export const InstitutionalNotice = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      className={`w-full border-b border-amber-200 bg-amber-50 transition-all duration-300 ease-in-out dark:border-amber-900 dark:bg-amber-950/20 ${
        isExpanded ? "py-6" : "py-2"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Barra Curta / Header do Componente */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-amber-800 dark:text-amber-200">
            <Info size={16} className="shrink-0" />
            <span className="hidden sm:inline">
              Este é um domínio independente para projetos acadêmicos.
            </span>
            <span className="sm:hidden">Domínio acadêmico independente.</span>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-bold tracking-wider text-amber-900 uppercase transition-all hover:cursor-pointer hover:underline dark:text-amber-100"
          >
            {isExpanded ? (
              <>
                Ocultar <ChevronUp size={14} />
              </>
            ) : (
              <>
                Saiba mais <ChevronDown size={14} />
              </>
            )}
          </button>
        </div>

        {/* Conteúdo Expandido */}
        {isExpanded && (
          <div className="animate-in fade-in slide-in-from-top-2 mt-4 duration-300">
            <div className="prose prose-sm prose-amber dark:prose-invert max-w-none">
              <h4 className="mb-2 font-bold text-amber-900 dark:text-amber-100">
                Sobre este domínio (ifsudestemg.dev)
              </h4>
              <p className="leading-relaxed text-amber-800/90 dark:text-amber-200/80">
                Este portal é uma iniciativa acadêmica independente destinada à
                hospedagem e divulgação de projetos de{" "}
                <strong>ensino, pesquisa e extensão</strong> desenvolvidos e
                mantidos por alguns servidores do IF Sudeste MG.
              </p>
              <p className="mt-2 leading-relaxed text-amber-800/90 dark:text-amber-200/80">
                Ressaltamos que, embora o conteúdo aqui presente seja de caráter
                técnico-científico e vinculado às atividades docentes,{" "}
                <strong>
                  este domínio não é um canal oficial da instituição{" "}
                </strong>
                e não possui vínculo com a administração central ou órgãos de TI
                do IF Sudeste MG.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-amber-200 pt-4 dark:border-amber-900">
                <a
                  href="https://www.ifsudestemg.edu.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 font-bold text-amber-900 transition-colors hover:cursor-pointer hover:text-amber-700 dark:text-amber-100"
                >
                  Acessar Portal Oficial do IF Sudeste MG (edu.br){" "}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
