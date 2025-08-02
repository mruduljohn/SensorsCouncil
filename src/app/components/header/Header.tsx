'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionScroll = (sectionId: string) => (e: React.MouseEvent) => {
    // If on the home page, scroll to specified section
    if (pathname === '/') {
      e.preventDefault()
      const section = document.getElementById(sectionId)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { 
      name: 'About', 
      path: '/#about',
      onClick: handleSectionScroll('about')
    },
    { 
      name: 'Activities', 
      path: '/#activities',
      onClick: handleSectionScroll('activities')
    },
    // { 
    //   name: 'Announcements', 
    //   path: '/#announcements',
    //   onClick: handleSectionScroll('announcements')
    // },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Execom', path: '/execom' },
    { 
      name: 'Contact', 
      path: '/#contact',
      onClick: handleSectionScroll('contact')
    },
  ];

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container-custom flex justify-between items-center py-2">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48 mr-2">
            {/* Use the IEEE Sensor Council Kerala Chapter logo */}
            <Image
              src="/images/ieeesckc.png"
              alt="IEEE Sensors Council Kerala Chapter Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={link.onClick}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={(e) => {
                    if (link.onClick) link.onClick(e)
                    setIsOpen(false)
                  }}
                  className="text-slate-700 hover:text-primary transition-colors py-2 font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 