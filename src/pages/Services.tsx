import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Target',
      title: 'Таргетированная реклама',
      description: 'Настройка и ведение рекламных кампаний в социальных сетях с максимальной эффективностью',
      features: [
        'Анализ целевой аудитории',
        'Создание креативов',
        'A/B тестирование',
        'Оптимизация бюджета'
      ]
    },
    {
      icon: 'Search',
      title: 'SEO продвижение',
      description: 'Комплексная оптимизация сайта для поисковых систем и увеличения органического трафика',
      features: [
        'Технический аудит',
        'Подбор семантики',
        'Внутренняя оптимизация',
        'Внешняя оптимизация'
      ]
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и отчетность',
      description: 'Глубокий анализ маркетинговых данных для принятия обоснованных решений',
      features: [
        'Настройка систем аналитики',
        'Создание дашбордов',
        'Регулярные отчеты',
        'Рекомендации по росту'
      ]
    },
    {
      icon: 'PenTool',
      title: 'Контент-маркетинг',
      description: 'Создание вовлекающего контента для привлечения и удержания аудитории',
      features: [
        'Контент-стратегия',
        'Копирайтинг',
        'Визуальный контент',
        'Email-рассылки'
      ]
    },
    {
      icon: 'Megaphone',
      title: 'SMM продвижение',
      description: 'Управление социальными сетями и создание активного комьюнити вокруг бренда',
      features: [
        'SMM стратегия',
        'Ведение сообществ',
        'Работа с лидерами мнений',
        'Репутационный менеджмент'
      ]
    },
    {
      icon: 'Users',
      title: 'Консалтинг',
      description: 'Экспертная помощь в разработке и реализации маркетинговых стратегий',
      features: [
        'Маркетинговый аудит',
        'Разработка стратегии',
        'Обучение команды',
        'Сопровождение проектов'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Наши услуги
              </h1>
              <p className="text-lg text-muted-foreground">
                Полный спектр маркетинговых услуг для эффективного продвижения вашего бизнеса
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <Icon name={service.icon} size={48} className="text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" size={20} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Нужна консультация?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Свяжитесь с нами, и мы подберем оптимальное решение для вашего бизнеса
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Получить консультацию</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;