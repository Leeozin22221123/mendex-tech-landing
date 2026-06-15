import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { CtaWhatsapp, PageShell, SITE_URL } from "@/components/page-shell";

export const Route = createFileRoute("/avaliacoes")({
  head: () => ({
    meta: [
      { title: "Avaliações de Clientes — Mendex Tech | Ponta Grossa" },
      { name: "description", content: "Veja o que clientes reais de Ponta Grossa dizem sobre os serviços da Mendex Tech: upgrade, conserto e montagem de PC com nota 5 estrelas." },
      { property: "og:title", content: "Avaliações de Clientes — Mendex Tech" },
      { property: "og:description", content: "+900 equipamentos renovados em Ponta Grossa. Veja as avaliações." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/avaliacoes` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/avaliacoes` }],
  }),
  component: AvaliacoesPage,
});

const testimonials = [
  { name: "Lucas M.", city: "Ponta Grossa", rating: 5, text: "Meu notebook estava travando demais. Fiz upgrade de SSD e RAM e ficou outro equipamento. Atendimento rápido pelo WhatsApp." },
  { name: "Mariana S.", city: "Uvaranas", rating: 5, text: "Troquei a tela do notebook em 24h. Preço justo e garantia de 90 dias. Super recomendo!" },
  { name: "Rafael T.", city: "Ponta Grossa", rating: 5, text: "Montaram meu PC gamer do zero com as peças que escolhi. Tudo funcionando perfeitamente." },
  { name: "Fernanda L.", city: "Ponta Grossa", rating: 5, text: "Bateria nova no meu Dell e limpeza interna. Muito caprichoso. Atende pelo WhatsApp super rápido." },
  { name: "Gabriel H.", city: "Oficinas", rating: 5, text: "Orçamento grátis e sem compromisso. Resolvi tudo pelo WhatsApp. Serviço de qualidade." },
  { name: "Camila R.", city: "Jardim Carvalho", rating: 5, text: "O computador da minha loja parou no meio do dia. Recuperaram tudo e ainda otimizaram. Excelente!" },
  { name: "Diego A.", city: "Ponta Grossa", rating: 5, text: "Fiz upgrade completo de RAM e SSD. Notebook ficou rápido como novo. Atendimento muito profissional." },
  { name: "Patrícia N.", city: "Centro", rating: 5, text: "Bateria do meu notebook só durava 20 minutos. Trocaram em 1 dia e voltou a durar horas. Excelente!" },
  { name: "Eduardo S.", city: "Uvaranas", rating: 5, text: "Tinha um problema chato de superaquecimento. Limpeza interna e pasta nova resolveram. Recomendo." },
];

function AvaliacoesPage() {
  return (
    <PageShell
      eyebrow="Avaliações"
      title={<>O que dizem quem <span className="text-gradient-brand">já foi atendido</span></>}
      subtitle="Clientes reais de Ponta Grossa e região. Todos os depoimentos vêm de atendimentos via WhatsApp."
    >
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 grid max-w-3xl grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-3xl font-extrabold text-cta">5,0</p>
              <p className="mt-1 text-xs text-muted-foreground">Nota média</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-3xl font-extrabold text-brand">+900</p>
              <p className="mt-1 text-xs text-muted-foreground">Equipamentos renovados</p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="text-3xl font-extrabold text-foreground">90 dias</p>
              <p className="mt-1 text-xs text-muted-foreground">Garantia em todos os serviços</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-12 flex flex-col items-center gap-3">
            <CtaWhatsapp
              size="lg"
              className="w-[92%] sm:w-auto"
              label="Quer ser o próximo? Chame no WhatsApp"
              dataCta="whatsapp-testimonials-bottom"
            />
            <p className="text-xs text-muted-foreground">Resposta em menos de 5 minutos</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
