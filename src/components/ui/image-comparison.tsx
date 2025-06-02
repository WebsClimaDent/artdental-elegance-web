
import { useState } from "react";

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const ImageComparison = ({ beforeImage, afterImage, title }: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="relative w-full h-72 overflow-hidden rounded-lg cursor-col-resize select-none">
      {/* Imagen del después (fondo) */}
      <img
        src={afterImage}
        alt={`${title} - Después`}
        className="absolute inset-0 w-full h-full object-cover object-center"
        draggable={false}
      />
      
      {/* Imagen del antes (con clip-path) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src={beforeImage}
          alt={`${title} - Antes`}
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
      </div>

      {/* Línea divisoria */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 flex items-center justify-center"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full bg-white"></div>
        </div>
      </div>

      {/* Etiquetas */}
      <div className="absolute top-4 left-4 bg-black text-white text-sm px-3 py-1 rounded-md z-20">
        Antes
      </div>
      <div className="absolute top-4 right-4 bg-white text-black text-sm px-3 py-1 rounded-md z-20">
        Después
      </div>

      {/* Área interactiva */}
      <div
        className="absolute inset-0 z-30"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      />
    </div>
  );
};

export default ImageComparison;
