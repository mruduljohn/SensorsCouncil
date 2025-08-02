'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselImages = [
  '/images/photo_2025-08-01_20-44-37.jpg',
  '/images/photo_2025-08-01_20-44-50.jpg',
  '/images/photo_2025-08-01_20-44-26.jpg',
  '/images/IMG-20250630-WA0010.jpg'
];

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      {carouselImages.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
        >
          <div className="relative w-full h-full">
            <Image 
              src={image} 
              alt={`Carousel image ${index + 1}`}
              fill
              className="object-cover w-full h-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              priority={index === 0}
            />
            
            {/* Gradient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Text Overlay */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center z-20">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 drop-shadow-lg">
                IEEE Sensors Council Kerala Chapter
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-semibold text-primary drop-shadow-lg">
                Welcomes You
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex 
                ? 'bg-primary' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
} 