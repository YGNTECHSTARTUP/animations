
import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import {GeistMono} from "geist/font/mono"

import React from 'react'
import { ThemeProvider } from '@/components/Theme-Provider';
import './globals.css'
import Navbar from '@/comp/Navbar';





export const metadata: Metadata = {
  title: 'Pricify',
  description: 'A tool which uses the concept of webscraping to scrape the ecomerce Amazon product.',
  icons:'assets/images/site-logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   


<html lang="en " className={`${GeistSans.variable} ${GeistMono.variable}`}>

<body className=' bg-background selection:bg-primary selection:text-regalpurple' >
  <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
                  <Navbar/>

  {children}
  </ThemeProvider>

  </body>
</html>

  
 
  
   
  )
}
