import { createFileRoute } from "@tanstack/react-router";

import {
  Cpu, MessageCircle, ShieldCheck, Star, MapPin, Clock, ArrowRight,
  Laptop, Gamepad2, CircuitBoard, Microscope, Layers, Gauge, Users,
  Building2, BadgeCheck, Mail, Phone,
} from "lucide-react";
import heroImg from "@/assets/hero-bench.jpg";
import labImg from "@/assets/lab-interior.jpg";
import benchImg from "@/assets/bench-detail.jpg";
import pcImg from "@/assets/pc-build.jpg";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";

const WHATSAPP_PHONE = "5542999609468";
const buildWhatsAppUrl = (msg: string) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
const WHATSAPP_URL = buildWhatsAppUrl("Olá, Mendex Tech. Acessei o site institucional e gostaria de falar com a equipe sobre um equipamento.");

function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger className="transition hover:text-brand">Política de Privacidade</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Política de Privacidade</DialogTitle>
          <DialogDescription>Última atualização: {new Date().toLocaleDateString("pt-BR")}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>A Mendex Tech (CNPJ 66.781.369/0001-97), com sede em Ponta Grossa - PR, Brasil, é a controladora dos dados pessoais tratados neste site, em conformidade com a LGPD (Lei nº 13.709/2018) e com os princípios do GDPR (Regulamento UE 2016/679) quando aplicável.</p>
          <p><strong className="text-foreground">Dados coletados:</strong> nome, telefone, e-mail e descrição do equipamento, informados voluntariamente por você ao entrar em contato via WhatsApp ou e-mail.</p>
          <p><strong className="text-foreground">Base legal:</strong> execução de procedimentos pré-contratuais e legítimo interesse de comunicação comercial relacionada ao contato realizado.</p>
          <p><strong className="text-foreground">Finalidade:</strong> uso exclusivo para contato comercial, elaboração de proposta e acompanhamento do atendimento.</p>
          <p><strong className="text-foreground">Compartilhamento:</strong> nenhum dado é vendido ou cedido a terceiros. Utilizamos ferramentas de mensuração de campanhas apenas de forma agregada (cookies podem ser desativados nas configurações do seu navegador).</p>
          <p><strong className="text-foreground">Retenção:</strong> os dados são mantidos pelo tempo necessário ao atendimento e por até 12 meses para fins fiscais e de garantia.</p>
          <p><strong className="text-foreground">Seus direitos:</strong> você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail <a href="mailto:contato@mendextech.com.br" className="text-brand underline">contato@mendextech.com.br</a>.</p>
          <p><strong className="text-foreground">Confidencialidade:</strong> nenhum arquivo do seu equipamento é acessado, copiado ou alterado sem autorização prévia e por escrito.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger className="transition hover:text-brand">Termos de Serviço</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Termos de Serviço</DialogTitle>
          <DialogDescription>Última atualização: {new Date().toLocaleDateString("pt-BR")}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p><strong className="text-foreground">Identificação:</strong> Mendex Tech, CNPJ 66.781.369/0001-97, sediada em Ponta Grossa - PR, Brasil. Contato: <a href="mailto:contato@mendextech.com.br" className="text-brand underline">contato@mendextech.com.br</a> · WhatsApp +55 42 99960-9468.</p>
          <p><strong className="text-foreground">Especialidades:</strong> montagem de computadores sob medida, upgrade de hardware (armazenamento e memória), instalação e substituição de componentes e otimização de desempenho em desktops e notebooks.</p>
          <p><strong className="text-foreground">Proposta comercial:</strong> a avaliação técnica é gratuita e sem compromisso. Nenhum procedimento é executado sem aprovação prévia da proposta pelo cliente.</p>
          <p><strong className="text-foreground">Preços e pagamento:</strong> todos os valores são informados em Reais (BRL) antes da execução. Pagamento via Pix, cartão ou dinheiro, conforme combinado no atendimento.</p>
          <p><strong className="text-foreground">Garantia:</strong> componentes e serviços possuem garantia mínima de 90 dias, conforme o Código de Defesa do Consumidor (Lei nº 8.078/1990).</p>
          <p><strong className="text-foreground">Direito de arrependimento:</strong> em contratações realizadas fora do estabelecimento, o cliente pode desistir em até 7 dias, nos termos do art. 49 do CDC, desde que o serviço ainda não tenha sido executado.</p>
          <p><strong className="text-foreground">Foro:</strong> aplicam-se as leis brasileiras. Fica eleito o foro da comarca de Ponta Grossa - PR para dirimir eventuais controvérsias.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const faqs = [
  { q: "Como solicito um orçamento?", a: "Basta entrar em contato pelo WhatsApp ou e-mail descrevendo o seu equipamento e o objetivo desejado. A nossa equipe retorna com uma proposta detalhada, sem custo e sem compromisso." },
  { q: "A avaliação técnica tem algum custo?", a: "Não. A avaliação do equipamento e a apresentação da proposta são gratuitas. Nenhum procedimento é iniciado sem a sua aprovação prévia." },
  { q: "Onde a Mendex Tech está localizada?", a: "Somos uma empresa local, com laboratório próprio em Ponta Grossa - PR. O atendimento presencial acontece mediante agendamento prévio, garantindo tempo dedicado a cada equipamento." },
  { q: "Qual é a garantia oferecida?", a: "Todos os componentes instalados e serviços executados contam com garantia formal de no mínimo 90 dias, com registro documentado do atendimento." },
  { q: "Qual é o prazo de entrega?", a: "A maior parte dos projetos de upgrade, montagem e otimização é concluída entre 24 e 72 horas, conforme a disponibilidade dos componentes. O prazo é sempre informado na proposta." },
  { q: "Quais equipamentos a empresa atende?", a: "Atuamos com desktops e notebooks de uso pessoal, profissional e corporativo, incluindo estações de trabalho e computadores de alto desempenho." },
  { q: "A Mendex Tech atende empresas?", a: "Sim. Atendemos clientes corporativos de Ponta Grossa e região, com padronização de equipamentos, upgrades planejados e acompanhamento contínuo do parque de máquinas." },
];

