import { useRouter } from 'next/router'
import React from 'react'

const WeightroomCard = ({title,linksTo}:any) => {
  const router = useRouter()
  return (
    <div 
    onClick={()=> router.push(`/weight-rooms/${linksTo}`)}
    className='flex items-center sm:rounded shadow justify-center bg-white w-full h-96  hover:cursor-pointer hover:bg-yellow-100 duration-150 ease-in-out'>
            <h2 className='text-4xl sm:text-2xl font-bold text-center'>{title}</h2>
    </div>
  )
}

export default WeightroomCard