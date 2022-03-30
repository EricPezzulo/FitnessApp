import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import Grid from '../components/Grid'
import { signInPopUpState } from '../components/layout/Header'
import Layout from '../components/layout/Layout'
import LeftSideBar from '../components/LeftSideBar'

const Workouts: NextPage = () => {
  const [signInPopUp,setSignInPopUp] = useRecoilState(signInPopUpState)
  const handleClick = () => {
    setSignInPopUp((prev)=> !prev)
  }
  return (
   <Layout>
     <div className='flex'>
     {/* <div className='flex h-full'><LeftSideBar/></div> */}
     <div className='flex h-full w-full bg-gray-50'><Grid/></div>
      {/* <div className='flex items-center justify-center mt-10'>
      <button className='flex shadow bg-gradient-to-tr from-yellow-300 to-orange-300 rounded px-5 py-2 text-xl font-thin' onClick={handleClick}>Toggle Modal</button>
    </div> */}
    </div>
   </Layout>
  )
}

export default Workouts;