const SITE_URL = "https://mendextech.com.br";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mendex Tech",
  description:
    "Empresa especializada em tecnologia para computadores e notebooks em Ponta Grossa - PR. Upgrade de SSD, expansão de memória RAM, montagem de computadores, diagnóstico de hardware e otimização de performance.",
  url: SITE_URL,
  telephone: "+554299609468",
  email: "contato@mendextech.com.br",
  image: `${SITE_URL}/og-image.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ponta Grossa",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  areaServed: { "@type": "City", name: "Ponta Grossa" },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "23:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "18:00" },
  ],
  makesOffer: [
    "Upgrade de SSD", "Expansão de Memória RAM", "Montagem de Computadores",
    "Diagnóstico de Hardware", "Limpeza Técnica", "Substituição de Componentes",
    "Otimização de Performance", "Soluções em Hardware",
  ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mendex Tech | Soluções em Hardware em Ponta Grossa - PR" },
      { name: "description", content: "Empresa especializada em computadores e notebooks em Ponta Grossa. Upgrade de SSD, memória RAM, montagem de computadores e otimização de performance. Laboratório próprio e garantia formal." },
      { name: "keywords", content: "mendex tech, empresa de tecnologia ponta grossa, upgrade ssd ponta grossa, memória ram ponta grossa, montagem de computadores ponta grossa, diagnóstico de hardware, otimização de performance, notebooks ponta grossa, laboratório de hardware paraná" },
      { property: "og:title", content: "Mendex Tech | Soluções em Hardware em Ponta Grossa - PR" },
      { property: "og:description", content: "Tecnologia, desempenho e confiança para computadores e notebooks. Laboratório próprio em Ponta Grossa, equipe especializada e garantia formal." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "Mendex Tech" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Landing,
});


function MendexLogo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand/60 ring-1 ring-brand/50 transition group-hover:ring-brand">
        <Cpu className="h-4.5 w-4.5 text-brand-foreground" />
      </span>
      <span className="font-display text-base font-semibold uppercase tracking-[0.18em]">
        Mendex <span className="text-brand">Tech</span>
      </span>
    </a>
  );
}

function QuietCta({
  label = "Falar com a equipe",
  href = WHATSAPP_URL,
  variant = "solid",
  className = "",
  tag = "whatsapp",
}: { label?: string; href?: string; variant?: "solid" | "outline"; className?: string; tag?: string }) {
  const styles =
    variant === "outline"
      ? "border border-border bg-transparent text-foreground hover:border-brand/50 hover:bg-brand/5"
      : "bg-brand text-brand-foreground hover:bg-brand/90";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={tag}
      className={`group inline-flex h-12 items-center justify-center gap-2 rounded-md px-6 text-sm font-medium tracking-wide transition ${styles} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
    </a>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Mendex Tech no WhatsApp"
      data-cta="whatsapp-float"
      className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-border bg-surface/90 text-brand backdrop-blur transition hover:border-brand/50 hover:text-brand sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" />
    </a>
  );
}

