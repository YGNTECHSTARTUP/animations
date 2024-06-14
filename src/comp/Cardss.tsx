import React from 'react'
import CardComp from './CardComp'
import { selectData } from '@/db/scripts/selectData'
import { ProductData, ProductDatas } from '@/app/constant'

const Cardss = async () => {
    const data = await selectData() 
    
  return (
    <div>
    <CardComp data={data}/>
    </div>
  )
}

export default Cardss