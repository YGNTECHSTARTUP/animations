import { MoveRight } from "lucide-react";
import { CarousalComp } from "@/comp/CarousalComp";
import Searchheader from "@/comp/Searchheader";
import CardComp from "@/comp/CardComp";

export default function Home() {
  return (
    <>
   <div className="ml-2 mt-56 min-h-screen w-full  flex-row  xl:flex xl:justify-evenly    ">
    <div className="">
    <div className="flex-row  text-primary min-[765px]:ml-28 min-[765px]:basis-[80%] xl:basis-[50%]">
    <div className='flex gap-2 font-mono font-semibold  text-violet-950 dark:text-violet-200'>
   Smart Shopping Starts Here:<MoveRight/>
    </div> 
<div className='mt-4 text-6xl font-bold text-primary min-[765px]:text-7xl '>Unleash the Power of <h1 className=' text-purple-600 '>Pricify</h1></div>

<div className="mt-8 text-lg font-semibold text-primary">Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</div>
<div className="mt-5 ">
  <div className="basis-[95%]">
  <Searchheader/>

  </div>
 
    </div>
    </div>
    
    

    </div>
    
    <div className="mt-12 flex cursor-pointer justify-center">
    <CarousalComp/>
    </div>
    <CardComp/>

   </div>
   
 
    </>
    
  
  );
}
