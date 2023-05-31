import './globals.css'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })



export const metadata = {
  title: 'Movie Online',
  description: 'Grab your popcorn and enjoy the show!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
         strategy="afterInteractive" />
         <Script 
         id="google-analytics-script"
         strategy="afterInteractive"
         >
         {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
         `}
         </Script >
        <Providers >
        <Header />
        <Navbar />
        <SearchBox />
        {children}
        </Providers>  
        </body>
    </html>
  )
}
