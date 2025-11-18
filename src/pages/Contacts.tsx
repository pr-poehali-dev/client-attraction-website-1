import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contacts = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contacts = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@marketpro.ru',
      link: 'mailto:info@marketpro.ru'
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567'
    },
    {
      icon: 'MapPin',
      title: 'Офис',
      value: 'г. Москва, ул. Тверская, д. 1',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <section className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h1>
            <p className="text-xl text-muted-foreground">
              Расскажите о вашем проекте, и мы предложим оптимальное решение
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-border bg-card text-center"
              >
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary">
                  <Icon name={contact.icon} size={24} />
                </div>
                <h3 className="font-semibold mb-2">{contact.title}</h3>
                {contact.link ? (
                  <a
                    href={contact.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="p-8 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-bold mb-6">Оставьте заявку</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Мы в социальных сетях</h3>
              <div className="flex justify-center gap-6">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Icon name="Instagram" size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Icon name="Facebook" size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Icon name="Linkedin" size={20} />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-card border border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                >
                  <Icon name="Send" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
