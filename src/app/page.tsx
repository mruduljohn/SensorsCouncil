import Image from "next/image";
import Link from 'next/link'
import { ArrowRight, Calendar, Users, Award, BookOpen, ChevronRight, Trophy, Zap, Globe, Target, Clock, MapPin, Tag, ExternalLink } from 'lucide-react'
import ImageCarousel from './components/ui/ImageCarousel'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

export default function Home() {
  // const stats = [
  //   { number: '500+', label: 'Members', icon: Users },
  //   { number: '50+', label: 'Events', icon: Calendar },
  //   { number: '25+', label: 'Awards', icon: Award },
  //   { number: '100+', label: 'Projects', icon: BookOpen },
  // ]

  const featuredActivities = [
    {
      title: 'Technical Workshops',
      description: 'Hands-on workshops on sensor technologies',
      icon: Zap,
      link: '/events?category=workshop',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Competitions',
      description: 'Exciting competitions to showcase innovation and skills',
      icon: Trophy,
      link: '/events?category=competition',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Global Networking',
      description: 'Connect with professionals worldwide through IEEE',
      icon: Globe,
      link: '/events?category=networking',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Research Projects',
      description: 'Collaborative research in sensor technologies',
      icon: Target,
      link: '/events?category=research',
      color: 'from-orange-500 to-red-500'
    },
  ]

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
      featured: true,
      tags: ['Research', 'Networking', 'Industry'],
      status: 'Open for Registration',
      registrationLink: '#'
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
      featured: false,
      tags: ['Fabrication', 'Hands-on', 'Technical'],
      status: 'Registration Closing Soon',
      registrationLink: '#'
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
      featured: false,
      tags: ['IoT', 'Smart Sensors', 'Industry'],
      status: 'Open for Registration',
      registrationLink: '#'
    },
  ]

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

  const recentAnnouncements = [
    {
      date: '2025-01-15',
      title: 'Annual General Meeting 2025',
      description: 'Join us for our upcoming AGM to discuss future plans and activities.',
      type: 'Meeting'
    },
    {
      date: '2025-01-10',
      title: 'Sensor Innovation Challenge 2025',
      description: 'Registration now open for our flagship innovation challenge.',
      type: 'Competition'
    },
    {
      date: '2025-01-05',
      title: 'Distinguished Lecture Series',
      description: 'Expert talks on emerging trends in sensor technologies.',
      type: 'Event'
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      
      <main className="flex-grow">
        {/* Image Carousel */}
        <div className="pt-4"> {/* Add padding to account for fixed header */}
      <ImageCarousel />
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
          {/* Background Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom relative z-10 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="text-center lg:text-left animate-on-scroll">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    Welcome to IEEE Sensors Council Kerala Chapter
                  </span>
                  <h1 className="heading-1 mb-6">
                    Advancing
                    <span className="gradient-text"> Sensor Technologies </span>
                    for Humanity
                  </h1>
                  <p className="text-body max-w-2xl mx-auto lg:mx-0 mb-8">
                    We are dedicated to fostering innovation, research, and professional development
                    in the field of sensors and sensing systems. Join our vibrant community of
                    engineers, researchers, and technology enthusiasts.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/execom" className="btn-primary">
                    Meet Our Team
                  </Link>
                  {/* <Link href="/events" className="btn-secondary">
                    Explore Events
                  </Link> */}
                </div>

                {/* Quick Stats */}
                {/* <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <div className="stats-number text-2xl">{stat.number}</div>
                        <div className="stats-label text-sm">{stat.label}</div>
                      </div>
                    )
                  })}
                </div> */}
              </div>

              {/* Hero Image/Visual */}
              <div className="relative animate-on-scroll">
                <div className="relative h-[500px] w-full">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                    <div className="relative h-full flex flex-col items-center justify-center p-8">
                      <div className="relative h-32 w-64 mb-8">
                        <Image
                          src="/images/ieeesckc.png"
                          alt="IEEE Sensors Council Kerala Chapter Logo"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      <h2 className="text-2xl font-bold text-center mb-4 text-text-dark">
                        IEEE Sensors Council
                      </h2>
                      <p className="text-lg text-primary font-medium mb-6">
                        Kerala Chapter
                      </p>
                      <div className="flex space-x-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          Innovation
                        </span>
                        <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                          Technology
                        </span>
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          Excellence
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-lg animate-float">
                    <div className="text-center">
                      <div className="text-lg">Est.</div>
                      <div className="text-sm">2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding section-light">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-on-scroll">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl overflow-hidden shadow-lg h-96 w-full flex items-center justify-center">
                  <Image
                    src="/images/photo_2025-08-01_20-44-52.jpg"
                    alt="IEEE Sensors Council Kerala Chapter event photo"
                    fill
                    className="object-contain w-1/2 h-1/2"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-50"></div>
                </div>
              </div>

              <div className="animate-on-scroll">
                <span className="text-primary font-semibold">About Our Chapter</span>
                <h2 className="heading-2 mt-2 mb-6">
                  Pioneering Excellence in Sensor Technologies
                </h2>
                <p className="text-body mb-6">
                  The IEEE Sensors Council Kerala Chapter serves as a premier platform for
                  professionals, researchers, and students passionate about sensor technologies.
                  We bridge the gap between academia and industry, fostering innovation and
                  knowledge exchange.
                </p>
                <p className="text-body mb-8">
                  Our mission is to advance the theory, design, and application of devices,
                  systems, and applications involving the detection and measurement of physical,
                  chemical, and biological phenomena.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg mt-1">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark mb-1">Innovation Hub</h4>
                      <p className="text-text-medium text-sm">
                        Fostering cutting-edge research and development
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary/10 p-2 rounded-lg mt-1">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-dark mb-1">Community</h4>
                      <p className="text-text-medium text-sm">
                        Building strong professional networks
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-8">
                  <Link href="/about" className="btn-outline">
                    Learn More About Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Activities */}
        <section id="activities" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16 animate-on-scroll">
              <span className="text-primary font-semibold">What We Do</span>
              <h2 className="heading-2 mt-2 mb-6">Our Key Activities</h2>
              <p className="text-body max-w-3xl mx-auto">
                Discover the various ways we contribute to the advancement of sensor
                technologies and professional development in the field.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredActivities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <div key={index} className="group animate-on-scroll">
                    <Link href={activity.link}>
                      <div className="card card-hover h-full p-6 text-center">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${activity.color} mb-4`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="heading-4 font-bold mb-3">{activity.title}</h3>
                        <p className="text-body-sm mb-4">{activity.description}</p>
                        <div className="flex items-center justify-center text-primary group-hover:translate-x-2 transition-transform">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Events Section */}
        {/* <section id="events" className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold">Our Events</span>
              <h2 className="heading-2 mt-2 mb-6">Upcoming Events</h2>
              <p className="text-body max-w-3xl mx-auto">
                Join our diverse range of events designed to advance knowledge, foster innovation,
                and build connections in the sensor technology community.
              </p>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className={`event-card ${event.featured ? 'ring-2 ring-primary/20' : ''}`}
                >
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6"> */}
                      {/* Event Info */}
                      {/* <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(event.category)}`}>
                                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                              </span>
                              {event.featured && (
                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                                  Featured
                                </span>
                              )}
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                                {event.status}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-text-dark mb-2">{event.title}</h3>
                            <p className="text-text-medium mb-4 leading-relaxed">{event.description}</p>
 */}
                            {/* Event Details */}
                            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                              <div className="flex items-center text-text-medium">
                                <Calendar className="h-4 w-4 mr-2 text-primary" />
                                <span className="text-sm">
                                  {new Date(event.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </span>
                              </div>
                              <div className="flex items-center text-text-medium">
                                <Clock className="h-4 w-4 mr-2 text-primary" />
                                <span className="text-sm">{event.time}</span>
                              </div>
                              <div className="flex items-center text-text-medium">
                                <MapPin className="h-4 w-4 mr-2 text-primary" />
                                <span className="text-sm">{event.location}</span>
                              </div>
                            </div> */}

                            {/* Tags */}
                            {/* <div className="flex flex-wrap gap-2 mb-4">
                              {event.tags.map((tag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md flex items-center"
                                >
                                  <Tag className="h-3 w-3 mr-1" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div> */}

                      {/* Event Stats & Actions */}
                      {/* <div className="lg:w-64 flex flex-col items-center lg:items-end gap-4">
                        <div className="text-center lg:text-right">
                          <div className="flex items-center justify-center lg:justify-end text-text-medium mb-2">
                            <Users className="h-4 w-4 mr-2 text-primary" />
                            <span className="text-sm">{event.attendees} Expected Attendees</span>
                          </div>
                        </div> */}

                        {/* Action Buttons */}
                        {/* <div className="flex flex-col w-full gap-2">
                          {event.registrationLink && (
                            <a
                              href={event.registrationLink}
                              className="btn-primary text-center text-sm py-2"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Register Now
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          )}
                          <Link
                            href="/events"
                            className="btn-secondary text-center text-sm py-2"
                          >
                            View All Events
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Recent Announcements */}
        {/* <section id="announcements" className="section-padding section-alt">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12">
              Announcements */}
              {/* {/* <div className="lg:w-2/3 animate-on-scroll">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="text-primary font-semibold">Latest Updates</span>
                    <h2 className="heading-2 mt-2">Recent Announcements</h2>
                  </div>
                  <Link href="/announcements" className="btn-secondary">
                    View All
                  </Link>
                </div>

                <div className="space-y-6">
                  {recentAnnouncements.map((announcement, index) => (
                    <div key={index} className="card p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-sm text-text-medium">
                              {new Date(announcement.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                              {announcement.type}
                            </span>
                          </div>
                          <h3 className="heading-4 mb-2">{announcement.title}</h3>
                          <p className="text-body-sm">{announcement.description}</p>
                        </div>
                        <ChevronRight className="h-5 w-5 text-text-medium ml-4 flex-shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Quick Actions */}
              {/* <div className="lg:w-1/3 animate-on-scroll">
                <h3 className="heading-3 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  <Link href="/membership" className="block">
                    <div className="card p-6 text-center bg-gradient-to-r from-primary to-secondary text-white hover:shadow-xl">
                      <Users className="h-12 w-12 mx-auto mb-4" />
                      <h4 className="text-lg font-semibold mb-2">Join IEEE</h4>
                      <p className="text-sm opacity-90">Become a member of the global IEEE community</p>
                    </div> */}
                  {/* </Link>

                  <Link href="/events" className="block">
                    <div className="card p-6 text-center hover:shadow-xl">
                      <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h4 className="text-lg font-semibold mb-2 text-text-dark">Upcoming Events</h4>
                      <p className="text-sm text-text-medium">Discover our latest workshops and conferences</p>
                    </div>
                  </Link> */}

                  {/* <Link href="/contact" className="block">
                    <div className="card p-6 text-center hover:shadow-xl">
                      <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <h4 className="text-lg font-semibold mb-2 text-text-dark">Get in Touch</h4>
                      <p className="text-sm text-text-medium">Have questions? We're here to help</p>
                    </div>
                  </Link>
                </div>
              </div> */} 
            {/* </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section id="contact" className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container-custom text-center animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect with fellow professionals, access exclusive resources, and
              advance your career in sensor technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://www.ieee.org/membership/join/index.html?WT.mc_id=hc_join" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Become a Member
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