const pillars = [
  { icon: Building2, title: "Empresa local estabelecida", desc: "Sediada em Ponta Grossa - PR, com CNPJ ativo, endereço fixo e atendimento formalizado do primeiro contato à entrega." },
  { icon: Microscope, title: "Laboratório próprio", desc: "Ambiente dedicado, com bancadas antiestáticas, instrumentação adequada e controle de processo em cada etapa." },
  { icon: Users, title: "Equipe especializada", desc: "Profissionais dedicados exclusivamente a hardware, com metodologia padronizada e registro técnico de cada atendimento." },
  { icon: BadgeCheck, title: "Garantia e transparência", desc: "Proposta apresentada antes da execução, componentes com procedência comprovada e garantia formal documentada." },
];

const structure = [
  { icon: Layers, title: "Bancadas antiestáticas", desc: "Estações de trabalho preparadas para o manuseio seguro de placas e componentes sensíveis." },
  { icon: Gauge, title: "Instrumentos de medição", desc: "Equipamentos modernos para verificação de desempenho, temperatura e estabilidade antes da entrega." },
  { icon: ShieldCheck, title: "Controle de qualidade", desc: "Todo equipamento passa por testes de validação documentados antes de retornar ao cliente." },
  { icon: CircuitBoard, title: "Componentes com procedência", desc: "Trabalhamos exclusivamente com fornecedores homologados e nota fiscal em todos os componentes." },
];

const specialties = [
  { icon: Gamepad2, title: "Montagem de computadores", desc: "Projetos sob medida para uso profissional, criativo e de alto desempenho, com seleção de componentes, cabeamento organizado e validação completa.", msg: "Olá, Mendex Tech. Gostaria de conversar sobre um projeto de montagem de computador." },
  { icon: Cpu, title: "Upgrade de hardware", desc: "Ampliação de armazenamento e memória para elevar a capacidade e a longevidade de desktops e notebooks.", msg: "Olá, Mendex Tech. Gostaria de informações sobre upgrade de hardware." },
  { icon: Laptop, title: "Instalação de componentes", desc: "Instalação e substituição de telas, baterias, teclados e demais módulos, com componentes de procedência e garantia formal.", msg: "Olá, Mendex Tech. Gostaria de informações sobre instalação de componentes." },
  { icon: Gauge, title: "Otimização de desempenho", desc: "Análise de configuração, gestão térmica e ajustes de hardware para que o equipamento opere no seu melhor rendimento.", msg: "Olá, Mendex Tech. Gostaria de informações sobre otimização de desempenho." },
  { icon: Microscope, title: "Avaliação técnica em laboratório", desc: "Análise detalhada de cada componente, com relatório e proposta apresentados antes de qualquer intervenção.", msg: "Olá, Mendex Tech. Gostaria de agendar uma avaliação técnica." },
  { icon: Building2, title: "Atendimento corporativo", desc: "Padronização, upgrades planejados e acompanhamento do parque de equipamentos de empresas da região.", msg: "Olá, Mendex Tech. Represento uma empresa e gostaria de falar sobre atendimento corporativo." },
];

const testimonials = [
  { name: "Ricardo Almeida", role: "Designer · Ponta Grossa", text: "Atendimento formal do início ao fim. Recebi a proposta antes de qualquer procedimento e o equipamento voltou com desempenho muito superior." },
  { name: "Juliana Martins", role: "Estudante de Medicina", text: "Empresa séria, com estrutura de verdade. Explicaram cada componente instalado e entregaram tudo documentado, dentro do prazo combinado." },
  { name: "Carlos Eduardo", role: "Analista de TI · Cliente corporativo", text: "Padronizamos as máquinas da nossa equipe com a Mendex Tech. Processo organizado, prazos cumpridos e comunicação transparente." },
];

const metrics = [
  { value: "+200", label: "Equipamentos atendidos" },
  { value: "90 dias", label: "Garantia formal mínima" },
  { value: "100%", label: "Avaliações sem custo" },
  { value: "PG-PR", label: "Laboratório próprio" },
];

