import type { Metadata } from 'next'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import AIoTLabsExperience from './AIoTLabsExperience'

export const metadata: Metadata = {
  metadataBase: new URL('https://sensorscouncil.ieeekerala.org'),
  title: 'AIoT Labs Initiative | IEEE Sensors Council Kerala Chapter',
  description:
    "IEEE Sensors Council Kerala Chapter's AIoT Labs Initiative - distributing hands-on lab kits to 17 engineering colleges across Kerala to build the next generation of sensor technology innovators.",
  alternates: {
    canonical: '/aiot-labs',
  },
  openGraph: {
    title: 'AIoT Labs Initiative | IEEE Sensors Council Kerala Chapter',
    description: 'Hands-on AIoT lab kits for 17 engineering colleges across Kerala.',
    url: 'https://sensorscouncil.ieeekerala.org/aiot-labs',
    siteName: 'IEEE Sensors Council Kerala Chapter',
    type: 'website',
  },
}

export default function AIoTLabsPage() {
  return (
    <main className="bg-white text-[#111D13]">
      <Header />
      <AIoTLabsExperience />
      <Footer />
    </main>
  )
}
