'use client';

import { motion } from 'framer-motion';
import { FiLinkedin } from 'react-icons/fi';
import Image from 'next/image';

const speakers = [
  {
    name: 'Prof. Alex P James',
    title: 'Director, IIITMK',
    topic: 'Sensor Packaging Technologies',
    day: 'Day 5',
    image: '/images/alex-1.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/alexpjames/'
    }
  },
  {
    name: 'Mr. Shone Jose',
    title: 'Chair, IEEE Sensors Council Kerala Chapter',
    topic: 'Opportunities in IEEE and IEEE Sensors Council',
    day: 'Day 2',
    image: '/images/ShoneJose.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/shonejose/'
    }
  },
  {
    name: 'Dr. Jose Joseph',
    title: 'Assistant Professor, DUK',
    topic: 'Fabrication of Sensors',
    day: 'Day 3',
    image: '/images/jose-joseph.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/jose-joseph-ph-d-080a2356/'
    }
  },
  {
    name: 'Ms. Lakshmi V',
    title: 'PhD Student, DUK',
    topic: 'Finite Element Modeling of Sensors',
    day: 'Day 2',
    image: '/images/Lekshmi_V.jpg',
    social: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Dr. Muthusankar Eswaran',
    title: 'Assistant Professor, DUK',
    topic: 'Characterization Techniques for Sensor Performance Evaluation',
    day: 'Day 4',
    image: '/images/muthusankaran.jpg',
    social: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Ms. Gopika T G',
    title: 'Senior Research Fellow, CDOH, ICFOSS',
    topic: 'Empowering Sustainability through open IoT Technologies',
    day: 'Day 1',
    image: '/images/gopika.jpg',
    social: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Mr. Sreenivas Pai',
    title: 'Engineer, Strategic Electronic Group, CDAC',
    topic: 'Bringing Intelligence to Sensors',
    day: 'Day 1',
    image: '/images/sreenivas.jpg',
    social: {
      linkedin: 'https://linkedin.com'
    }
  },
  
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="section-padding section-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold">Learn From The Experts</span>
            <h2 className="heading-2 mt-2 mb-6">Our Distinguished Speakers</h2>
            <p className="text-text-medium">
              Our seasonal school features renowned speakers from academia and industry who are experts in
              various aspects of sensor technology, from design and modeling to fabrication and deployment.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {speakers.slice(0, 3).map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="relative bg-primary/5 h-48 flex items-center justify-center border-b border-primary/10 overflow-hidden">
                {speaker.image === '/placeholder-speaker.jpg' ? (
                  <span className="text-primary font-bold text-lg">{speaker.name}</span>
                ) : (
                  <div className="relative w-full h-full">
                    <Image 
                      src={speaker.image} 
                      alt={speaker.name} 
                      fill
                      className={`object-cover ${
                        speaker.image === '/images/Lekshmi_V.jpg' 
                          ? 'object-[center_15%]' 
                          : speaker.image === '/images/muthusankaran.jpg'
                          ? 'object-[center_center] scale-[0.85]'
                          : 'object-[center_top]'
                      }`}
                    />
                  </div>
                )}
              </div>
              <div className="p-6">
                
                <h3 className="text-xl font-bold mb-1 text-text-dark">{speaker.name}</h3>
                <p className="text-text-medium mb-3">{speaker.title}</p>
                <div className="h-px bg-slate-200 my-4"></div>
                <h4 className="font-semibold mb-2 text-text-dark">Topic:</h4>
                <p className="text-text-medium mb-4">{speaker.topic}</p>
                <div className="flex space-x-3">
                  <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="md:col-span-3 flex justify-center gap-8">
            {speakers.slice(3).map((speaker, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="card w-full md:w-[calc(33.33%-1.33rem)]"
              >
                <div className="relative bg-primary/5 h-48 flex items-center justify-center border-b border-primary/10 overflow-hidden">
                  {speaker.image === '/placeholder-speaker.jpg' ? (
                    <span className="text-primary font-bold text-lg">{speaker.name}</span>
                  ) : (
                    <div className="relative w-full h-full">
                      <Image 
                        src={speaker.image} 
                        alt={speaker.name} 
                        fill
                        className={`object-cover ${
                          speaker.image === '/images/Lekshmi_V.jpg' 
                            ? 'object-[center_15%]' 
                            : speaker.image === '/images/muthusankaran.jpg'
                            ? 'object-[center_center] scale-[0.85]'
                            : 'object-[center_top]'
                        }`}
                      />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-text-dark">{speaker.name}</h3>
                  <p className="text-text-medium mb-3">{speaker.title}</p>
                  <div className="h-px bg-slate-200 my-4"></div>
                  <h4 className="font-semibold mb-2 text-text-dark">Topic:</h4>
                  <p className="text-text-medium mb-4">{speaker.topic}</p>
                  <div className="flex space-x-3">
                    <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors">
                      <FiLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection; 