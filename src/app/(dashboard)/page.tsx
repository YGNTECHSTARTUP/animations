import { MoveRight } from "lucide-react";
import { CarousalComp } from "@/comp/CarousalComp";
import Searchheader from "@/comp/Searchheader";
import CardComp from "@/comp/CardComp";
// import CardComp from "@/comp/CardComp";
// import CardComp from "@/comp/CardComp";

export default  function Home() {

  
  return (
    <div>
   <div className=" mt-[25%]  w-full flex-row  overflow-hidden      lg:mt-[10%] xl:flex xl:justify-evenly">
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
   

   
 
   </div>
   <div className="-mt-72 min-h-screen min-w-full flex-row items-center justify-center">
   <div className='mt-72 text-4xl font-extrabold text-primary hover:underline '>
          Trending Products
        </div>

<CardComp/>
{/* /   <Test/> */}

   </div>
  
    </div>
    
  
  );
}
