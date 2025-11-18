import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Анна Смирнова',
      position: 'Владелец магазина одежды',
      company: 'Fashion Store',
      avatar: '👩',
      rating: 5,
      text: 'Работаем с MarketPro уже год. За это время продажи выросли в 3 раза! Особенно впечатлила работа с таргетированной рекламой. Команда всегда на связи и оперативно решает любые вопросы.'
    },
    {
      name: 'Дмитрий Волков',
      position: 'Директор',
      company: 'Сеть фитнес-клубов',
      avatar: '👨',
      rating: 5,
      text: 'Профессиональный подход к делу. Ребята не просто запустили рекламу, а полностью проработали стратегию продвижения. Результат превзошел ожидания — поток клиентов увеличился в разы.'
    },
    {
      name: 'Елена Петрова',
      position: 'Основатель',
      company: 'Образовательная платформа',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Отличная работа по SEO! Сайт вышел в топ по всем ключевым запросам. Органический трафик растет каждый месяц. Очень довольны сотрудничеством и детальной аналитикой.'
    },
    {
      name: 'Сергей Иванов',
      position: 'Управляющий',
      company: 'Ресторан',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Ведение соцсетей на высшем уровне! Красивый контент, активная аудитория, постоянный приток новых гостей. Рекомендую всем, кто хочет развивать свой бизнес в digital.'
    },
    {
      name: 'Мария Ковалева',
      position: 'CEO',
      company: 'Tech Startup',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Работали над запуском нашего B2B продукта. Email-кампании и LinkedIn стратегия принесли отличные результаты. Команда действительно понимает специфику технологического бизнеса.'
    },
    {
      name: 'Александр Соколов',
      position: 'Главный врач',
      company: 'Стоматология',
      avatar: '👨‍⚕️',
      rating: 5,
      text: 'Благодарим за качественную настройку рекламы и локальное SEO. Количество записей увеличилось более чем в два раза. Очень довольны прозрачностью отчетов и результатами работы.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Отзывы клиентов</h1>
            <p className="text-xl text-muted-foreground">
              Что говорят о нас наши партнеры
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Клиенты остаются с нами</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Средняя оценка</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Станьте нашим следующим успехом</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Присоединяйтесь к компаниям, которые уже достигли своих целей с нами
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Начать сотрудничество
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
