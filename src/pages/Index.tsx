import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      title: "Распил ДСП",
      description: "Точный раскрой материалов по вашим размерам",
      icon: "Zap"
    },
    {
      title: "Лазерная резка",
      description: "Высокоточная обработка с минимальными допусками",
      icon: "Crosshair"
    },
    {
      title: "Изготовление мебели",
      description: "Индивидуальная мебель под ваши потребности",
      icon: "Home"
    },
    {
      title: "Гипсовые фигуры",
      description: "Декоративные элементы и архитектурные детали",
      icon: "Shapes"
    },
    {
      title: "Фрезеровка",
      description: "Создание рельефных поверхностей и пазов",
      icon: "Settings"
    },
    {
      title: "Проектирование",
      description: "Разработка чертежей и 3D-моделей",
      icon: "PenTool"
    },
    {
      title: "Запчасти для медтехники",
      description: "Изготовление комплектующих по спецификации",
      icon: "Activity"
    },
    {
      title: "Животноводство",
      description: "Оборудование и конструкции для фермерских хозяйств",
      icon: "TreePine"
    }
  ];

  const portfolioItems = [
    {
      image: "/img/a26f4400-0d37-458a-8141-12d08c6e1df7.jpg",
      title: "Точная обработка",
      description: "Высокоточная обработка деталей на станках ЧПУ"
    },
    {
      image: "/img/65069be6-fae4-421f-b285-dc3ccaa98cc7.jpg",
      title: "Лазерная резка",
      description: "Создание сложных орнаментов и декоративных элементов"
    },
    {
      image: "/img/799e32dd-ed42-4ac7-b7da-c54ba9b3db24.jpg",
      title: "Мебель на заказ",
      description: "Изготовление качественной мебели по индивидуальным проектам"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-wood-light/20 rounded-full backdrop-blur-sm">
            <Icon name="Hammer" size={20} className="text-wood-dark" />
            <span className="text-wood-dark font-medium text-sm">Многопрофильная мастерская</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-wood-dark mb-6 leading-tight">
            Мастерская
            <br />
            <span className="text-wood-medium">полного цикла</span>
          </h1>
          
          <p className="text-xl text-wood-dark/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Профессиональное изготовление изделий из дерева, металла и других материалов. 
            От проектирования до финальной обработки.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-wood-dark hover:bg-wood-dark/90 text-white px-8 py-4 rounded-lg font-medium"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-wood-dark text-wood-dark hover:bg-wood-dark hover:text-white px-8 py-4 rounded-lg font-medium"
            >
              <Icon name="Eye" size={20} className="mr-2" />
              Портфолио работ
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wood-dark mb-4">Наши услуги</h2>
            <p className="text-lg text-wood-dark/70 max-w-2xl mx-auto">
              Широкий спектр производственных услуг для различных отраслей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group bg-white/60 backdrop-blur-sm border-wood-light/30 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 bg-wood-medium/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-wood-medium/30 transition-colors">
                    <Icon name={service.icon} size={24} className="text-wood-dark" />
                  </div>
                  <CardTitle className="text-lg text-wood-dark">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-wood-dark/60 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-wood-dark mb-4">Портфолио</h2>
            <p className="text-lg text-wood-dark/70 max-w-2xl mx-auto">
              Примеры наших работ и производственных возможностей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden bg-white/60 backdrop-blur-sm border-wood-light/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-wood-dark">{item.title}</CardTitle>
                  <CardDescription className="text-wood-dark/60">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-wood-medium hover:bg-wood-medium/90 text-white px-8 py-4 rounded-lg font-medium"
            >
              <Icon name="FolderOpen" size={20} className="mr-2" />
              Смотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-wood-light/30 backdrop-blur-sm border-wood-light/50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl text-wood-dark mb-4">Контакты</CardTitle>
              <CardDescription className="text-lg text-wood-dark/70">
                Свяжитесь с нами для обсуждения вашего проекта
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wood-dark/10 rounded-lg flex items-center justify-center">
                      <Icon name="Phone" size={20} className="text-wood-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Телефон</p>
                      <p className="text-wood-dark/70">+7 (XXX) XXX-XX-XX</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wood-dark/10 rounded-lg flex items-center justify-center">
                      <Icon name="Mail" size={20} className="text-wood-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Email</p>
                      <p className="text-wood-dark/70">info@masterskaya.ru</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wood-dark/10 rounded-lg flex items-center justify-center">
                      <Icon name="MapPin" size={20} className="text-wood-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Адрес</p>
                      <p className="text-wood-dark/70">г. Москва, ул. Производственная, 15</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-wood-dark/10 rounded-lg flex items-center justify-center">
                      <Icon name="Clock" size={20} className="text-wood-dark" />
                    </div>
                    <div>
                      <p className="font-medium text-wood-dark">Режим работы</p>
                      <p className="text-wood-dark/70">Пн-Пт: 8:00-18:00</p>
                      <p className="text-wood-dark/70">Сб: 9:00-15:00</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-wood-dark mb-4">Наши преимущества</h3>
                  
                  <div className="space-y-3">
                    <Badge variant="secondary" className="bg-wood-medium/20 text-wood-dark border-0 px-3 py-1">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Опыт работы 15+ лет
                    </Badge>
                    
                    <Badge variant="secondary" className="bg-wood-medium/20 text-wood-dark border-0 px-3 py-1">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Современное оборудование
                    </Badge>
                    
                    <Badge variant="secondary" className="bg-wood-medium/20 text-wood-dark border-0 px-3 py-1">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Соблюдение сроков
                    </Badge>
                    
                    <Badge variant="secondary" className="bg-wood-medium/20 text-wood-dark border-0 px-3 py-1">
                      <Icon name="CheckCircle" size={16} className="mr-2" />
                      Гарантия качества
                    </Badge>
                  </div>

                  <div className="pt-6">
                    <Button 
                      className="w-full bg-wood-dark hover:bg-wood-dark/90 text-white py-3 rounded-lg font-medium"
                    >
                      <Icon name="MessageSquare" size={20} className="mr-2" />
                      Написать в WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-wood-light/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Hammer" size={24} className="text-wood-dark" />
            <span className="text-xl font-bold text-wood-dark">Мастерская</span>
          </div>
          <p className="text-wood-dark/60">
            © 2024 Многопрофильная мастерская. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;