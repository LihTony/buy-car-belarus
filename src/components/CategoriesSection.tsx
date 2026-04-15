import { Car, Truck, Wrench, AlertTriangle, CreditCard, Clock } from "lucide-react";

const categories = [
  { icon: Car, title: "Легковые авто", desc: "Любые марки и модели" },
  { icon: Truck, title: "Внедорожники и кроссоверы", desc: "SUV всех классов" },
  { icon: Wrench, title: "Авто после ДТП", desc: "В любом состоянии" },
  { icon: AlertTriangle, title: "Проблемные авто", desc: "С запретами и обременениями" },
  { icon: CreditCard, title: "Кредитные авто", desc: "Погасим кредит за вас" },
  { icon: Clock, title: "Авто с пробегом", desc: "Любой год выпуска" },
];

const CategoriesSection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Какие авто <span className="text-gradient">выкупаем</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Мы работаем с любыми автомобилями — без ограничений
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-5 p-6 rounded-2xl glass shadow-card transition-all hover:border-primary/30 hover:shadow-glow group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 transition-colors group-hover:bg-primary/20">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
