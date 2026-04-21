import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";
import { z } from "https://esm.sh/zod@3.23.8";

const LeadSchema = z.object({
  name: z.string().trim().min(2, "Имя слишком короткое").max(100),
  phone: z.string().trim().min(7, "Некорректный телефон").max(30),
  brand: z.string().trim().min(1).max(60),
  model: z.string().trim().min(1).max(60),
  year: z
    .number()
    .int()
    .min(1950)
    .max(new Date().getFullYear() + 1),
});

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const CHAT_ID = Deno.env.get("TELEGRAM_MANAGER_CHAT_ID");

    if (!BOT_TOKEN || !CHAT_ID) {
      return new Response(
        JSON.stringify({ error: "Telegram не настроен" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = await req.json().catch(() => null);
    const parsed = LeadSchema.safeParse(body);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { name, phone, brand, model, year } = parsed.data;

    const text = [
      "🚗 <b>Новая заявка на оценку</b>",
      "",
      `👤 <b>Имя:</b> ${escapeHtml(name)}`,
      `📞 <b>Телефон:</b> ${escapeHtml(phone)}`,
      `🚙 <b>Авто:</b> ${escapeHtml(brand)} ${escapeHtml(model)}`,
      `📅 <b>Год:</b> ${year}`,
    ].join("\n");

    const tgRes = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      },
    );

    const tgData = await tgRes.json();
    if (!tgRes.ok || !tgData.ok) {
      console.error("Telegram error:", tgData);
      return new Response(
        JSON.stringify({ error: "Не удалось отправить заявку" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("submit-lead error:", err);
    return new Response(
      JSON.stringify({ error: "Внутренняя ошибка сервера" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
