
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

  const handleTouchStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  // Check if this is the carillas case (id: 2) based on the title
  const isCarillas = title.toLowerCase().includes('carillas');

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-96 rounded-lg overflow-hidden cursor-col-resize select-none shadow-lg"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (right side) - Base layer */}
      <div className="absolute inset-0">
        <img 
          src={afterImage} 
          alt={`${title} - Después`}
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
        <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-black text-sm font-medium px-4 py-2 rounded-md z-10 shadow-lg border border-black/10">
          Después
        </span>
      </div>

      {/* Before Image (left side) - Clipped overlay */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={beforeImage} 
          alt={`${title} - Antes`}
          className="w-full h-full object-cover object-center"
          draggable={false}
        />
        <span className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-md z-10 shadow-lg border border-white/20">
          Antes
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-30 cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-gray-200">
          <div className="flex space-x-1">
            <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
            <div className="w-0.5 h-4 bg-gray-400 rounded"></div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-sm px-4 py-2 rounded-md z-20 border border-white/20">
        Arrastra para comparar
      </div>
    </div>
  );
}
