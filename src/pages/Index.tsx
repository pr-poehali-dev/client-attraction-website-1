import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Маркетинг, который{' '}
              <span className="text-primary">работает</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Помогаем бизнесу привлекать клиентов и расти с помощью эффективных маркетинговых стратегий
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg">
                <Link to="/contact">Получить консультацию</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/portfolio">Наши кейсы</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для продвижения вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="TrendingUp" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SEO продвижение</h3>
                <p className="text-muted-foreground">
                  Выводим сайты в топ поисковых систем и увеличиваем органический трафик
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Target" size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Контекстная реклама</h3>
                <p className="text-muted-foreground">
                  Настраиваем рекламные кампании с максимальным ROI
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name="Users" size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">SMM продвижение</h3>
                <p className="text-muted-foreground">
                  Развиваем ваш бренд в социальных сетях и привлекаем целевую аудиторию
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/services">Все услуги</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы достигаем результатов благодаря профессионализму и индивидуальному подходу
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Успешных проектов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
              <p className="text-muted-foreground">На рынке</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Поддержка клиентов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы увеличить продажи?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Оставить заявку</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
