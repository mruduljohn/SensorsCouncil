'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "What is the IEEE Seasonal School on Advanced Sensor Technologies?",
    answer: "The IEEE Seasonal School is a 5-day intensive educational program focused on advanced sensor technologies, covering design, fabrication, characterization, and packaging of sensors through a blend of theoretical knowledge and hands-on workshops.",
  },
  {
    question: "Who can attend this seasonal school?",
    answer: "The seasonal school is designed for graduate students, researchers, and industry professionals interested in sensor technologies. Both IEEE members and non-members are welcome to attend.",
  },
  {
    question: "Is there a limit to the number of participants?",
    answer: "Yes, attendance is limited to ensure quality interaction and personalized attention during hands-on sessions.",
  },
  {
    question: "Are there any prerequisites for attending?",
    answer: "A basic understanding of electronics and sensor technologies is recommended. However, the program is designed to accommodate participants with various levels of expertise.",
  },
  {
    question: "Will certificates be provided?",
    answer: "Yes, participants who complete the program will receive a certificate from the IEEE Sensors Council Kerala Chapter.",
  },
  {
    question: "What's included in the registration fee?",
    answer: "The registration fee covers access to all sessions, workshop materials, and a certificate of participation. Food and accommodation are not included in the registration fee.",
  },
  {
    question: "What are the registration fees?",
    answer: "The registration fee is ₹700 for IEEE members and ₹1500 for non-IEEE members.",
  },
  {
    question: "How can I register for the event?",
    answer: "You can register through our official registration link: bit.ly/SensorCouncilSeasonalSchool",
  },
  {
    question: "Is there accommodation available for outstation participants?",
    answer: "No, accommodation is not included in the registration fee. Participants will need to arrange their own accommodation."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold">Your Questions Answered</span>
            <h2 className="heading-2 mt-2 mb-6">Frequently Asked Questions</h2>
            <p className="text-[rgb(9,46,61)]">
              Find answers to common questions about our seasonal school. If you don&apos;t see your question here, feel free to contact us.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full text-left p-6 flex justify-between items-center rounded-lg ${
                  activeIndex === index ? 'bg-primary/5 text-[rgb(9,46,61)]' : 'bg-white text-[rgb(9,46,61)]'
                } hover:bg-primary/5 transition-all duration-300 border border-gray-100`}
              >
                <span className="font-semibold pr-8">{faq.question}</span>
                <span className="text-primary flex-shrink-0">
                  {activeIndex === index ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </span>
              </button>
              {activeIndex === index && (
                <div className="bg-white p-6 rounded-b-lg border-x border-b border-gray-100">
                  <p className="text-[rgb(9,46,61)]">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 