import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import MetaHeader from './components/MetaHeader'
import MetaFooter from './components/MetaFooter'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'IEEE Sensors Council Kerala Chapter',
  description: 'Advancing sensor technologies for humanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} font-open-sans min-h-screen flex flex-col`}>
        <MetaHeader />
        {children}
        <MetaFooter />
      </body>
    </html>
  )
}
