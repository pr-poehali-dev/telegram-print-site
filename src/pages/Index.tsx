import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: 'CreditCard',
      title: 'Визитки',
      description: 'Профессиональные визитки на качественной бумаге с современным дизайном',
      price: 'от 500₽'
    },
    {
      icon: 'FileText',
      title: 'Флаеры',
      description: 'Яркие рекламные флаеры для привлечения внимания к вашему бизнесу',
      price: 'от 300₽'
    },
    {
      icon: 'BookOpen',
      title: 'Буклеты',
      description: 'Информативные буклеты с фальцовкой для презентации услуг',
      price: 'от 800₽'
    },
    {
      icon: 'File',
      title: 'Листовки',
      description: 'Эффективные листовки для массовых рекламных компаний',
      price: 'от 200₽'
    },
    {
      icon: 'Settings',
      title: 'Послепечатная обработка',
      description: 'Полный цикл послепечатной обработки: резка, биговка, переплет',
      price: 'от 100₽'
    },
    {
      icon: 'Heart',
      title: 'Открытки',
      description: 'Поздравительные и рекламные открытки с индивидуальным дизайном',
      price: 'от 400₽'
    }
  ];

  const portfolio = [
    {
      image: '/img/15084eb2-37c3-4c8b-9af7-20f1e473543c.jpg',
      title: 'Визитки для бизнеса',
      category: 'Визитки'
    },
    {
      image: '/img/1bf3344d-dc0d-41ae-ad8f-5f16ced93bbe.jpg',
      title: 'Рекламные материалы',
      category: 'Флаеры и буклеты'
    },
    {
      image: '/img/3ee11e00-2599-419c-81bf-e537b3af1167.jpg',
      title: 'Наше производство',
      category: 'Оборудование'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Printer" className="h-8 w-8 text-primary mr-2" />
              <span className="text-2xl font-roboto font-bold text-gray-900">PrintPro</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary transition-colors">Работы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="MessageCircle" className="h-4 w-4 mr-2" />
              Telegram
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-roboto font-bold text-gray-900 mb-6 animate-fade-in">
              Полиграфические услуги
              <span className="text-primary block">нового поколения</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-open-sans animate-fade-in">
              Качественная печать визиток, флаеров, буклетов и листовок. Быстро, надежно, профессионально. 
              Полный цикл послепечатной обработки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                <Icon name="Phone" className="h-5 w-5 mr-2" />
                Заказать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                <Icon name="Eye" className="h-5 w-5 mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
              Полный спектр полиграфических услуг для вашего бизнеса
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-roboto">{service.title}</CardTitle>
                  <CardDescription className="text-base font-open-sans">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">Наши работы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
              Примеры качественной полиграфии от нашей типографии
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scale-in">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-roboto font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 font-open-sans">{item.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-roboto font-bold text-gray-900 mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-open-sans">
              Готовы обсудить ваш проект? Напишите нам в Telegram или заполните форму
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-roboto">Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center">
                    <Icon name="MessageCircle" className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Telegram</p>
                      <p className="text-gray-600">@printpro_bot</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Mail" className="h-6 w-6 text-primary mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@printpro.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="MapPin" className="h-6 w-6 text-primary mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-gray-600">г. Москва, ул. Полиграфистов, д. 10</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-roboto">Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <Input placeholder="Какая услуга вас интересует?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea placeholder="Опишите ваш проект..." rows={4} />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" className="h-4 w-4 mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Printer" className="h-8 w-8 text-primary mr-2" />
                <span className="text-2xl font-roboto font-bold">PrintPro</span>
              </div>
              <p className="text-gray-400 font-open-sans">
                Профессиональная полиграфия для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-roboto font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Визитки</li>
                <li>Флаеры</li>
                <li>Буклеты</li>
                <li>Листовки</li>
              </ul>
            </div>
            <div>
              <h4 className="font-roboto font-semibold mb-4">Обработка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Биговка</li>
                <li>Переплет</li>
                <li>Открытки</li>
                <li>Резка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-roboto font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Telegram: @printpro_bot</li>
                <li>Телефон: +7 (999) 123-45-67</li>
                <li>Email: info@printpro.ru</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PrintPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;