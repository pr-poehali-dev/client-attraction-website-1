import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const projects = [
    {
      title: 'Интернет-магазин одежды',
      category: 'E-commerce',
      description: 'Комплексное продвижение: SEO, таргетированная реклама, SMM',
      results: [
        'Рост продаж на 280% за 6 месяцев',
        'Увеличение трафика в 4 раза',
        'ROI рекламы 420%'
      ],
      tags: ['SEO', 'Реклама', 'SMM']
    },
    {
      title: 'Сеть фитнес-клубов',
      category: 'Услуги',
      description: 'Запуск рекламных кампаний и ведение социальных сетей',
      results: [
        '500+ новых клиентов за 3 месяца',
        'Снижение стоимости лида на 45%',
        'Рост узнаваемости бренда на 65%'
      ],
      tags: ['Таргет', 'SMM', 'Бренд']
    },
    {
      title: 'Образовательная платформа',
      category: 'Образование',
      description: 'SEO-продвижение и контент-маркетинг',
      results: [
        'Органический трафик +350%',
        'Топ-10 по 200+ запросам',
        'Конверсия из трафика 8.5%'
      ],
      tags: ['SEO', 'Контент']
    },
    {
      title: 'Ресторанная сеть',
      category: 'HoReCa',
      description: 'Управление соцсетями и геотаргетинг',
      results: [
        'Охват 500 000+ человек/месяц',
        'Вовлеченность аудитории 12%',
        'Рост заказов на 40%'
      ],
      tags: ['SMM', 'Геотаргет']
    },
    {
      title: 'B2B SaaS сервис',
      category: 'Технологии',
      description: 'Email-маркетинг и LinkedIn продвижение',
      results: [
        '150+ лидов B2B сегмента',
        'Open Rate 32%',
        'Конверсия в клиента 18%'
      ],
      tags: ['Email', 'LinkedIn', 'B2B']
    },
    {
      title: 'Стоматологическая клиника',
      category: 'Медицина',
      description: 'Локальное SEO и контекстная реклама',
      results: [
        'Рост записей на 220%',
        'Позиции в Топ-3 Яндекс',
        'CPL снижен на 55%'
      ],
      tags: ['SEO', 'Контекст', 'Локал']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Примеры работ</h1>
            <p className="text-xl text-muted-foreground">
              Кейсы наших клиентов с измеримыми результатами
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-lg border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="Briefcase" size={48} className="text-primary/40" />
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="TrendingUp" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Хотите таких же результатов?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Расскажем, как мы поможем вырастить ваш бизнес
            </p>
            <a
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Обсудить проект
              <Icon name="ArrowRight" size={16} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;