'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Filter, 
  Search, 
  ExternalLink, 
  ChevronRight, 
  Tag 
} from 'lucide-react'

export default function EventsPage(): React.ReactNode {
  const [activeTab, setActiveTab] = useState<string>('upcoming')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const upcomingEvents = [
    {
      id: 1,
      title: 'IEEE Sensors Council Annual Conference 2025',
      description: 'Join us for our flagship annual conference featuring cutting-edge research presentations, industry insights, and networking opportunities.',
      date: '2025-03-15',
      time: '09:00 AM - 05:00 PM',
      location: 'Digital University Kerala, Trivandrum',
      category: 'conference',
      attendees: 200,
      registrationLink: '#',
      featured: true,
      tags: ['Research', 'Networking', 'Industry'],
      status: 'Open for Registration'
    },
    {
      id: 2,
      title: 'Sensor Fabrication Workshop',
      description: 'Hands-on workshop on advanced sensor fabrication techniques using modern materials and processes.',
      date: '2025-02-20',
      time: '10:00 AM - 04:00 PM',
      location: 'CUSAT, Kochi',
      category: 'workshop',
      attendees: 50,
      registrationLink: '#',
      featured: false,
      tags: ['Fabrication', 'Hands-on', 'Technical'],
      status: 'Registration Closing Soon'
    },
    {
      id: 3,
      title: 'IoT and Smart Sensors Seminar',
      description: 'Explore the latest trends in IoT applications and smart sensor technologies with industry experts.',
      date: '2025-02-10',
      time: '02:00 PM - 05:00 PM',
      location: 'Online (Webinar)',
      category: 'seminar',
      attendees: 150,
      registrationLink: '#',
      featured: false,
      tags: ['IoT', 'Smart Sensors', 'Industry'],
      status: 'Open for Registration'
    },
    {
      id: 4,
      title: 'Student Innovation Challenge 2025',
      description: 'Annual competition for students to showcase innovative sensor-based projects and solutions.',
      date: '2025-04-05',
      time: '09:00 AM - 06:00 PM',
      location: 'NIT Calicut',
      category: 'competition',
      attendees: 100,
      registrationLink: '#',
      featured: true,
      tags: ['Competition', 'Innovation', 'Students'],
      status: 'Submissions Open'
    },
    {
      id: 5,
      title: 'Distinguished Lecture Series: AI in Sensor Networks',
      description: 'Expert lecture on artificial intelligence applications in sensor networks and data processing.',
      date: '2025-01-25',
      time: '04:00 PM - 05:30 PM',
      location: 'IEEE Kerala Section Office',
      category: 'lecture',
      attendees: 75,
      registrationLink: '#',
      featured: false,
      tags: ['AI', 'Machine Learning', 'Research'],
      status: 'Open for Registration'
    },
  ]

  const pastEvents = [
    {
      id: 6,
      title: 'Sensors Council Seasonal School 2025',
      description: 'Comprehensive 5-day program on advanced sensor technologies with hands-on workshops.',
      date: '2024-06-23',
      time: '09:00 AM - 05:00 PM',
      location: 'Digital University Kerala',
      category: 'school',
      attendees: 120,
      featured: true,
      tags: ['Education', 'Hands-on', 'Multi-day'],
      status: 'Completed Successfully'
    },
    {
      id: 7,
      title: 'Industry-Academia Collaboration Meet',
      description: 'Bridging the gap between industry requirements and academic research in sensor technologies.',
      date: '2024-11-10',
      time: '10:00 AM - 04:00 PM',
      location: 'Technopark, Trivandrum',
      category: 'networking',
      attendees: 80,
      featured: false,
      tags: ['Collaboration', 'Industry', 'Academia'],
      status: 'Completed Successfully'
    },
    {
      id: 8,
      title: 'Sensor Packaging Technologies Workshop',
      description: 'Advanced workshop on sensor packaging methods and reliability testing.',
      date: '2024-09-15',
      time: '09:30 AM - 04:30 PM',
      location: 'IIITM-K, Trivandrum',
      category: 'workshop',
      attendees: 60,
      featured: false,
      tags: ['Packaging', 'Reliability', 'Technical'],
      status: 'Completed Successfully'
    },
  ]

  const categories = [
    { value: 'all', label: 'All Events' },
    { value: 'conference', label: 'Conferences' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'seminar', label: 'Seminars' },
    { value: 'competition', label: 'Competitions' },
    { value: 'lecture', label: 'Lectures' },
    { value: 'networking', label: 'Networking' },
    { value: 'school', label: 'Schools' },
  ]

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents
  const filteredEvents = currentEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryColor = (category: string) => {
    const colors = {
      conference: 'bg-blue-100 text-blue-800',
      workshop: 'bg-green-100 text-green-800',
      seminar: 'bg-purple-100 text-purple-800',
      competition: 'bg-orange-100 text-orange-800',
      lecture: 'bg-indigo-100 text-indigo-800',
      networking: 'bg-pink-100 text-pink-800',
      school: 'bg-teal-100 text-teal-800',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  const getStatusColor = (status: string) => {
    const colors = {
      'Open for Registration': 'bg-green-100 text-green-800',
      'Registration Closing Soon': 'bg-yellow-100 text-yellow-800',
      'Submissions Open': 'bg-blue-100 text-blue-800',
      'Completed Successfully': 'bg-gray-100 text-gray-600',
    }
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="section-padding hero-gradient">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Discover Our Events
              </span>
              <h1 className="heading-1 mb-4">
                Events &amp; 
                <span className="gradient-text"> Activities</span>
              </h1>
              <p className="text-body mb-6">
                Join our diverse range of events designed to advance knowledge, foster innovation, 
                and build connections in the sensor technology community. From technical workshops 
                to industry conferences, we offer something for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Event Filters */}
        <section className="section-padding pt-8">
          <div className="container-custom">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-lg shadow-lg p-1 flex">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'upcoming'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-text-medium hover:text-primary'
                  }`}
                >
                  Upcoming Events
                </button>
                <button
                  onClick={() => setActiveTab('past')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === 'past'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-text-medium hover:text-primary'
                  }`}
                >
                  Past Events
                </button>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="lg:w-64 relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white"
                >
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Events Grid */}
            <div className="space-y-4">
              {filteredEvents.length === 0 ? (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                  <h3 className="text-lg font-semibold text-text-dark mb-1">No Events Found</h3>
                  <p className="text-text-medium text-sm">
                    Try adjusting your search terms or filters to find relevant events.
                  </p>
                </div>
              ) : (
                filteredEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`event-card ${event.featured ? 'ring-2 ring-primary/20' : ''}`}
                  >
                    <div className="p-4">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                        {/* Event Info */}
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                                </span>
                                {event.featured && (
                                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                    Featured
                                  </span>
                                )}
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                  {event.status}
                                </span>
                              </div>
                              <h3 className="text-lg font-bold text-text-dark mb-1">{event.title}</h3>
                              <p className="text-text-medium text-sm mb-3 leading-relaxed">{event.description}</p>
                              
                              {/* Event Details */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                                <div className="flex items-center text-text-medium text-xs">
                                  <Calendar className="h-3 w-3 mr-2 text-primary" />
                                  <span>
                                    {new Date(event.date).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric'
                                    })}
                                  </span>
                                </div>
                                <div className="flex items-center text-text-medium text-xs">
                                  <Clock className="h-3 w-3 mr-2 text-primary" />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center text-text-medium text-xs">
                                  <MapPin className="h-3 w-3 mr-2 text-primary" />
                                  <span>{event.location}</span>
                                </div>
                              </div>

                              {/* Tags */}
                              <div className="flex flex-wrap gap-1 mb-3">
                                {event.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="px-1 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-md flex items-center"
                                  >
                                    <Tag className="h-2.5 w-2.5 mr-1" />
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Event Stats & Actions */}
                        <div className="lg:w-48 flex flex-col items-center lg:items-end gap-3">
                          <div className="text-center lg:text-right">
                            <div className="flex items-center justify-center lg:justify-end text-text-medium mb-1">
                              <Users className="h-3 w-3 mr-1 text-primary" />
                              <span className="text-xs">{event.attendees} Attendees</span>
                            </div>
                          </div>

                          {/* 
                            Action Buttons for each event card.
                            - "Register Now" button is shown only for upcoming events with a valid registrationLink.
                            - "View Details" button is always shown.
                            Security: 
                              - All URLs are validated to be strings before use.
                              - External links use rel="noopener noreferrer" for security.
                            Edge Cases:
                              - Handles missing or non-string registrationLink gracefully.
                          */}
                          <div className="flex flex-col w-full gap-2">
                            {activeTab === 'upcoming' &&
                              typeof (event as any).registrationLink === 'string' &&
                              (event as any).registrationLink.trim().length > 0 && (
                                <a
                                  href={(event as any).registrationLink}
                                  className="btn-primary text-center text-xs py-1.5"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Register Now
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                            )}
                            <Link
                              href={`/events/${event.id}`}
                              className="btn-secondary text-center text-xs py-1.5"
                            >
                              View Details
                              <ChevronRight className="ml-1 h-3 w-3" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Our Events
            </h2>
            <p className="text-base mb-6 opacity-90 max-w-2xl mx-auto">
              Don&apos;t miss out on upcoming events and opportunities. Subscribe to our 
              newsletter or follow us on social media for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/newsletter" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Subscribe to Newsletter
              </Link>
              <Link href="/contact" className="border-2 border-white hover:bg-white hover:text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Contact Event Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 