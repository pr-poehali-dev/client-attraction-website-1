import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      author: 'Александр Петров',
      position: 'Генеральный директор, IT-Solutions',
      text: 'Работа с MarketPro превзошла все ожидания. За полгода удалось увеличить поток качественных лидов в 4 раза. Команда профессионалов, которые понимают специфику B2B.',
      rating: 5,
      initials: 'АП'
    },
    {
      author: 'Елена Смирнова',
      position: 'Маркетолог, EduPlatform',
      text: 'Благодаря их стратегии контент-маркетинга мы смогли выстроить сильный бренд в образовательной нише. Трафик растет стабильно, а подписчики активно вовлечены.',
      rating: 5,
      initials: 'ЕС'
    },
    {
      author: 'Дмитрий Волков',
      position: 'Владелец ресторанной сети',
      text: 'Отличная команда! SMM-продвижение наших ресторанов принесло конкретные результаты - посещаемость выросла на 180%, а инстаграм стал реальным каналом продаж.',
      rating: 5,
      initials: 'ДВ'
    },
    {
      author: 'Ольга Кузнецова',
      position: 'Директор по маркетингу, MedClinic',
      text: 'Профессиональный подход к SEO-продвижению медицинских услуг. Сайт вышел в топ по всем ключевым запросам, количество записей увеличилось в 2.5 раза.',
      rating: 5,
      initials: 'ОК'
    },
    {
      author: 'Сергей Иванов',
      position: 'Основатель интернет-магазина',
      text: 'Настройка контекстной рекламы была сделана на высшем уровне. ROI вырос до 380%, а стоимость привлечения клиента снизилась почти вдвое. Рекомендую!',
      rating: 5,
      initials: 'СИ'
    },
    {
      author: 'Мария Соколова',
      position: 'Владелец онлайн-школы',
      text: 'Ребята помогли нам масштабировать рекламу без потери эффективности. Сейчас привлекаем в 5 раз больше студентов при той же стоимости заявки.',
      rating: 5,
      initials: 'МС'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Отзывы клиентов
              </h1>
              <p className="text-lg text-muted-foreground">
                Нам доверяют компании из разных сфер бизнеса
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <Avatar className="mr-4">
                      <AvatarFallback>{review.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{review.author}</h3>
                      <p className="text-sm text-muted-foreground">{review.position}</p>
                    </div>
                  </div>

                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {review.text}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Средняя оценка</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Рекомендуют нас</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;