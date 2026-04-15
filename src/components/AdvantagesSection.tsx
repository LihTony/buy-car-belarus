import { Zap, Shield, MapPin, Banknote } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Молниеносно",
    description: "Оценка за 15 минут, сделка за 1 час. Никаких долгих ожиданий и бюрократии.",
  },
  {
    icon: Banknote,
    title: "Выгодно",
    description: "Предлагаем до 97% от рыночной стоимости. Деньги наличными или переводом — сразу.",
  },
  {
    icon: MapPin,
    title: "По всей Беларуси",
    description: "Бесплатный выезд в любой город: Минск, Брест, Гомель, Гродно, Витебск, Могилёв.",
  },
  {
    icon: Shield,
    title: "Безопасно",
    description: "Официальное оформление, прозрачная оценка, договор купли-продажи на месте.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Мы делаем продажу автомобиля простой, быстрой и выгодной
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, i) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl glass shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
