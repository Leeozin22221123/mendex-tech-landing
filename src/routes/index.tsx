import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  Cpu, MessageCircle, MapPin, Clock, CheckCircle2, Star,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog";

const WHATSAPP_PHONE = "5542999609468";
const buildWhatsAppUrl = (msg: string) => `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
const WHATSAPP_URL = buildWhatsAppUrl("Olá Mendex Tech! Vim pelo site e quero um orçamento grátis. Pode me ajudar?");
const INSTAGRAM_URL = "https://instagram.com/mendex.tech";
const SITE_URL = "https://mendex-tech-landing.lovable.app";

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
          <p>A Mendex Tech (CNPJ 66.781.369/0001-97), com sede em Ponta Grossa - PR, Brasil, é a controladora dos dados pessoais tratados neste site, em conformidade com a LGPD (Lei nº 13.709/2018).</p>
          <p><strong className="text-foreground">Dados coletados:</strong> nome, telefone, e-mail e descrição do projeto, informados voluntariamente ao solicitar orçamento via WhatsApp ou e-mail.</p>
          <p><strong className="text-foreground">Finalidade:</strong> uso exclusivo para contato comercial, elaboração de orçamento e acompanhamento do serviço.</p>
          <p><strong className="text-foreground">Seus direitos:</strong> você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail <a href="mailto:contato@mendextech.com.br" className="text-brand underline">contato@mendextech.com.br</a>.</p>
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
          <p><strong className="text-foreground">Identificação:</strong> Mendex Tech, CNPJ 66.781.369/0001-97, sediada em Ponta Grossa - PR, Brasil.</p>
          <p><strong className="text-foreground">Orçamento:</strong> a avaliação é gratuita e sem compromisso. Nenhum serviço é executado sem aprovação prévia.</p>
          <p><strong className="text-foreground">Garantia:</strong> peças e serviços possuem garantia mínima de 90 dias, conforme o Código de Defesa do Consumidor.</p>
          <p><strong className="text-foreground">Foro:</strong> aplicam-se as leis brasileiras. Fica eleito o foro da comarca de Ponta Grossa - PR.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const faqs = [
  {
    q: "O diagnóstico é realmente gratuito?",
    a: "Sim! Diagnóstico e orçamento são 100% gratuitos e sem compromisso. Você só paga se aprovar o serviço.",
  },
  {
    q: "Quanto tempo leva o serviço?",
    a: "Depende do serviço. Limpeza e formatação em até 24h. Troca de peças em até 48h. Sempre informamos o prazo antes de começar.",
  },
  {
    q: "Vocês dão garantia?",
    a: "Sim! Todos os serviços têm garantia de 90 dias em peças e mão de obra.",
  },
];

const testimonials = [
  {
    name: "Lucas M.",
    city: "Ponta Grossa",
    rating: 5,
    text: "Notebook travando demais. Fiz upgrade de SSD e RAM e ficou outro equipamento. Atendimento rápido pelo WhatsApp.",
  },
  {
    name: "Mariana S.",
    city: "Uvaranas",
    rating: 5,
    text: "Trouxe meu notebook com a tela quebrada, trocaram em 24h. Preço justo e garantia de 90 dias. Super recomendo!",
  },
  {
    name: "Camila R.",
    city: "Jardim Carvalho",
    rating: 5,
    text: "O computador da minha loja parou no meio do dia. Recuperaram tudo e ainda otimizaram. Excelente!",
  },
];

const sitelinks = [
  { name: "Orçamento Grátis no WhatsApp", url: WHATSAPP_URL },
  { name: "Como Funciona", url: `${SITE_URL}/#como-funciona` },
  { name: "Avaliações de Clientes", url: `${SITE_URL}/#avaliacoes` },
  { name: "Perguntas Frequentes", url: `${SITE_URL}/#faq` },
  { name: "Entre em Contato", url: `${SITE_URL}/#contato` },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mendex Tech — Assistência de Notebook e PC em Ponta Grossa | Orçamento Grátis" },
      { name: "description", content: "Notebook ou computador com problema? A gente resolve hoje em Ponta Grossa. Diagnóstico 100% grátis e orçamento em minutos no WhatsApp." },
      { name: "keywords", content: "assistência técnica notebook ponta grossa, conserto de computador ponta grossa, upgrade de ssd, troca de tela notebook, mendex tech" },
      { property: "og:title", content: "Mendex Tech — Assistência de Notebook e PC em Ponta Grossa" },
      { property: "og:description", content: "A gente resolve hoje. Diagnóstico grátis e orçamento em minutos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": `${SITE_URL}/#localbusiness`,
          name: "Mendex Tech",
          image: SITE_URL + "/og.jpg",
          url: SITE_URL,
          telephone: "+554299960-9468",
          priceRange: "R$",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ponta Grossa",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          areaServed: [{ "@type": "City", name: "Ponta Grossa" }],
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "20:00" },
          ],
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "137" },
          sameAs: [INSTAGRAM_URL],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          sitelinks.map((link) => ({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            name: link.name,
            url: link.url,
          })),
        ),
      },
    ],
  }),
  component: Landing,
});

