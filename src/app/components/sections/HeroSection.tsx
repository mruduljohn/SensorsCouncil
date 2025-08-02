'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 pt-32 overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 bg-accent/10 w-96 h-96 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-primary/10 w-96 h-96 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            <div className="mb-6">
              <span className="text-xl md:text-2xl font-medium text-text-dark block mb-2">Welcome to the</span>
              <h1 className="text-3xl md:text-5xl font-bold text-text-dark mb-2">IEEE Seasonal School</h1>
              <span className="text-2xl md:text-4xl font-semibold text-primary">on Advanced Sensor Technologies</span>
            </div>
            <p className="text-lg md:text-xl text-text-medium mb-8 max-w-2xl">
              Join us for an immersive 5-day program at Digital University Kerala from June 23-27, 2025. Explore cutting-edge sessions on Finite Element Modelling, Sensor Fabrication Techniques, and Packaging Technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="http://bit.ly/SensorCouncilSeasonalSchool" className="btn-primary text-center" target="_blank">
                Register Now
              </Link>
              <Link href="/#schedule" className="btn-secondary text-center">
                View Schedule
              </Link>
            </div>
            
            {/* <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center overflow-hidden shadow-sm">
                    <span className="text-xs font-medium text-text-dark">P{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-text-medium">
                <span className="font-semibold text-text-dark">60+</span> participants from across the world
              </p>
            </div> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute w-full h-full bg-white border border-primary/10 rounded-lg overflow-hidden flex flex-col items-center justify-center shadow-lg">
                <div className="relative h-32 w-64 mb-6">
                  <Image
                    src="/images/ieeesckc.png"
                    alt="IEEE Sensors Council Kerala Chapter Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center p-8 pt-0">
                  <h2 className="text-2xl font-bold mb-3 text-text-dark">IEEE Sensors Council</h2>
                  <p className="text-lg mb-5 text-primary">Kerala Chapter Seasonal School 2025</p>
                  <div className="inline-block px-6 py-2 border border-primary/20 text-primary rounded-full font-medium">
                    Offline Mode
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              <div className="text-center">
                <div className="text-xl">Limited</div>
                <div className="text-xs">Seats</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 