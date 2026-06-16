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
import { COLOR_CSS_VARIABLES } from "./constants/colors"; // Importação das cores estruturadas
import { NEXT_WORKSHOP } from "./data/projectData";

import Logo from "./assets/logo-texto-horizontal-600x200.png";
import { InstitutionalNotice } from "./components/InstitutionalNotice";

function App() {
  const secaoSobreRef = useRef<HTMLDivElement>(null);
  const secaoTrilhoRef = useRef<HTMLDivElement>(null);
  const secaoProximaRef = useRef<HTMLDivElement>(null);
  const secaoInformacoesRef = useRef<HTMLDivElement>(null);
  const secaoFaqRef = useRef<HTMLDivElement>(null);
  const finalDate = new Date(NEXT_WORKSHOP.finalDatetime); // Converte a string ISO de volta para objeto Date
  const now = new Date();
  const nextWorkshopHasPassed = now > finalDate;

  const scrollToSection = (ref?: React.RefObject<HTMLDivElement | null>) => {
    if (!ref) return;
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={COLOR_CSS_VARIABLES}
      className="min-h-screen bg-(--bg-color) font-sans text-slate-800 antialiased selection:bg-(--accent-color) selection:text-(--primary-color)"
    >
      <InstitutionalNotice />
      {/* HEADER / HERO - Fundo branco/bege translúcido com borda no tom primário */}
      <header className="sticky top-0 z-50 border-b border-(--primary-color)/20 bg-(--bg-color)/80 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-4 sm:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <div className="md:116 relative w-96 max-w-full">
              <img src={Logo} alt="Logo" className="h-16" />
              <p className="absolute -bottom-1.5 left-14 font-mono text-xs text-slate-500">
                Fundamentos de Python e Análise de Dados
              </p>
            </div>
          </div>
          <nav className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-(--primary-color) md:justify-end md:gap-6 md:text-base">
            <button
              onClick={() => scrollToSection(secaoSobreRef)}
              className="rounded-lg border-2 border-transparent p-2 transition hover:cursor-pointer hover:border-(--accent-color) hover:text-(--accent-color)"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection(secaoTrilhoRef)}
              className="rounded-lg border-2 border-transparent p-2 transition hover:cursor-pointer hover:border-(--accent-color) hover:text-(--accent-color)"
            >
              Oficinas
            </button>
            <button
              onClick={() => scrollToSection(secaoProximaRef)}
              className="rounded-lg border-2 border-(--accent-color)/30 bg-(--accent-color)/10 p-2 px-3 py-1 font-bold text-(--primary-color) transition-all hover:cursor-pointer hover:border-(--accent-color) hover:text-(--accent-color)"
            >
              Próxima Oficina
            </button>
            <button
              onClick={() => scrollToSection(secaoFaqRef)}
              className="rounded-lg border-2 border-transparent p-2 transition hover:cursor-pointer hover:border-(--accent-color) hover:text-(--accent-color)"
            >
              FAQ
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-12 px-4 py-12">
        {/* SEÇÃO 1: APRESENTAÇÃO & OBJETIVOS */}
        <section
          id="sobre"
          ref={secaoSobreRef}
          className="grid scroll-mt-38 items-center gap-8 md:scroll-mt-26 md:grid-cols-12"
        >
          <div className="space-y-6 md:col-span-7">
            {!nextWorkshopHasPassed && (
              <button
                className="group inline-flex items-center gap-2 rounded-full border border-(--primary-color)/20 bg-white px-3 py-1 text-slate-600 shadow-xs transition-all duration-500 hover:cursor-pointer hover:bg-(--accent-color)"
                onClick={() => scrollToSection(secaoProximaRef)}
              >
                <span className="flex h-4 min-h-4 w-4 min-w-4 animate-pulse rounded-full bg-(--secondary-color) group-hover:bg-(--secondary-color-light) md:h-3 md:min-h-3 md:w-3 md:min-w-3"></span>
                <span className="text-sm font-medium">
                  Inscrições Abertas p/ {`${NEXT_WORKSHOP.title} até `}
                </span>
                <span className="text-sm font-bold text-(--accent-color) group-hover:text-black">{`${NEXT_WORKSHOP.details?.registrationDeadline}`}</span>
              </button>
            )}
            <h2 className="text-3xl leading-none font-extrabold tracking-tight text-(--primary-color) md:text-5xl">
              Aprenda a programar com{" "}
              <span className="bg-linear-to-r from-(--secondary-color-light) to-(--secondary-color) bg-clip-text text-transparent">
                python e análise de dados
              </span>
            </h2>
            <p className="text-justify text-base leading-relaxed text-slate-700 md:text-lg">
              O objetivo do projeto é realizar oficinas com conceitos
              fundamentais de programação e introdução à análise de dados
              utilizando a linguagem Python e bibliotecas de análise de dados.
            </p>
            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg border border-slate-200 bg-white p-1.5 text-(--accent-color) shadow-xs">
                  <GraduationCap size={16} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-(--primary-color)">
                    Oficinas
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Participe de oficinas práticas e desafios práticos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg border border-slate-200 bg-white p-1.5 text-(--accent-color) shadow-xs">
                  <BookOpenText size={16} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-(--primary-color)">
                    Material de estudo
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Resumos para cada oficina com exemplos práticos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 rounded-lg border border-slate-200 bg-white p-1.5 text-(--accent-color) shadow-xs">
                  <ClipboardCheck size={16} className="stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-(--primary-color)">
                    Atividades interativas
                  </h4>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Sistema com atividades interativas disponível para os
                    participantes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card de Público-Alvo: Fundo branco para contrastar com o Bege geral da página */}
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-md md:col-span-5">
            <h3 className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider text-(--primary-color) uppercase">
              Público-Alvo
            </h3>

            <ul className="space-y-3.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">
                  <CheckCircle size={16} className="text-(--secondary-color)" />
                </span>
                <div>
                  <strong className="block font-semibold text-slate-900">
                    Estudantes de todos os cursos do IF Sudeste MG Santos Dumont
                  </strong>
                  <span className="text-xs text-slate-500">
                    Aberto a qualquer aluno que queira conhecer programação em
                    Python.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">
                  <CheckCircle size={16} className="text-(--secondary-color)" />
                </span>
                <div>
                  <strong className="block font-semibold text-slate-900">
                    Prioridade para alguns cursos:
                  </strong>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="rounded border border-slate-200 bg-(--bg-color) px-1.5 py-0.5 text-xs font-medium text-(--primary-color)">
                      Eng. Ferroviária e Metroviária
                    </span>
                    <span className="rounded border border-slate-200 bg-(--bg-color) px-1.5 py-0.5 text-xs font-medium text-(--primary-color)">
                      Téc. em Automação Industrial
                    </span>
                    <span className="rounded border border-slate-200 bg-(--bg-color) px-1.5 py-0.5 text-xs font-medium text-(--primary-color)">
                      Téc. em Eletrotécnica
                    </span>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">
                  <CheckCircle size={16} className="text-(--secondary-color)" />
                </span>
                <div>
                  <strong className="block font-semibold text-slate-900">
                    Interessados em programação em Python
                  </strong>
                  <span className="text-xs text-slate-500">
                    Desde quem nunca escreveu uma linha de código até quem quer
                    dominar análise de dados.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">
                  <CheckCircle size={16} className="text-(--secondary-color)" />
                </span>
                <div>
                  <strong className="block font-semibold text-slate-900">
                    Futuros Pesquisadores (Bônus)
                  </strong>
                  <span className="text-xs text-slate-500">
                    Quem deseja utilizar programação para analisar dados
                    acadêmicos.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* SEÇÃO 2: O TRILHO FERROVIÁRIO DAS OFICINAS - Caixa com tom suave de fundo */}
        <section
          id="trilho"
          ref={secaoTrilhoRef}
          className="scroll-mt-38 rounded-3xl border border-slate-200 bg-white/60 p-6 shadow-xs md:scroll-mt-26 md:p-10"
        >
          <div className="mx-auto mb-10 max-w-xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-(--primary-color) md:text-3xl">
              O Trilho de Aprendizado
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              As oficinas são estritamente{" "}
              <span className="font-bold text-(--secondary-color)">
                incrementais
              </span>
              . Acompanhe abaixo o progresso dos módulos ao longo do ano
              ferroviário.
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Você pode participar apenas das oficinas que tiver interesse.
            </p>
          </div>

          <RailwayTimeline />
        </section>

        {/* SEÇÃO 3: PRÓXIMA OFICINA EM DESTAQUE */}
        <section
          id="proxima"
          ref={secaoProximaRef}
          className="scroll-mt-38 md:scroll-mt-26"
        >
          <div className="overflow-hidden rounded-3xl border-2 border-(--accent-color) bg-white/60 shadow-xl">
            {/* Barra de título em tom AccentColor (#e6ae1b) e texto em tom escuro primário */}
            <div className="flex flex-wrap items-center justify-between gap-2 bg-(--accent-color) px-6 py-3">
              <div className="flex items-center gap-2 text-sm font-black tracking-wide text-(--primary-color) uppercase">
                <Calendar size={18} className="stroke-[2.5]" />
                {!nextWorkshopHasPassed
                  ? "Inscrição Ativa"
                  : "Inscrição Encerrada"}{" "}
                <CheckCircle
                  size={16}
                  className="shrink-0 text-(--secondary-color)"
                />{" "}
                {!nextWorkshopHasPassed
                  ? "Próxima Parada"
                  : "Aguarde o próximo módulo"}
              </div>
              <span className="rounded bg-(--primary-color) px-2 py-0.5 font-mono text-xs font-bold text-white">
                {NEXT_WORKSHOP.date}
              </span>
            </div>

            <div className="p-6 md:p-10">
              <div className="mb-6 grid gap-8 md:grid-cols-12">
                <div className="space-y-4 md:col-span-7">
                  <div>
                    <h3 className="text-xl font-black text-(--primary-color) md:text-3xl">
                      {NEXT_WORKSHOP.title}
                    </h3>
                    <p className="mt-2 text-justify text-sm leading-relaxed text-slate-700 md:text-base">
                      {NEXT_WORKSHOP.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-6 rounded-2xl border border-slate-200 bg-(--bg-color)/40 p-6 md:col-span-5">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-800">
                      <Clock
                        size={20}
                        className="shrink-0 text-(--primary-color)"
                      />
                      <div>
                        <p className="font-mono text-xs text-slate-500 uppercase">
                          Duração Estimada
                        </p>
                        <p className="text-sm font-bold text-(--primary-color)">
                          {NEXT_WORKSHOP.details?.duration}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-slate-800">
                      <Calendar
                        size={20}
                        className="mt-0.5 shrink-0 text-(--primary-color)"
                      />
                      <div className="w-full">
                        <p className="mb-1 font-mono text-xs text-slate-500 uppercase">
                          Dias e Horários das Oficinas: escolha um dia
                        </p>
                        <div className="space-y-1">
                          {NEXT_WORKSHOP.details?.schedule.map(
                            (timeLine, idx) => (
                              <div
                                key={idx}
                                className="rounded border border-slate-200 bg-white px-3 py-1.5 font-mono text-xs font-medium text-(--primary-color)"
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
                <h4 className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-wider text-(--primary-color) uppercase">
                  <FileCode2 size={14} className="text-(--accent-color)" />{" "}
                  Conteúdo Programático do Módulo
                </h4>
                <ul className="grid grid-cols-1 gap-2 text-sm text-slate-700 md:grid-cols-2">
                  {NEXT_WORKSHOP.details?.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-2"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-(--accent-color)/20 font-mono text-xs font-bold text-(--primary-color)">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão de chamada para ação com gradiente focado no PrimaryColor e AccentColor */}
              <div className="pt-6">
                {!nextWorkshopHasPassed ? (
                  <a
                    href={NEXT_WORKSHOP.details?.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--accent-color) to-(--accent-color-light) px-4 py-3.5 text-center text-sm font-extrabold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 active:translate-y-0"
                  >
                    Realizar minha inscrição na{" "}
                    {`${NEXT_WORKSHOP.title.split(":")[0]}`} (Google Forms)
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="flex w-full transform items-center justify-center gap-2 rounded-xl bg-linear-to-r from-(--accent-color) to-(--accent-color-light) px-4 py-3.5 text-center text-sm font-extrabold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:opacity-95 active:translate-y-0">
                    Inscrições encerradas, aguarde o próximo módulo
                  </span>
                )}
                <p className="mt-2 text-center text-[11px] font-medium text-slate-500">
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
          className="grid gap-6 sm:grid-cols-3"
        >
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-xs">
            <BookOpen size={24} className="text-(--accent-color)" />
            <h3 className="text-base font-bold text-(--primary-color)">
              Material de Apoio
            </h3>
            <p className="text-justify text-xs leading-relaxed text-slate-600">
              Resumos teóricos e atividades contextualizadas serão entregues
              após cada módulo, integrando testes de mesa no nosso ecossistema
              de autoavaliação.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-xs">
            <Layers size={24} className="text-(--accent-color)" />
            <h3 className="text-base font-bold text-(--primary-color)">
              Fluxo Continuado
            </h3>
            <p className="text-justify text-xs leading-relaxed text-slate-600">
              Para reter a vaga na oficina seguinte, basta preencher o
              formulário eletrônico avaliativo enviado ao término de cada etapa
              concluída.
            </p>
          </div>
          <div className="space-y-2 rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-xs">
            <Award size={24} className="text-(--accent-color)" />
            <h3 className="text-base font-bold text-(--primary-color)">
              Certificação
            </h3>
            <p className="text-justify text-xs leading-relaxed text-slate-600">
              Todos os participantes validados receberão certificado emitido
              pela IF Sudeste MG Campus para cômputo de horas complementares.
            </p>
          </div>
        </section>

        {/* SEÇÃO 5: PERGUNTAS FREQUENTES (FAQ) */}
        <section
          id="faq"
          ref={secaoFaqRef}
          className="scroll-mt-38 space-y-8 md:scroll-mt-26"
        >
          <div className="mx-auto max-w-md text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-(--primary-color) md:text-3xl">
              Dúvidas Frequentes
            </h2>
            <p className="mt-1 text-xs text-slate-600 md:text-sm">
              Ficou com alguma dúvida sobre o funcionamento do projeto de
              ensino? Veja os principais tópicos regulamentados.
            </p>
          </div>

          <FaqSection />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-(--secondary-color-light) py-8 text-center text-xs text-white shadow-inner">
        <p className="font-medium text-white">
          © 2026 Projeto Python nos Trilhos. Desenvolvido com React + TypeScript
          + Tailwind CSS.
        </p>
        <p className="mx-auto mt-1 max-w-4xl px-4 leading-relaxed">
          Projeto de ensino aprovado no EDITAL Nº 08, DE 26 DE MARÇO DE 2026 -
          SELEÇÃO DE PROJETOS DE ENSINO COM APOIO FINANCEIRO INSTITUCIONAL DA
          PRÓ-REITORIA DE ENSINO (PROEN)
        </p>
      </footer>
    </div>
  );
}

export default App;
