import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { signInPopUpState } from '../../components/layout/Header'
import Layout from '../../components/layout/Layout'
import {sanityClient, urlFor} from '../../sanity'

export const Tile = ({workout}: any) => {
  const {data:session}:any = useSession()
  const [signInPopUp,setSignInPopUp] = useRecoilState(signInPopUpState)

  const router = useRouter()
  const handleClick = ()=> {
    if(!session){
       setSignInPopUp((prev)=> !prev)   
      } else {
        router.push(`/workouts/${workout?.slug?.current}`)
      }
  }
  return (
          <div className='group  bg-white h-96 w-full sm:h-44 sm:w-full sm:w-56  text-5xl hover:bg-yellow-100 duration-200 hover:cursor-pointer rounded shadow items-center justify-center flex'
          onClick={handleClick} title="See Full Workout">
            <div className='flex items-center justify-center'>
              <p className='group-hover:hidden duration-150 text-center relative'>{workout.title}</p>
              </div>
              <div className='flex flex-col text-center items-center justify-center'>
               {workout.main.map((exercise:any) => {
                return (
                  <p key={exercise._key} className='text-2xl font-light sm:font-normal sm:text-base hidden group-hover:flex duration-150'>
                    {exercise.children[0].text}
                  </p>
                )
              }
              ).slice(0,2)} 
              <div><p className='text-base hidden group-hover:flex duration-150 text-orange-600 animate-pulse'>click to see full workout</p></div>
              </div>
            </div>
      )
  }
const Workouts: NextPage = ({workouts}:any) => {
  const {data:session}:any = useSession()
  const [signInPopUp,setSignInPopUp] = useRecoilState(signInPopUpState)
  const handleClick = () => {
    if(!session)
      if (!signInPopUp) {
       setSignInPopUp((prev)=> !prev)   
      }
      // else{
      //   router.push(`/workouts/${}`)
      // }
    }
    console.log(workouts)
  return (
   <Layout>
     <div className='flex flex-col min-h-full w-full bg-gray-50 z-40'>
     <div className='w-full overflow-auto flex items-center justify-center scrollbar-hide'>
            <div className='grid p-2 sm:container place-items-center gap-5 w-full md:p-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {workouts.map((workout:any)=>{
                      return (
                        <div className='w-full' key={workout._id}>
                          <Tile workout={workout}/>
                        </div>
                      )
                    })
                    }
            </div>
        </div>
     </div>
 
   </Layout>
  )
}

export default Workouts;

export const getServerSideProps = async() => {
  const query = `*[_type == "workout"]{
    _id, 
    title,
    slug,
    muscleGroup,
    author-> {
    name,
    slug
  },
  mainImage {
    asset
  },
  main,
  warmup
  }`
  const workouts = await sanityClient.fetch(query);
  return {
    props:{
      workouts
    }
  }
}