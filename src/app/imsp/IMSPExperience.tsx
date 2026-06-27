'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  Calendar,
  Code2,
  GraduationCap,
  Handshake,
  Layers,
  MessageSquare,
  Sparkles,
  Target,
  Trophy,
  Users,
  Users2,
} from 'lucide-react'

const stats = [
  { value: '30', label: 'Teams in Cohort 1' },
  { value: '2', label: 'Months of mentorship' },
  { value: '4', label: 'Students per team' },
  { value: '2+2', label: 'Cross-college pairs' },
]

const heroChips = [
  'CS · AI · Data Science',
  '2nd & 3rd Year Students',
  'July 2026 Cohort',
]

const howItWorks = [
  {
    phase: '01',
    title: 'Offline Mentor Meetup',
    description:
      'Students and mentors meet in person to understand the problem statements, align on project ideas, and establish a development roadmap together before the project phase begins.',
    icon: Handshake,
  },
  {
    phase: '02',
    title: 'Two-Month Project Phase',
    description:
      'Cross-college teams of four build their software solutions with weekly one-hour mentor review sessions, guided by industry-standard practices and AI-assisted development tools.',
    icon: Code2,
  },
  {
    phase: '03',
    title: 'Demo Day',
    description:
      'All teams present their completed solutions in person to mentors, industry professionals, academia, and community stakeholders. Selected projects may receive further visibility opportunities.',
    icon: Trophy,
  },
]

const benefits = [
  {
    text: 'Work on real-world assistive technology challenges with social impact.',
    icon: Target,
  },
  {
    text: 'Learn industry-standard software engineering practices.',
    icon: Layers,
  },
  {
    text: 'Receive two months of mentorship from experienced industry professionals.',
    icon: Users2,
  },
  {
    text: 'Participate in an offline Mentor Meetup and Demo Day.',
    icon: Calendar,
  },
  {
    text: 'Access complimentary Codex credits for AI-assisted software development.',
    icon: Sparkles,
  },
  {
    text: 'Build a portfolio-worthy project with real-world relevance.',
    icon: Briefcase,
  },
  {
    text: 'Receive an internship certificate upon successful completion.',
    icon: Award,
  },
  {
    text: 'Have your project and team featured on the program showcase website.',
    icon: BookOpen,
  },
  {
    text: 'Expand your professional network across institutions and industries.',
    icon: Building2,
  },
]

const eligibility = [
  {
    title: 'Year of Study',
    description: '2nd or 3rd year undergraduate students.',
    icon: GraduationCap,
  },
  {
    title: 'Discipline',
    description: 'Computer Science, Artificial Intelligence, or Data Science programmes.',
    icon: Code2,
  },
  {
    title: 'Team Structure',
    description: 'Four students per team: two from one college and two from a different college.',
    icon: Users,
  },
  {
    title: 'Commitment',
    description: 'Attendance at the offline Mentor Meetup, Demo Day, and weekly review sessions.',
    icon: MessageSquare,
  },
]

