'use client';

import { useState } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Image from 'next/image';
import { X } from 'lucide-react';

const images = [
  '/images/IMG-20250329-WA0100.jpg',
  '/images/IMG-20250405-WA0021.jpg',
  '/images/IMG-20250418-WA0000(1).jpg',
  '/images/IMG-20250502-WA0007.jpg',
  '/images/IMG-20250515-WA0010(1).jpg',
  '/images/IMG-20250625-WA0011.jpg',
  '/images/IMG-20250625-WA0014.jpg',
  '/images/IMG-20250630-WA0010.jpg',
  '/images/photo_2025-08-01_20-44-26.jpg',
  '/images/photo_2025-08-01_20-44-29.jpg',
  '/images/photo_2025-08-01_20-44-31.jpg',
  '/images/photo_2025-08-01_20-44-34.jpg',
  '/images/photo_2025-08-01_20-44-36.jpg',
  '/images/photo_2025-08-01_20-44-37.jpg',
  '/images/photo_2025-08-01_20-44-40.jpg',
  '/images/photo_2025-08-01_20-44-46.jpg',
  '/images/photo_2025-08-01_20-44-48.jpg',
  '/images/photo_2025-08-01_20-44-50.jpg',
  '/images/photo_2025-08-01_20-44-52.jpg'
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside the image
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal with Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <main>
      <Header />
      <section className="section-padding section-light">
        <div className="container-custom">
          <h1 className="heading-1 mb-8 text-center">Gallery</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, idx) => (
              <div 
                key={idx} 
                className="card overflow-hidden group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => openModal(src)}
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <Image 
                    src={src} 
                    alt={`Gallery image ${idx + 1}`} 
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-lg font-medium">
                      Click to view
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-[90vh] mx-4">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            
            {/* Image container */}
            <div className="relative w-full h-full">
              <Image 
                src={selectedImage} 
                alt="Gallery preview" 
                width={800}
                height={600}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </main>
  );
} 