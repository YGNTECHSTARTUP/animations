
import type { Metadata } from 'next'
import { GeistSans } from "geist/font/sans";
import {GeistMono} from "geist/font/mono"
import { ClerkProvider } from '@clerk/nextjs';
import { dark, neobrutalism} from '@clerk/themes';
// import Navbar from '@/comp/Navbar';
import React from 'react'
import { ThemeProvider } from '@/components/Theme-Provider';
import './globals.css'
import CardComp from '@/comp/CardComp';
// import Navbar from '@/comp/Navbar';
// import LeftSidebar from '@/comp/LeftSidebar';




export const metadata: Metadata = {
  title: 'YgnDiscussions',
  description: 'A community driven platform where you can discuss about anything related to technology and you can gain new insights from the community.',
  icons:'assets/images/site-logo.svg'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
  <ClerkProvider  appearance={{
    elements: {
      formButtonPrimary:
        "bg-[#300171fc] hover:bg-purple-900 font-sans text-lg ",
        headerSubtitle: "text-white font-sans text-lg  font-sans",
        headerTitle: "text-regalpurple font-sans text-xl  font-sans",
        formFieldAction: "text-regalpurple font-sans text-lg  font-sans hover:text-regalpurple hover:underline",
        footerActionLink: "text-regalpurple font-sans text-sm  font-sans hover:text-regalpurple hover:underline",
        footerActionText: "text-white font-sans text-sm  font-sans hover:text-regalpurple ",
        formFieldLabel: "text-white font-sans text-lg  font-sans",
        dividerText: "text-white font-sans text-lg  font-sans",
        badge:"bg-indigo-500 text-white font-sans   font-sans",
    formFieldError: "text-red-500 font-sans text-lg  font-sans",
    formFieldErrorIcon: "bg-red-500 text-white font-sans text-lg  font-sans",   
    formFieldErrorText: "text-red-500 font-sans text-lg  font-sans",
    formFieldHint: "text-regalpurple font-sans text-lg  font-sans",
    formFieldHintIcon: "bg-white text-white font-sans text-lg  font-sans", 


    },
   
    baseTheme:[neobrutalism,dark],
    variables: { colorPrimary: "#a570eefc",colorDanger:'red',colorSuccess:'green',colorWarning:'yellow',colorBackground:'black' },
  }}>

<html lang="en " className={`${GeistSans.variable} ${GeistMono.variable}`}>

<body className=' bg-background selection:bg-primary selection:text-regalpurple' >
  <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange>
  {children}
  <CardComp/>
  </ThemeProvider>

  </body>
</html>

  
 
    
    </ClerkProvider>
  
   
  )
}
