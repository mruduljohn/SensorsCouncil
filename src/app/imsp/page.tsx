import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import IMSPExperience from './IMSPExperience'

export const metadata = {
  title: 'Industry Mentors for Student Projects | IEEE Sensors Council Kerala Chapter',
  description:
    'A two-month project-based learning program where CS, AI, and Data Science students build assistive technology solutions under industry mentorship. July 2026 cohort — limited to 30 teams.',
}

export default function IMSPPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        <IMSPExperience />
      </main>
      <Footer />
    </div>
  )
}
