import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Александр Петров',
      position: 'Генеральный директор',
      company: 'TechStore',
      text: 'Сотрудничаем с MarketPro уже год. За это время наши продажи выросли на 180%, а стоимость привлечения клиента снизилась вдвое. Профессиональная команда, которая действительно погружается в бизнес клиента.',
      rating: 5,
      initials: 'АП'
    },
    {
      name: 'Елена Соколова',
      position: 'Владелец',
      company: 'Сеть ресторанов "Вкусно"',
      text: 'Результаты превзошли все ожидания! Наши соцсети ожили, заказы через сайт увеличились в 3 раза. Отдельное спасибо за креативный подход и внимание к деталям.',
      rating: 5,
      initials: 'ЕС'
    },
    {
      name: 'Дмитрий Волков',
      position: 'Маркетинг-директор',
      company: 'ProManufacture',
      text: 'Ребята помогли нам выстроить системный подход к маркетингу. Качество лидов значительно повысилось, а воронка продаж стала прозрачной и управляемой. Рекомендую!',
      rating: 5,
      initials: 'ДВ'
    },
    {
      name: 'Ольга Морозова',
      position: 'Основатель',
      company: 'Онлайн-школа "Знание"',
      text: 'Прекрасная команда профессионалов! Помогли масштабировать проект с 50 до 500 студентов за полгода. Все стратегии работают, аналитика на высшем уровне.',
      rating: 5,
      initials: 'ОМ'
    },
    {
      name: 'Сергей Иванов',
      position: 'Главный врач',
      company: 'Медицинский центр "Здоровье+"',
      text: 'Очень довольны результатами! Поток пациентов увеличился более чем в 2 раза, при этом мы стали привлекать именно нашу целевую аудиторию. Отличная работа!',
      rating: 5,
      initials: 'СИ'
    },
    {
      name: 'Анна Королева',
      position: 'CEO',
      company: 'StartupHub',
      text: 'MarketPro стали нашими надежными партнерами в продвижении. Благодаря их усилиям мы привлекли раунд инвестиций и масштабировали базу пользователей в 5 раз!',
      rating: 5,
      initials: 'АК'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl text-muted-foreground">
              Узнайте, что говорят о нас наши клиенты
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">Клиентов рекомендуют нас</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.9</div>
                <p className="text-muted-foreground">Средняя оценка на Яндекс</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Станьте нашим следующим успешным клиентом
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Начните развивать свой бизнес с нами уже сегодня
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Начать сотрудничество</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
