
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
}

interface InfiniteTeamCarouselProps {
  members: TeamMember[];
}

const InfiniteTeamCarousel = ({ members }: InfiniteTeamCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Duplicar los miembros para crear efecto infinito
  const extendedMembers = [...members, ...members, ...members];
  const middleIndex = members.length;

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(prev => (prev + 1) % members.length);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(prev => (prev - 1 + members.length) % members.length);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Auto-play opcional
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index: number) => {
    const relativeIndex = index - activeIndex;
    const isActive = relativeIndex === 0;
    
    let transform = `translateX(${relativeIndex * 240}px)`;
    let scale = 1;
    let zIndex = 1;
    let opacity = 0.6;

    if (isActive) {
      scale = 1.1;
      zIndex = 10;
      opacity = 1;
    } else if (Math.abs(relativeIndex) === 1) {
      scale = 0.9;
      zIndex = 5;
      opacity = 0.8;
    } else if (Math.abs(relativeIndex) === 2) {
      scale = 0.8;
      zIndex = 3;
      opacity = 0.6;
    } else {
      scale = 0.7;
      zIndex = 1;
      opacity = 0.4;
    }

    return {
      transform: `${transform} scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Contenedor principal del carrusel */}
      <div className="relative h-full flex items-center justify-center">
        {/* Cards del equipo */}
        <div className="relative w-80 h-80">
          {members.map((member, index) => {
            const adjustedIndex = (index - activeIndex + members.length) % members.length;
            const shouldRender = Math.abs(adjustedIndex) <= 2 || 
              Math.abs(adjustedIndex - members.length) <= 2 || 
              Math.abs(adjustedIndex + members.length) <= 2;

            if (!shouldRender) return null;

            return (
              <div
                key={`${member.id}-${index}`}
                className={`absolute top-0 left-1/2 w-64 h-80 cursor-pointer transition-all duration-300 ease-out ${
                  isTransitioning ? 'pointer-events-none' : ''
                }`}
                style={{
                  ...getCardStyle(index),
                  marginLeft: '-128px', // Centrar la card
                }}
                onClick={() => goToSlide(index)}
              >
                <div className="w-full h-full bg-dental-dark border border-gray-700 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold mb-1 font-playfair text-white truncate">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm truncate">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controles de navegación */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="absolute left-8 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="absolute right-8 z-20 p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Indicadores de navegación */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Información del miembro activo */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 max-w-md">
        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
          <h3 className="text-xl font-semibold mb-2 font-playfair text-white">
            {members[activeIndex]?.name}
          </h3>
          <p className="text-gray-300 mb-2 font-medium">
            {members[activeIndex]?.role}
          </p>
          {members[activeIndex]?.bio && (
            <p className="text-gray-400 text-sm leading-relaxed">
              {members[activeIndex].bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfiniteTeamCarousel;
