import { createFileRoute } from "@tanstack/react-router";

import {
  Cpu, MessageCircle, HardDrive, MonitorCog, Wrench,
  ShieldCheck, Star, MapPin, Clock, ArrowRight, Laptop, Gamepad2,
  CircuitBoard, FileCheck2, Lock, Zap, Moon,
} from "lucide-react";
import heroImg from "@/assets/hero-bench.jpg";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";

const WHATSAPP_URL = "https://wa.me/5542999609468?text=" + encodeURIComponent("Olá! Vi o site da Mendex Tech e gostaria de um orçamento para o meu equipamento.");

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
          <p>A Mendex Tech valoriza a sua privacidade. Esta política descreve como tratamos as informações coletadas pelo site e atendimento via WhatsApp.</p>
          <p><strong className="text-foreground">Dados coletados:</strong> nome, telefone e descrição do problema, informados por você ao solicitar orçamento.</p>
          <p><strong className="text-foreground">Finalidade:</strong> uso exclusivo para contato comercial, orçamento e acompanhamento do serviço.</p>
          <p><strong className="text-foreground">Confidencialidade:</strong> nenhum dado é compartilhado, vendido ou cedido a terceiros.</p>
          <p><strong className="text-foreground">Arquivos do equipamento:</strong> nenhum arquivo é acessado, copiado ou alterado sem autorização prévia.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const faqs = [
  { q: "Vocês atendem em que horário?", a: "Atendemos de segunda a sexta das 09h às 23h (Plantão Estendido) e sábados e domingos das 10h às 18h (Plantão de Fim de Semana)." },
  { q: "Quanto tempo demora o orçamento?", a: "O orçamento é rápido e sem compromisso. A maioria é enviada em até algumas horas após avaliarmos seu projeto de upgrade." },
  { q: "Meus arquivos e fotos estão seguros?", a: "Sim. Fazemos backup 100% seguro dos seus dados antes de qualquer upgrade e nenhum arquivo é acessado ou alterado sem a sua autorização prévia." },
  { q: "Os upgrades têm garantia?", a: "Sim. Todos os upgrades e instalações de componentes saem com garantia por escrito, para sua total tranquilidade." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mendex Tech — Upgrade e Montagem de PCs de Alta Performance" },
      { name: "description", content: "Mendex Tech: upgrade de computadores, otimização de desempenho, montagem de PC Gamer e instalação de SSD e Memória RAM em Ponta Grossa. Atendimento até as 23h." },
      { property: "og:title", content: "Mendex Tech — Upgrade e Montagem de PCs de Alta Performance" },
      { property: "og:description", content: "Upgrade de computadores, otimização de desempenho e montagem de PC Gamer em Ponta Grossa. Atendimento até as 23h com garantia por escrito." },
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

function CtaWhatsapp({ size = "default", className = "", label = "Falar com Especialista no WhatsApp" }: { size?: "default" | "lg" | "xl"; className?: string; label?: string }) {
  const sz =
    size === "xl" ? "h-16 px-9 text-base sm:text-lg" :
    size === "lg" ? "h-14 px-7 text-base" :
    "h-11 px-5 text-sm";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
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
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-cta px-4 py-3 font-semibold text-cta-foreground shadow-cta ring-4 ring-cta/20 transition hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-cta/40 blur-xl animate-pulse" />
      <MessageCircle className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Chamar no WhatsApp</span>
    </a>
  );
}

const benefits = [
  { icon: ShieldCheck, title: "Garantia em todos os upgrades" },
  { icon: Lock, title: "Backup 100% seguro dos seus arquivos" },
  { icon: FileCheck2, title: "Orçamento rápido sem compromisso" },
  { icon: Moon, title: "Atendimento diferenciado: 09h às 23h" },
];

const services = [
  { icon: Laptop, title: "Upgrade de Notebooks", desc: "Troca de tela, teclado, bateria e instalação de componentes de alta performance." },
  { icon: Zap, title: "Upgrade de Velocidade", desc: "Instalação de SSD e expansão de Memória RAM para máxima performance." },
  { icon: MonitorCog, title: "Otimização de Sistema com Backup", desc: "Sistema otimizado e seus arquivos preservados com segurança." },
  { icon: Gamepad2, title: "Montagem de PC Gamer", desc: "Build personalizada, cable management profissional e otimização térmica." },
  { icon: CircuitBoard, title: "Instalação de Componentes e Hardware", desc: "Instalação profissional de placas, coolers e melhoria de hardware." },
];

const testimonials = [
  { name: "Ricardo Almeida", role: "Designer Freelancer", text: "Meu notebook engasgava em tudo. Trocaram por SSD, fizeram limpeza e ficou mais rápido que quando comprei." },
  { name: "Juliana Martins", role: "Estudante de Medicina", text: "Receberam meu PC com a tela quebrada e em 2 dias estava pronto, com garantia por escrito. Recomendo demais!" },
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
              Ponta Grossa · Atendimento até as 23h
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Seu PC ou Notebook estragou?{" "}
              <span className="text-gradient-brand">Resolvemos o seu problema hoje mesmo.</span>
            </h1>
            <p className="mt-6 text-base text-muted-foreground sm:text-lg">
              Assistência Técnica Especializada em Ponta Grossa com suporte estendido até as <span className="font-semibold text-foreground">23:00</span> e <span className="font-semibold text-foreground">plantão aos finais de semana</span>.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 lg:items-start">
              <CtaWhatsapp size="xl" className="animate-pulse-cta w-full sm:w-auto" />
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-cta text-cta" />
                ))}
                <span className="ml-2">+200 clientes satisfeitos</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-glow">
              <img
                src={heroImg}
                alt="Bancada técnica com notebook aberto para reparo"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Trust signals */}
      <section className="relative border-y border-border bg-surface/50 py-10">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title }) => (
            <div key={title} className="flex items-center gap-3">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                <Icon className="h-5 w-5 text-brand" />
              </div>
              <p className="text-sm font-semibold leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Nossos serviços</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">O que resolvemos para você</h2>
            <p className="mt-4 text-muted-foreground">Diagnóstico preciso, peças de qualidade e garantia por escrito.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-brand/50 hover:shadow-glow sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/25" />
                <div className="relative">
                  <div className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30 transition group-hover:bg-brand/25">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CtaWhatsapp size="lg" className="animate-pulse-cta" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-surface/40 py-20 sm:py-24">
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

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/20 via-transparent to-cta/10" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Pronto para resolver agora?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fale direto com o técnico no WhatsApp e receba seu orçamento sem compromisso.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaWhatsapp size="xl" className="animate-pulse-cta w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* Footer compacto */}
      <footer className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <MendexLogo />
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" /> Ponta Grossa - PR</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" /> Seg–Sex 09h–23h · Sáb–Dom 10h–18h</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Mendex Tech · CNPJ 66.781.369/0001-97</p>
            <PrivacyPolicyDialog />
          </div>
        </div>
      </footer>

      <FloatingWhatsapp />
    </div>
  );
}
