import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Маркетинг, который приводит клиентов
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Разрабатываем эффективные стратегии продвижения для вашего бизнеса. Увеличиваем продажи, привлекаем целевую аудиторию.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/contacts">
                <Button size="lg">Получить консультацию</Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">Наши услуги</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-muted py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="TrendingUp" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">SEO-продвижение</h3>
                  <p className="text-muted-foreground">
                    Выводим ваш сайт в топ поисковых систем. Привлекаем органический трафик.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Target" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Таргетированная реклама</h3>
                  <p className="text-muted-foreground">
                    Настраиваем точную рекламу в социальных сетях для вашей целевой аудитории.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name="LineChart" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Контекстная реклама</h3>
                  <p className="text-muted-foreground">
                    Запускаем эффективные рекламные кампании в Яндекс.Директ и Google Ads.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Link to="/services">
                <Button variant="outline">Все услуги</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5 лет</div>
              <p className="text-muted-foreground">На рынке</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <p className="text-muted-foreground">Средний рост продаж</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Поддержка клиентов</p>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
            <p className="text-xl mb-8 opacity-90">
              Получите бесплатную консультацию и узнайте, как мы можем помочь вашему бизнесу расти
            </p>
            <Link to="/contacts">
              <Button size="lg" variant="secondary">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
