import { useState } from "react"
import { atom, useRecoilState } from "recoil"
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
export const signInPopUpState = atom({
    key: "signInPopUpState",
    default: false
})
const Header = () => {
    const { data: session }: any = useSession()
    // const [signedIn, setSignedIn] = useState(false)
    // const [signedInPopUp, setSignedInPopUp] = useRecoilState(signInPopUpState)
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <header className="px-2 bg-white flex h-20 w-full justify-between items-end pb-2  border-b shadow z-50">
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
                {!session ?
                    <button
                        onClick={() => signIn()}
                        className='border-yellow-400 text-yellow-400 border-2 rounded-md text-2xl px-2 py-1 '>Sign In</button>
                    : <div className='flex items-center'>
                        <div className="hidden sm:flex">
                            <p className="font-light text-lg">Welcome, {session?.user?.name}</p>
                        </div>
                        <div className="ml-2 rounded-full w-10 h-10 relative">
                            <Image
                                onClick={() => setToggleMenu(!toggleMenu)}
                                onMouseEnter={() => setToggleMenu(!toggleMenu)}
                                className="rounded-full flex w-10 h-10 hover:cursor-pointer"
                                alt={`${session?.user.name}'s avatar`}
                                src={session?.user.image} width={42}
                                height={42} />

                        </div>
                        {toggleMenu && (
                            <div onMouseLeave={() => setToggleMenu(!toggleMenu)} className="z-50 sm:rounded bg-gray-600 bg-opacity-75 duration-150 hover:bg-opacity-100 w-full sm:w-44 sm:p-5 absolute top-20 left-0 sm:right-0 ">
                                <ul className="relative text-2xl font-light text-center sm:text-lg">
                                    <div className="duration-200 hover:text-yellow-400 hover:cursor-pointer border-b py-1 border-gray-400">
                                        <li className=" duration-100
                                        ">My Account</li>
                                    </div>
                                    <div className="duration-200 hover:text-yellow-400 hover:cursor-pointer border-b py-1 border-gray-400">
                                        <li className=" duration-100
                                        ">Programs</li>
                                    </div>
                                    <div className="duration-200 hover:text-yellow-400 hover:cursor-pointer border-b py-1 border-gray-400">
                                        <li className=" duration-100
                                        ">Settings</li>
                                    </div>

                                    <div className="duration-200 hover:text-yellow-400 hover:cursor-pointer border-b py-1 border-gray-400">
                                        <li className=" duration-100
                                        " onClick={() => signOut()}>Sign Out</li>
                                    </div>

                                </ul>
                            </div>
                        )}
                    </div>}

            </div>
        </header>
    )
}

export default Header