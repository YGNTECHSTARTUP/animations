import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Error404 = () => {
  return (
    <div className='flex justify-center items-center text-9xl font-extrabold text-primary min-h-screen max-w-full underline'>
        <Link href={"/"}>
        Error404
        </Link>
       
    </div>
  )
}

export default Error404