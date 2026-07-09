import { useEffect, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { CtaWhatsapp, PageShell, SITE_URL, WHATSAPP_URL } from "@/components/page-shell";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Obrigado! Recebemos seu contato — Mendex Tech" },
      {
        name: "description",
        content: "Recebemos seu contato. Nossa equipe responderá em menos de 5 minutos no horário de atendimento.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Obrigado! — Mendex Tech" },
      { property: "og:description", content: "Recebemos seu contato. Respondemos em menos de 5 minutos." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/obrigado` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/obrigado` }],
  }),
  component: ObrigadoPage,
});

type Src = "whatsapp" | "call" | "unknown";

function useSource(): Src {
  return useMemo<Src>(() => {
    if (typeof window === "undefined") return "unknown";
    const raw = new URLSearchParams(window.location.search).get("src");
    if (raw === "whatsapp" || raw === "call") return raw;
    return "unknown";
  }, []);
}

function ObrigadoPage() {
  const src = useSource();

  useEffect(() => {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag !== "function") return;
    // Conversão de "página de agradecimento" — evento separado por ação.
    w.gtag("event", "conversion", { send_to: "AW-18156656745" });
    if (src === "whatsapp") {
      w.gtag("event", "thankyou_whatsapp", { event_category: "thankyou", event_label: "obrigado_whatsapp" });
    } else if (src === "call") {
      w.gtag("event", "thankyou_call", { event_category: "thankyou", event_label: "obrigado_call" });
    } else {
      w.gtag("event", "thankyou_view", { event_category: "thankyou", event_label: "obrigado_direct" });
    }
  }, [src]);

  const isCall = src === "call";
  const eyebrow = isCall ? "Ligação em andamento" : "Contato recebido";
  const title = isCall ? (
    <>Estamos <span className="text-gradient-brand">atendendo sua ligação</span></>
  ) : (
    <>Recebemos seu contato pelo <span className="text-gradient-brand">WhatsApp</span></>
  );
  const subtitle = isCall
    ? "Se o discador não abrir automaticamente, ligue pelo número abaixo. Nosso time atende em segundos no horário comercial."
    : "Nosso time já foi notificado e responde em menos de 5 minutos no horário de atendimento. Fique de olho no seu WhatsApp.";

  return (
    <PageShell eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <section className="relative py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-2xl border border-cta/40 bg-surface p-6 text-center shadow-glow sm:p-8">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-cta/15 ring-1 ring-cta/40">
              <CheckCircle2 className="h-7 w-7 text-cta" />
            </div>
            <p className="mt-5 text-lg font-bold sm:text-xl">Tudo certo! O próximo passo é com a gente.</p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {isCall
                ? "Nosso número foi aberto no seu discador. Caso a chamada não complete, toque abaixo para tentar novamente ou chame pelo WhatsApp."
                : "Já estamos preparando seu orçamento. Assim que responder no WhatsApp, seguimos com o diagnóstico gratuito."}
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {isCall ? (
                <>
                  <a
                    href="tel:+554299960-9468"
                    data-cta="call-thankyou"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-bold uppercase tracking-wide text-brand-foreground shadow-cta transition hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" />
                    Ligar novamente
                  </a>
                  <CtaWhatsapp size="default" label="Ou falar pelo WhatsApp" dataCta="whatsapp-thankyou" href={WHATSAPP_URL} />
                </>
              ) : (
                <>
                  <CtaWhatsapp size="lg" className="w-[92%] sm:w-auto" label="Abrir WhatsApp novamente" dataCta="whatsapp-thankyou" href={WHATSAPP_URL} />
                  <a
                    href="tel:+554299960-9468"
                    data-cta="call-thankyou"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-5 text-sm font-bold uppercase tracking-wide text-brand transition hover:bg-brand/20"
                  >
                    <Phone className="h-4 w-4" />
                    Ligar agora
                  </a>
                </>
              )}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
              <Clock className="h-5 w-5 flex-shrink-0 text-brand" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide">Resposta rápida</p>
                <p className="text-xs text-muted-foreground">&lt; 5 min no horário comercial</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
              <ShieldCheck className="h-5 w-5 flex-shrink-0 text-brand" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide">Garantia 90 dias</p>
                <p className="text-xs text-muted-foreground">Em todos os serviços</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-border bg-surface p-4">
              <MessageCircle className="h-5 w-5 flex-shrink-0 text-cta" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wide">Atendimento humano</p>
                <p className="text-xs text-muted-foreground">Seg–Sex 09h–23h · Sáb–Dom 10h–18h</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
