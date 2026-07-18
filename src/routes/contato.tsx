import { createFileRoute } from "@tanstack/react-router";
import { Building2, Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { CtaWhatsapp, PageShell, SITE_URL, WHATSAPP_URL } from "@/components/page-shell";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Entre em Contato — Mendex Tech | WhatsApp Ponta Grossa" },
      { name: "description", content: "Fale com a Mendex Tech via WhatsApp, telefone ou e-mail. Atendimento em Ponta Grossa - PR de segunda a sábado." },
      { property: "og:title", content: "Entre em Contato — Mendex Tech" },
      { property: "og:description", content: "WhatsApp, telefone, e-mail e endereço da Mendex Tech." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/contato` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contato` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Mendex Tech",
          image: `${SITE_URL}/favicon.ico`,
          telephone: "+554299960-9468",
          email: "contato@mendextech.com.br",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ponta Grossa",
            addressRegion: "PR",
            addressCountry: "BR",
          },
          url: `${SITE_URL}/contato`,
          openingHours: ["Mo-Fr 09:00-23:00", "Sa-Su 10:00-18:00"],
        }),
      },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <PageShell
      eyebrow="Contato"
      title={<>Fale com a <span className="text-gradient-brand">Mendex Tech</span></>}
      subtitle="A forma mais rápida de receber resposta é pelo WhatsApp. Estamos online agora."
    >
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex justify-center">
            <CtaWhatsapp
              size="xl"
              className="animate-pulse-cta w-[92%] sm:w-auto"
              label="Chamar no WhatsApp Agora"
              href={WHATSAPP_URL}
              dataCta="whatsapp-contact-top"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cta" /> Online agora · resposta em &lt; 5 min
            </span>
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="whatsapp-contact-card"
              className="group rounded-2xl border border-cta/40 bg-surface p-6 transition hover:-translate-y-1 hover:border-cta"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-cta/15 ring-1 ring-cta/30">
                <MessageCircle className="h-6 w-6 text-cta" />
              </div>
              <h2 className="mt-4 text-lg font-bold">WhatsApp</h2>
              <p className="mt-1 text-sm font-semibold text-cta">+55 42 99960-9468</p>
              <p className="mt-2 text-xs text-muted-foreground">Resposta em menos de 5 minutos durante o horário de atendimento.</p>
            </a>

            <a
              href="mailto:contato@mendextech.com.br"
              className="group rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-brand/60"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                <Mail className="h-6 w-6 text-brand" />
              </div>
              <h2 className="mt-4 text-lg font-bold">E-mail</h2>
              <p className="mt-1 break-all text-sm font-semibold text-brand">contato@mendextech.com.br</p>
              <p className="mt-2 text-xs text-muted-foreground">Resposta em até 24h úteis.</p>
            </a>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                <MapPin className="h-6 w-6 text-brand" />
              </div>
              <h2 className="mt-4 text-lg font-bold">Endereço</h2>
              <p className="mt-1 text-sm font-semibold">Ponta Grossa - PR</p>
              <p className="mt-2 text-xs text-muted-foreground">Atendimento com agendamento prévio via WhatsApp.</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                <Clock className="h-6 w-6 text-brand" />
              </div>
              <h2 className="mt-4 text-lg font-bold">Horário de Atendimento</h2>
              <p className="mt-1 text-sm font-semibold">Seg–Sex · 09h às 23h</p>
              <p className="text-sm font-semibold">Sáb–Dom · 10h às 18h</p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 sm:col-span-2">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                <Building2 className="h-6 w-6 text-brand" />
              </div>
              <h2 className="mt-4 text-lg font-bold">Identificação da Empresa</h2>
              <p className="mt-1 text-sm font-semibold">Mendex Tech</p>
              <p className="text-xs text-muted-foreground">CNPJ 66.781.369/0001-97 · Ponta Grossa - PR, Brasil</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
