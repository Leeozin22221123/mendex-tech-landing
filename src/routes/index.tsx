import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu, MessageCircle, HardDrive, MonitorCog, Wind, Wrench,
  CalendarCheck, Camera, ShieldCheck, Star, MapPin, Clock, ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-bench.jpg";

const WHATSAPP_URL = "https://wa.me/?text=Ol%C3%A1%20Mendex%20Tech%2C%20preciso%20de%20ajuda%20com%20meu%20notebook";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mendex Tech — Assistência Técnica Especializada em Notebooks e PCs" },
      { name: "description", content: "Conserto, upgrade e manutenção de notebooks e computadores com transparência, agilidade e garantia. Atendimento com hora marcada." },
      { property: "og:title", content: "Mendex Tech — Assistência Técnica em Notebooks" },
      { property: "og:description", content: "Atendimento ágil, honesto e com garantia. Upgrade de SSD/RAM, formatação, limpeza e reparos." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function MendexLogo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-brand/15 ring-1 ring-brand/40 transition group-hover:ring-brand">
        <Cpu className="h-5 w-5 text-brand" />
        <span className="absolute inset-0 rounded-lg bg-brand/0 blur-md transition group-hover:bg-brand/30" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight">
        Mendex<span className="text-brand"> Tech</span>
      </span>
    </a>
  );
}

function CtaWhatsapp({ size = "default", className = "" }: { size?: "default" | "lg"; className?: string }) {
  const sz = size === "lg" ? "h-14 px-7 text-base" : "h-11 px-5 text-sm";
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-cta font-semibold text-cta-foreground shadow-cta transition-transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-100 ${sz} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      <span>Falar com o Técnico no WhatsApp</span>
      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-70 transition group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
}

const services = [
  { icon: HardDrive, title: "Upgrade de SSD e Memória RAM", desc: "Deixe seu notebook até 10x mais rápido que um modelo novo." },
  { icon: MonitorCog, title: "Formatação e Sistema Operacional", desc: "Instalação limpa, backup seguro dos seus dados e otimização completa." },
  { icon: Wind, title: "Limpeza Preventiva Avançada", desc: "Desmontagem completa, eliminação de poeira e troca de pasta térmica de alta performance." },
  { icon: Wrench, title: "Reparos em Placa-Mãe e Hardware", desc: "Diagnóstico avançado para equipamentos que não ligam ou apresentam falhas intermitentes." },
];

const steps = [
  { icon: CalendarCheck, title: "Agendamento Prévio", desc: "Atendemos exclusivamente com hora marcada em nossa bancada residencial, garantindo total privacidade, foco e segurança para o seu equipamento." },
  { icon: Camera, title: "Diagnóstico e Transparência", desc: "Acompanhe o processo. Enviamos fotos e vídeos do seu aparelho durante a manutenção para você saber exatamente o que está sendo feito." },
  { icon: ShieldCheck, title: "Entrega com Garantia", desc: "Você retira seu equipamento testado, higienizado e com garantia por escrito dos serviços executados." },
];

const testimonials = [
  { name: "Ricardo Almeida", role: "Designer Freelancer", text: "Meu notebook engasgava em tudo. Trocaram por SSD, fizeram limpeza e ficou mais rápido que quando comprei. Honestidade total no orçamento." },
  { name: "Juliana Martins", role: "Estudante de Medicina", text: "Receberam meu PC com a tela quebrada, mandaram fotos do processo todo. Em 2 dias estava pronto, com garantia por escrito. Recomendo demais!" },
  { name: "Carlos Eduardo", role: "Analista de TI", text: "Procurei por uma assistência confiável e achei na Mendex. Diagnóstico preciso, preço justo e atendimento profissional do início ao fim." },
];

function Landing() {
  return (
    <div id="top" className="min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <MendexLogo />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-surface-elevated/60 px-4 text-sm font-medium text-foreground transition hover:border-brand hover:text-brand"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Contato rápido</span>
            <span className="sm:hidden">Contato</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:py-28">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cta" />
              Atendimento ágil • Garantia por escrito
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Seu Notebook Lento ou Quebrado?{" "}
              <span className="text-gradient-brand">Nós Resolvemos com Transparência.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Assistência técnica especializada em notebooks e PCs. Atendimento ágil, honesto e com garantia
              para você voltar a trabalhar ou estudar sem dor de cabeça.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <CtaWhatsapp size="lg" className="animate-pulse-cta w-full sm:w-auto" />
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-cta text-cta" />
                <Star className="h-4 w-4 fill-cta text-cta" />
                <Star className="h-4 w-4 fill-cta text-cta" />
                <Star className="h-4 w-4 fill-cta text-cta" />
                <Star className="h-4 w-4 fill-cta text-cta" />
                <span className="ml-2">+200 clientes satisfeitos</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand/30 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-glow">
              <img
                src={heroImg}
                alt="Bancada técnica premium com notebook aberto, módulos de memória RAM e SSD"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 hidden animate-float rounded-xl border border-border bg-surface-elevated p-3 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-cta/15">
                  <ShieldCheck className="h-5 w-5 text-cta" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold">Garantia por escrito</div>
                  <div className="text-muted-foreground">em todos os serviços</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="servicos" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Nossos serviços</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Soluções completas para o seu equipamento</h2>
            <p className="mt-4 text-muted-foreground">Diagnóstico preciso, peças de qualidade e mão de obra especializada.</p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
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
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Processo</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Como funciona o nosso atendimento?</h2>
            <p className="mt-4 text-muted-foreground">Um fluxo simples, transparente e seguro do começo ao fim.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="relative rounded-2xl border border-border bg-surface p-7">
                <div className="absolute -top-5 left-7 grid h-10 w-10 place-items-center rounded-full bg-brand text-sm font-bold text-brand-foreground shadow-glow">
                  {i + 1}
                </div>
                <Icon className="h-8 w-8 text-brand" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
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
              <figure key={t.name} className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition hover:border-brand/40">
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

          <div className="mt-14 flex justify-center">
            <CtaWhatsapp size="lg" className="animate-pulse-cta" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <MendexLogo />
              <p className="mt-4 text-sm text-muted-foreground">
                Assistência técnica especializada em notebooks e computadores. Honestidade, agilidade e garantia por escrito.
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" />
                Atendimento com hora marcada
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand" />
                [Sua Cidade / Bairro]
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-brand" />
                <a href={WHATSAPP_URL} className="hover:text-brand" target="_blank" rel="noopener noreferrer">
                  WhatsApp direto com o técnico
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Mendex Tech. Todos os direitos reservados.</p>
            <div className="flex gap-5">
              <a href="/privacidade" className="hover:text-brand">Política de Privacidade</a>
              <a href="/termos" className="hover:text-brand">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
