import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Battery, Cpu, HardDrive, Monitor, Wrench, Zap } from "lucide-react";
import { CtaWhatsapp, PageShell, SITE_URL, buildWhatsAppUrl } from "@/components/page-shell";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — Upgrade, Conserto e Montagem de PC | Mendex Tech" },
      { name: "description", content: "Upgrade de SSD e RAM, troca de tela e bateria, montagem de PC Gamer e manutenção em Ponta Grossa. Atendimento rápido pelo WhatsApp." },
      { property: "og:title", content: "Serviços — Mendex Tech | Ponta Grossa" },
      { property: "og:description", content: "Upgrade, conserto e montagem de PC com garantia de 90 dias." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/servicos` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/servicos` }],
  }),
  component: ServicosPage,
});

const services = [
  { icon: HardDrive, title: "Upgrade de SSD", desc: "Troque seu HD pelo SSD certo e ganhe até 10× mais velocidade na inicialização e abertura de programas.", msg: "Olá Mendex Tech! Quero um orçamento de upgrade de SSD." },
  { icon: Cpu, title: "Upgrade de Memória RAM", desc: "Mais RAM para o seu notebook ou desktop rodar várias abas, programas e jogos sem travamento.", msg: "Olá Mendex Tech! Quero um orçamento de upgrade de memória RAM." },
  { icon: Monitor, title: "Troca de Tela de Notebook", desc: "Tela trincada, com manchas ou linhas? Substituição com peça de qualidade e garantia de 90 dias.", msg: "Olá Mendex Tech! Quero um orçamento de troca de tela." },
  { icon: Battery, title: "Troca de Bateria", desc: "Bateria que não dura nem 30 minutos? Trocamos por modelos novos e originais para a marca do seu notebook.", msg: "Olá Mendex Tech! Quero um orçamento de troca de bateria." },
  { icon: Zap, title: "Montagem de PC Gamer", desc: "Montagem personalizada com as peças que você escolher. Indicamos a melhor configuração para o seu orçamento.", msg: "Olá Mendex Tech! Quero montar um PC Gamer do zero." },
  { icon: Wrench, title: "Manutenção e Limpeza", desc: "Limpeza interna, troca de pasta térmica e diagnóstico de superaquecimento e travamentos.", msg: "Olá Mendex Tech! Quero um orçamento de manutenção e limpeza interna." },
];

function ServicosPage() {
  return (
    <PageShell
      eyebrow="Nossos Serviços"
      title={<>Especialistas em <span className="text-gradient-brand">Hardware</span> em Ponta Grossa</>}
      subtitle="Tudo que o seu PC ou notebook precisa em um só lugar — com peças de procedência e garantia de 90 dias."
    >
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, msg }) => (
              <a
                key={title}
                href={buildWhatsAppUrl(msg)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-service"
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-1 hover:border-brand/60"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <h2 className="mt-4 text-lg font-bold">{title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cta">
                  Pedir orçamento <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CtaWhatsapp
              size="lg"
              className="animate-pulse-cta w-[92%] sm:w-auto"
              label="Falar com um Especialista"
              dataCta="whatsapp-services-bottom"
            />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
