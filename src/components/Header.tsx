import { Car, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 font-extrabold text-lg">
          <Car className="w-5 h-5 text-primary" />
          <span>Авто<span className="text-gradient">Выкуп</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#how-it-works" className="hover:text-foreground transition-colors">Как это работает</a>
          <a href="#advantages" className="hover:text-foreground transition-colors">Преимущества</a>
          <a href="#faq" className="hover:text-foreground transition-colors">Вопросы</a>
        </nav>

        <a
          href="tel:+375291234567"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm transition-transform hover:scale-105"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">+375 (29) 123-45-67</span>
          <span className="sm:hidden">Позвонить</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
