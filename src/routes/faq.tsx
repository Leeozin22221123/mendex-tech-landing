import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaWhatsapp, PageShell, SITE_URL } from "@/components/page-shell";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Perguntas Frequentes — Mendex Tech | Ponta Grossa" },
      { name: "description", content: "Tire suas dúvidas sobre prazo, preço, garantia, marcas atendidas e como funciona o atendimento da Mendex Tech em Ponta Grossa." },
      { property: "og:title", content: "Perguntas Frequentes — Mendex Tech" },
      { property: "og:description", content: "Prazo, preço, garantia e como funciona o atendimento." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/faq` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/faq` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

const faqs = [
  { q: "Vocês fazem diagnóstico pago?", a: "Não. O diagnóstico e o orçamento são sempre gratuitos e sem compromisso. Você só paga se decidir prosseguir com o serviço." },
  { q: "Quanto tempo leva um upgrade ou troca de peça?", a: "Depende da disponibilidade da peça, mas a maioria fica pronta em 24h a 48h. Informamos o prazo no momento do orçamento." },
  { q: "Vocês trabalham com quais marcas de notebook?", a: "Trabalhamos com todas as marcas: Dell, HP, Lenovo, Samsung, Asus, Acer, Positivo e demais. Se tem hardware, a gente entende." },
  { q: "Como faço para levar meu equipamento até vocês?", a: "É só chamar no WhatsApp. Combinamos o horário de entrega e já saímos com o orçamento para você aprovar." },
  { q: "Vocês dão garantia no serviço?", a: "Sim. Todo serviço realizado pela Mendex Tech sai com garantia de 90 dias. Peças instaladas e serviços executados são cobertos." },
  { q: "Quais formas de pagamento vocês aceitam?", a: "Aceitamos Pix, cartão de débito e crédito e dinheiro. Combinamos a forma no momento da aprovação do orçamento." },
  { q: "Vocês acessam arquivos do meu equipamento?", a: "Não. Nenhum arquivo é acessado, copiado ou alterado sem a sua autorização prévia e por escrito." },
  { q: "Atendem fora de Ponta Grossa?", a: "Atendemos prioritariamente Ponta Grossa e região metropolitana. Para outras cidades, combine com a gente no WhatsApp." },
];

function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title={<>Perguntas <span className="text-gradient-brand">Frequentes</span></>}
      subtitle="Tudo o que você precisa saber antes de pedir um orçamento. Não achou sua dúvida? Chame no WhatsApp."
    >
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Accordion type="single" collapsible className="space-y-3">
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

          <div className="mt-12 flex flex-col items-center gap-3">
            <CtaWhatsapp
              size="lg"
              className="w-[92%] sm:w-auto"
              label="Tirar Dúvida no WhatsApp"
              dataCta="whatsapp-faq-bottom"
            />
            <p className="text-xs text-muted-foreground">Respondemos rapidinho</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
