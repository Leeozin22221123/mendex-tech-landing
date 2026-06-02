import { createFileRoute } from "@tanstack/react-router";

import {
  Cpu, MessageCircle, MonitorCog,
  ShieldCheck, Star, MapPin, Clock, ArrowRight, Laptop, Gamepad2,
  CircuitBoard, FileCheck2, Lock, Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-bench.jpg";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";

const WHATSAPP_PHONE = "5542999609468";
const buildWhatsAppUrl = (msg: string) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
const WHATSAPP_URL = buildWhatsAppUrl("Olá Mendex Tech! Vim pelo site e quero um orçamento grátis. Pode me ajudar?");

function PrivacyPolicyDialog() {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-brand">Política de Privacidade</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Política de Privacidade</DialogTitle>
          <DialogDescription>Última atualização: {new Date().toLocaleDateString("pt-BR")}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>A Mendex Tech (CNPJ 66.781.369/0001-97), com sede em Ponta Grossa - PR, Brasil, é a controladora dos dados pessoais tratados neste site, em conformidade com a LGPD (Lei nº 13.709/2018) e com os princípios do GDPR (Regulamento UE 2016/679) quando aplicável.</p>
          <p><strong className="text-foreground">Dados coletados:</strong> nome, telefone, e-mail e descrição do projeto, informados voluntariamente por você ao solicitar orçamento via WhatsApp ou e-mail.</p>
          <p><strong className="text-foreground">Base legal:</strong> execução de contrato pré-contratual (orçamento) e legítimo interesse de comunicação comercial relacionada ao serviço solicitado.</p>
          <p><strong className="text-foreground">Finalidade:</strong> uso exclusivo para contato comercial, elaboração de orçamento e acompanhamento do serviço.</p>
          <p><strong className="text-foreground">Compartilhamento:</strong> nenhum dado é vendido ou cedido a terceiros. Utilizamos o Google Ads/Google Analytics apenas para mensuração agregada de campanhas (cookies podem ser desativados nas configurações do seu navegador).</p>
          <p><strong className="text-foreground">Retenção:</strong> os dados são mantidos pelo tempo necessário ao atendimento e por até 12 meses para fins fiscais e de garantia.</p>
          <p><strong className="text-foreground">Seus direitos:</strong> você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail <a href="mailto:contato@mendextech.com.br" className="text-brand underline">contato@mendextech.com.br</a>.</p>
          <p><strong className="text-foreground">Arquivos do equipamento:</strong> nenhum arquivo do seu equipamento é acessado, copiado ou alterado sem autorização prévia e por escrito.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger className="hover:text-brand">Termos de Serviço</DialogTrigger>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Termos de Serviço</DialogTitle>
          <DialogDescription>Última atualização: {new Date().toLocaleDateString("pt-BR")}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p><strong className="text-foreground">Identificação:</strong> Mendex Tech, CNPJ 66.781.369/0001-97, sediada em Ponta Grossa - PR, Brasil. Contato: <a href="mailto:contato@mendextech.com.br" className="text-brand underline">contato@mendextech.com.br</a> · WhatsApp +55 42 99960-9468.</p>
          <p><strong className="text-foreground">Serviços:</strong> montagem de PC, upgrade de hardware (SSD, RAM), substituição de componentes (telas, baterias, teclados) e otimização de performance em desktops e notebooks.</p>
          <p><strong className="text-foreground">Orçamento:</strong> a avaliação é gratuita e sem compromisso. Nenhum serviço é executado sem aprovação prévia do orçamento por parte do cliente.</p>
          <p><strong className="text-foreground">Preços e pagamento:</strong> todos os valores são informados em Reais (BRL) antes da execução. Pagamento via Pix, cartão ou dinheiro, conforme combinado no atendimento.</p>
          <p><strong className="text-foreground">Garantia:</strong> peças e serviços possuem garantia mínima de 90 dias, conforme o Código de Defesa do Consumidor (Lei nº 8.078/1990).</p>
          <p><strong className="text-foreground">Direito de arrependimento:</strong> em contratações realizadas fora do estabelecimento, o cliente pode desistir em até 7 dias, nos termos do art. 49 do CDC, desde que o serviço ainda não tenha sido executado.</p>
          <p><strong className="text-foreground">Foro:</strong> aplicam-se as leis brasileiras. Fica eleito o foro da comarca de Ponta Grossa - PR para dirimir eventuais controvérsias.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const faqs = [
  { q: "Vocês fazem diagnóstico pago?", a: "Não. O diagnóstico e o orçamento são sempre gratuitos e sem compromisso. Você só paga se decidir prosseguir com o serviço." },
  { q: "Quanto tempo leva uma troca de peça ou upgrade?", a: "Depende da disponibilidade da peça, mas a maioria dos serviços fica pronta em 24h a 48h. Informamos o prazo no momento do orçamento." },
  { q: "Vocês trabalham com quais marcas de notebook?", a: "Trabalhamos com todas as marcas: Dell, HP, Lenovo, Samsung, Asus, Acer, Positivo e demais. Se tem hardware, a gente entende." },
  { q: "Como faço para levar meu equipamento até vocês?", a: "É só chamar no WhatsApp. Combinamos o horário de entrega e já saímos com o orçamento para você aprovar." },
  { q: "Vocês dão garantia no serviço?", a: "Sim. Todo serviço realizado pela Mendex Tech sai com garantia. Peças instaladas e serviços executados são cobertos. Pergunte sobre o prazo no momento do atendimento." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mendex Tech — Upgrade e Montagem de PC em Ponta Grossa" },
      { name: "description", content: "Montagem de PC Gamer, upgrade de SSD e RAM, troca de tela e bateria em Ponta Grossa. Orçamento grátis. Fale no WhatsApp." },
      { name: "keywords", content: "upgrade de notebook ponta grossa, montagem pc gamer ponta grossa, troca de tela notebook, instalação ssd notebook, upgrade ram, laboratório de hardware ponta grossa, mendex tech" },
      { property: "og:title", content: "Mendex Tech — Upgrade e Montagem de PC em Ponta Grossa" },
      { property: "og:description", content: "Montagem de PC Gamer, upgrade de SSD e RAM, troca de tela e bateria em Ponta Grossa. Orçamento grátis. Fale no WhatsApp." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function MendexLogo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand/60 ring-1 ring-brand/60 transition group-hover:ring-brand">
        <Cpu className="h-5 w-5 text-brand-foreground" />
        <span className="absolute inset-0 rounded-lg bg-brand/0 blur-md transition group-hover:bg-brand/40" />
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-[0.14em]">
        MX <span className="text-brand">Mendex Tech</span>
      </span>
    </a>
  );
}

function CtaWhatsapp({ size = "default", className = "", label = "Falar no WhatsApp — Orçamento Grátis", href = WHATSAPP_URL }: { size?: "default" | "lg" | "xl"; className?: string; label?: string; href?: string }) {
  const sz =
    size === "xl" ? "h-16 px-9 text-base sm:text-lg" :
    size === "lg" ? "h-14 px-7 text-base" :
    "h-11 px-5 text-sm";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-cta font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-100 ${sz} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-70 transition group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp — Orçamento Grátis"
      data-cta="whatsapp-float"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-cta px-4 py-3 font-bold text-cta-foreground shadow-cta ring-4 ring-cta/20 transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-cta/40 blur-xl animate-pulse" />
      <MessageCircle className="h-6 w-6" />
      <span className="text-sm font-bold">Orçamento Grátis</span>
    </a>
  );
}

const benefits = [
  { icon: FileCheck2, title: "Orçamento Sempre Grátis", desc: "Avaliamos seu equipamento e apresentamos o orçamento sem nenhum custo. Você decide se quer prosseguir." },
  { icon: ShieldCheck, title: "Peças com Procedência", desc: "Usamos apenas componentes de fornecedores confiáveis. SSD, RAM, telas e baterias com nota fiscal e rastreabilidade." },
  { icon: Lock, title: "Garantia no Serviço", desc: "Todo upgrade e toda substituição de peça saem com garantia. Você tem segurança do início ao fim do processo." },
  { icon: MessageCircle, title: "Atendimento Direto no WhatsApp", desc: "Sem fila de espera e sem formulário. Fale diretamente com quem vai cuidar do seu equipamento. Resposta rápida, solução real." },
];

const services = [
  { icon: Gamepad2, title: "Montagem de PC Gamer", desc: "Montamos seu PC do zero com as peças que você escolher. Hardware selecionado, cabeamento organizado e tudo testado antes de sair do nosso laboratório.", msg: "Olá Mendex Tech! Quero um orçamento para montagem de PC Gamer." },
  { icon: Zap, title: "Upgrade de SSD e RAM", desc: "Notebook ou PC lento? Instalamos SSD de alta velocidade e ampliamos sua memória RAM. A diferença você sente na hora que liga pela primeira vez.", msg: "Olá Mendex Tech! Quero um orçamento de upgrade de SSD e/ou memória RAM." },
  { icon: Laptop, title: "Substituição de Peças", desc: "Troca de tela, bateria, teclado, dobradiça e carcaça. Trabalhamos com peças de procedência e entregamos com garantia no serviço.", msg: "Olá Mendex Tech! Preciso de orçamento para substituição de peça (tela / bateria / teclado)." },
  { icon: MonitorCog, title: "Recuperação de Performance", desc: "Computador travando, superaquecendo ou demorando para iniciar? Identificamos o componente com problema e devolvemos a performance original do seu equipamento.", msg: "Olá Mendex Tech! Meu computador está lento/esquentando. Quero um diagnóstico grátis." },
  { icon: CircuitBoard, title: "Laboratório de Hardware", desc: "Diagnóstico completo de notebooks e desktops. Analisamos cada componente e apresentamos o orçamento antes de qualquer intervenção. Sem surpresas.", msg: "Olá Mendex Tech! Quero levar meu equipamento para diagnóstico completo." },
];

const quickReplies = [
  { label: "Upgrade SSD/RAM", msg: "Olá Mendex Tech! Quero um orçamento de upgrade de SSD e/ou memória RAM." },
  { label: "Montar PC Gamer", msg: "Olá Mendex Tech! Quero um orçamento para montagem de PC Gamer." },
  { label: "Trocar tela/bateria", msg: "Olá Mendex Tech! Preciso trocar tela ou bateria do meu notebook." },
  { label: "Meu PC está lento", msg: "Olá Mendex Tech! Meu PC está lento. Quero diagnóstico grátis." },
];

const testimonials = [
  { name: "Ricardo Almeida", role: "Designer Freelancer", text: "Meu notebook engasgava em tudo. Fizeram upgrade para SSD e ficou mais rápido que quando comprei." },
  { name: "Juliana Martins", role: "Estudante de Medicina", text: "Fiz upgrade de memória RAM e SSD com eles em 2 dias, com garantia por escrito. Recomendo demais!" },
  { name: "Carlos Eduardo", role: "Analista de TI", text: "Diagnóstico preciso, preço justo e atendimento profissional do início ao fim. Total confiança na Mendex." },
];

function Landing() {
  return (
    <div id="top" className="min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <MendexLogo />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-cta px-4 text-sm font-bold text-cta-foreground shadow-cta transition hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chamar</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cta" />
              Ponta Grossa · Laboratório de Hardware
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Seu PC ou Notebook{" "}
              <span className="text-gradient-brand">no Nível que Sempre Mereceu</span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Montagem de PC Gamer, upgrade de hardware e substituição de peças em Ponta Grossa. Mais performance. Sem complicação.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaWhatsapp size="xl" className="animate-pulse-cta w-full sm:w-auto" />
                <a
                  href="#servicos"
                  className="inline-flex h-16 items-center justify-center rounded-full border border-brand/40 bg-brand/5 px-8 text-base font-bold uppercase tracking-wide text-foreground transition hover:bg-brand/10"
                >
                  Ver Nossos Serviços
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Resposta rápida:</span>
                {quickReplies.map((q) => (
                  <a
                    key={q.label}
                    href={buildWhatsAppUrl(q.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp-chip"
                    className="inline-flex items-center gap-1.5 rounded-full border border-cta/40 bg-cta/10 px-3 py-1.5 text-xs font-semibold text-cta transition hover:bg-cta/20"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    {q.label}
                  </a>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground lg:justify-start">
                <span className="inline-flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                  ))}
                  <span className="ml-1">+200 clientes satisfeitos</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Respondemos no WhatsApp em minutos
                </span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-glow">
              <img
                src={heroImg}
                alt="Bancada profissional com notebook aberto para upgrade de hardware"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Diferenciais */}
      <section className="relative border-y border-border bg-surface/50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Por que nos escolher</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Diferenciais Mendex Tech</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-surface p-5">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                  <Icon className="h-5 w-5 text-brand" />
                </div>
                <p className="text-sm font-semibold leading-snug">{title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Nossos serviços</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Hardware, performance e procedência</h2>
            <p className="mt-4 text-muted-foreground">Peças de qualidade, instalação profissional e garantia em tudo que fazemos.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, msg }) => (
              <article
                key={title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/25" />
                <div className="relative flex flex-1 flex-col">
                  <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30 transition group-hover:bg-brand/25">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <a
                    href={buildWhatsAppUrl(msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp-service"
                    className="mt-5 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-cta/15 px-4 text-sm font-bold text-cta ring-1 ring-cta/30 transition hover:bg-cta hover:text-cta-foreground"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Pedir Orçamento deste Serviço
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CtaWhatsapp size="lg" className="animate-pulse-cta" label="Solicitar Orçamento no WhatsApp" />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="relative bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Sobre a Mendex Tech</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Laboratório de hardware em Ponta Grossa</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              A Mendex Tech é um laboratório especializado em hardware localizado em Ponta Grossa - PR. Trabalhamos com montagem de PC Gamer sob encomenda, upgrades de performance e substituição de componentes de notebooks e desktops.
            </p>
            <p>
              Nosso foco é simples: devolver ou ampliar a performance do seu equipamento com transparência, peças de qualidade e garantia em tudo que fazemos. Sem enrolação, sem surpresa no bolso.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Depoimentos</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Quem confia, recomenda</h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{t.text}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand/15 font-semibold text-brand">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA do meio */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-cta/10" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Notebook Lento ou Peça Danificada? A Gente Resolve.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Diagnóstico grátis. Orçamento sem compromisso. Atendemos em Ponta Grossa e região.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaWhatsapp size="xl" className="animate-pulse-cta w-full sm:w-auto" label="Solicitar Orçamento no WhatsApp" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">FAQ</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Dúvidas Frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-surface px-5 transition hover:border-brand/40"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:text-brand hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contato / Identificação da empresa */}
      <section id="contato" className="relative border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contato</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Fale com a Mendex Tech</h2>
            <p className="mt-3 text-sm text-muted-foreground">Informações de contato e identificação da empresa, em conformidade com a legislação de transparência ao consumidor.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Empresa</p>
              <p className="mt-2 text-sm font-semibold">Mendex Tech</p>
              <p className="mt-1 text-xs text-muted-foreground">CNPJ 66.781.369/0001-97</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">Endereço</p>
              <p className="mt-2 text-sm">Ponta Grossa - PR</p>
              <p className="mt-1 text-xs text-muted-foreground">Atendimento com agendamento prévio</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">WhatsApp / Telefone</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm font-semibold hover:text-brand">+55 42 99960-9468</a>
              <p className="mt-1 text-xs text-muted-foreground">Seg–Sex 09h–23h · Sáb–Dom 10h–18h</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">E-mail</p>
              <a href="mailto:contato@mendextech.com.br" className="mt-2 block text-sm font-semibold break-all hover:text-brand">contato@mendextech.com.br</a>
              <p className="mt-1 text-xs text-muted-foreground">Resposta em até 24h úteis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer compacto */}
      <footer className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <MendexLogo />
              <p className="text-xs text-muted-foreground">Especialistas em hardware. Ponta Grossa - PR.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" /> Ponta Grossa - PR</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" /> Seg–Sex 09h–23h · Sáb–Dom 10h–18h</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Mendex Tech · CNPJ 66.781.369/0001-97</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <a href="#contato" className="hover:text-brand">Contato</a>
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
