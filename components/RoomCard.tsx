import { urlFor } from "../sanity"

const RoomCard = ({workout}:any) => {
  return (
   
       <div className='w-full sm:w-44 h-full bg-white shadow sm:rounded-md flex flex-col sm:m-2 hover:cursor-pointer sm:hover:scale-105 duration-150 ease-in-out'>
         <div className='h-44'>
         {workout.mainImage ? <img className='object-cover flex w-full h-full' src={urlFor(workout?.mainImage?.asset?._ref).url()} alt="hero" /> : null}
         </div>
         <div className='h-full py-2 flex items-center justify-center'>
            <p className='text-center font-semibold'>{workout.title}</p>
         </div>
       </div>
    
  )
}

export default RoomCard