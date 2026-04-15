import { Phone, Search, FileCheck, Banknote } from "lucide-react";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Оставьте заявку",
    description: "Позвоните нам или заполните форму. Укажите марку, модель и год выпуска авто.",
  },
  {
    icon: Search,
    step: "02",
    title: "Бесплатная оценка",
    description: "Наш эксперт приедет к вам, осмотрит авто и назовёт точную цену на месте.",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "Оформление сделки",
    description: "Подписываем договор купли-продажи. Все документы оформляем за вас.",
  },
  {
    icon: Banknote,
    step: "04",
    title: "Получите деньги",
    description: "Выплачиваем всю сумму сразу — наличными или переводом на карту.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      <div className="container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Как это <span className="text-gradient">работает</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Четыре простых шага — и деньги у вас
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, i) => (
            <div key={item.step} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-primary/40 to-primary/10" />
              )}
              <div className="text-center space-y-4">
                <div className="relative mx-auto w-20 h-20 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow transition-transform group-hover:scale-110">
                  <item.icon className="w-9 h-9 text-primary-foreground" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-background border-2 border-primary text-xs font-bold flex items-center justify-center text-primary">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
