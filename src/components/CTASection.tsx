import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden p-12 md:p-20 text-center bg-gradient-primary shadow-glow">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-foreground/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-foreground/20 rounded-full translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="relative space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-primary-foreground">
              Готовы продать авто?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Позвоните нам прямо сейчас — и получите деньги уже сегодня!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="tel:+375291234567"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-background text-foreground font-bold text-lg transition-transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                +375 (29) 123-45-67
              </a>
              <a
                href="https://t.me/username"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-bold text-lg transition-all hover:bg-primary-foreground/10"
              >
                <MessageCircle className="w-5 h-5" />
                Написать в Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
