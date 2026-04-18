'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  BookOpenText,
  Boxes,
  BrainCircuit,
  Building2,
  Globe,
  GraduationCap,
  MapPinned,
  Network,
  Radio,
  Target,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'

const stats = [
  { value: '17', label: 'Partner colleges' },
  { value: '2', label: 'Phases of rollout' },
  { value: '1000+', label: 'Students to be reached' },
  { value: '14', label: 'Districts covered' },
]

const heroChips = [
  '17 Engineering Colleges',
  'Across Kerala',
  'Lab Kits · Workshops · Mentorship',
]

const proofPoints = [
  {
    title: 'Statewide footprint',
    description:
      'A Kerala-wide rollout connecting 17 engineering colleges across all 14 districts through two carefully sequenced phases.',
    icon: MapPinned,
  },
  {
    title: 'Project-ready infrastructure',
    description:
      'Students receive access to sensors, controllers, communication modules, and starter resources that make real prototyping possible.',
    icon: Wrench,
  },
  {
    title: 'Mentorship through IEEE',
    description:
      'Technical guidance, workshops, and a stronger link to the IEEE Sensors Council ecosystem help each campus go beyond a lab handover.',
    icon: Users,
  },
]

const goals = [
  {
    title: 'Increase Awareness of IEEE Sensors Council in Kerala',
    description:
      'Strengthen the presence and impact of the IEEE Sensors Council among engineering students, faculty, and institutions across Kerala. We aim to build a vibrant local community that stays connected to global sensors research, publications, and standards - making the Council a familiar and valued name on every campus.',
    icon: Globe,
  },
  {
    title: 'Provide Infrastructure for Hands-on Project Development',
    description:
      'Bridge the gap between textbook knowledge and practical skills by equipping colleges with dedicated AIoT lab kits - including sensors, microcontrollers, communication modules, and development boards. Students gain the infrastructure to ideate, prototype, and demonstrate real-world projects without resource constraints.',
    icon: Target,
  },
  {
    title: 'Increase STEM Awareness and Engagement',
    description:
      'Inspire a broader culture of curiosity, experimentation, and innovation in science, technology, engineering, and mathematics. Through workshops, demo sessions, and project showcases, we nurture critical thinking and problem-solving skills - encouraging students to see STEM not just as a subject, but as a way to solve real societal challenges.',
    icon: GraduationCap,
  },
]

const provisions = [
  {
    text: 'Microcontrollers and development boards (ESP32, Arduino)',
    icon: BrainCircuit,
  },
  {
    text: 'Multi-parameter environmental and physical sensors',
    icon: Radio,
  },
  {
    text: 'Wireless communication modules (Wi-Fi, Bluetooth, LoRa)',
    icon: Network,
  },
  {
    text: 'Edge AI processing hardware and supporting accessories',
    icon: Boxes,
  },
  {
    text: 'Project documentation templates and starter code',
    icon: BookOpenText,
  },
  {
    text: 'Access to IEEE Sensors Council technical resources and publications',
    icon: Building2,
  },
  {
    text: 'Hands-on workshops conducted by IEEE volunteers and mentors',
    icon: Users,
  },
  {
    text: 'Opportunities to present projects at IEEE Kerala events',
    icon: Trophy,
  },
]

const phases = [
  {
    phase: 'Phase 1',
    subtitle: '9 Colleges',
    description: 'Initial deployment across nine institutions to establish the first AIoT lab footprint.',
    badgeClass: 'bg-[#00AEEF] text-white',
    accentClass: 'bg-[#00AEEF]',
    colleges: [
      'National Institute of Technology Calicut (NITC)',
      'Mangalam College of Engineering, Ettumanoor',
      'Mar Baselios Institute of Technology and Science, Kothamangalam',
      'Sahrdaya College of Engineering and Technology, Kodakara',
      'College of Engineering, Adoor',
      "St. Joseph's College of Engineering and Technology, Palai",
      'Rajagiri School of Engineering and Technology',
      'TocH School of Science and Technology',
      'Muthoot Institute of Technology and Science',
    ],
  },
  {
    phase: 'Phase 2',
    subtitle: '8 Colleges',
    description: 'A second wave extending the initiative to more campuses and widening district coverage.',
    badgeClass: 'bg-primary text-white',
    accentClass: 'bg-primary',
    colleges: [
      'Government Engineering College, Thrissur',
      'LBS College of Engineering, Kasargod',
      'Cochin University of Science and Technology (CUSAT)',
      'College of Engineering, Chengannur',
      'Muslim Association College of Engineering, Kasargod',
      'Government Engineering College, Kozhikode',
      'Government Engineering College, Kannur',
      'Government Model Engineering College, Thrikkakara',
    ],
  },
]