function getRevealProps(reduceMotion: boolean, delay = 0, amount = 0.18) {
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

export default function IMSPExperience() {
  const reduceMotion = useReducedMotion() ?? false

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative isolate overflow-hidden text-white"
        style={brandGradientStyle}
      >
        <div className="absolute inset-0" style={heroOverlayStyle} />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:88px_88px]" />

        <div className="container-custom relative grid min-h-[calc(100svh-8rem)] items-center gap-14 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:py-20">
          <div className="max-w-3xl">
            <motion.p
              {...getHeroRevealProps(reduceMotion, 0.05)}
              className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold uppercase tracking-[0.32em] text-white/72"
            >
              <span>IEEE Sensors Council · Kerala Chapter</span>
              <span className="text-white/30">·</span>
              <span>Codex Community Kochi</span>
            </motion.p>

            <motion.h1
              {...getHeroRevealProps(reduceMotion, 0.12)}
              className="mt-6 max-w-5xl font-calibri text-5xl font-bold leading-[1.0] sm:text-6xl lg:text-7xl xl:text-[5rem]"
            >
              Industry Mentors for{' '}
              <span className="italic font-semibold text-white/90">
                Student Projects
              </span>
            </motion.h1>

            <motion.p
              {...getHeroRevealProps(reduceMotion, 0.2)}
              className="mt-6 max-w-2xl text-lg leading-8 text-white/82 md:text-xl"
            >
              Code with Purpose. Build with Mentors. Create Impact. A two-month
              project-based learning experience where students solve real-world
              assistive technology challenges under expert industry guidance.
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
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                See how it works
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              {...getHeroRevealProps(reduceMotion, 0.44)}
              className="mt-8 flex items-center gap-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
                Powered by
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://raw.githubusercontent.com/lobehub/lobe-icons/master/packages/static-png/light/codex-color.png"
                alt="Codex"
                className="h-6 w-6 rounded-md"
              />
              <span className="text-sm font-semibold text-white/80">
                Codex Community Kochi
              </span>
            </motion.div>
          </div>

          {/* Hero visual - cross-college team network */}
          <motion.div
            {...getHeroRevealProps(reduceMotion, 0.18)}
            className="relative mx-auto w-full max-w-[480px]"
          >
            <div className="absolute -inset-6 rounded-[2.75rem] border border-white/10 opacity-50" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/6 p-6 shadow-[0_40px_120px_rgba(3,18,10,0.38)] backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

              <div className="relative space-y-4">
                {/* Header label */}
                <div className="flex items-center justify-between text-[0.66rem] font-semibold uppercase tracking-[0.28em] text-white/55">
                  <span>Cohort 1 · July 2026</span>
                  <span>30 teams</span>
                </div>

                {/* Team diagram */}
                <div className="rounded-[1.75rem] border border-white/10 bg-black/10 px-5 py-6 backdrop-blur-sm">
                  <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                    Team Structure
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    {/* College A */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center">
                        <p className="text-[0.65rem] uppercase tracking-widest text-white/55">College A</p>
                        <div className="mt-2 flex gap-2 justify-center">
                          <div className="h-8 w-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-white text-xs font-bold">S1</div>
                          <div className="h-8 w-8 rounded-full bg-[#00AEEF] flex items-center justify-center text-white text-xs font-bold">S2</div>
                        </div>
                      </div>
                    </div>

                    {/* Plus connector */}
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-px w-6 bg-white/20" />
                      <span className="text-white/40 text-lg font-light">+</span>
                      <div className="h-px w-6 bg-white/20" />
                    </div>

                    {/* College B */}
                    <div className="flex flex-col items-center gap-2">
                      <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-center">
                        <p className="text-[0.65rem] uppercase tracking-widest text-white/55">College B</p>
                        <div className="mt-2 flex gap-2 justify-center">
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">S3</div>
                          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">S4</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow down to mentor */}
                  <div className="my-3 flex justify-center">
                    <div className="flex flex-col items-center gap-1">
                      <div className="h-4 w-px bg-white/20" />
                      <ArrowRight className="h-3 w-3 rotate-90 text-white/30" />
                    </div>
                  </div>

                  {/* Mentor */}
                  <div className="rounded-2xl border border-white/15 bg-white/8 px-5 py-4 text-center">
                    <p className="text-[0.65rem] uppercase tracking-widest text-white/55 mb-2">Industry Mentor</p>
                    <p className="text-sm font-semibold text-white/90">Weekly 1-hr Reviews</p>
                    <p className="text-xs text-white/55 mt-1">+ Codex Credits</p>
                  </div>
                </div>

                {/* Bottom stat chips */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: '2mo', label: 'Duration' },
                    { val: '4', label: 'Per team' },
                    { val: '30', label: 'Teams max' },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="rounded-[1.2rem] border border-white/10 bg-black/12 px-3 py-3 text-center backdrop-blur-sm"
                    >
                      <p className="font-calibri text-2xl font-bold text-white">{s.val}</p>
                      <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-white/55">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
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

      {/* ── About ── */}
      <section className="relative overflow-hidden bg-light-bg py-16 md:py-20">
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />
        <div className="container-custom grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)] lg:items-start">
          <motion.div {...getRevealProps(reduceMotion)} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              About the Program
            </p>
            <h2 className="mt-4 max-w-4xl font-calibri text-4xl font-bold leading-tight text-accent md:text-5xl lg:text-[3.5rem]">
              Solving assistive technology challenges with industry guidance
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-text-medium">
              The Industry Mentors for Student Projects Program is a flagship initiative
              by the IEEE Sensors Council Kerala Chapter, supported by Codex Community
              Kochi, that connects 2nd and 3rd year Computer Science, AI, and Data Science
              students with experienced industry professionals. Over two months, cross-college
              teams develop software solutions for real-world assistive technology problem
              statements identified in partnership with government and community stakeholders.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-text-medium">
              Each team of four brings together two students from one college and two
              from another, breaking institutional boundaries and building the kind of
              collaborative, cross-functional skills that define great software teams.
            </p>
          </motion.div>

          <motion.div
            {...getRevealProps(reduceMotion, 0.08)}
            className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white/85 shadow-[0_24px_80px_rgba(9,46,61,0.08)] backdrop-blur-sm"
          >
            {eligibility.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`flex gap-4 px-6 py-6 ${index !== eligibility.length - 1 ? 'border-b border-primary/10' : ''}`}
                >
                  <div className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-accent">{item.title}</h3>
                    <p className="mt-1 text-sm leading-7 text-text-medium">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="scroll-mt-24 bg-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div {...getRevealProps(reduceMotion)} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Three Phases
            </p>
            <h2 className="mt-4 font-calibri text-4xl font-bold text-accent md:text-5xl">
              From kickoff to showcase, a structured journey
            </h2>
          </motion.div>

          <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-primary/10 bg-light-bg">
            {howItWorks.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.article
                  key={step.title}
                  {...getRevealProps(reduceMotion, index * 0.06)}
                  className={`group grid gap-6 px-6 py-8 transition-colors duration-300 hover:bg-white/80 lg:grid-cols-[88px_minmax(0,0.9fr)_minmax(0,1fr)] lg:px-8 ${
                    index !== howItWorks.length - 1 ? 'border-b border-primary/10' : ''
                  }`}
                >
                  <div className="flex items-center gap-4 lg:block">
                    <p className="font-calibri text-5xl font-bold leading-none text-primary/25 transition-colors duration-300 group-hover:text-primary/45">
                      {step.phase}
                    </p>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight text-accent">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base leading-8 text-text-medium">{step.description}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="relative overflow-hidden bg-alt-bg py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container-custom grid gap-12 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
          <motion.div
            {...getRevealProps(reduceMotion)}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary">
              Program Benefits
            </p>
            <h2 className="mt-4 font-calibri text-4xl font-bold text-accent md:text-5xl">
              What participants gain
            </h2>
            <p className="mt-5 text-base leading-8 text-text-medium">
              Beyond the project itself, every participant walks away with skills,
              credentials, and connections that matter.
            </p>
          </motion.div>

          <motion.div
            {...getRevealProps(reduceMotion, 0.08)}
            className="overflow-hidden rounded-[2.25rem] border border-primary/10 bg-white shadow-[0_24px_80px_rgba(9,46,61,0.06)]"
          >
            <div className="grid md:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon
                const isLastRow =
                  benefits.length % 2 === 0
                    ? index >= benefits.length - 2
                    : index === benefits.length - 1

                return (
                  <div
                    key={item.text}
                    className={`flex gap-4 px-6 py-6 transition-colors duration-300 hover:bg-light-bg ${
                      !isLastRow ? 'border-b border-primary/10' : ''
                    } ${index % 2 === 0 ? 'md:border-r md:border-primary/10' : ''}`}
                  >
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <span className="font-calibri text-3xl font-bold leading-none text-primary/30">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="pt-1 text-base leading-7 text-accent">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
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
                Cohort 1 · July 2026
              </p>
              <h2 className="mt-4 font-calibri text-4xl font-bold leading-tight md:text-5xl">
                Limited to the first 30 teams. Apply now.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/82">
                Applications are open for the July 2026 batch. Form your cross-college team
                of four and apply to be part of the inaugural cohort of the Industry Mentors
                for Student Projects Program.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 lg:items-end">
              <a
                href="https://forms.gle/XmFGRmjg5FYP7hbk6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-primary transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Apply Now
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="max-w-xs text-sm leading-7 text-white/68 lg:text-right">
                Limited to the first 30 teams. Applications open for the July 2026 batch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
