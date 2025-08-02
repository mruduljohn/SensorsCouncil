'use client';

import { motion } from 'framer-motion';

const AboutSection = () => {
  const features = [
    {
      title: 'Finite Element Modelling',
      description: 'Learn advanced techniques in sensor design and modeling for optimal performance',
    },
    {
      title: 'Sensor Fabrication Techniques',
      description: 'Hands-on workshop on fabricating sensors using screen-printing technology',
    },
    {
      title: 'Packaging Technologies',
      description: 'Best practices for sensor packaging to ensure durability and functionality',
    },
    {
      title: 'Characterization & Signal Readout',
      description: 'Techniques for accurate characterization and signal processing',
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Info Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold">About The Event</span>
            <h2 className="heading-2 mt-2 mb-6">IEEE Seasonal School on Advanced Sensor Technologies</h2>
            <p className="text-[rgb(9,46,61)] mb-6">
              Sensor technologies have become the backbone of countless innovations in our modern 
              technological world. Our IEEE Seasonal School on Advanced Sensor Technologies is created
              specifically to address the skills gap by delivering an immersive educational 
              journey that blends essential theory with hands-on application.
            </p>
            <p className="text-[rgb(9,46,61)] mb-8">
              Join us for five intensive days of workshop-based learning with experts from academia 
              and industry. This approach ensures participants gain comprehensive understanding of 
              sensor technology while offering flexibility for various scheduling needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3 mt-1">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="rgb(0, 149, 149)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[rgb(9,46,61)] mb-1">{feature.title}</h3>
                    <p className="text-[rgb(9,46,61)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Abstract visualization instead of image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Decorative elements */}
                <div className="absolute top-[10%] left-[20%] w-32 h-32 rounded-full bg-primary/10"></div>
                <div className="absolute top-[50%] left-[60%] w-48 h-48 rounded-full bg-primary/15"></div>
                <div className="absolute top-[70%] left-[30%] w-40 h-40 rounded-full bg-secondary/10"></div>
                
                {/* Animated circuit-like patterns */}
                <svg className="absolute inset-0" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path
                    d="M10,30 Q30,5 50,30 T90,30"
                    fill="none"
                    stroke="rgba(0,149,149,0.3)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M10,50 Q30,25 50,50 T90,50"
                    fill="none"
                    stroke="rgba(0,149,149,0.3)"
                    strokeWidth="0.5"
                  />
                  <path
                    d="M10,70 Q30,45 50,70 T90,70"
                    fill="none"
                    stroke="rgba(0,149,149,0.3)"
                    strokeWidth="0.5"
                  />
                </svg>
              </div>
              
              {/* Central content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 max-w-xs shadow-lg">
                  <h3 className="text-primary text-xl font-bold mb-4">June 23-27, 2025</h3>
                  <p className="text-[rgb(9,46,61)] mb-4">
                    Digital University Kerala, Trivandrum, India
                  </p>
                  <div className="flex justify-center space-x-2">
                    <span className="text-secondary bg-secondary/10 px-3 py-1 rounded-full text-sm font-semibold">Offline Mode</span>
                    <span className="text-[rgb(9,46,61)] bg-primary/10 px-3 py-1 rounded-full text-sm font-semibold">Limited Participants</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 