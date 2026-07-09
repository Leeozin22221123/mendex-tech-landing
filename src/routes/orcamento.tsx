import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, MessageCircle, Sparkles, Wrench } from "lucide-react";
import { CtaWhatsapp, PageShell, SITE_URL, WHATSAPP_URL, buildWhatsAppUrl } from "@/components/page-shell";
import { DiagnosticForm } from "@/components/diagnostic-form";


export const Route = createFileRoute("/orcamento")({
  head: () => ({
    meta: [
      { title: "Orçamento Grátis no WhatsApp — Mendex Tech | Ponta Grossa" },
      { name: "description", content: "Solicite agora um orçamento grátis e sem compromisso para upgrade, conserto ou montagem de PC. Resposta em menos de 5 minutos via WhatsApp." },
      { property: "og:title", content: "Orçamento Grátis no WhatsApp — Mendex Tech" },
      { property: "og:description", content: "Diagnóstico e orçamento gratuitos. Resposta em menos de 5 minutos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/orcamento` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/orcamento` }],
  }),
  component: OrcamentoPage,
});

const steps = [
  { icon: MessageCircle, title: "1. Chame no WhatsApp", desc: "Conte rapidamente o que está acontecendo com o seu equipamento." },
  { icon: Sparkles, title: "2. Receba o orçamento", desc: "Em minutos enviamos o valor e o prazo — sem compromisso." },
  { icon: Wrench, title: "3. Equipamento renovado", desc: "Aprovou? A gente executa com garantia de 90 dias." },
];

const quickQuotes = [
  { label: "Upgrade de SSD", msg: "Olá Mendex Tech! Quero um orçamento de upgrade de SSD para o meu equipamento." },
  { label: "Upgrade de memória RAM", msg: "Olá Mendex Tech! Quero um orçamento de upgrade de memória RAM." },
  { label: "Troca de tela", msg: "Olá Mendex Tech! Quero um orçamento de troca de tela do meu notebook." },
  { label: "Troca de bateria", msg: "Olá Mendex Tech! Quero um orçamento de troca de bateria do meu notebook." },
  { label: "Montagem de PC Gamer", msg: "Olá Mendex Tech! Quero montar um PC Gamer do zero. Pode me passar um orçamento?" },
  { label: "Limpeza e manutenção", msg: "Olá Mendex Tech! Quero um orçamento de limpeza interna e manutenção preventiva." },
];

function OrcamentoPage() {
  return (
    <PageShell
      eyebrow="Orçamento Grátis"
      title={<>Receba seu Orçamento em <span className="text-gradient-brand">Minutos</span></>}
      subtitle="100% grátis, sem compromisso e direto no WhatsApp. Atendemos Ponta Grossa e região com diagnóstico rápido."
    >
      <section className="relative py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <DiagnosticForm dataCta="whatsapp-orcamento-form" />

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cta" /> Online agora · resposta em &lt; 5 min</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" /> Sem compromisso</span>
            <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" /> Garantia 90 dias</span>
          </div>

          <div className="mt-8 flex justify-center">
            <CtaWhatsapp
              size="lg"
              label="Prefiro só chamar no WhatsApp"
              dataCta="whatsapp-orcamento-top"
            />
          </div>


          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-border bg-surface p-6 text-center">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <p className="mt-4 text-base font-bold">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-t border-border bg-surface/30 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Orçamentos rápidos por tipo de serviço</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Clique no que você precisa e abrimos o WhatsApp com a mensagem pronta.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quickQuotes.map((q) => (
              <a
                key={q.label}
                href={buildWhatsAppUrl(q.msg)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-orcamento-card"
                className="group flex items-center justify-between gap-3 rounded-2xl border border-cta/30 bg-surface p-5 transition hover:-translate-y-1 hover:border-cta/70"
              >
                <span className="text-sm font-semibold sm:text-base">{q.label}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-cta">Pedir →</span>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" /> Atendimento Seg–Sex 09h–23h · Sáb–Dom 10h–18h</span>
          </div>
          <div className="mt-6 flex justify-center">
            <CtaWhatsapp size="lg" label="Outro serviço — falar no WhatsApp" href={WHATSAPP_URL} dataCta="whatsapp-orcamento-bottom" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
