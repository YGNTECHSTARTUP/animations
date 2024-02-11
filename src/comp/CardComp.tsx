import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { productimages } from '@/app/constant'
import Image from 'next/image'
    
    
// Import necessary components and libraries

const CardComp = () => {
    return (
      <>
        <div className='text-4xl font-extrabold text-primary hover:underline'>
          Trending Products
        </div>
        <div className='mt-4 grid  grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {productimages.map((imagee) => {
            return (
              <Card key={imagee.key}>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={imagee.imgurl}
                    alt={imagee.alt}
                    height={250}
                    width={250}
                    // Add priority prop if necessary
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </>
    );
  };
  
  export default CardComp;
  