function getRevealProps(
  reduceMotion: boolean,
  delay = 0,
  amount = 0.18,
) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : 28 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    viewport: { once: true, amount },
  }
}

function getHeroRevealProps(reduceMotion: boolean, delay = 0) {
  return {
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }
}

const brandGradientStyle = {
  background:
    'linear-gradient(135deg, rgb(var(--primary-rgb)) 0%, rgb(var(--secondary-rgb)) 100%)',
}

const heroOverlayStyle = {
  background:
    'radial-gradient(circle at top left, rgba(255,255,255,0.18), transparent 30%), radial-gradient(circle at 78% 18%, rgba(255,255,255,0.09), transparent 22%), linear-gradient(135deg, rgba(0,0,0,0.12), transparent 48%, rgba(255,255,255,0.06))',
}

export default function AIoTLabsExperience() {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <>
      <section
        className="relative isolate overflow-hidden text-white"
        style={brandGradientStyle}
      >
        <div className="absolute inset-0" style={heroOverlayStyle} />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="container-custom relative grid min-h-[calc(100svh-8rem)] items-center gap-14 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:py-20">
          <div className="max-w-3xl">
            <motion.p
              {...getHeroRevealProps(reduceMotion, 0.05)}
              className="text-sm font-semibold uppercase tracking-[0.32em] text-white/72"
            >
              IEEE Sensors Council · Kerala Chapter
            </motion.p>

            <motion.h1
              {...getHeroRevealProps(reduceMotion, 0.12)}
              className="mt-6 max-w-5xl font-calibri text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
            >
              AIoT Labs <span className="italic font-semibold text-white/90">Initiative</span>
            </motion.h1>

            <motion.p
              {...getHeroRevealProps(reduceMotion, 0.2)}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl"
            >
              Equipping engineering students across Kerala with hands-on AIoT lab kits to
              build real-world sensor-based projects - bridging the gap between curriculum
              and industry.
            </motion.p>

            <motion.div
              {...getHeroRevealProps(reduceMotion, 0.28)}
              className="mt-8 flex flex-wrap gap-3"
            >
              {heroChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium text-white/92 backdrop-blur-sm"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              {...getHeroRevealProps(reduceMotion, 0.36)}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#rollout"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore the rollout
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:shone.jose@ieee.org"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Contact the chapter
              </a>
            </motion.div>
          </div>

          <motion.div
            {...getHeroRevealProps(reduceMotion, 0.18)}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -inset-6 rounded-[2.75rem] border border-white/10 opacity-50" />
            <div className="relative aspect-[0.92] overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/6 p-5 shadow-[0_40px_120px_rgba(3,18,10,0.38)] backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />
              <div className="relative h-full rounded-[2rem] border border-white/10">
                <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                  <span>Kerala rollout</span>
                  <span>17 nodes</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[70%] w-[70%]">
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    <div className="absolute inset-[16%] rounded-full border border-white/10" />
                    <div className="absolute inset-[30%] rounded-full border border-white/8" />
                    <div className="absolute left-1/2 top-1/2 h-px w-[84%] -translate-x-1/2 -translate-y-1/2 bg-white/10" />
                    <div className="absolute left-1/2 top-1/2 h-[84%] w-px -translate-x-1/2 -translate-y-1/2 bg-white/10" />

                    {Array.from({ length: 17 }).map((_, index) => {
                      const angle = index * (360 / 17) - 90
                      const radius = index % 2 === 0 ? 168 : 124
                      const isPhaseOne = index < 9

                      return (
                        <div
                          key={index}
                          className="absolute left-1/2 top-1/2"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
                          }}
                        >
                          <motion.span
                            initial={{ scale: reduceMotion ? 1 : 0.86, opacity: 0 }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                              transition: {
                                duration: 0.45,
                                delay: 0.4 + index * 0.04,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            }}
                            className={`block rounded-full border border-white/25 shadow-[0_0_0_10px_rgba(255,255,255,0.03)] ${
                              isPhaseOne ? 'h-4 w-4 bg-[#00AEEF]' : 'h-3.5 w-3.5 bg-primary'
                            }`}
                          />
                        </div>
                      )
                    })}

                    <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/12 bg-primary px-5 text-center shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
                      <p className="text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                        AIoT Labs
                      </p>
                      <p className="mt-2 font-calibri text-4xl font-bold leading-none text-white">
                        17
                      </p>
                      <p className="mt-2 text-sm text-white/72">colleges connected</p>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-5 bottom-5 grid gap-3 sm:grid-cols-2">
                  {phases.map((phase) => (
                    <div
                      key={phase.phase}
                      className="rounded-[1.4rem] border border-white/10 bg-black/12 px-4 py-4 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${phase.accentClass}`} />
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">
                          {phase.phase}
                        </p>
                      </div>
                      <p className="mt-3 font-calibri text-3xl font-bold text-white">
                        {phase.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 bg-black/12">
          <div className="container-custom grid gap-0 md:grid-cols-4 md:divide-x md:divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                {...getRevealProps(reduceMotion, 0.08 + index * 0.05, 0.5)}
                className="py-7 md:px-6"
              >
                <p
                  className="font-calibri text-4xl font-bold leading-none text-white md:text-5xl"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/62">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-light-bg py-16 md:py-20">
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-custom grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:items-start">
          <motion.div {...getRevealProps(reduceMotion)} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              About the Initiative
            </p>
            <h2 className="mt-4 max-w-4xl font-calibri text-4xl font-bold leading-tight text-[#111D13] md:text-5xl lg:text-[3.5rem]">
              Bringing AIoT to every engineering campus in Kerala
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#556B5A]">
              The AIoT Labs Initiative is a flagship outreach programme by the IEEE
              Sensors Council Kerala Chapter, aimed at fostering hands-on learning in
              Artificial Intelligence of Things (AIoT) among undergraduate and
              postgraduate engineering students. By distributing fully equipped lab kits
              and providing structured mentorship, we are building a strong foundation
              for the next generation of sensor technology innovators across Kerala.
            </p>
          </motion.div>

          <motion.div
            {...getRevealProps(reduceMotion, 0.08)}
            className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white/85 shadow-[0_24px_80px_rgba(17,29,19,0.08)] backdrop-blur-sm"
          >
            {proofPoints.map((point, index) => {
              const Icon = point.icon

              return (
                <div
                  key={point.title}
                  className={`flex gap-4 px-6 py-6 ${index !== proofPoints.length - 1 ? 'border-b border-primary/10' : ''}`}
                >
                  <div className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#111D13]">{point.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#556B5A]">{point.description}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div {...getRevealProps(reduceMotion)} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Three Goals
            </p>
            <h2 className="mt-4 font-calibri text-4xl font-bold text-[#111D13] md:text-5xl">
              Building awareness, infrastructure, and STEM momentum
            </h2>
          </motion.div>

          <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-primary/10 bg-light-bg">
            {goals.map((goal, index) => {
              const Icon = goal.icon

              return (
                <motion.article
                  key={goal.title}
                  {...getRevealProps(reduceMotion, index * 0.05)}
                  className={`group grid gap-6 px-6 py-8 transition-colors duration-300 hover:bg-white/80 lg:grid-cols-[88px_minmax(0,0.9fr)_minmax(0,1fr)] lg:px-8 ${
                    index !== goals.length - 1 ? 'border-b border-primary/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 lg:block">
                    <p className="font-calibri text-5xl font-bold leading-none text-primary/25 transition-colors duration-300 group-hover:text-primary/45">
                      {`0${index + 1}`}
                    </p>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-[#111D13]">
                      {goal.title}
                    </h3>
                  </div>

                  <p className="text-base leading-8 text-[#556B5A]">{goal.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-alt-bg py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container-custom grid gap-12 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
          <motion.div
            {...getRevealProps(reduceMotion)}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              What We Provide
            </p>
            <h2 className="mt-4 font-calibri text-4xl font-bold text-[#111D13] md:text-5xl">
              A practical starter ecosystem for AIoT project development
            </h2>
            <p className="mt-5 text-base leading-8 text-[#556B5A]">
              Each participating campus receives a well-rounded foundation for learning,
              prototyping, documenting, and presenting sensor-based work.
            </p>
          </motion.div>

          <motion.div
            {...getRevealProps(reduceMotion, 0.08)}
            className="overflow-hidden rounded-[2.25rem] border border-primary/10 bg-white shadow-[0_24px_80px_rgba(17,29,19,0.06)]"
          >
            <div className="grid md:grid-cols-2">
              {provisions.map((item, index) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.text}
                    className={`flex gap-4 px-6 py-6 transition-colors duration-300 hover:bg-light-bg ${
                      index < provisions.length - 2 ? 'border-b border-primary/10 md:border-b' : ''
                    } ${index % 2 === 0 ? 'md:border-r md:border-primary/10' : ''} ${
                      index >= provisions.length - 2 ? 'border-b-0' : ''
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="font-calibri text-3xl font-bold leading-none text-primary/30">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00AEEF]/10 text-[#00AEEF]">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="pt-1 text-base leading-7 text-[#111D13]">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="rollout" className="scroll-mt-24 bg-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div {...getRevealProps(reduceMotion)} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Participating Colleges
            </p>
            <h2 className="mt-4 font-calibri text-4xl font-bold text-[#111D13] md:text-5xl">
              17 institutions across two phases of rollout
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-8 xl:grid-cols-2">
            {phases.map((phase, phaseIndex) => (
              <motion.article
                key={phase.phase}
                {...getRevealProps(reduceMotion, phaseIndex * 0.08)}
                className="relative overflow-hidden rounded-[2.25rem] border border-primary/10 bg-light-bg p-8 shadow-[0_24px_80px_rgba(17,29,19,0.05)]"
              >
                <div className={`absolute inset-x-0 top-0 h-1 ${phase.accentClass}`} />

                <div className="flex flex-wrap items-end justify-between gap-6">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#556B5A]">
                      {phase.phase}
                    </p>
                    <h3 className="mt-2 font-calibri text-4xl font-bold text-[#111D13]">
                      {phase.subtitle}
                    </h3>
                  </div>
                  <p className="max-w-xs text-sm leading-6 text-[#556B5A]">{phase.description}</p>
                </div>

                <ol className="mt-8 divide-y divide-primary/10 border-t border-primary/10">
                  {phase.colleges.map((college, index) => (
                    <li
                      key={college}
                      className="group grid grid-cols-[44px_minmax(0,1fr)] items-start gap-4 py-4 transition-transform duration-300 hover:translate-x-1"
                    >
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold ${phase.badgeClass}`}
                      >
                        {index + 1}
                      </span>
                      <span className="pt-2 text-base leading-7 text-[#111D13]">{college}</span>
                    </li>
                  ))}
                </ol>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden py-16 text-white md:py-20"
        style={brandGradientStyle}
      >
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="container-custom">
          <motion.div
            {...getRevealProps(reduceMotion)}
            className="grid gap-8 rounded-[2.4rem] border border-white/10 bg-white/6 p-8 shadow-[0_35px_120px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-12 lg:grid-cols-[minmax(0,1fr)_auto]"
          >
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/72">
                Join Future Phases
              </p>
              <h2 className="mt-4 font-calibri text-4xl font-bold leading-tight md:text-5xl">
                Is your college interested in joining?
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/82">
                We welcome new institutions to be part of the AIoT Labs Initiative. Reach
                out to the IEEE Sensors Council Kerala Chapter to learn about future phases.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 lg:items-end">
              <a
                href="mailto:shone.jose@ieee.org"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="max-w-xs text-sm leading-7 text-white/68 lg:text-right">
                Future phases will continue expanding AIoT access, technical support, and
                IEEE community engagement for new campuses across Kerala.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
