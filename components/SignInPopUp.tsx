import { animated } from "react-spring"
import { useRecoilState } from "recoil"
import { CloseOutline } from "styled-icons/evaicons-outline"
import { signInPopUpState } from "./layout/Header"

const SignInPopUp = ({style}:any) => {
    const [signInPopUp, setSignInPopUp] = useRecoilState(signInPopUpState)
    return (
        <animated.div style={style} className="fixed min-h-full flex items-center justify-center w-full z-60 bg-gray-400 bg-opacity-40">
            <div className="bg-white relative top-1/2 flex flex-col shadow-xl w-80 h-auto p-3 rounded">
                <button className='flex flex-1 self-end' onClick={() => setSignInPopUp(!signInPopUp)}>
                    <div className="w-8 text-yellow-500 hover:text-red-400 bg-yellow-200 duration-300 rounded ease-in-out"><CloseOutline /></div>
                </button>
                    <p className='self-center text-center flex flex-1 my-5'>You must be signed in to use this feature</p>
                <button className='flex flex-1 self-center mb-1' onClick={() => setSignInPopUp(!signInPopUp)}>
                    <div className="flex items-center justify-center w-20 h-8 text-center bg-gradient-to-tr from-yellow-300 to-orange-300  duration-300 rounded
                    ">Ok</div>
                </button>
            </div>
        </animated.div> 
    )
}

export default SignInPopUp