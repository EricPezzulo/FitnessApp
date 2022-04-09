import React from 'react'
import CenterFeed from '../../components/CenterFeed'
import Layout from '../../components/layout/Layout'
import WeightroomCard from '../../components/WeightroomCard'

const index = () => {
  return (
    <Layout>
      <div className='flex flex-col bg-gray-50 w-full h-full z-40'>
        <div className='flex flex-col items-center my-8'>
            <h1 className='text-3xl'>Weight Rooms</h1>
            <p className='text-xl text-center'>Weight Rooms are smaller subcommunities that focus on a specific style of training.</p>
            
            <ul className='text-center'>
                <p className='text-lg'>There are 3 types of weight rooms:</p>
                <li> Bodybuilding Rooms</li>
                <li> Powerlifting Rooms</li>
                <li> Functional Fitness Rooms</li>
                <li><span className='text-yellow-500 font-semibold'>**COMING SOON</span> Private INVITE ONLY rooms<span className='text-yellow-500 font-semibold'>**</span></li>
            </ul>
        </div>

        <div className='flex flex-col flex-1 w-full h-full bg-yellow-300'>
          <div className='w-full pt-3 px-5 sm:grid gap-5 sm:grid-cols-2 md:grid-cols-3'>
              <div className='mt-2 mb-4'>
                <WeightroomCard title={"Bodybuilding"} linksTo={"bodybuilding"} />
              </div>
              <div className='mt-2 mb-4'>
                <WeightroomCard title={"Powerlifting"} linksTo={"powerlifting"}/>
              </div>
              <div className='my-2'>
                <WeightroomCard title={"Functional Fitness"} linksTo={"functionalfitness"}/>
              </div>
        </div> 
      </div></div>
    </Layout>
  )
}

export default index