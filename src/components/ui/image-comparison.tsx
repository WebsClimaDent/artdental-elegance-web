
import { useState, useRef, useCallback } from 'react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

export default function ImageComparison({ beforeImage, afterImage, title }: ImageComparisonProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  // Check if this is the carillas case (id: 2) based on the title
  const isCarillas = title.toLowerCase().includes('carillas');

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-lg overflow-hidden cursor-col-resize select-none ${
        isCarillas ? 'h-80' : 'h-72'
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
    >
      {/* After Image (right side) */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt={`${title} - Después`}
          className={`w-full h-full object-cover ${
            isCarillas ? 'object-bottom' : 'object-center'
          }`}
          draggable={false}
        />
        <span className={`absolute ${isCarillas ? 'bottom-4' : 'top-4'} right-4 bg-white text-black text-sm px-3 py-1 rounded-md z-10`}>
          Después
        </span>
      </div>

      {/* Before Image (left side) - clipped */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`${title} - Antes`}
          className={`w-full h-full object-cover ${
            isCarillas ? 'object-bottom' : 'object-center'
          }`}
          draggable={false}
        />
        <span className={`absolute ${isCarillas ? 'bottom-4' : 'top-4'} left-4 bg-black text-white text-sm px-3 py-1 rounded-md z-10`}>
          Antes
        </span>
      </div>

      {/* Slider */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-20 cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-1 h-4 bg-gray-400"></div>
          <div className="w-1 h-4 bg-gray-400 ml-1"></div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-md">
        Arrastra para comparar
      </div>
    </div>
  );
}
