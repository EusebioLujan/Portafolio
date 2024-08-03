'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 8000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Contenedor de imágenes */}
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full">
              <Image src={image} alt={`Slide ${index}`} className="m-auto h-80 w-10/12 object-cover" width={500} height={500} />
            </div>
          ))}
        </div>
         </div>
      {/* Puntos indicadores */}
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`mx-1 w-3 h-3 rounded-full ${currentIndex === index ? 'bg-textcolorv' : 'bg-gray-400'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
