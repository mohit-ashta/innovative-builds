import { counterData } from '@/constants/dahboard-data/counter-data'
import React from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { FaCoins, FaHandshake } from 'react-icons/fa'

export const Counter = () => {
  return (
      <div className='grid grid-cols-3 gap-4'>
        {counterData.map((data, index) => (
        <div key={index} className='cursor-pointer bg-brownish text-cream rounded-xl shadow-xl px-10 py-6 flex justify-between items-center text-end'>
        <div> {data.icon}</div>
          <div>
           <h2 className='text-3xl mb-3 font-lusitana'>{data.value}</h2>
          <h3 className='text-xl mb-3 '>{data.label}</h3></div>
         </div>
        ))}
      </div>
  )
}
