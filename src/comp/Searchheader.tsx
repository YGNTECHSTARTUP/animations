import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

const Searchheader = () => {
  return (
    
<form>   
    <label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">Search</label>
    <div className="relative w-[100%] md:w-[90%] lg:w-[80%] xl:w-[70%]">
        <div className="pointer-events-none absolute inset-y-0 start-0 flex  items-center ps-3">
            <svg className="h-4 w-4 text-muted-foreground" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <div className='flex'>
        <Input type="search" id="default-search" className="block  rounded-sm border-2 border-regalpurple bg-muted p-4  ps-10 text-sm text-muted-foreground ring-2 focus:border-regalpurple focus:ring-4 focus:ring-regalpurple focus:ring-offset-2 " placeholder="Search..." required>
        </Input>
        <Button className="ml-2" type="button" size={"lg"} variant={"default"} >Search</Button>
        </div>
        
    </div>
</form>

  )
}

export default Searchheader