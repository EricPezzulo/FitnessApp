
const RoomCard = ({title, img}:any) => {
  return (
   
       <div className='w-full sm:w-44 h-full bg-white shadow sm:rounded-md flex flex-col sm:m-2 hover:cursor-pointer sm:hover:scale-105 duration-150 ease-in-out'>
         <div className='h-44'>
            <img  className='h-full w-full object-cover sm:rounded-t'src={img} alt="pic" />
         </div>
         <div className='h-16 flex items-center justify-center'>
            <p className='text-center font-semibold'>{title}</p>
         </div>
       </div>
    
  )
}

export default RoomCard