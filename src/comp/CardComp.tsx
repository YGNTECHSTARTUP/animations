import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { db } from '@/db/db'
import { Data } from '@/db/schema'

// Define the props interface for better type checking

export async function selectData() {
  const data = await db.select().from(Data)
  return data
}
export const dynamic ="force-dynamic"
const CardComp: React.FC = async() => {
  const data = await selectData()
  return (
    <div className='grid grid-cols-1 gap-10 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
      {data.map((product) => (
        <Link href={
          {
            pathname: '/product',
            query: {
              currency: product.currency,
              productAvailability: product.availability,
              productImage: product.image,
              productPrice: product.price,
              productReviews: product.reviews,
              productStars: product.stars,
              productTitle: product.title,
              productURL: product.url,
              productdiscountRate: product.discountRate,
            },
          }
        } key={product.id}>
        <Card >
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <Image
              src={product.image}
              alt={`Product ${product.id}`}
              height={250}
              width={250}
            />
          </CardContent>
        </Card>
        
        </Link>
        
      ))}
    </div>
  );
};

export default CardComp;
