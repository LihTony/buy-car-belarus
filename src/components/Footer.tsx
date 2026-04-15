import { Car, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-extrabold">
              <Car className="w-6 h-6 text-primary" />
              <span>Авто<span className="text-gradient">Выкуп</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Срочный выкуп автомобилей по всей Беларуси. Работаем быстро, платим дорого.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Контакты</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+375291234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +375 (29) 123-45-67
              </a>
              <a href="mailto:info@autovykup.by" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> info@autovykup.by
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Беларусь, все регионы
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Режим работы</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Ежедневно, без выходных</p>
              <p className="text-primary font-semibold">24/7</p>
              <p className="pt-2">Выезд по всей Беларуси бесплатно</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} АвтоВыкуп. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
