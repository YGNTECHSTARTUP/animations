import { Star } from 'lucide-react'
import React from 'react'

const StarsGen = ({count}) => {
  return (
    <div className='flex'>
        {[...Array(count)].map((i) => 
        <span key={crypto.randomUUID}>
            <Star  size={24} fill='yellow' />
        </span>)}
    </div>
  )
}

export default StarsGen