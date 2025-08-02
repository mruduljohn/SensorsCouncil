'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiX } from 'react-icons/fi';

const RegisterSection = () => {
  return (
    <section id="register" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold">Join Us</span>
            <h2 className="heading-2 mt-2 mb-6">Register For The Seasonal School</h2>
            <p className="text-text-medium">
              Secure your spot at the IEEE Sensors Council Kerala Chapter Seasonal School 2025. 
              Seats are limited - register early to avoid disappointment.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-primary/10 w-full max-w-md"
          >
            <div className="bg-accent text-white text-center py-2 text-sm font-medium">
              IEEE MEMBER REGISTRATION
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-[rgb(9,46,61)]">IEEE Member Registration</h3>
              <div className="text-4xl font-bold text-primary mb-6">₹700</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><FiCheck /></span>
                  <span className="text-[rgb(9,46,61)]">Full access to all workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><FiCheck /></span>
                  <span className="text-[rgb(9,46,61)]">Certificate of participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><FiCheck /></span>
                  <span className="text-[rgb(9,46,61)]">Event materials & resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-3 mt-1"><FiX /></span>
                  <span className="text-[rgb(9,46,61)]/60">Food and accommodation not included</span>
                </li>
              </ul>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7H3IPHrSBa9LKkM8W1vw2MJE8xknDHcCscNvz_tx74Bl_Rw/viewform" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 px-4 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors text-center block font-medium"
              >
                Register Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg border-2 border-accent relative w-full max-w-md"
          >
            <div className="bg-accent text-white text-center py-2 text-sm font-medium">
              NON-MEMBER REGISTRATION
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2 text-[rgb(9,46,61)]">Non-IEEE Member Registration</h3>
              <div className="text-4xl font-bold text-primary mb-6">₹1500</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><FiCheck /></span>
                  <span className="text-[rgb(9,46,61)]">Full access to all workshops</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><FiCheck /></span>
                  <span className="text-[rgb(9,46,61)]">Certificate of participation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 mt-1"><FiCheck /></span>
                  <span className="text-[rgb(9,46,61)]">Event materials & resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-3 mt-1"><FiX /></span>
                  <span className="text-[rgb(9,46,61)]/60">Food and accommodation not included</span>
                </li>
              </ul>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7H3IPHrSBa9LKkM8W1vw2MJE8xknDHcCscNvz_tx74Bl_Rw/viewform" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full py-3 px-4 rounded-md bg-accent text-white hover:bg-accent/90 transition-colors text-center block font-medium"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 rounded-xl p-6 inline-block"
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection; 