function MendexLogo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand/60 ring-1 ring-brand/60 transition group-hover:ring-brand">
        <Cpu className="h-5 w-5 text-brand-foreground" />
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-[0.14em]">
        MX <span className="text-brand">Mendex Tech</span>
      </span>
    </a>
  );
}

function WhatsappGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function CtaWhatsapp({
  size = "default",
  className = "",
  label = "Fazer Orçamento Grátis no WhatsApp",
  href = WHATSAPP_URL,
  dataCta = "whatsapp",
}: { size?: "default" | "lg" | "xl"; className?: string; label?: string; href?: string; dataCta?: string }) {
  const sz =
    size === "xl" ? "h-16 px-8 text-base sm:text-lg" :
    size === "lg" ? "h-14 px-7 text-base" :
    "h-11 px-5 text-sm";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={dataCta}
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-cta font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-100 ${sz} ${className}`}
    >
      <WhatsappGlyph className={size === "xl" ? "h-6 w-6" : "h-5 w-5"} />
      <span>{label}</span>
    </a>
  );
}

function FloatingWhatsapp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp agora"
      data-cta="whatsapp-float"
      className="group fixed bottom-24 right-5 z-[100] hidden h-[58px] w-[58px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.55)] ring-4 ring-[#25D366]/25 transition hover:scale-110 sm:grid"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 animate-ping opacity-60" style={{ animationDuration: "4s" }} />
      <WhatsappGlyph className="h-7 w-7" />
    </a>
  );
}

function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-background/95 px-3 py-2.5 backdrop-blur-xl sm:hidden">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="whatsapp-sticky-mobile"
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-cta text-sm font-bold uppercase tracking-wide text-cta-foreground shadow-cta animate-pulse-cta"
      >
        <WhatsappGlyph className="h-5 w-5" />
        <span>Orçamento Grátis no WhatsApp</span>
      </a>
    </div>
  );
}

const howItWorks = [
  { n: "1", title: "Descreva o Problema", desc: "Informe via WhatsApp o que está ocorrendo com seu equipamento." },
  { n: "2", title: "Receba o Diagnóstico", desc: "Nosso técnico analisa e envia orçamento detalhado sem compromisso." },
  { n: "3", title: "Equipamento Revisado", desc: "Aprovado? Executamos com garantia técnica de 90 dias." },
];

function useAdsKeyword() {
  const [kw, setKw] = useState<string | null>(null);
  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search);
      const raw = (p.get("kw") || p.get("utm_term") || "").trim();
      if (!raw) return;
      const clean = raw.replace(/[+_]/g, " ").replace(/[^\p{L}\p{N}\s\-áéíóúâêôãõçÁÉÍÓÚÂÊÔÃÕÇ]/gu, "").slice(0, 60);
      if (clean.length >= 3) setKw(clean.replace(/\b\w/g, (c) => c.toUpperCase()));
    } catch {}
  }, []);
  return kw;
}

function Landing() {
  const kw = useAdsKeyword();

  return (
    <div id="top" className="min-h-screen pb-20 text-foreground sm:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-40 glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <MendexLogo />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="whatsapp-header"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-cta px-4 text-sm font-bold text-cta-foreground shadow-cta transition hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chamar</span>
          </a>
        </div>
      </header>

      {/* 1. HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-cta/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 md:py-28">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cta" />
              {kw ? <>Você buscou: <span className="text-foreground">{kw}</span> — atendemos hoje</> : <>Ponta Grossa · Assistência Técnica</>}
            </div>

            <h1 className="font-display text-[2rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Assistência Técnica Especializada em Notebooks e Computadores em Ponta Grossa
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Laboratório técnico com diagnóstico completo de hardware. Orçamento sem compromisso direto no WhatsApp.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <CtaWhatsapp
                size="xl"
                className="animate-pulse-cta w-[92%] sm:w-auto"
                label="FAZER ORÇAMENTO GRÁTIS →"
                dataCta="whatsapp-hero"
              />
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-cta" /> Laboratório técnico local · Ponta Grossa - PR</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" /> Sem compromisso</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" /> Garantia 90 dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMO FUNCIONA */}
      <section id="como-funciona" className="relative border-t border-border bg-surface/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Simples assim</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Como Funciona Nossa Assistência Técnica</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {howItWorks.map(({ n, title, desc }) => (
              <div key={n} className="relative rounded-2xl border border-border bg-surface p-6 text-center transition hover:border-brand/50">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/15 ring-1 ring-brand/30">
                  <span className="font-display text-2xl font-extrabold text-brand">{n}</span>
                </div>
                <p className="mt-5 text-base font-bold sm:text-lg">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <CtaWhatsapp
              size="lg"
              className="w-[92%] sm:w-auto"
              label="Começar Agora no WhatsApp →"
              dataCta="whatsapp-how"
            />
          </div>
        </div>
      </section>

      {/* 3. DEPOIMENTOS */}
      <section id="avaliacoes" className="relative border-y border-border bg-surface/60 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Avaliações</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">O Que Dizem Nossos Clientes</h2>
            <p className="mt-4 text-muted-foreground">Clientes atendidos em nosso laboratório em Ponta Grossa e região.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-border bg-surface p-5 transition hover:border-brand/40">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className={`h-4 w-4 ${j < t.rating ? "fill-cta text-cta" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <CtaWhatsapp
              size="lg"
              className="w-[92%] sm:w-auto"
              label="Quero Ser o Próximo → Chamar no WhatsApp"
              dataCta="whatsapp-testimonials"
            />
          </div>
        </div>
      </section>

      {/* 4. FAQ */}
      <section id="faq" className="relative py-16 sm:py-20">
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

      {/* 5. CTA FINAL */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-background to-cta/15" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Precisa de Assistência Técnica Especializada?
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Laboratório técnico em Ponta Grossa. Segunda a sábado das 08h às 20h.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <CtaWhatsapp
              size="xl"
              className="animate-pulse-cta w-[90%] sm:w-auto"
              label="FALAR COM NOSSO TÉCNICO →"
              dataCta="whatsapp-final"
            />
            <p className="text-sm text-muted-foreground">
              📍 Ponta Grossa - PR · Laboratório local
            </p>
          </div>
        </div>
      </section>

      {/* Contato / Identificação da empresa */}
      <section id="contato" className="relative border-t border-border bg-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Contato</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Fale com a Mendex Tech</h2>
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
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" data-cta="whatsapp-contact" className="mt-2 block text-sm font-semibold hover:text-brand">+55 42 99960-9468</a>
              <p className="mt-1 text-xs text-muted-foreground">Seg–Sáb 08h–20h</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand">E-mail</p>
              <a href="mailto:contato@mendextech.com.br" className="mt-2 block break-all text-sm font-semibold hover:text-brand">contato@mendextech.com.br</a>
              <p className="mt-1 text-xs text-muted-foreground">Resposta em até 24h úteis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <MendexLogo />
              <p className="text-xs text-muted-foreground">Especialistas em hardware. Ponta Grossa - PR.</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" /> Ponta Grossa - PR</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" /> Seg–Sáb 08h–20h</span>
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
      <StickyMobileBar />
    </div>
  );
}
