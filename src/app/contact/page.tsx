'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageCircle, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('sending')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/company/ieee-sensors-council-kerala-chapter',
      color: 'hover:text-blue-600 bg-blue-100'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://www.facebook.com/ieeesensorscouncilkerala',
      color: 'hover:text-blue-700 bg-blue-100'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://www.instagram.com/ieeesensorscouncilkc',
      color: 'hover:text-pink-600 bg-pink-100'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/IEEESensorsKC',
      color: 'hover:text-blue-400 bg-blue-100'
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="section-padding hero-gradient">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h1 className="heading-1 mb-4">
                Contact 
                <span className="gradient-text"> IEEE Sensors Council</span>
              </h1>
              <p className="text-body mb-6">
                We&apos;re here to help! Whether you have a question about our activities, 
                want to collaborate, or need more information, feel free to reach out to us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Contact Details */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-text-dark">Address</h3>
                </div>
                <p className="text-text-medium">
                  Digital University Kerala, 
                  Technopark Campus, 
                  Thiruvananthapuram, Kerala 695581, India
                </p>
              </div>

              {/* Email */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-text-dark">Email</h3>
                </div>
                <a 
                  href="mailto:shone.jose@ieee.org" 
                  className="text-text-medium hover:text-primary transition-colors"
                >
                  shone.jose@ieee.org
                </a>
                <a 
                  href="mailto:contact@ieeesensorscouncil.org" 
                  className="block text-text-medium hover:text-primary transition-colors mt-2"
                >
                  contact@ieeesensorscouncil.org
                </a>
              </div>

              {/* Phone */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-text-dark">Phone</h3>
                </div>
                <a 
                  href="tel:+919876543210" 
                  className="text-text-medium hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
                <a 
                  href="tel:+918765432109" 
                  className="block text-text-medium hover:text-primary transition-colors mt-2"
                >
                  +91 87654 32109
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding section-light">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-6 text-center">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-medium mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-medium mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Purpose of your message"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
                      submitStatus === 'sending'
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary hover:bg-primary/90 flex items-center justify-center'
                    }`}
                  >
                    {submitStatus === 'sending' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 bg-green-100 text-green-800 p-3 rounded-lg text-center">
                      Thank you! Your message has been sent successfully.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mt-4 bg-red-100 text-red-800 p-3 rounded-lg text-center">
                      Oops! Something went wrong. Please try again later.
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Social Media Links */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-text-dark">
                Connect with Us on Social Media
              </h2>
              <p className="text-text-medium mt-2">
                Stay updated with our latest activities and announcements
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-3 rounded-full transition-all duration-300 
                      ${social.color} 
                      hover:shadow-lg hover:scale-110
                    `}
                    aria-label={`${social.name} Profile`}
                  >
                    <IconComponent className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 
