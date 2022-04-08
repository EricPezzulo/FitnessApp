import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import Grid from '../../components/Grid'
import { signInPopUpState } from '../../components/layout/Header'
import Layout from '../../components/layout/Layout'
import LeftSideBar from '../../components/LeftSideBar'

const Workouts: NextPage = () => {
  const [signInPopUp,setSignInPopUp] = useRecoilState(signInPopUpState)
  const handleClick = () => {
    setSignInPopUp((prev)=> !prev)
  }
  return (
   <Layout>
     <div className='flex h-auto w-full bg-gray-50'><Grid/></div>
 
   </Layout>
  )
}

export default Workouts;
