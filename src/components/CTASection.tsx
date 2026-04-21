import { Phone } from "lucide-react";
import LeadForm from "./LeadForm";

const CTASection = () => {
  return (
    <section id="lead-form" className="py-24">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden p-6 md:p-12 bg-gradient-primary shadow-glow">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-foreground/20 rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black text-primary-foreground leading-tight">
                Готовы продать авто?
              </h2>
              <p className="text-primary-foreground/85 text-lg md:text-xl">
                Оставьте заявку — рассчитаем стоимость и перезвоним в течение 15 минут.
                Или позвоните прямо сейчас:
              </p>
              <a
                href="tel:+375291234567"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-background text-foreground font-bold text-lg transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                +375 (29) 123-45-67
              </a>
            </div>

            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
