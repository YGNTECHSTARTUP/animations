/* eslint-disable tailwindcss/classnames-order */
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/ui/toggle'
import { UserButton,} from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import MobNav from './MobNav';
import Image from 'next/image'
import ygn from '../assets/images/site-logo.svg'
// import { Button } from '@/components/ui/button';
const Navbar = () => {
  return (
  <nav className='flex justify-around bg-destructive h-16 p-2'>
    <ul className='flex justify-start'>
      <li className='p-2'>
        <Link className='flex -ml-11' href={'/'}>
        <Image alt="ygn" height={26} width={26} src={ygn} className='invert contrast-100'/>
          <span className=' text-3xl text-popover-foreground font-sans font-extrabold'>
          Ygn  </span>
          <span className='mt-2 text-muted text-xl font-sans font-bold'>Discussions</span></Link>
      </li>
     
    </ul>
    <div className=' flex space-x-4  mt-[5px]' >
    <ModeToggle/>
   <div className=' outline-primary '>
   <UserButton  appearance={{
        baseTheme: dark,
      }} afterSignOutUrl='/'/>
 
   </div>
 <div>
 <MobNav/>
  </div>  
    
   
    </div>

  </nav>
  )
}

export default Navbar