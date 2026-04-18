import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, ExternalLink, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'ExeCom', href: '/execom' },
    // { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'AIoT Labs', href: '/aiot-labs' },
    { name: 'Contact', href: '/#contact' },
  ]

  // const activities = [
  //   { name: 'Competitions', href: '/competitions' },
  //   { name: 'Workshops', href: '/workshops' },
  //   { name: 'Technical Talks', href: '/events' },
  //   { name: 'Announcements', href: '/announcements' },
  // ]

  const ieeeLinks = [
    { name: 'IEEE Global', href: 'https://www.ieee.org', external: true },
    { name: 'IEEE Sensors Council', href: 'https://ieee-sensors.org', external: true },
    { name: 'IEEE Kerala Section', href: 'https://ieeekerala.org', external: true },
    { name: 'IEEE Region 10', href: 'https://ieee-r10.org', external: true },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-600' },
  ]

  return (
    <footer className="bg-accent text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Organization Info */}
            <div className="lg:col-span-3">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative h-12 w-12">
                  <Image
                    src="/images/ieeesckc.png"
                    alt="IEEE Sensors Council Kerala Chapter Logo"
                    fill
                    className="object-contain bg-white rounded-lg p-1"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">IEEE Sensors Council</h3>
                  <p className="text-primary-300 text-sm">Kerala Chapter</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                The IEEE Sensors Council Kerala Chapter is dedicated to advancing sensor 
                technologies and fostering innovation in the field of sensors and sensing 
                systems. We organize technical events, workshops, and competitions to 
                promote knowledge sharing and professional development.
              </p>

              {/* Contact Information */}
              <div className="space-y-2">
                {/* <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Digital University Kerala, Trivandrum, Kerala, India
                  </span>
                </div> */}
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                  <a 
                    href="mailto:shone.jose@ieee.org" 
                    className="text-gray-300 hover:text-primary-300 transition-colors text-sm"
                  >
                    shone.jose@ieee.org
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-base font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Activities</h4>
              <ul className="space-y-3">
                {activities.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-primary-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>

          {/* IEEE Links Section */}
          {/* <div className="mt-12 pt-8 border-t border-gray-600">
            <h4 className="text-lg font-semibold mb-6 text-white">IEEE Organizations</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {ieeeLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-300 transition-colors duration-200 group"
                >
                  <span>{link.name}</span>
                  {link.external && (
                    <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </a>
              ))}
            </div>
          </div> */}

          {/* Social Media */}
          {/* <div className="mt-8">
            <h4 className="text-lg font-semibold mb-6 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-700 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:bg-gray-600`}
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 py-4">
          {/* <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>
                © {currentYear} IEEE Sensors Council Kerala Chapter. All rights reserved.
              </p>
              <p className="mt-1">
                IEEE is a registered trademark of The Institute of Electrical and Electronics Engineers, Inc.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-primary-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms-of-service" 
                className="text-gray-300 hover:text-primary-300 transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-primary-300 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer 
