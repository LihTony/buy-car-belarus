import { useState } from "react";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";

const currentYear = new Date().getFullYear();

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введите имя (мин. 2 символа)")
    .max(100, "Имя слишком длинное"),
  phone: z
    .string()
    .trim()
    .min(7, "Введите корректный телефон")
    .max(30, "Телефон слишком длинный")
    .regex(/^[+\d\s()-]+$/, "Только цифры и + ( ) -"),
  brand: z.string().trim().min(1, "Укажите марку").max(60),
  model: z.string().trim().min(1, "Укажите модель").max(60),
  year: z
    .number({ invalid_type_error: "Год должен быть числом" })
    .int()
    .min(1950, "Год слишком ранний")
    .max(currentYear + 1, "Год не может быть в будущем"),
});

type LeadForm = {
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
};

const initialForm: LeadForm = {
  name: "",
  phone: "+375 ",
  brand: "",
  model: "",
  year: "",
};

const LeadForm = () => {
  const [form, setForm] = useState<LeadForm>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof LeadForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const update = (key: keyof LeadForm, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = leadSchema.safeParse({
      name: form.name,
      phone: form.phone,
      brand: form.brand,
      model: form.model,
      year: form.year ? Number(form.year) : NaN,
    });

    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof LeadForm, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof LeadForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Проверьте правильность заполнения полей");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: parsed.data,
      });

      if (error) throw error;

      toast.success("Заявка отправлена!", {
        description: "Перезвоним в течение 15 минут.",
      });
      setForm(initialForm);
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Не удалось отправить заявку", {
        description: "Попробуйте ещё раз или позвоните нам.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-6 md:p-10 space-y-5 shadow-glow"
      noValidate
    >
      <div className="space-y-2 text-center mb-2">
        <h3 className="text-2xl md:text-3xl font-black">
          Получить <span className="text-gradient">оценку авто</span>
        </h3>
        <p className="text-muted-foreground text-sm">
          Заполните форму — менеджер перезвонит в течение 15 минут
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field
          id="name"
          label="Ваше имя"
          placeholder="Иван"
          value={form.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          autoComplete="name"
        />
        <Field
          id="phone"
          label="Телефон"
          type="tel"
          placeholder="+375 29 123-45-67"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          error={errors.phone}
          autoComplete="tel"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field
          id="brand"
          label="Марка"
          placeholder="Volkswagen"
          value={form.brand}
          onChange={(v) => update("brand", v)}
          error={errors.brand}
        />
        <Field
          id="model"
          label="Модель"
          placeholder="Passat"
          value={form.model}
          onChange={(v) => update("model", v)}
          error={errors.model}
        />
        <Field
          id="year"
          label="Год выпуска"
          type="number"
          inputMode="numeric"
          placeholder={String(currentYear - 5)}
          value={form.year}
          onChange={(v) => update("year", v.replace(/\D/g, "").slice(0, 4))}
          error={errors.year}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-primary text-primary-foreground font-bold text-base shadow-glow hover:opacity-95 hover:scale-[1.01] transition-all"
        disabled={submitting}
      >
        {submitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Отправляем…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Отправить заявку
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
};

type FieldProps = {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

const Field = ({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
  inputMode,
}: FieldProps) => (
  <div className="space-y-1.5">
    <Label htmlFor={id} className="text-sm">
      {label}
    </Label>
    <Input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      autoComplete={autoComplete}
      inputMode={inputMode}
      aria-invalid={!!error}
      className={error ? "border-destructive focus-visible:ring-destructive" : ""}
    />
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default LeadForm;
