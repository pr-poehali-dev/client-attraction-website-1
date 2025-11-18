import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground">
            MarketPro
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/services') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Услуги
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/portfolio') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Примеры работ
            </Link>
            <Link 
              to="/testimonials" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/testimonials') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Отзывы
            </Link>
            <Link 
              to="/contacts" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contacts') ? 'text-primary' : 'text-muted-foreground'}`}
            >
              Контакты
            </Link>
          </div>
          
          <Link to="/contacts">
            <Button>Связаться</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
