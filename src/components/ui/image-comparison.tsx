
import { useState, useRef, useEffect } from "react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const ImageComparison = ({ beforeImage, afterImage, title }: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      updateSliderPosition(e.clientX);
    } else if (isHovering) {
      updateSliderPosition(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && e.touches[0]) {
      e.preventDefault();
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('touchend', handleGlobalTouchEnd);
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-64 md:h-72 lg:h-80 overflow-hidden rounded-xl shadow-2xl cursor-col-resize select-none group transition-all duration-300 hover:shadow-3xl"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        if (!isDragging) setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleEnd}
    >
      {/* Imagen del después (fondo) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt={`${title} - Después`}
          className="w-full h-full object-cover object-center transition-all duration-300"
          draggable={false}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Imagen del antes (con clip-path) */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-100 ease-out"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Antes`}
          className="w-full h-full object-cover object-center"
          draggable={false}
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Línea divisoria mejorada */}
      <div
        className={`absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-20 transition-all duration-100 ease-out ${
          isDragging || isHovering ? 'w-1' : 'w-0.5'
        }`}
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle del slider */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            bg-white rounded-full shadow-lg border-2 border-gray-300 cursor-col-resize
            transition-all duration-200 flex items-center justify-center
            ${isDragging || isHovering ? 'w-12 h-12 scale-110' : 'w-10 h-10'}
            hover:scale-125 hover:shadow-xl`}
        >
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
            <div className="w-0.5 h-4 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Etiquetas mejoradas */}
      <div className="absolute top-4 left-4 z-30">
        <div className="bg-black/80 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-white/20 transition-all duration-300 hover:bg-black/90">
          Antes
        </div>
      </div>
      
      <div className="absolute top-4 right-4 z-30">
        <div className="bg-white/90 backdrop-blur-sm text-black text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-black/20 transition-all duration-300 hover:bg-white">
          Después
        </div>
      </div>

      {/* Indicador de progreso sutil */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
        <div className={`bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full transition-all duration-300 ${
          isDragging || isHovering ? 'opacity-100' : 'opacity-0'
        }`}>
          {Math.round(sliderPosition)}%
        </div>
      </div>

      {/* Instrucciones de uso */}
      <div className={`absolute bottom-4 right-4 z-30 transition-all duration-300 ${
        !isDragging && !isHovering ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
          Desliza para comparar
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
