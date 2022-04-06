import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import {workouts} from "../workouts"
import CenterFeed from "./CenterFeed"
import { signInPopUpState } from "./layout/Header"

const dummyList = "abcdefghijklmnopqrstuvwxyz"
const Tile = ({ elem,key}: any) => {
    return (
        <div key={key} className='bg-white h-96 w-full sm:h-44 sm:w-full md:w-56 flex items-center justify-center text-5xl hover:bg-yellow-100 duration-200 hover:cursor-pointer rounded shadow'>{elem}</div>
    )
}
console.log(workouts)
const Grid = () => {
    const router = useRouter()
    let list = dummyList.toUpperCase().split("")
    const [signInPopUp,setSignInPopUp] = useRecoilState(signInPopUpState)

    const handleClick = (workout:any) => {
        // if (!signInPopUp) {
        //  setSignInPopUp((prev)=> !prev)   
        // }
        // else{
        //     router.push(``)
        // }
        console.log(workout)
      }
    return (
        <div className='bg-gray-50 w-full overflow-auto flex items-center justify-center'>
            <CenterFeed>
            <div className='sm:p-5 flex flex-wrap justify-center items-center md:grid md:place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7 gap-5 bg-gray-50 h-auto'>
                {workouts.map((workout, key):any=> {
                    return (
                        <div key={key} onClick={()=> router.push(`/workouts/${workout.workoutName}`)} className='relative group bg-white h-96 w-full sm:h-44 sm:w-full md:w-56 flex items-center justify-center text-5xl font-bold hover:bg-yellow-100 duration-200 hover:cursor-pointer rounded shadow '>
                            <p className="flex group-hover:opacity-0 duration-100 ease-in-out">{workout.muscleGroup}</p>
                            <div className="absolute flex flex-col">
                                <p className=" text-base font-semibold duration-200 opacity-0 group-hover:opacity-100">
                                    {workout.workoutName}
                                </p>
                               
                             {workout.main?.map((item):any=>{
                                  return (
                                      <p className="font-light text-base duration-200 opacity-0 group-hover:opacity-100">
                                        {item}
                                    </p>
                                  )
                              }).slice(0,5)}

                        
                            </div>
                            
                        </div>
                    )
                })}
                {list.map((elem,key):any => {
                    return (
                            <Tile elem={elem} key={key}/>
                    )
                })}
            </div>
            </CenterFeed>
        </div>
    )
}

export default Grid