'use client';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Image from 'next/image';
import { FiLinkedin } from 'react-icons/fi';

const members = [
  {
    name: 'Dr. K R Suresh Nair',
    title: 'Advisor, ARDA',
    image: '/images/suresh anir-Photoroom 1.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/suresh-nair-5b708123/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Mr. Shone Jose',
    title: 'Chair, IICT',
    image: '/images/shone ettan.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/shonejose/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Dr. Jose Joseph',
    title: 'Vice Chair (Academia), DUK',
    image: '/images/jose sir.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/jose-joseph-ph-d-080a2356/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Mr. Anish Sathyan',
    title: 'Secretary, CDAC',
    image: '/images/anish -photoroom.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/anish-sathyan/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Thomas K Jimmy',
    title: 'Treasurer, IBM',
    image: '/images/Thomas.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/thomas-k-gimmy-6aa130185/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Mr. Anil Antony',
    title: 'Academic Coordinator, SCET',
    image: '/images/ANIL -Photoroom 1.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/anil-antony-6009917/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Ms. Diya Jose',
    title: 'SYP Coordinator, SMEC',
    image: '/images/DIYA-Photoroom 1.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/diya-jose-mallippuram/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Vaishakh Suresh',
    title: 'Technical Coordinator',
    image: '/images/vaishakh-suresh.png',
    social: {},
    gradient: 'from-green-500/40 to-blue-500/40',
    imageClass: 'object-contain scale-[2.2] translate-y-12',
    hoverScaleClass: 'group-hover:scale-[2.3]'
  },
  {
    name: 'Mr. Mrudul John Mathews',
    title: 'Webmaster, CUSAT',
    image: '/images/MRUDUL-Photoroom 1.png',
    social: {
      linkedin: 'https://linkedin.com/in/mruduljohnmathews'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Flemin K Sony',
    title: 'Technical Coordinator',
    image: '/images/flemin-k-sony.png',
    social: {},
    gradient: 'from-green-500/40 to-blue-500/40',
    imageClass: 'object-contain object-[52%_58%] scale-[1.9]',
    hoverScaleClass: 'group-hover:scale-[1.98]'
  },
  {
    name: 'Devikrupa Bhaskaran',
    title: 'SLT Mentor',
    image: '/images/chico.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/devikrupa/'
    },
    gradient: 'from-green-500/40 to-blue-500/40'
  },
  {
    name: 'Nandana Nair',
    title: 'Student Representative',
    image: '/images/nandana-nair.png',
    social: {},
    gradient: 'from-green-500/40 to-blue-500/40',
    imageClass: 'object-contain scale-[1.45] translate-y-10',
    hoverScaleClass: 'group-hover:scale-[1.55]'
  }
];

export default function ExecomPage() {
  return (
    <main>
      <Header />
      <section className="section-padding section-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div>
              <span className="text-primary font-semibold">IEEE Sensors Council</span>
              <h2 className="heading-2 mt-2 mb-6">Kerala Chapter ExeCom 2026</h2>
              <p className="text-text-medium">
                Meet the dedicated team driving innovation and advancement in sensor technologies.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {members.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div className="w-full aspect-square overflow-hidden mb-4 rounded-lg shadow-md relative group">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} z-0 opacity-40 group-hover:opacity-60 transition-all duration-300`}></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className={`w-full h-full transition-all duration-300 group-hover:brightness-90 ${member.imageClass ?? 'object-cover'} ${member.hoverScaleClass ?? 'group-hover:scale-105'}`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-text-dark">{member.name}</h3>
                  <p className="text-xs text-text-medium">{member.title}</p>
                  {member.social.linkedin && (
                    <div className="mt-1">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/70 hover:text-primary transition-colors inline-block"
                      >
                        <FiLinkedin size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-primary font-semibold">Student ExeCom</span>
              <h3 className="heading-3 mt-2 mb-4">Student Leadership Team 2026</h3>
              <p className="text-text-medium max-w-2xl mx-auto">
                The current student leadership team of the IEEE Sensors Council Kerala Chapter.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-primary/10">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/images/student-execom-poster-2026.jpeg"
                  alt="IEEE Sensors Council Kerala Chapter Student Leadership Team 2026 poster"
                  width={1200}
                  height={1600}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 
