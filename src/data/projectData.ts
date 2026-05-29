// src/data/projectData.ts

export interface Workshop {
  id: number;
  title: string;
  description: string;
  date: string;
  status: "completed" | "current" | "upcoming";
  details?: {
    registrationDeadline: string;
    content: string[];
    duration: string;
    schedule: string[]; // Suporta 1 ou mais linhas (ex: 2 dias e 2 horários)
    registrationUrl: string;
  };
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

// Linha do tempo completa (Trilho)
export const ALL_WORKSHOPS: Workshop[] = [
  {
    id: 1,
    title: "Oficina 1: Ecossistema e Sintaxe do Python",
    description:
      "Instalação e configuração de ambientes (VS Code/Spyder), tipos de dados, operações matemáticas e funções de I/O.",
    date: "10 e 12 Junho",
    status: "current",
  },
  {
    id: 2,
    title: "Oficina 2: Estruturas de Decisão",
    description:
      "Lógica condicional (if, elif, else) e operadores lógicos aplicados à tomada de decisão de Engenharia.",
    date: "Julho/Agosto",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Oficina 3: Iteração e Estruturas de Dados",
    description:
      "Fluxos de repetição (while, for) e manipulação estruturada de Listas, Tuplas e Dicionários.",
    date: "Agosto",
    status: "upcoming",
  },
  {
    id: 4,
    title: "Oficina 4: Modularização e Persistência",
    description:
      "Criação de funções customizadas, modularização de escopo e rotinas de leitura/escrita de arquivos locais.",
    date: "Setembro",
    status: "upcoming",
  },
  {
    id: 5,
    title: "Oficina 5: Data Wrangling com Pandas",
    description:
      "Limpeza profunda de dados, tratamento de omissões e agregação estruturada de tabelas de engenharia.",
    date: "Outubro",
    status: "upcoming",
  },
  {
    id: 6,
    title: "Oficina 6: Visualização Científica",
    description:
      "Uso do Matplotlib integrado ao Pandas para geração de gráficos científicos e relatórios analíticos de alta fidelidade.",
    date: "Novembro",
    status: "upcoming",
  },
  {
    id: 7,
    title: "Oficina 7: Projeto Integrador (PBL)",
    description:
      "Desafio prático com bases de dados públicas (ANTT / Censo). Processo completo focado em potencial publicação científica de artigos.",
    date: "Dezembro",
    status: "upcoming",
  },
];

const NEXT_WORKSHOP_SIMPLE = ALL_WORKSHOPS.find((w) => w.id === 1);

export const NEXT_WORKSHOP: Workshop = {
  id: NEXT_WORKSHOP_SIMPLE?.id || 0,
  title: NEXT_WORKSHOP_SIMPLE?.title || "",
  description: NEXT_WORKSHOP_SIMPLE?.description || "",
  date: NEXT_WORKSHOP_SIMPLE?.date || "",
  status: NEXT_WORKSHOP_SIMPLE?.status || "current",
  details: {
    registrationDeadline: "09 de Junho",
    duration: "1h30min totais (repetido em 2 oficinas)",
    schedule: [
      "Quarta-feira (10/06) — 13:00 às 14:30",
      "Sexta-feira (11/06) — 17:00 às 18:30",
    ],
    content: [
      "Instalação e configuração do Python (última versão estável)",
      "Ambientes de desenvolvimento: VS Code (extensões Python) e Spyder",
      "Tipos de dados numéricos: int (inteiros) e float (pontos flutuantes)",
      "Tipos de dados textuais: str (strings)",
      "Operações matemáticas básicas (+, -, *, /, //, %, **)",
      "Entrada de dados com input() e tratamento básico com Conversão entre tipos (int(), float(), str())",
      "Saída formatada com print() utilizando f-strings",
      "Formatação de números (casas decimais, separadores de milhar)",
      "Comentários em códigos",
      "Boas práticas de nomenclatura de variávels: snake_case e camelCase",
      "Criação de código simples e execução pelo terminal",
    ],
    registrationUrl: "https://forms.gle/exemploInscricaoPythonNosTrilhos", // Link externo do formulário
  },
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "O projeto possui algum custo para participação?",
    answer:
      "Não. O Python nos Trilhos é um projeto de ensino extracurricular totalmente gratuito, voltado para capacitação técnica dos discentes.",
  },
  {
    id: 2,
    question: "Como funciona o critério de seleção para as oficinas?",
    answer:
      "As inscrições abrem mensalmente e são limitadas a 25 vagas por turma devido ao espaço físico do laboratório. O critério principal é a ordem de preenchimento do formulário, priorizando alunos dos cursos de Engenharia Ferroviária e Metroviária, Técnico em Automação Industrial e Técnico em Eletrotécnica. Mas todos os discentes de todos os cursos são bem-vindos.",
  },
  {
    id: 3,
    question: "Haverá emissão de certificados?",
    answer:
      "Sim! A certificação será emitida como participação em oficina, servindo para computar horas de atividades complementares/extracurriculares.",
  },
  {
    id: 4,
    question: "Não sei nada de programação. Posso me inscrever?",
    answer:
      "Com certeza! O ciclo foi planejado de forma incremental. Começamos na Oficina 1 desde a base conceitual e sintaxe elementar, avançando passo a passo até análises robustas em Pandas na reta final.",
  },
  {
    id: 5,
    question: "Como funciona a prioridade para a oficina seguinte?",
    answer:
      "Os participantes de uma oficina têm vaga prioritária garantida no módulo subsequente, desde que preencham o formulário avaliativo e de feedback da etapa concluída, garantindo a continuidade do fluxo incremental.",
  },
  {
    id: 6,
    question: "Qual o nível de dedicação extra exigido pelas oficinas?",
    answer:
      "As oficinas acontecem presencialmente em intervalos aproximados de um mês para não sobrecarregar sua grade curricular regular. Contudo, disponibilizamos desafios práticos de autoavaliação no nosso ambiente para estudo autônomo, estimulando sua autonomia técnica.",
  },
];
