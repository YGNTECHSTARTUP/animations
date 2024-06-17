import Error404 from '@/comp/Error404'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import StarsGen from '@/comp/StarsGen'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import CardComp from '@/comp/CardComp'
// import CardComp from '@/comp/CardComp'
const page = ({searchParams}:any) => {
  console.log(searchParams)
  const {currency,productAvailability,productImage,productPrice,productReviews,productStars,productTitle,productURL,productdiscountRate} = searchParams
 console.log(currency)
  if(currency === '') return <Error404/>
  return (
    <div>
 <div className='mt-28  min-w-full flex-row justify-center    overflow-hidden sm:mt-4 md:mt-28 lg:mt-[10%] lg:flex'>
<Card className='flex h-[5%]  w-full md:mx-auto md:w-[59%] lg:m-[1%] lg:w-2  lg:grow' >
  <CardContent>
    <Image src={productImage} alt={productTitle} width={1080} height={1080}/>
  </CardContent>
</Card>
<div className=' flex-1 grow lg:m-[1%]'>
  <h1 className='mt-[5%] font-sans text-2xl lg:text-4xl xl:text-5xl'>{productTitle}</h1>
  <div className='mt-[1%]  flex xl:text-5xl'>
  <h1 className='font-sans text-3xl font-extrabold text-red-800  lg:text-4xl xl:text-5xl'>-{productdiscountRate}%</h1>

  <h1 className='ml-2 font-sans text-3xl font-extrabold lg:text-4xl xl:text-5xl'>{productPrice}</h1>
  <h1 className='font-sans text-3xl font-extrabold text-blue-800 lg:text-4xl xl:text-5xl'>{currency}</h1>

  </div>
  <div className='flex'>
    <StarsGen count={parseInt(productStars)}/>
    <h1 className='font-sans text-lg font-extrabold lg:text-xl '>({productReviews}) ratings <span className='text-green-500'>{productAvailability?"Available":"Currently Unavialable"}</span></h1>

  </div>
  <Link href={productURL}>
  <Button className='mt-3 w-full bg-yellow-500 hover:bg-yellow-400 hover:text-black hover:underline'>Buy Now </Button>

  </Link>
  <Link href={productURL}>
  <Button className='mt-3 w-full bg-yellow-500 hover:bg-yellow-400 hover:text-black hover:underline'>Add to Cart </Button>

  </Link>

</div>
<div>

</div>
    </div>
    <div className=''>
    <div className='text-4xl font-extrabold text-primary underline hover:underline'>
          Trending Products
        </div>
<CardComp/>
    </div>
    </div>
   
  )
}

export default page