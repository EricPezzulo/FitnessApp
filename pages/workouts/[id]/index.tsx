import { gql } from 'apollo-server-micro'
import { useSession } from 'next-auth/react'
import React from 'react'
import Layout from '../../../components/layout/Layout'
import { sanityClient, urlFor } from '../../../sanity'

export const getServerSideProps = async ({params}:any) =>{
// Dynamic Query
  const query = `*[_type=="workout" && slug.current== $id][0]{
    _id,
    title,
    muscleGroup->{
      name
    },
    author-> {
      name,
      slug
    },
    mainImage{
      asset
    },
    body,
  }`
  const workout = await sanityClient.fetch(query, {
    id: params?.id
  })
  if (!workout){
    return {
      notFound: true
    }
  }
  return {
    props:{
      workout
    }
  }
}

const index = ({workout}:any) => {
  const {data:session}:any = useSession()
  console.log(workout)
  if(!session){
    return (
      <Layout>
        <div className='w-full min-h-full bg-gray-50 flex flex-col justify-center items-center'>
          <h2 className='text-2xl font-light'>You must be signed in to access this  page</h2>
        </div>
      </Layout>
    )
  }
  return (
   <Layout>
     <div className='w-full min-h-full bg-gray-50 flex flex-col items-center'>
     
       <div className='grid place-items-center w-full pb-5'>
            <div className='flex group relative w-full h-full hover:cursor-pointer'>
              <div className='absolute w-full h-full bg-gray-900 bg-opacity-60 group-hover:bg-opacity-80 z-30 duration-200'></div>
                <img className='object-cover flex w-full max-h-108' src={urlFor(workout.mainImage.asset._ref).url()} alt="hero" />
              <h3 className='absolute flex justify-center items-center h-full w-full text-5xl text-white text-center font-extrabold duration-200 z-30'>{workout.muscleGroup.name}</h3>
            </div>
          </div>



       <div className='my-5'>
         <p className='text-3xl'>{workout?.title}</p>
         <p><span className='text-gray-500 font-medium'>Author: </span>{workout?.author?.name}</p>
       </div>
       <div className='py-5'>
         <ul>
         {workout.body.map((w:any)=>{
           return (
             <li className='list-disc'>{w.children[0].text}</li>
           )
         })}</ul>
       </div>
     </div>
   </Layout>
  )
}

export default index