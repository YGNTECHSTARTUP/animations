
import React from 'react'
import { ModeToggle } from '@/components/ui/toggle'
// import { UserButton,} from "@clerk/nextjs";
// import { dark } from '@clerk/themes';

// import Searchheader from './Searchheader';
import Logo from './Logo';

const Navbar = () => {
  return (
  
  <nav className='fixed z-50 flex  h-16 w-full justify-between    border-2 border-indigo-400 border-ring bg-primary-foreground p-2 sm:px-12  '>
    <ul className='ml-12 flex justify-start'>
    <li className='p-2 opacity-100'>
    <Logo/>
      </li>

     
     
    </ul>
    {/* <div className='mt-2 hidden sm:block '>
      <Searchheader/>
    </div> */}
    <div className=' mt-[5px] flex  space-x-4' >
    <ModeToggle/>
   <div className=' outline-primary '>
   {/* <UserButton  appearance={{
        baseTheme: dark,
      }} afterSignOutUrl='/'/>
  */}
   </div>

    
   
    </div>

  </nav>
  )
}

export default Navbar