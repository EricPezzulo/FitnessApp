interface PostProps {
    img: string
    textContent: string
    title:string
}
const HomepagePost = ({img, textContent, title}:PostProps) => {
  return (
<div className='block bg-white hover:bg-yellow-100 duration-200 ease-in-out max-w-2xl shadow rounded my-2 hover:cursor-pointer'>
   <div className="flex h-full">
     <img className="flex w-full object-cover max-h-56" src={img} alt="test" />
   </div>
   <div className="flex flex-col h-full p-3">
     <h3 className="text-2xl pb-2 ">{title}</h3>
     <p>{textContent}</p>
   </div>
</div>
  )
}

export default HomepagePost
