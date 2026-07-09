import { useState } from "react";
import { z } from "zod";
import { Cpu, MessageCircle, Sparkles, Wrench } from "lucide-react";
import { buildWhatsAppUrl, WhatsappGlyph } from "@/components/page-shell";

const equipmentOptions = [
  "Notebook",
  "Desktop / PC",
  "PC Gamer",
  "All-in-One",
  "Outro",
] as const;

const schema = z.object({
  equipment: z.enum(equipmentOptions, {
    errorMap: () => ({ message: "Selecione o tipo de equipamento" }),
  }),
  model: z
    .string()
    .trim()
    .min(2, { message: "Informe a marca/modelo (mín. 2 caracteres)" })
    .max(80, { message: "Máximo de 80 caracteres" }),
  issue: z
    .string()
    .trim()
    .min(5, { message: "Descreva o defeito (mín. 5 caracteres)" })
    .max(500, { message: "Máximo de 500 caracteres" }),
  name: z.string().trim().max(60, { message: "Máximo de 60 caracteres" }).optional().or(z.literal("")),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function buildMessage(data: z.infer<typeof schema>) {
  const lines = [
    "Olá Mendex Tech! Quero diagnóstico de hardware grátis.",
    "",
    `• Equipamento: ${data.equipment}`,
    `• Marca / Modelo: ${data.model}`,
    `• Defeito / Objetivo: ${data.issue}`,
  ];
  if (data.name && data.name.length > 0) {
    lines.push(`• Meu nome: ${data.name}`);
  }
  lines.push("", "Pode me passar um orçamento?");
  return lines.join("\n");
}

export function DiagnosticForm({ dataCta = "whatsapp-diagnostic-form" }: { dataCta?: string }) {
  const [equipment, setEquipment] = useState<(typeof equipmentOptions)[number] | "">("");
  const [model, setModel] = useState("");
  const [issue, setIssue] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse({ equipment, model, issue, name });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const iss of parsed.error.issues) {
        const key = iss.path[0] as keyof FieldErrors;
        if (key && !next[key]) next[key] = iss.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    const url = buildWhatsAppUrl(buildMessage(parsed.data));
    // Deixe o click delegate global do useConversionTracking capturar o disparo
    // criando um <a> com data-cta e simulando o click.
    const a = document.createElement("a");
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("data-cta", dataCta);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      className="mx-auto max-w-2xl rounded-2xl border border-cta/30 bg-surface p-5 shadow-glow sm:p-7"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-cta/15 ring-1 ring-cta/40">
          <Sparkles className="h-5 w-5 text-cta" />
        </div>
        <div>
          <p className="text-base font-bold sm:text-lg">Diagnóstico de hardware grátis</p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Preencha em 30 segundos e enviamos direto no WhatsApp com sua mensagem pronta.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="df-equipment" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Equipamento *
          </label>
          <div className="relative">
            <Cpu className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <select
              id="df-equipment"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value as typeof equipment)}
              className="h-12 w-full appearance-none rounded-xl border border-border bg-background pl-9 pr-4 text-sm text-foreground outline-none transition focus:border-cta"
            >
              <option value="">Selecione o tipo</option>
              {equipmentOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          {errors.equipment ? <p className="mt-1 text-xs text-red-400">{errors.equipment}</p> : null}
        </div>

        <div>
          <label htmlFor="df-model" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Marca / Modelo *
          </label>
          <input
            id="df-model"
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            maxLength={80}
            placeholder="Ex.: Dell Inspiron 15 3520"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-cta"
          />
          {errors.model ? <p className="mt-1 text-xs text-red-400">{errors.model}</p> : null}
        </div>

        <div>
          <label htmlFor="df-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Seu nome <span className="normal-case text-muted-foreground/70">(opcional)</span>
          </label>
          <input
            id="df-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={60}
            placeholder="Como podemos te chamar?"
            className="h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-cta"
          />
          {errors.name ? <p className="mt-1 text-xs text-red-400">{errors.name}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="df-issue" className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Defeito ou o que você precisa *
          </label>
          <div className="relative">
            <Wrench className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <textarea
              id="df-issue"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              maxLength={500}
              rows={4}
              placeholder="Ex.: está muito lento, quero trocar o HD por SSD e adicionar memória RAM"
              className="w-full resize-none rounded-xl border border-border bg-background py-3 pl-9 pr-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground focus:border-cta"
            />
          </div>
          <div className="mt-1 flex items-center justify-between">
            {errors.issue ? <p className="text-xs text-red-400">{errors.issue}</p> : <span />}
            <p className="text-[10px] text-muted-foreground">{issue.length}/500</p>
          </div>
        </div>
      </div>

      <button
        type="submit"
        data-cta={dataCta}
        className="mt-6 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-cta text-sm font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition hover:-translate-y-0.5 sm:text-base"
      >
        <WhatsappGlyph className="h-5 w-5" />
        Enviar diagnóstico grátis no WhatsApp
      </button>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
        <MessageCircle className="h-3 w-3 text-cta" />
        Nenhum dado é armazenado — só abrimos o WhatsApp com sua mensagem pronta.
      </p>
    </form>
  );
}
