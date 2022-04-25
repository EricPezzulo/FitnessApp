import { useRouter } from 'next/router';
import React, { useState } from 'react'
import Layout from '../../../../components/layout/Layout';
import {Share} from "@styled-icons/boxicons-regular/Share"
import { BookmarkBorder } from 'styled-icons/material-outlined';
import { Bookmark } from 'styled-icons/bootstrap';
import { sanityClient, urlFor } from '../../../../sanity'
import {BookmarkCheckFill} from "@styled-icons/bootstrap/BookmarkCheckFill"

const index = ({ workout }: any) => {
  const router = useRouter()
  const [workoutSaved, setWorkoutSaved] = useState(false)

  const sendBack = () => {
    router.push('/weight-rooms/bodybuilding')
  }
  return (
    <Layout>
    <div className='w-full min-h-full bg-gray-50 flex flex-col xl:flex-row items-center xl:justify-around'>
      <div className='flex w-full flex-col items-center justify-center xl:flex-row'>
        <div
        onClick={sendBack} className='grid place-items-center w-full mb-5 max-w-4xl'>
             <div className='flex group relative w-full h-full hover:cursor-pointer max-h-108 xl:max-h-108 xl:max-w-3xl xl:rounded-md'>
               <div className='absolute w-full h-full bg-gray-900 bg-opacity-60 group-hover:bg-opacity-80 z-30 duration-200 xl:rounded-md '></div>
                 {workout.mainImage ? <img className='object-cover xl:rounded-md flex w-full ' src={urlFor(workout?.mainImage?.asset?._ref).url()} alt="hero" /> : null}
               <h3 className='absolute flex justify-center items-center h-full w-full text-5xl text-yellow-400 text-center font-extrabold duration-200 z-30'>Bodybuilding</h3>
             </div>
        </div>
        <div className='my-3 flex flex-col w-full sm:max-w-md '>
          <p className='text-3xl text-center'>{workout?.title}</p>
          <div className='text-lg flex items-center justify-between w-full px-3 pt-3 sm:px-0'>
            <div className='flex'>
              <p className='text-gray-500 font-semibold'>Posted By: <span className='text-black font-normal'>{workout?.author?.name}</span></p>
               <div className='rounded-full px-1'>{workout.author.image ? <img className='rounded-full w-7 h-7 object-cover' src={urlFor(workout?.author?.image?.asset?._ref).url()} alt=""/> : null}</div>
            </div>
             <div className='flex'>
               <div className='flex'>
                 <button onClick={()=> setWorkoutSaved(!workoutSaved)} className='w-7 h-7 text-yellow-400 hover:cursor-pointer'>{workoutSaved ? <BookmarkCheckFill/> :<Bookmark/> }</button>
                 <p className='text-gray-600'>{workoutSaved ? "unsave" : "save"}</p>
               </div>
        
                         <div className='flex flex-row items-center justify-center pl-1'>
               <button className='w-7 h-7 text-yellow-400 hover:cursor-pointer'><Share/></button>
               <p className='text-gray-600 text-lg'>share</p>
                         </div>
             </div>
           </div>
           <hr className='my-2 w-full sm:max-w-md sm:rounded'/>
        
         <div className='py-2 flex flex-col items-center justify-center'>
          <h4 className='text-xl text-yellow-400 font-semibold'>Warm Up:</h4>
          <ul className='mx-7'>
          {workout.warmup.map((w:any, key:any)=>{
            return (
              <li key={key} className='list-disc my-2 text-lg '>{w.children[0].text}</li>
            )
          })}</ul>
          <h4 className='text-xl text-yellow-400 font-semibold'>Main Workout:</h4>
          <ul className='mx-7'>
          {workout.main.map((w:any, key:any)=>{
            return (
              <li key={key} className='list-disc my-2 text-lg '>{w.children[0].text}</li>
            )
          })}</ul>
        </div>
        </div>
        
        
      </div>
    </div>
  </Layout>

  )
}

export default index;

export const getServerSideProps = async (context: any) => {
  const query = `*[_type== "bodybuilding" && slug.current == $id][0]{
        ...,
        author -> {
          ...
        }
        }`
  const workout = await sanityClient.fetch(query, {
    id: context.query?.id
  })
  return {
    props: {
      workout
    }
  }
}