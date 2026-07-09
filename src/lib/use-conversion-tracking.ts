import { useEffect } from "react";

type Gtag = (...args: unknown[]) => void;

function detectSource(el: HTMLElement, id: string): "whatsapp" | "call" | null {
  const href = (el.getAttribute("href") || "").toLowerCase();
  if (href.startsWith("tel:") || id.startsWith("call") || id.startsWith("phone")) return "call";
  if (href.includes("wa.me") || href.includes("api.whatsapp") || id.includes("whatsapp")) return "whatsapp";
  return null;
}

/**
 * Global click delegate:
 * - Dispara `whatsapp_click` ou `phone_call_click` no gtag (evento granular).
 * - Dispara `conversion` no Google Ads (AW-18156656745) para cada ação.
 * - Redireciona a aba atual para /obrigado?src=whatsapp|call.
 *   - CTAs de WhatsApp abrem em nova aba (target=_blank) e a aba original vai para /obrigado.
 *   - CTAs de ligação (tel:) disparam o discador e depois a página vai para /obrigado.
 */
export function useConversionTracking() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.("[data-cta]") as HTMLAnchorElement | null;
      if (!el) return;

      // Deixe cliques com modificadores (ctrl/cmd/etc) e não-esquerdo passarem sem redirect.
      if (e.defaultPrevented) return;
      const isPlainClick = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

      const id = el.getAttribute("data-cta") || "cta";
      const source = detectSource(el, id);
      const w = window as unknown as { gtag?: Gtag };
      const gtag = typeof w.gtag === "function" ? w.gtag : null;

      if (gtag) {
        // Conversão Google Ads (substitua por AW-18156656745/LABEL_ESPECIFICO quando criar a conversão).
        gtag("event", "conversion", { send_to: "AW-18156656745" });
        // Evento granular separado por ação.
        if (source === "call") {
          gtag("event", "phone_call_click", { event_category: "cta", event_label: id });
        } else if (source === "whatsapp") {
          gtag("event", "whatsapp_click", { event_category: "cta", event_label: id });
        } else {
          gtag("event", "cta_click", { event_category: "cta", event_label: id });
        }
      }

      // Não redirecione a própria /obrigado nem quando não conseguimos classificar a ação.
      if (!source || !isPlainClick) return;
      if (window.location.pathname.replace(/\/$/, "") === "/obrigado") return;

      // Pequeno delay para o navegador abrir WhatsApp em nova aba / discador de telefone
      // antes de navegar a aba atual para a página de agradecimento.
      window.setTimeout(() => {
        window.location.href = `/obrigado?src=${source}`;
      }, 350);
    };

    document.addEventListener("click", handler, { capture: true });
    return () =>
      document.removeEventListener("click", handler, { capture: true } as AddEventListenerOptions);
  }, []);
}
