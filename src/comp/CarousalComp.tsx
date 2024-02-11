"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { heroImages } from "../app/constant"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
 
} from "@/components/ui/carousel"
import Image from "next/image"
 
export function CarousalComp() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-lg"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {heroImages.map((hero) => (
          <CarouselItem key={hero.key}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <Image src={hero.imgurl} alt={hero.alt} height={100} width={1000}/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
    </Carousel>
  )
}