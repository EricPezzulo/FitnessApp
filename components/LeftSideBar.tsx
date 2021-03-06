import { useRouter } from "next/router";
import { ChevronRight } from "@styled-icons/boxicons-regular/ChevronRight";
import { useSpring, animated, useTransition } from 'react-spring'
import { atom, useRecoilState, useRecoilValue } from "recoil";
const menuItems =["Workouts","Weight-Rooms","WOD"]
const  MenuItem = ({menuItemName, bottomRadius}:any) => {
    const router = useRouter();
    const [toggleMenu, setToggleMenu] = useRecoilState(toggleMenuState)
    const handleClick=()=> {
        router.push(`/${menuItemName.toLowerCase()}`)
        setToggleMenu(false)
    }
    return (
        <div 
            onClick={handleClick} 
            className={`group z-0 text-xl font-thin py-2 pl-2 border-t hover:cursor-pointer hover:bg-gray-100 duration-300 transition-all ${bottomRadius}`}>
                <p className="group-hover:translate-x-3 duration-300">{menuItemName}</p>
        </div>
    )
}
export const toggleMenuState = atom({
    key:"toggleMenuState",
    default: false,
})
const LeftSideBar = () => {
    const [toggleMenu, setToggleMenu] = useRecoilState(toggleMenuState)
    const transitions = useSpring({
       x: toggleMenu ? 0 : -290,
       config:{duration:300} 
    })
    const handleClick=()=> {
        setToggleMenu((prev:any)=> !prev)
    }

    return (
        <animated.div style={transitions} className="relative shadow flex flex-col bg-white bg-opacity-90 hover:bg-opacity-100 duration-200 border-br border-gray-100 w-72 z-50 min-h-full rounded-br-md ">
           <div className="flex flex-col">
            <MenuItem menuItemName={"Workouts"}/>
            <MenuItem menuItemName={"Weight-Rooms"}/>
            <MenuItem bottomRadius={"rounded-br-md"} menuItemName={"WOD"}/>

            </div>
           <div className={toggleMenu ?`absolute -right-6 mt-5  w-min` :`absolute -right-14 mt-5  w-min`}>
               <button className={toggleMenu ? `bg-yellow-400 shadow rounded-full w-12 h-12 rotate-180 duration-200` :`bg-yellow-400 shadow duration-200 rounded-full w-12 h-12 opacity-50 hover:opacity-100`} onClick={handleClick}>{<ChevronRight/>}</button>
            </div>
        </animated.div>
    )
}

export default LeftSideBar