import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import { signInPopUpState } from '../../components/layout/Header'
import Layout from '../../components/layout/Layout'

export const Tile = ({elem}: any) => {
      return (
          <div className='bg-white h-96 w-full sm:h-44 sm:w-full md:w-56 flex items-center justify-center text-5xl hover:bg-yellow-100 duration-200 hover:cursor-pointer rounded shadow'>{elem}</div>
      )
  }
const Workouts: NextPage = () => {
  const dummyList = "abcdefghijklmnopqrstuvwxyz"
  

  let list = dummyList.toUpperCase().split("")
  const [signInPopUp,setSignInPopUp] = useRecoilState(signInPopUpState)
  const handleClick = (workout:any) => {
      if (!signInPopUp) {
       setSignInPopUp((prev)=> !prev)   
      }
    }
  return (
   <Layout>
     <div className='flex h-full w-full bg-gray-50 z-40'>
     <div className='w-full overflow-auto flex items-center justify-center scrollbar-hide'>
            <div className='grid container place-items-center  gap-5 w-full md:p-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {list.map((elem,key):any => {
                        return (
                            <div className="flex w-full items-center justify-center" onClick={handleClick} key={key}>
                                <Tile elem={elem} />
                            </div>
                        )
                    })}
            </div>
        </div>
     </div>
 
   </Layout>
  )
}

export default Workouts;