function Landing() {
  return (
    <div id="top" className="min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <MendexLogo />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            <a href="#empresa" className="transition hover:text-foreground">A empresa</a>
            <a href="#diferenciais" className="transition hover:text-foreground">Diferenciais</a>
            <a href="#estrutura" className="transition hover:text-foreground">Estrutura</a>
            <a href="#especialidades" className="transition hover:text-foreground">Especialidades</a>
            <a href="#contato" className="transition hover:text-foreground">Contato</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-header"
            className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-brand/5"
          >
            <MessageCircle className="h-4 w-4 text-brand" />
            <span className="hidden sm:inline">Falar com a equipe</span>
            <span className="sm:hidden">Contato</span>
          </a>
        </div>
      </header>

      {/* Hero institucional */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-25" />
        <div className="absolute left-1/2 top-[-10%] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand/12 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              Ponta Grossa · Paraná
            </div>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Tecnologia para computadores e notebooks com{" "}
              <span className="text-gradient-brand">padrão profissional</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Mendex Tech é uma empresa especializada em tecnologia, com laboratório próprio em Ponta Grossa,
              equipe dedicada a hardware e processos documentados do primeiro contato à entrega do equipamento.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <QuietCta label="Falar com a equipe" tag="whatsapp-hero" />
              <a
                href="#empresa"
                className="inline-flex h-12 items-center justify-center rounded-md border border-border px-6 text-sm font-medium text-foreground transition hover:border-brand/50 hover:bg-brand/5"
              >
                Conhecer a empresa
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
              {metrics.map((m) => (
                <div key={m.label}>
                  <dt className="font-display text-xl font-semibold text-foreground">{m.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted-foreground">{m.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-6 rounded-3xl bg-brand/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-xl border border-border">
              <img
                src={heroImg}
                alt="Bancada técnica da Mendex Tech com notebook em avaliação"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section id="empresa" className="relative py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-xl border border-border">
            <img
              src={labImg}
              alt="Interior do laboratório da Mendex Tech em Ponta Grossa"
              width={1536}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand">Quem somos</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Uma empresa de tecnologia construída sobre método e confiança
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                A Mendex Tech nasceu em Ponta Grossa com um propósito claro: oferecer à região um padrão de
                atendimento em tecnologia comparável ao de grandes centros. Somos uma empresa formalmente
                estabelecida, com CNPJ ativo, endereço fixo e laboratório próprio.
              </p>
              <p>
                Nossa atuação é concentrada em computadores e notebooks: projetos de montagem, evolução de
                hardware e desempenho. Cada equipamento recebido passa por um processo padronizado de avaliação,
                execução e validação, sempre com aprovação prévia do cliente.
              </p>
              <p>
                Acreditamos que confiança se constrói com transparência. Por isso documentamos cada etapa,
                trabalhamos apenas com componentes de procedência comprovada e oferecemos garantia formal em
                tudo o que entregamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="relative border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand">Diferenciais</span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              O que define a Mendex Tech
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quatro compromissos que sustentam a relação com cada cliente, do primeiro contato à garantia.
            </p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background p-7">
                <Icon className="h-5 w-5 text-brand" />
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura */}
      <section id="estrutura" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand">Estrutura</span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Laboratório próprio e equipamentos modernos
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Nossa estrutura foi projetada para o trabalho preciso com hardware. Cada bancada é preparada para
                o manuseio seguro de componentes e cada entrega passa por validação antes de retornar ao cliente.
              </p>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {structure.map(({ icon: Icon, title, desc }) => (
                  <div key={title}>
                    <Icon className="h-5 w-5 text-brand" />
                    <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <figure className="overflow-hidden rounded-xl border border-border">
                <img
                  src={benchImg}
                  alt="Instalação de componente em bancada antiestática da Mendex Tech"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <figcaption className="border-t border-border bg-surface/60 px-5 py-3 text-xs text-muted-foreground">
                  Bancada antiestática — instalação de componentes
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-xl border border-border">
                <img
                  src={pcImg}
                  alt="Computador de alto desempenho montado pela Mendex Tech"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <figcaption className="border-t border-border bg-surface/60 px-5 py-3 text-xs text-muted-foreground">
                  Projeto de montagem — validação final
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="relative border-y border-border bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand">Especialidades</span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Áreas de atuação da empresa</h2>
            <p className="mt-4 text-muted-foreground">
              Competências desenvolvidas ao longo da nossa atuação com desktops e notebooks, aplicadas a clientes
              pessoais, profissionais e corporativos.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {specialties.map(({ icon: Icon, title, desc, msg }) => (
              <article key={title} className="group flex flex-col bg-background p-8 transition hover:bg-surface/60">
                <Icon className="h-5 w-5 text-brand" />
                <h3 className="mt-5 text-base font-semibold">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <a
                  href={buildWhatsAppUrl(msg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp-specialty"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition group-hover:gap-2.5"
                >
                  Falar sobre esta especialidade
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand">Avaliações</span>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">O que dizem nossos clientes</h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-xl border border-border bg-surface/50 p-8">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative border-y border-border bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand">Perguntas frequentes</span>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Informações sobre a empresa e o atendimento
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Não encontrou o que procurava? A nossa equipe está disponível para esclarecer qualquer questão.
            </p>
            <QuietCta label="Falar com a equipe" variant="outline" className="mt-7" tag="whatsapp-faq" />
          </div>
          <Accordion type="single" collapsible className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0 px-0">
                <AccordionTrigger className="py-5 text-left text-base font-medium hover:text-brand hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-brand">Contato</span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Fale com a Mendex Tech
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Atendimento presencial mediante agendamento prévio. Entre em contato para conversar com a nossa
                equipe sobre o seu equipamento ou sobre o parque de máquinas da sua empresa.
              </p>
              <QuietCta label="Iniciar conversa no WhatsApp" className="mt-8" tag="whatsapp-contato" />
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
              <div className="bg-background p-7">
                <Building2 className="h-4.5 w-4.5 text-brand" />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">Empresa</p>
                <p className="mt-1.5 text-sm font-semibold">Mendex Tech</p>
                <p className="mt-1 text-xs text-muted-foreground">CNPJ 66.781.369/0001-97</p>
              </div>
              <div className="bg-background p-7">
                <MapPin className="h-4.5 w-4.5 text-brand" />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">Endereço</p>
                <p className="mt-1.5 text-sm font-semibold">Ponta Grossa - PR</p>
                <p className="mt-1 text-xs text-muted-foreground">Atendimento com agendamento prévio</p>
              </div>
              <div className="bg-background p-7">
                <Phone className="h-4.5 w-4.5 text-brand" />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">WhatsApp</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cta="whatsapp-card" className="mt-1.5 block text-sm font-semibold transition hover:text-brand">
                  +55 42 99960-9468
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Seg–Sex 09h–23h · Sáb–Dom 10h–18h</p>
              </div>
              <div className="bg-background p-7">
                <Mail className="h-4.5 w-4.5 text-brand" />
                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">E-mail</p>
                <a href="mailto:contato@mendextech.com.br" className="mt-1.5 block break-all text-sm font-semibold transition hover:text-brand">
                  contato@mendextech.com.br
                </a>
                <p className="mt-1 text-xs text-muted-foreground">Resposta em até 24h úteis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <MendexLogo />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Empresa especializada em tecnologia para computadores e notebooks, com laboratório próprio em
                Ponta Grossa - PR.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">Empresa</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#empresa" className="transition hover:text-brand">Quem somos</a></li>
                <li><a href="#diferenciais" className="transition hover:text-brand">Diferenciais</a></li>
                <li><a href="#estrutura" className="transition hover:text-brand">Estrutura</a></li>
                <li><a href="#especialidades" className="transition hover:text-brand">Especialidades</a></li>
                <li><a href="#faq" className="transition hover:text-brand">Perguntas frequentes</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">Contato</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Ponta Grossa - PR, Brasil</li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cta="whatsapp-footer" className="transition hover:text-brand">+55 42 99960-9468</a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <a href="mailto:contato@mendextech.com.br" className="break-all transition hover:text-brand">contato@mendextech.com.br</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground">Horário de funcionamento</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Segunda a sexta · 09h às 23h</li>
                <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Sábado e domingo · 10h às 18h</li>
                <li className="text-xs">Atendimento presencial mediante agendamento.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Mendex Tech · CNPJ 66.781.369/0001-97 · Todos os direitos reservados.</p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              <a href="#contato" className="transition hover:text-brand">Contato</a>
              <TermsDialog />
              <PrivacyPolicyDialog />
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsapp />
    </div>
  );
}
