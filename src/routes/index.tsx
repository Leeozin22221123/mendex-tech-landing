import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import {
  Cpu, MessageCircle,
  ShieldCheck, MapPin, Clock, ArrowRight, CircuitBoard, Zap, Instagram,
  CheckCircle2, Wrench, Sparkles,
  Star, Users, UserCheck,
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
          <p>A Mendex Tech (CNPJ 66.781.369/0001-97), com sede em Ponta Grossa - PR, Brasil, é a controladora dos dados pessoais tratados neste site, em conformidade com a LGPD (Lei nº 13.709/2018) e com os princípios do GDPR (Regulamento UE 2016/679) quando aplicável.</p>
          <p><strong className="text-foreground">Dados coletados:</strong> nome, telefone, e-mail e descrição do projeto, informados voluntariamente por você ao solicitar orçamento via WhatsApp ou e-mail.</p>
          <p><strong className="text-foreground">Base legal:</strong> execução de contrato pré-contratual (orçamento) e legítimo interesse de comunicação comercial relacionada ao serviço solicitado.</p>
          <p><strong className="text-foreground">Finalidade:</strong> uso exclusivo para contato comercial, elaboração de orçamento e acompanhamento do serviço.</p>
          <p><strong className="text-foreground">Compartilhamento:</strong> nenhum dado é vendido ou cedido a terceiros. Utilizamos o Google Ads/Google Analytics apenas para mensuração agregada de campanhas (cookies podem ser desativados nas configurações do seu navegador).</p>
          <p><strong className="text-foreground">Retenção:</strong> os dados são mantidos pelo tempo necessário ao atendimento e por até 12 meses para fins fiscais e de garantia.</p>
          <p><strong className="text-foreground">Seus direitos:</strong> você pode solicitar acesso, correção, exclusão ou portabilidade dos seus dados a qualquer momento pelo e-mail <a href="mailto:contato@mendextech.com.br" className="text-brand underline">contato@mendextech.com.br</a>.</p>
          <p><strong className="text-foreground">Arquivos do equipamento:</strong> nenhum arquivo do seu equipamento é acessado, copiado ou alterado sem autorização prévia e por escrito.</p>
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
          <p><strong className="text-foreground">Identificação:</strong> Mendex Tech, CNPJ 66.781.369/0001-97, sediada em Ponta Grossa - PR, Brasil. Contato: <a href="mailto:contato@mendextech.com.br" className="text-brand underline">contato@mendextech.com.br</a> · WhatsApp +55 42 99960-9468.</p>
          <p><strong className="text-foreground">Serviços:</strong> montagem de PC, upgrade de hardware (SSD, RAM), substituição de componentes (telas, baterias, teclados) e otimização de performance em desktops e notebooks.</p>
          <p><strong className="text-foreground">Orçamento:</strong> a avaliação é gratuita e sem compromisso. Nenhum serviço é executado sem aprovação prévia do orçamento por parte do cliente.</p>
          <p><strong className="text-foreground">Preços e pagamento:</strong> todos os valores são informados em Reais (BRL) antes da execução. Pagamento via Pix, cartão ou dinheiro, conforme combinado no atendimento.</p>
          <p><strong className="text-foreground">Garantia:</strong> peças e serviços possuem garantia mínima de 90 dias, conforme o Código de Defesa do Consumidor (Lei nº 8.078/1990).</p>
          <p><strong className="text-foreground">Direito de arrependimento:</strong> em contratações realizadas fora do estabelecimento, o cliente pode desistir em até 7 dias, nos termos do art. 49 do CDC, desde que o serviço ainda não tenha sido executado.</p>
          <p><strong className="text-foreground">Foro:</strong> aplicam-se as leis brasileiras. Fica eleito o foro da comarca de Ponta Grossa - PR para dirimir eventuais controvérsias.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const faqs = [
  { q: "Vocês fazem diagnóstico pago?", a: "Não. O diagnóstico e o orçamento são sempre gratuitos e sem compromisso. Você só paga se decidir prosseguir com o serviço." },
  { q: "Quanto tempo leva um upgrade ou troca de peça?", a: "Depende da disponibilidade da peça, mas a maioria fica pronta em 24h a 48h. Informamos o prazo no momento do orçamento." },
  { q: "Vocês trabalham com quais marcas de notebook?", a: "Trabalhamos com todas as marcas: Dell, HP, Lenovo, Samsung, Asus, Acer, Positivo e demais. Se tem hardware, a gente entende." },
  { q: "Como faço para levar meu equipamento até vocês?", a: "É só chamar no WhatsApp. Combinamos o horário de entrega e já saímos com o orçamento para você aprovar." },
  { q: "Vocês dão garantia no serviço?", a: "Sim. Todo serviço realizado pela Mendex Tech sai com garantia de 90 dias. Peças instaladas e serviços executados são cobertos." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mendex Tech — Upgrade e Montagem de PC em Ponta Grossa" },
      { name: "description", content: "Seu notebook lento? A gente deixa ele ultra veloz hoje mesmo. Upgrade de hardware, substituição de peças e montagem de PC Gamer em Ponta Grossa. Orçamento grátis no WhatsApp." },
      { name: "keywords", content: "upgrade de notebook ponta grossa, montagem pc gamer ponta grossa, troca de tela notebook, instalação ssd notebook, upgrade ram, laboratório de hardware ponta grossa, mendex tech" },
      { property: "og:title", content: "Mendex Tech — Upgrade e Montagem de PC em Ponta Grossa" },
      { property: "og:description", content: "Seu notebook lento ou travando? A gente deixa ele ultra veloz. Orçamento grátis no WhatsApp." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const testimonials = [
  { name: "Lucas M.", city: "Ponta Grossa", rating: 5, text: "Meu notebook estava travando demais. Fiz upgrade de SSD e RAM e ficou outro equipamento. Atendimento rápido pelo WhatsApp." },
  { name: "Mariana S.", city: "Uvaranas", rating: 5, text: "Troquei a tela do notebook em 24h. Preço justo e garantia de 90 dias. Super recomendo!" },
  { name: "Rafael T.", city: "Ponta Grossa", rating: 5, text: "Montaram meu PC gamer do zero com as peças que escolhi. Tudo funcionando perfeitamente." },
  { name: "Fernanda L.", city: "Ponta Grossa", rating: 5, text: "Bateria nova no meu Dell e limpeza interna. Muito caprichoso. Atende pelo WhatsApp super rápido." },
  { name: "Gabriel H.", city: "Oficinas", rating: 5, text: "Orçamento grátis e sem compromisso. Resolvi tudo pelo WhatsApp. Serviço de qualidade." },
  { name: "Camila R.", city: "Jardim Carvalho", rating: 5, text: "O computador da minha loja parou no meio do dia. Recuperaram tudo e ainda otimizaram. Excelente!" },
];

const socialProofActivity = [
  { name: "João P.", city: "Ponta Grossa", action: "solicitou orçamento", time: "agora" },
  { name: "Ana L.", city: "Uvaranas", action: "enviou foto do equipamento", time: "1 min atrás" },
  { name: "Carlos M.", city: "Oficinas", action: "fez upgrade de SSD", time: "3 min atrás" },
  { name: "Mariana S.", city: "Nova Rússia", action: "agendou atendimento", time: "5 min atrás" },
  { name: "Pedro R.", city: "Ponta Grossa", action: "pediu orçamento de bateria", time: "7 min atrás" },
  { name: "Juliana T.", city: "Jardim Carvalho", action: "enviou mensagem no WhatsApp", time: "10 min atrás" },
];

function SocialProofToast() {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const show = () => {
      setVisible(true);
      setTimeout(() => setVisible(false), 4000);
    };
    show();
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % socialProofActivity.length);
      show();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;
  const item = socialProofActivity[current];
  return (
    <div
      className={`fixed bottom-28 left-4 z-[100] max-w-[260px] rounded-xl border border-border bg-surface/95 p-3 shadow-lg backdrop-blur-xl transition-all duration-500 sm:bottom-8 sm:left-6 ${
        visible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-cta text-cta-foreground">
          <MessageCircle className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-foreground">{item.name} de {item.city}</p>
          <p className="text-xs text-muted-foreground">{item.action} {item.time}</p>
          <p className="mt-1 text-[10px] font-semibold text-cta">via WhatsApp</p>
        </div>
      </div>
    </div>
  );
}

function SocialCounter() {
  const [count, setCount] = useState(0);
  const target = 137;
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-foreground sm:gap-6">
      <div className="flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 shadow-sm">
        <Users className="h-4 w-4 text-cta" />
        <span><span className="text-cta">{count}</span> pessoas entraram em contato este mês</span>
      </div>
      <div className="flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 shadow-sm">
        <UserCheck className="h-4 w-4 text-brand" />
        <span>+900 equipamentos renovados em PG</span>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section id="avaliacoes" className="relative border-y border-border bg-surface/30 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Avaliações</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">O que dizem quem já foi atendido</h2>
          <p className="mt-4 text-muted-foreground">Clientes reais de Ponta Grossa e região. Todos os depoimentos são de atendimentos via WhatsApp.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
        <div className="mt-10 flex flex-col items-center gap-3">
          <CtaWhatsapp
            size="lg"
            className="w-[92%] sm:w-auto"
            label="Quer ser o próximo a avaliar? Chame no WhatsApp"
            dataCta="whatsapp-testimonials"
          />
          <p className="text-xs text-muted-foreground">Média de 5 estrelas em todos os atendimentos</p>
        </div>
      </div>
    </section>
  );
}

function MendexLogo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand/60 ring-1 ring-brand/60 transition group-hover:ring-brand">
        <Cpu className="h-5 w-5 text-brand-foreground" />
        <span className="absolute inset-0 rounded-lg bg-brand/0 blur-md transition group-hover:bg-brand/40" />
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
      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-70 transition group-hover:translate-x-0 group-hover:opacity-100" />
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
      title="Falar no WhatsApp agora →"
      className="group fixed bottom-24 right-5 z-[100] hidden h-[58px] w-[58px] place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.55)] ring-4 ring-[#25D366]/25 transition hover:scale-110 sm:grid"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/60 animate-ping opacity-60" style={{ animationDuration: "4s" }} />
      <WhatsappGlyph className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground px-3 py-1.5 text-xs font-semibold text-background opacity-0 shadow-lg transition group-hover:opacity-100">
        Falar no WhatsApp agora →
      </span>
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

const howItWorks = [
  { icon: MessageCircle, title: "1. Chame no WhatsApp", desc: "Conte rapidamente o que está acontecendo com seu equipamento." },
  { icon: Sparkles, title: "2. Receba o orçamento", desc: "Em minutos, enviamos o valor e o prazo — sem compromisso." },
  { icon: Wrench, title: "3. Equipamento renovado", desc: "Aprovou? A gente executa com garantia de 90 dias." },
];

const trustBadges = [
  { icon: ShieldCheck, title: "Garantia de 90 Dias", desc: "Em todos os serviços realizados" },
  { icon: MapPin, title: "Atendimento Local em PG", desc: "Estamos em Ponta Grossa - PR" },
  { icon: CircuitBoard, title: "Peças de Alta Qualidade", desc: "Componentes com procedência e nota fiscal" },
  { icon: Zap, title: "Orçamento em Minutos", desc: "Grátis, rápido e sem compromisso" },
];

const painSolutions = [
  { pain: "💤 Notebook extremamente lento no dia a dia", solution: "Otimização e Upgrade de SSD de Alta Velocidade", msg: "Olá Mendex Tech! Meu notebook está extremamente lento. Quero um orçamento de upgrade de SSD." },
  { pain: "🔥 Superaquecimento e travamentos constantes", solution: "Diagnóstico de Hardware e Substituição de Peças", msg: "Olá Mendex Tech! Meu equipamento está superaquecendo e travando. Quero um diagnóstico grátis." },
  { pain: "🔋 Bateria que não dura nem 30 minutos", solution: "Substituição de Bateria com Peça de Qualidade", msg: "Olá Mendex Tech! Quero um orçamento para substituição da bateria do meu notebook." },
  { pain: "💀 Computador com componentes ultrapassados", solution: "Upgrade Completo de RAM, SSD e Processador", msg: "Olá Mendex Tech! Quero um orçamento de upgrade completo (RAM, SSD e processador)." },
  { pain: "🖥️ Quer montar um PC Gamer do zero", solution: "Montagem Personalizada com as Peças que Você Escolher", msg: "Olá Mendex Tech! Quero montar um PC Gamer do zero. Pode me passar um orçamento?" },
  { pain: "⚡ PC ou notebook que desliga ou não inicializa", solution: "Diagnóstico Completo e Recuperação de Performance", msg: "Olá Mendex Tech! Meu computador não está inicializando direito. Quero um diagnóstico." },
];

function Landing() {
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

      {/* Hero — primeira dobra */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/25 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-cta/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 md:py-28">
          <div className="animate-fade-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cta" />
              Ponta Grossa · Laboratório de Hardware
            </div>

            <h1 className="font-display text-[2rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Seu Notebook Está Lento ou Travando?
              <br />
              <span className="text-gradient-brand">A Gente Deixa ele Ultra Veloz — Hoje Mesmo.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Upgrade de hardware, substituição de peças e montagem de PC Gamer em Ponta Grossa. Orçamento 100% grátis e sem compromisso direto no WhatsApp.
            </p>

            <div className="mt-9 flex flex-col items-center gap-4">
              <CtaWhatsapp
                size="xl"
                className="animate-pulse-cta w-[92%] sm:w-auto"
                label="Fazer Orçamento Grátis"
                dataCta="whatsapp-hero"
              />
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cta" /> Online agora · resposta em &lt; 5 min</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" /> Sem compromisso</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-cta" /> Garantia 90 dias</span>
              </div>
              <SocialCounter />
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona — reduz atrito antes do CTA */}
      <section className="relative border-t border-border bg-surface/30 py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Simples assim</span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Em 3 passos você sai do problema</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {howItWorks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="relative rounded-2xl border border-border bg-surface p-6 text-center transition hover:border-brand/50">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-brand/15 ring-1 ring-brand/30">
                  <Icon className="h-6 w-6 text-brand" />
                </div>
                <p className="mt-4 text-base font-bold">{title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CtaWhatsapp
              size="lg"
              className="w-[92%] sm:w-auto"
              label="Começar Agora no WhatsApp"
              dataCta="whatsapp-how"
            />
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Selos de Confiança */}
      <section className="relative border-y border-border bg-surface/60 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
            {trustBadges.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 sm:p-5">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-cta/15 ring-1 ring-cta/30">
                  <Icon className="h-5 w-5 text-cta" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold leading-snug">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapeamento de Dores e Soluções */}
      <section id="solucoes" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Dor → Solução</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Como Podemos Valorizar Seu Equipamento Hoje?</h2>
            <p className="mt-4 text-muted-foreground">
              Identifique abaixo o que está acontecendo com o seu PC ou notebook e veja o que fazemos para resolver.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {painSolutions.map(({ pain, solution, msg }) => (
              <a
                key={pain}
                href={buildWhatsAppUrl(msg)}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp-pain"
                className="group flex flex-col gap-4 rounded-2xl border border-cta/30 bg-surface p-5 transition hover:-translate-y-1 hover:border-cta/70 hover:shadow-glow sm:flex-row sm:items-center sm:p-6"
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-orange-300/90 sm:text-base">{pain}</p>
                </div>
                <ArrowRight className="hidden h-5 w-5 flex-shrink-0 text-cta transition group-hover:translate-x-1 sm:block" />
                <div className="flex-1 border-t border-border pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                  <p className="text-sm font-bold text-cta sm:text-base">→ {solution}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <CtaWhatsapp
              size="lg"
              className="animate-pulse-cta w-[90%] sm:w-auto"
              label="Meu caso é esse — Quero Orçamento Grátis"
              dataCta="whatsapp-pain-cta"
            />
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section id="instagram" className="relative border-y border-border bg-surface/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Prova social</span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Veja Nosso Trabalho no Instagram</h2>
            <p className="mt-4 text-muted-foreground">Antes e depois reais. Equipamentos transformados pela Mendex.</p>
          </div>

          <div
            className="mt-12"
            ref={(node) => {
              if (!node || node.querySelector('.elfsight-app-e785303c-5294-4767-8c3d-93c98e3df707')) return;
              node.innerHTML = `<!-- Elfsight Instagram Feed | Untitled Instagram Feed -->
<script src="https://elfsightcdn.com/platform.js" async></script>
<div class="elfsight-app-e785303c-5294-4767-8c3d-93c98e3df707" data-elfsight-app-lazy></div>`;
              const oldScript = node.querySelector('script');
              if (oldScript) {
                const newScript = document.createElement('script');
                const src = oldScript.getAttribute('src');
                if (src) newScript.src = src;
                newScript.async = true;
                oldScript.parentNode?.replaceChild(newScript, oldScript);
              }
            }}
          />

          <div className="mt-10 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-full px-7 text-sm font-bold uppercase tracking-wide text-foreground transition hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(#0b0b14,#0b0b14) padding-box, linear-gradient(135deg,#833AB4,#FD1D1D,#F77737) border-box",
                border: "2px solid transparent",
              }}
            >
              <Instagram className="h-5 w-5" />
              Ver mais no Instagram → @mendex.tech
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative py-20 sm:py-24">
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

      {/* CTA Final */}
      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/25 via-background to-cta/15" />
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl">
            Pronto para Resolver?{" "}
            <span className="text-gradient-brand">É Só Chamar.</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Atendemos segunda a sábado, das 08h às 20h.
            <br />
            Diagnóstico e orçamento sempre gratuitos.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <CtaWhatsapp
              size="xl"
              className="animate-pulse-cta w-[90%] sm:w-auto"
              label="Chamar no WhatsApp Agora"
              dataCta="whatsapp-final"
            />
            <p className="text-sm text-muted-foreground">
              📍 Ponta Grossa - PR · Respondemos rapidinho ⚡
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
            <p className="mt-3 text-sm text-muted-foreground">Informações de contato e identificação da empresa.</p>
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
              <p className="mt-1 text-xs text-muted-foreground">Seg–Sex 09h–23h · Sáb–Dom 10h–18h</p>
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
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-brand" /> Seg–Sex 09h–23h · Sáb–Dom 10h–18h</span>
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
      <SocialProofToast />
    </div>
  );
}
