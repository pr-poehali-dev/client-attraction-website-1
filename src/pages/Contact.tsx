import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'info@marketpro.ru',
      link: 'mailto:info@marketpro.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'Москва, ул. Примерная, 123',
      link: null
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Пт: 9:00 - 18:00',
      link: null
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Оставьте заявку, и мы свяжемся с вами в течение часа
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Отправьте заявку</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Имя *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@mail.ru"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Телефон *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Компания
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Название компании"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Сообщение *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Расскажите о вашем проекте или задаче"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name={info.icon as any} size={24} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="border-0 shadow-md bg-secondary">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Мы в соцсетях</h3>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Facebook" size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Instagram" size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Linkedin" size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Icon name="Youtube" size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
