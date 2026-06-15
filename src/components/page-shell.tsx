import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Cpu, MapPin, MessageCircle } from "lucide-react";

export const WHATSAPP_PHONE = "5542999609468";
export const buildWhatsAppUrl = (msg: string) =>
  `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
export const WHATSAPP_URL = buildWhatsAppUrl(
  "Olá Mendex Tech! Vim pelo site e quero um orçamento grátis. Pode me ajudar?",
);
export const SITE_URL = "https://mendex-tech-landing.lovable.app";

export function WhatsappGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.04 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
      />
    </svg>
  );
}

export function CtaWhatsapp({
  size = "default",
  className = "",
  label = "Fazer Orçamento Grátis no WhatsApp",
  href = WHATSAPP_URL,
  dataCta = "whatsapp",
}: {
  size?: "default" | "lg" | "xl";
  className?: string;
  label?: string;
  href?: string;
  dataCta?: string;
}) {
  const sz =
    size === "xl"
      ? "h-16 px-8 text-base sm:text-lg"
      : size === "lg"
        ? "h-14 px-7 text-base"
        : "h-11 px-5 text-sm";
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
      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-70 transition group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
}

function MendexLogo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand/60 ring-1 ring-brand/60 transition group-hover:ring-brand">
        <Cpu className="h-5 w-5 text-brand-foreground" />
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-[0.14em]">
        MX <span className="text-brand">Mendex Tech</span>
      </span>
    </Link>
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
        className="flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-cta font-bold uppercase tracking-wide text-cta-foreground shadow-cta animate-pulse-cta"
      >
        <WhatsappGlyph className="h-5 w-5" />
        <span className="text-sm">Orçamento grátis no WhatsApp</span>
      </a>
    </div>
  );
}

const NAV_LINKS = [
  { to: "/servicos", label: "Serviços" },
  { to: "/orcamento", label: "Orçamento" },
  { to: "/avaliacoes", label: "Avaliações" },
  { to: "/faq", label: "FAQ" },
  { to: "/contato", label: "Contato" },
] as const;

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen pb-20 text-foreground sm:pb-0">
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

      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand/20 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{eyebrow}</span>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.1] sm:text-5xl">{title}</h1>
          {subtitle ? (
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          ) : null}
        </div>
      </section>

      <main>{children}</main>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-background to-cta/15" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Pronto para Resolver? <span className="text-gradient-brand">É Só Chamar.</span>
          </h2>
          <p className="mt-4 text-sm text-muted-foreground sm:text-base">
            Diagnóstico e orçamento sempre gratuitos. Resposta em menos de 5 minutos.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaWhatsapp
              size="xl"
              className="animate-pulse-cta w-[90%] sm:w-auto"
              label="Chamar no WhatsApp Agora"
              dataCta="whatsapp-final"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-surface/60">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-2 sm:items-start">
              <MendexLogo />
              <p className="text-xs text-muted-foreground">Especialistas em hardware. Ponta Grossa - PR.</p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs">
              {NAV_LINKS.map((l) => (
                <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-brand">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Mendex Tech · CNPJ 66.781.369/0001-97</p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-brand" /> Ponta Grossa - PR</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" /> Seg–Sex 09h–23h</span>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsapp />
      <StickyMobileBar />
    </div>
  );
}
