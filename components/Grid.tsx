import { useRecoilState } from "recoil"
import { signInPopUpState } from "./layout/Header"

const dummyList = "abcdefghijklmnopqrstuvwxyz"
const Tile = ({ elem,key}: any) => {
    return (
        <div key={key} className='bg-white h-96 w-full sm:h-44 sm:w-full md:w-56 flex items-center justify-center text-5xl hover:bg-yellow-100 duration-200 hover:cursor-pointer rounded shadow'>{elem}</div>
    )
}
const Grid = () => {
    let list = dummyList.toUpperCase().split("")
    const [signInPopUp,setSignInPopUp] = useRecoilState(signInPopUpState)

    const handleClick = () => {
        setSignInPopUp((prev)=> !prev)
      }
    return (
        <div className='bg-gray-50 w-full overflow-auto flex items-center justify-center'>
            <div onClick={handleClick} className='sm:p-5 flex flex-wrap justify-center items-center md:grid md:place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 4xl:grid-cols-7 gap-5 bg-gray-50 h-children'>
                {list.map((elem,key):any => {
                    return (
                       
                            <Tile elem={elem} key={key}/>
                        
                    )
                })}
            </div>
        </div>
    )
}

export default Grid