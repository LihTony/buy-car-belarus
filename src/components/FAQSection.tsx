import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Сколько времени занимает выкуп?",
    a: "Весь процесс — от заявки до получения денег — занимает от 1 часа. Оценку онлайн делаем за 15 минут.",
  },
  {
    q: "Какой процент от рыночной стоимости вы предлагаете?",
    a: "Мы предлагаем до 97% от рыночной стоимости автомобиля. Точную цену озвучим после осмотра.",
  },
  {
    q: "Вы выезжаете в другие города?",
    a: "Да, мы работаем по всей Беларуси. Бесплатный выезд в Минск, Брест, Гомель, Гродно, Витебск, Могилёв и другие города.",
  },
  {
    q: "Какие документы нужны для продажи?",
    a: "Паспорт владельца, техпаспорт (свидетельство о регистрации), доверенность (если продаёте не свой авто).",
  },
  {
    q: "Выкупаете ли вы авто в кредите?",
    a: "Да, мы выкупаем кредитные автомобили. Погашаем остаток кредита, а разницу выплачиваем вам.",
  },
  {
    q: "Можно ли продать авто без техосмотра?",
    a: "Да, наличие техосмотра не обязательно. Мы выкупаем авто в любом состоянии.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Частые <span className="text-gradient">вопросы</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass rounded-xl px-6 border-border/50 data-[state=open]:border-primary/30 data-[state=open]:shadow-glow transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
