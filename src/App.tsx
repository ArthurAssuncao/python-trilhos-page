// src/App.tsx
import {
  Award,
  BookOpen,
  BookOpenText,
  Calendar,
  CheckCircle,
  ClipboardCheck,
  Clock,
  ExternalLink,
  FileCode2,
  GraduationCap,
  Layers,
} from "lucide-react";
import { useRef } from "react";
import { FaqSection } from "./components/FaqSection";
import { RailwayTimeline } from "./components/RailwayTimeline";
import { NEXT_WORKSHOP } from "./data/projectData";

import Logo from "./assets/logo-texto-horizontal-600x200.png";

function App() {
  const secaoSobreRef = useRef<HTMLDivElement>(null);
  const secaoTrilhoRef = useRef<HTMLDivElement>(null);
  const secaoProximaRef = useRef<HTMLDivElement>(null);
  const secaoInformacoesRef = useRef<HTMLDivElement>(null);
  const secaoFaqRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref?: React.RefObject<HTMLDivElement | null>) => {
    if (!ref) return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased font-sans selection:bg-amber-500 selection:text-slate-900">
      {/* HEADER / HERO */}
      <header className="sticky border-b border-slate-800 bg-slate-900/40 backdrop-blur-md top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-120">
              <img src={Logo} alt="Logo" className="h-16" />
              <p className="text-xs text-slate-400 font-mono absolute bottom-[-6px] left-14 ">
                Fundamentos de Python e Análise de Dados para Engenharia
              </p>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm font-semibold text-slate-300">
            <button
              onClick={() => scrollToSection(secaoSobreRef)}
              className="hover:text-amber-400 transition hover:cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection(secaoTrilhoRef)}
              className="hover:text-amber-400 transition hover:cursor-pointer"
            >
              Oficinas
            </button>
            <button
              onClick={() => scrollToSection(secaoProximaRef)}
              className="hover:text-amber-400 transition-colors px-3 py-1 bg-amber-500/10 text-amber-400 rounded-md border border-amber-500/20 hover:cursor-pointer"
            >
              Próxima Oficina
            </button>
            <button
              onClick={() => scrollToSection(secaoFaqRef)}
              className="hover:text-amber-400 transition hover:cursor-pointer"
            >
              FAQ
            </button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        {/* SEÇÃO 1: APRESENTAÇÃO & OBJETIVOS */}
        <section
          id="sobre"
          ref={secaoSobreRef}
          className="grid md:grid-cols-12 gap-8 items-center scroll-mt-24"
        >
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text text-slate-400">
              <span className="flex  h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm">
                Inscrições Abertas p/ {`${NEXT_WORKSHOP.title} até `}
              </span>
              <span className="text-sm font-bold text-yellow-200">{`${NEXT_WORKSHOP.details?.registrationDeadline}`}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100 leading-none">
              Aprenda a programar com{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-orange-400">
                python e análise de dados
              </span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              O objetivo geral do projeto é realizar oficinas com conceitos
              fundamentais de programação e introdução à análise de dados
              utilizando a linguagem Python e bibliotecas de análise de dados.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="flex gap-3 items-start">
                <div className="mt-1 p-1 bg-slate-800 rounded text-amber-400">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Oficinas</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Participe de oficinas práticas e desafios práticos.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="mt-1 p-1 bg-slate-800 rounded text-amber-400">
                  <BookOpenText size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Material de estudo</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Resumos para cada oficina com exemplos práticos
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="mt-1 p-1 bg-slate-800 rounded text-amber-400">
                  <ClipboardCheck size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Atividades interativas</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Sistema com atividades interativas disponível para os
                    participantes
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 bg-slate-900/60 border border-slate-800 p-6 rounded-2xl shadow-xl space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 flex items-center gap-2">
              Público-Alvo
            </h3>

            <ul className="space-y-3.5 text-sm text-slate-300">
              <li className="flex gap-2.5 items-start">
                <span className="text-amber-400 mt-0.5 text-base leading-none">
                  <CheckCircle
                    size={16}
                    className="text-emerald-400 mt-0.5 shrink-0"
                  />
                </span>
                <div>
                  <strong className="text-slate-100 block font-semibold">
                    Estudantes de todos os cursos do IF Sudeste MG Santos Dumont
                  </strong>
                  <span className="text-xs text-slate-400">
                    Aberto a qualquer aluno que queira conhecer programação em
                    Python.
                  </span>
                </div>
              </li>

              <li className="flex gap-2.5 items-start">
                <span className="text-amber-400 mt-0.5 text-base leading-none">
                  <CheckCircle
                    size={16}
                    className="text-emerald-400 mt-0.5 shrink-0"
                  />
                </span>
                <div>
                  <strong className="text-slate-100 block font-semibold">
                    Prioridade para alguns cursos:
                  </strong>
                  <span className="text-xs text-slate-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 inline-block mt-1 mr-1">
                    Eng. Ferroviária e Metroviária
                  </span>
                  <span className="text-xs text-slate-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 inline-block mt-1 mr-1">
                    Téc. em Automação Industrial
                  </span>
                  <span className="text-xs text-slate-300 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 inline-block mt-1">
                    Téc. em Eletrotécnica
                  </span>
                </div>
              </li>

              <li className="flex gap-2.5 items-start">
                <span className="text-amber-400 mt-0.5 text-base leading-none">
                  <CheckCircle
                    size={16}
                    className="text-emerald-400 mt-0.5 shrink-0"
                  />
                </span>
                <div>
                  <strong className="text-slate-100 block font-semibold">
                    Interessados em programação em Python
                  </strong>
                  <span className="text-xs text-slate-400">
                    Desde quem nunca escreveu uma linha de código até quem quer
                    dominar análise de dados.
                  </span>
                </div>
              </li>

              <li className="flex gap-2.5 items-start">
                <span className="text-amber-400 mt-0.5 text-base leading-none">
                  <CheckCircle
                    size={16}
                    className="text-emerald-400 mt-0.5 shrink-0"
                  />
                </span>
                <div>
                  <strong className="text-slate-100 block font-semibold">
                    Futuros Pesquisadores (Bônus)
                  </strong>
                  <span className="text-xs text-slate-400">
                    Quem deseja utilizar programação para analisar dados
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* SEÇÃO 2: O TRILHO FERROVIÁRIO DAS OFICINAS */}
        <section
          id="trilho"
          ref={secaoTrilhoRef}
          className="bg-slate-900/30 border border-slate-900 rounded-3xl p-6 md:p-10 scroll-mt-24"
        >
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              O Trilho de Aprendizado
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              As oficinas são estritamente{" "}
              <span className="text-amber-400 font-semibold">incrementais</span>
              . Acompanhe abaixo o progresso dos módulos ao longo do ano
              ferroviário.
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Você pode participar apenas das oficinas que tiver interesse.
            </p>
          </div>

          <RailwayTimeline />
        </section>

        {/* SEÇÃO 3: PRÓXIMA OFICINA EM DESTAQUE */}
        <section id="proxima" ref={secaoProximaRef} className="scroll-mt-24">
          <div className="bg-linear-to-b from-slate-900 to-slate-950 border-2 border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/5">
            <div className="bg-amber-500 px-6 py-3 flex flex-wrap justify-between items-center gap-2">
              <div className="flex items-center gap-2 text-slate-950 font-bold text-sm tracking-wide uppercase">
                <Calendar size={18} className="stroke-[2.5]" />
                Inscrição Ativa{" "}
                <CheckCircle
                  size={16}
                  className="text-emerald-400 mt-0.5 shrink-0"
                />{" "}
                Próxima Parada
              </div>
              <span className="text-xs font-mono bg-slate-950 text-amber-400 px-2 py-0.5 rounded font-bold">
                {NEXT_WORKSHOP.date}
              </span>
            </div>
            <div className="p-6 md:p-10">
              <div className=" grid md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xl md:text-3xl font-black text-slate-100">
                      {NEXT_WORKSHOP.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-300 mt-2 leading-relaxed">
                      {NEXT_WORKSHOP.description}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-5 flex flex-col justify-between bg-slate-900/40 border border-slate-800 p-6 rounded-2xl space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Clock size={20} className="text-amber-400 shrink-0" />
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-mono">
                          Duração Estimada
                        </p>
                        <p className="text-sm font-bold">
                          {NEXT_WORKSHOP.details?.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-slate-300">
                      <Calendar
                        size={20}
                        className="text-amber-400 shrink-0 mt-0.5"
                      />
                      <div className="w-full">
                        <p className="text-xs text-slate-400 uppercase font-mono mb-1">
                          Dias e Horários das Oficinas: escolha um dia
                        </p>
                        <div className="space-y-1">
                          {NEXT_WORKSHOP.details?.schedule.map(
                            (timeLine, idx) => (
                              <div
                                key={idx}
                                className="bg-slate-950/60 px-3 py-1.5 rounded text-xs font-mono border border-slate-800/80"
                              >
                                {timeLine}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                  <FileCode2 size={14} /> Conteúdo Programático do Módulo
                </h4>
                <ul className="grid md:grid-cols-2 grid-cols-1 gap-2 text-sm text-slate-300">
                  {NEXT_WORKSHOP.details?.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-center bg-slate-900/50 p-2 rounded-lg border border-slate-800/60"
                    >
                      <span className="text-xs font-mono text-amber-500 bg-amber-500/10 w-5 h-5 flex items-center justify-center rounded">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-2">
                <a
                  href={NEXT_WORKSHOP.details?.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-sm font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  Garantir Minha Vaga (Link Externo)
                  <ExternalLink size={16} />
                </a>
                <p className="text-[11px] text-slate-400 text-center mt-2 font-medium">
                  Vagas estritamente limitadas a 25 participantes devido à
                  capacidade do laboratório.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 4: PROCESSO METODOLÓGICO / INFORMAÇÕES EXTRAS */}
        <section
          id="informacoes"
          ref={secaoInformacoesRef}
          className="grid sm:grid-cols-3 gap-6"
        >
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-2">
            <BookOpen size={24} className="text-amber-400" />
            <h3 className="font-bold text-base">Material de Apoio</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Resumos teóricos e atividades contextualizadas serão entregues
              após cada módulo, integrando testes de mesa no nosso ecossistema
              de autoavaliação.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-2">
            <Layers size={24} className="text-amber-400" />
            <h3 className="font-bold text-base">Fluxo Continuado</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Para reter a vaga na oficina seguinte, basta preencher o
              formulário eletrônico avaliativo enviado ao término de cada etapa
              concluída.
            </p>
          </div>
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-2">
            <Award size={24} className="text-amber-400" />
            <h3 className="font-bold text-base">Certificação</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Todos os participantes validados receberão certificado emitido
              pela IF Sudeste MG Campus para cômputo de horas.
            </p>
          </div>
        </section>

        {/* SEÇÃO 5: PERGUNTAS FREQUENTES (FAQ) */}
        <section id="faq" ref={secaoFaqRef} className="space-y-8 scroll-mt-24">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Dúvidas Frequentes
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Ficou com alguma dúvida sobre o funcionamento do projeto de
              ensino? Veja os principais tópicos regulamentados.
            </p>
          </div>

          <FaqSection />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 mt-24 py-8 text-center text-xs text-slate-500">
        <p>
          © 2026 Projeto Python nos Trilhos. Desenvolvido com React + TypeScript
          + Tailwind CSS.
        </p>
        <p className="mt-1">
          Projeto de ensino aprovado no EDITAL Nº 08, DE 26 DE MARÇO DE 2026
          SELEÇÃO DE PROJETOS DE ENSINO COM APOIO FINANCEIRO INSTITUCIONAL
          PRÓ-REITORIA DE ENSINO (PROEN)
        </p>
      </footer>
    </div>
  );
}

export default App;
