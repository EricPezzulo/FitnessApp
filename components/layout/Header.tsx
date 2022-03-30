import { useState } from "react"
import { atom, useRecoilState } from "recoil"
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt"
import Link from "next/link"
export const signInPopUpState = atom({
    key: "signInPopUpState",
    default: false
})
const Header = () => {
    const [signedIn, setSignedIn] = useState(false)
    const [signedInPopUp, setSignedInPopUp] = useRecoilState(signInPopUpState)
    return (
        <div className="px-2 bg-white flex h-20 w-full justify-between items-end pb-2 shadow z-30">
            <div>
                <Link href="/" >
                    <p className='flex text-4xl text-yellow-500 font-semibold hover:cursor-pointer'>BUDDYWOD</p>
                </Link>
            </div>
            <div className='hidden sm:items-center sm:justify-center sm:flex'>
                <div className='flex bg-white px-2 py-1 shadow-inner-input rounded-md'>
                    <div className='w-8 text-gray-400'><SearchAlt /></div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className='text-xl font-light outline-none px-2 bg-transparent' />
                </div>
            </div>

            <div>
                {!signedIn ?
                    <button
                        onClick={() => setSignedIn(!signedIn)}
                        className='border-yellow-400 text-yellow-400 border-2 rounded-md text-2xl px-2 py-1 '>Sign In</button>
                    : <img
                        onClick={() => setSignedIn(!signedIn)}
                        className="flex w-10 hover:cursor-pointer" alt='pro pic' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png'></img>}

            </div>
        </div>
    )
}

export default Header