import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MarketPro</h3>
            <p className="text-sm text-muted-foreground">
              Маркетинговые услуги и продвижение для вашего бизнеса
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Главная
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Услуги
              </Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Примеры работ
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <div className="flex flex-col gap-2">
              <Link to="/testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Отзывы
              </Link>
              <Link to="/contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Контакты
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+79999999999" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (999) 999-99-99
              </a>
              <a href="mailto:info@marketpro.ru" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@marketpro.ru
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MarketPro. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
