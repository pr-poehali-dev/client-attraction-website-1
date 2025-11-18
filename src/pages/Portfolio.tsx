import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'Интернет-магазин электроники',
      category: 'E-commerce',
      results: [
        'Трафик +250%',
        'Конверсия +180%',
        'Продажи +320%',
      ],
      description: 'Комплексное SEO-продвижение и контекстная реклама для крупного интернет-магазина',
      tags: ['SEO', 'Контекстная реклама', 'Аналитика'],
    },
    {
      title: 'Сеть ресторанов',
      category: 'HoReCa',
      results: [
        'Подписчики +450%',
        'Заказы онлайн +280%',
        'Узнаваемость +200%',
      ],
      description: 'SMM-продвижение и таргетированная реклама для сети из 5 ресторанов',
      tags: ['SMM', 'Таргет', 'Контент'],
    },
    {
      title: 'B2B производство',
      category: 'Производство',
      results: [
        'Лиды +190%',
        'Стоимость лида -35%',
        'ROI +240%',
      ],
      description: 'Лидогенерация через контекстную рекламу и email-маркетинг',
      tags: ['Контекст', 'Email', 'B2B'],
    },
    {
      title: 'Онлайн-школа',
      category: 'Образование',
      results: [
        'Студенты +380%',
        'Охват +420%',
        'Конверсия +165%',
      ],
      description: 'Комплексное продвижение образовательного проекта',
      tags: ['SMM', 'Таргет', 'SEO'],
    },
    {
      title: 'Медицинский центр',
      category: 'Медицина',
      results: [
        'Записи +210%',
        'Трафик +195%',
        'Звонки +240%',
      ],
      description: 'Локальное SEO и контекстная реклама для клиники',
      tags: ['SEO', 'Контекст', 'Локальное SEO'],
    },
    {
      title: 'IT-стартап',
      category: 'Технологии',
      results: [
        'Пользователи +550%',
        'CPL -42%',
        'Инвестиции $2M',
      ],
      description: 'Комплексный маркетинг для технологического стартапа',
      tags: ['Growth', 'Таргет', 'PR'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-20">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Примеры наших работ</h1>
            <p className="text-xl text-muted-foreground">
              Реальные кейсы с измеримыми результатами для бизнеса разных сфер
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">{result}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
