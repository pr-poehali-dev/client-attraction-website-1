import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Home = () => {
  const features = [
    {
      icon: 'TrendingUp',
      title: 'Увеличение продаж',
      description: 'Комплексная стратегия для роста конверсии и прибыли'
    },
    {
      icon: 'Users',
      title: 'Привлечение клиентов',
      description: 'Эффективные каналы и инструменты для лидогенерации'
    },
    {
      icon: 'Target',
      title: 'Точное попадание',
      description: 'Анализ аудитории и персонализированные кампании'
    },
    {
      icon: 'BarChart3',
      title: 'Аналитика и отчёты',
      description: 'Прозрачные метрики эффективности в реальном времени'
    }
  ];

  const stats = [
    { value: '200+', label: 'Клиентов' },
    { value: '350%', label: 'Средний рост ROI' },
    { value: '5 лет', label: 'На рынке' },
    { value: '98%', label: 'Удовлетворённость' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Маркетинг, который <span className="text-primary">работает</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Привлекаем клиентов, увеличиваем продажи и масштабируем ваш бизнес
                с помощью современных маркетинговых стратегий
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Наши услуги
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы предоставляем полный спектр маркетинговых услуг для достижения ваших бизнес-целей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={feature.icon} size={24} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы увеличить продажи?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Оставьте заявку, и мы разработаем индивидуальную стратегию продвижения для вашего бизнеса
              </p>
              <Button size="lg" variant="secondary" className="text-base">
                Начать сотрудничество
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
