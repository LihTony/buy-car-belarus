import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Срочный выкуп авто в Беларуси"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Работаем 24/7 по всей Беларуси
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
            Срочный
            <br />
            <span className="text-gradient">выкуп авто</span>
            <br />
            за 1 час
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Выкупим ваш автомобиль <span className="text-foreground font-semibold">до 97% от рыночной стоимости</span>.
            Бесплатный выезд, оценка и оформление. Деньги сразу на руки.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="tel:+375291234567"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-bold text-lg shadow-glow animate-pulse-glow transition-transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              +375 (29) 123-45-67
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass font-semibold transition-all hover:border-primary/50 group"
            >
              Как это работает
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            {[
              { value: "3000+", label: "авто выкуплено" },
              { value: "15 мин", label: "оценка онлайн" },
              { value: "24/7", label: "без выходных" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
