import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Layout from '../../../components/layout/Layout'
import { roomData as data } from '../../../roomData'
import { Check } from "@styled-icons/bootstrap/Check"
import { MinusCircle } from "@styled-icons/heroicons-outline/MinusCircle"
import RoomCard from '../../../components/RoomCard'

const WeightRoom: NextPage = () => {
  const router = useRouter()
  let roomType = router.query.id;
  const [room, setRoom] = useState("")
  const [joinedRoom, setJoinedRoom] = useState(false)
  useEffect(() => {
    const assignRoomType = () => {
      if (roomType === "bodybuilding") {
        setRoom("Bodybuilding")
      }
      if (roomType === "powerlifting") {
        setRoom("Powerlifting")
      }
      if (roomType === "functionalfitness") {
        setRoom("Functional Fitness")
      }
    }
    assignRoomType()
  }, [])
  let roomData = data.filter((elem) => elem.roomName === roomType)

  return (
    <Layout>
      <div className='w-full h-full flex justify-center'>
        <div className='flex flex-col flex-1 h-full items-center z-40 max-w-7xl'>
          <div className='grid place-items-center w-full  pb-5'>
            <div className='flex group relative w-full h-full hover:cursor-pointer'>
              <div className='absolute w-full h-full bg-gray-900 bg-opacity-60 group-hover:bg-opacity-80 z-30 duration-200'></div>
              <img className='object-cover flex w-full max-h-108' src={roomData[0].heroImg} alt="hero" />
              <h3 className='absolute flex justify-center items-center h-full w-full text-5xl text-yellow-400 text-center font-extrabold duration-200 z-30'>{room}</h3>
            </div>
          </div>
          <div className='container flex-col items-center justify-center'>
            <div className='flex w-full items-center justify-between px-5 py-5'>
              <h1 className='text-4xl text-center font-semibold text-yellow-400 '>{room}</h1>
              <div className='flex items-center justify-center'>
                <button onClick={() => setJoinedRoom((prev) => !prev)} className='flex w-full px-2 py-1 bg-yellow-400 hover:cursor-pointer text-yellow-900 rounded-md font-semibold shadow hover:bg-yellow-300 duration-200 ease-in-out'>
                  {!joinedRoom ?
                    <div className='flex items-center justify-center'>
                      <p>Join</p>
                      <div className='flex w-7'><Check /></div>
                    </div> :
                    <div className='flex items-center justify-center'>
                      <p>Leave</p>
                      <div className='flex w-7 ml-1'><MinusCircle /></div>
                    </div>
                  }
                </button>
                </div>
            </div>
            <p className='px-2 pb-5 sm:pb-0'>
              {roomData[0].welcomeMsg}
            </p>
            <hr className='my-2'/>
              <div className='flex w-full'>
                <div className='shadow rounded p-3'></div>
            </div>
            <div className='grid place-items-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full sm:py-10'>
              <RoomCard title={"20 REP SQUAT PROGRAM"} img={"https://image.boxrox.com/2021/02/Front-Squat-workouts.jpg"} />
              <RoomCard title={"20 REP SQUAT PROGRAM"} img={"https://image.boxrox.com/2021/02/Front-Squat-workouts.jpg"} />
              <RoomCard title={"20 REP SQUAT PROGRAM"} img={"https://image.boxrox.com/2021/02/Front-Squat-workouts.jpg"} />
              <RoomCard title={"20 REP SQUAT PROGRAM"} img={"https://image.boxrox.com/2021/02/Front-Squat-workouts.jpg"} />
              <RoomCard title={"20 REP SQUAT PROGRAM"} img={"https://image.boxrox.com/2021/02/Front-Squat-workouts.jpg"} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WeightRoom