import React from 'react';
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    { name: "Распил ДСП", icon: "Zap" },
    { name: "Лазерная резка", icon: "Crosshair" },
    { name: "Изготовление мебели", icon: "Home" },
    { name: "Гипсовые фигуры", icon: "Shapes" },
    { name: "Фрезеровка", icon: "Settings" },
    { name: "Проектирование", icon: "PenTool" },
    { name: "Запчасти", icon: "Wrench" },
    { name: "Медицинское оборудование", icon: "Activity" },
    { name: "Животноводство", icon: "TreePine" }
  ];

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-cmyk-cyan rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Hammer" size={40} className="text-white" />
          </div>
          
          <h1 className="text-3xl font-bold text-cmyk-key mb-2">
            Мастерская полного цикла
          </h1>
          
          <div className="text-cmyk-key/60 mb-4">
            ID: MST-2024-001
          </div>
          
          <div className="w-full h-1 bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-cmyk-key mb-6 text-center">Наши услуги</h2>
          
          <div className="grid grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-200 bg-white/60"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-3" 
                     style={{backgroundColor: `${index % 4 === 0 ? '#00AEEF' : index % 4 === 1 ? '#EC008C' : index % 4 === 2 ? '#FFF200' : '#231F20'}20`}}>
                  <Icon 
                    name={service.icon} 
                    size={20} 
                    className={`${index % 4 === 0 ? 'text-cmyk-cyan' : index % 4 === 1 ? 'text-cmyk-magenta' : index % 4 === 2 ? 'text-cmyk-yellow' : 'text-cmyk-key'}`}
                  />
                </div>
                <span className="text-sm text-cmyk-key font-medium text-center leading-tight">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cmyk-cyan/20 rounded-lg flex items-center justify-center">
              <Icon name="Phone" size={18} className="text-cmyk-cyan" />
            </div>
            <div>
              <div className="text-sm text-cmyk-key/60">Телефон</div>
              <div className="font-medium text-cmyk-key">+7 (XXX) XXX-XX-XX</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cmyk-magenta/20 rounded-lg flex items-center justify-center">
              <Icon name="Mail" size={18} className="text-cmyk-magenta" />
            </div>
            <div>
              <div className="text-sm text-cmyk-key/60">Email</div>
              <div className="font-medium text-cmyk-key">info@masterskaya.ru</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cmyk-yellow/20 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={18} className="text-cmyk-key" />
            </div>
            <div>
              <div className="text-sm text-cmyk-key/60">Адрес</div>
              <div className="font-medium text-cmyk-key">г. Москва, ул. Производственная, 15</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cmyk-key/20 rounded-lg flex items-center justify-center">
              <Icon name="Clock" size={18} className="text-cmyk-key" />
            </div>
            <div>
              <div className="text-sm text-cmyk-key/60">Режим работы</div>
              <div className="font-medium text-cmyk-key">Пн-Пт: 8:00-18:00, Сб: 9:00-15:00</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <div className="text-xs text-cmyk-key/50">
            © 2024 Многопрофильная мастерская
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;