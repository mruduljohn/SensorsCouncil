'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiMapPin, FiUser } from 'react-icons/fi';
import Link from 'next/link';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'June 23, 2025',
    title: 'Introduction and IEEE Session',
    events: [
      { time: '9:30 AM - 10:30 AM', title: 'Registration and Welcome Kit Distribution' },
      { time: '10:30 AM - 11:00 AM', title: 'Inauguration Ceremony' },
      { time: '11:00 AM - 12:30 PM', title: 'Empowering Sustainability through Open IoT Technologies', speaker: 'Mrs. Gopika T G' },
      { time: '12:30 PM - 2:00 PM', title: 'Lunch Break' },
      { time: '2:00 PM - 3:15 PM', title: 'Bringing Intelligence to Sensors', speaker: 'Mr. Sreenivas Pai' },
      { time: '3:15 PM - 3:30 PM', title: 'Tea Break' },
      { time: '3:30 PM - 4:00 PM', title: 'Ice-Breaking Activities' }
    ]
  },
  {
    day: 'Day 2',
    date: 'June 24, 2025',
    title: 'Design Workshop',
    events: [
      { time: '9:30 AM - 11:15 AM', title: 'Finite Element Modeling of Sensors', speaker: 'Ms. Lakshmi V' },
      { time: '11:15 AM - 11:30 AM', title: 'Tea Break' },
      { time: '11:30 AM - 1:00 PM', title: 'Continued Design Session' },
      { time: '1:00 PM - 2:00 PM', title: 'Lunch Break' },
      { time: '2:00 PM - 3:15 PM', title: 'Hands-on Design Exercises' },
      { time: '3:15 PM - 3:30 PM', title: 'Tea Break' },
      { time: '3:30 PM - 4:30 PM', title: 'Design Review and Discussion' }
    ]
  },
  {
    day: 'Day 3',
    date: 'June 25, 2025',
    title: 'Fabrication of Sensors',
    events: [
      { time: '9:30 AM - 11:15 AM', title: 'Fabrication of Screen-Printed Sensors: Techniques and Applications', speaker: 'Dr. Jose Joseph' },
      { time: '11:15 AM - 11:30 AM', title: 'Tea Break' },
      { time: '11:30 AM - 1:00 PM', title: 'Demonstration of Fabrication Techniques' },
      { time: '1:00 PM - 2:00 PM', title: 'Lunch Break' },
      { time: '2:00 PM - 3:15 PM', title: 'Hands-on session' },
      { time: '3:15 PM - 3:30 PM', title: 'Tea Break' },
      { time: '3:30 PM - 4:30 PM', title: 'Hands-on continued' }
    ]
  },
  {
    day: 'Day 4',
    date: 'June 26, 2025',
    title: 'Characterization and Sensor Readout',
    events: [
      { time: '9:30 AM - 11:15 AM', title: 'Characterization Techniques for Sensor Performance', speaker: 'Dr. Muthusankar Eswaran' },
      { time: '11:15 AM - 11:30 AM', title: 'Tea Break' },
      { time: '11:30 AM - 1:00 PM', title: 'Characterization Methods Demonstration' },
      { time: '1:00 PM - 2:00 PM', title: 'Lunch Break' },
      { time: '2:00 PM - 3:15 PM', title: 'Practical Session on Sensor Readout Methods' },
      { time: '3:15 PM - 3:30 PM', title: 'Tea Break' },
      { time: '3:30 PM - 4:30 PM', title: 'Data Analysis Workshop' }
    ]
  },
  {
    day: 'Day 5',
    date: 'June 27, 2025',
    title: 'Packaging of Sensors',
    events: [
      { time: '9:30 AM - 11:15 AM', title: 'Sensor Packaging Technologies', speaker: 'Prof. Alex P James' },
      { time: '11:15 AM - 11:30 AM', title: 'Tea Break' },
      { time: '11:30 AM - 1:00 PM', title: 'Packaging Demonstration' },
      { time: '1:00 PM - 2:00 PM', title: 'Lunch Break' },
      { time: '2:00 PM - 3:00 PM', title: 'Closing Ceremony and Certificate Distribution' }
    ]
  }
];

const ScheduleSection = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <section id="schedule" className="section-padding section-alt">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold">Program Schedule</span>
            <h2 className="heading-2 mt-2 mb-6">Event Timeline</h2>
            <p className="text-text-medium">
              Our carefully planned 5-day program covers all aspects of sensor technologies from design to deployment.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {scheduleData.map((day, index) => (
            <button
              key={index}
              onClick={() => setActiveDay(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeDay === index
                  ? 'bg-primary text-white'
                  : 'bg-white text-text-medium hover:bg-primary/10'
              }`}
            >
              {day.day}
            </button>
          ))}
        </div>

        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="bg-primary text-white p-6">
            <div className="flex items-center mb-2">
              <FiCalendar className="mr-2" />
              <span>{scheduleData[activeDay].date}</span>
            </div>
            <h3 className="text-2xl font-bold">{scheduleData[activeDay].title}</h3>
          </div>
          
          <div className="p-6">
            <ul className="space-y-6">
              {scheduleData[activeDay].events.map((event, index) => (
                <li key={index} className="relative pl-8 pb-6 border-b border-slate-200 last:border-0 last:pb-0">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="absolute left-2 top-4 bottom-0 w-[1px] bg-primary/30"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="flex items-center text-sm text-primary font-medium mb-1">
                        <FiClock className="mr-1" />
                        {event.time}
                      </div>
                      <h4 className="text-lg font-bold text-text-dark mb-1">{event.title}</h4>
                      {event.speaker && (
                        <div className="flex items-center text-sm text-text-medium">
                          <FiUser className="mr-1" />
                          <span>{event.speaker}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <p className="mb-6 text-text-medium">
            <FiMapPin className="inline-block mr-2" />
            All sessions will be held at Digital University Kerala, Trivandrum, in offline mode.
          </p>
          <Link href="/#register" className="btn-primary">
            Secure Your Spot
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;