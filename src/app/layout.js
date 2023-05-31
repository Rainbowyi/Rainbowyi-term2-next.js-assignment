import './globals.css'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Online',
  description: 'Grab your popcorn and enjoy the show!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers >
        <Header />
        <Navbar />
        {children}
        </Providers>  
        </body>
    </html>
  )
}
