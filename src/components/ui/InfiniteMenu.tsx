
import React from 'react';

const services = [
  { name: "Carillas mínimamente invasivas", icon: "✨" },
  { name: "Coronas de circonio", icon: "👑" },
  { name: "Implantes dentales", icon: "🦷" },
  { name: "Prótesis removibles", icon: "🔧" },
  { name: "Rehabilitación estética", icon: "💎" },
  { name: "Diseño de sonrisa", icon: "😊" },
  { name: "Blanqueamiento", icon: "⚡" },
  { name: "Ortodoncia invisible", icon: "🔍" },
];

const InfiniteMenu = () => {
  return (
    <div className="overflow-hidden bg-dental-dark py-8">
      <div className="flex animate-scroll">
        {[...Array(3)].map((_, groupIndex) => (
          <div key={groupIndex} className="flex space-x-8 mr-8">
            {services.map((service, index) => (
              <div
                key={`${groupIndex}-${index}`}
                className="flex items-center space-x-3 bg-black bg-opacity-30 px-6 py-3 rounded-lg border border-white border-opacity-20 backdrop-blur-sm hover:bg-opacity-50 transition-all duration-300 whitespace-nowrap"
              >
                <span className="text-2xl">{service.icon}</span>
                <h2 className="font-playfair font-bold text-sm md:text-lg lg:text-xl xl:text-2xl text-white leading-tight mb-0.5 md:mb-1">
                  {service.name}
                </h2>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteMenu;
