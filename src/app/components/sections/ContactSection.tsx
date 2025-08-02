'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import Image from 'next/image';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold">Get In Touch</span>
            <h2 className="heading-2 mt-2 mb-6">Contact Us</h2>
            <p className="text-[rgb(9,46,61)]">
              Have questions about the IEEE Seasonal School on Advanced Sensor Technologies? 
              Reach out to us through any of the methods below and we&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8 flex-1"
          >
            <div className="flex items-start mb-8">
              <div className="bg-primary/10 p-4 rounded-full mr-5">
                <FiMapPin className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[rgb(9,46,61)]">Visit Us</h3>
                <p className="text-[rgb(9,46,61)] text-lg">
                  Digital University Kerala<br />
                  Technocity, Pallippuram<br />
                  Thiruvananthapuram, Kerala 695316
                </p>
              </div>
            </div>

            <div className="flex items-start mb-8">
              <div className="bg-primary/10 p-4 rounded-full mr-5">
                <FiMail className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[rgb(9,46,61)]">Email Us</h3>
                <p className="text-[rgb(9,46,61)] text-lg">
                  <a href="mailto:devikurpa@ieee.org" className="hover:text-primary transition-colors">
                    devikurpa@ieee.org
                  </a>
                </p>
                <p className="text-[rgb(9,46,61)] mt-2 text-lg">
                  <a href="mailto:mrudul@ieee.org" className="hover:text-primary transition-colors">
                    mrudul@ieee.org
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-4 rounded-full mr-5">
                <FiPhone className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[rgb(9,46,61)]">Call Us</h3>
                <p className="text-[rgb(9,46,61)] text-lg">
                  <a href="tel:+916235862779" className="hover:text-primary transition-colors">
                    +91 62358 62779
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4004146.7071397905!2d73.17632491333782!3d11.458293438030754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c141999dd753%3A0x6f5733576d6fcba1!2sKerala%20University%20of%20Digital%20Sciences%2C%20Innovation%20and%20Technology%20(Digital%20University%20Kerala)!5e0!3m2!1sen!2sin!4v1749811324725!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full rounded-xl"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 