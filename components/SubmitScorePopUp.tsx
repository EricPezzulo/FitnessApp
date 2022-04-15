import React from 'react'
import { animated, useTransition } from 'react-spring'
import { atom, useRecoilState } from 'recoil'
import { CloseOutline } from 'styled-icons/evaicons-outline'
import { submitScorePopUpState } from '../pages/wod'




const SubmitScorePopUp = ({ style }: any) => {
    const [submitScorePopUp, setSubmitScorePopUp] = useRecoilState(submitScorePopUpState)

    return (
        <animated.div style={style} className="fixed min-h-full flex items-center justify-center w-full z-60 bg-gray-400 bg-opacity-40">
        <div className="bg-white relative top-1/2 flex flex-col shadow-xl w-80 h-auto p-3 rounded border-2 border-yellow-500">
            <button className='flex flex-1 self-end' onClick={() => setSubmitScorePopUp(!submitScorePopUp)}>
                <div className="w-8 text-yellow-500 bg-yellow-100 hover:bg-yellow-200 duration-300 rounded ease-in-out"><CloseOutline /></div>
            </button>
                <p className='self-center text-center flex flex-1 my-5'>Add Your Score:</p>
                <div className='mb-6 flex w-full items-center justify-center'>
                    <input type="text" placeholder='X rounds + X reps' className='outline-none border-2 border-yellow-300 rounded' />
                </div>
            <button className='flex flex-1 self-center mb-1' onClick={() => setSubmitScorePopUp(!submitScorePopUp)}>
                <div className="flex items-center justify-center w-20 h-8 text-center bg-gradient-to-tr from-yellow-300 to-orange-300  duration-300 rounded
                ">Submit</div>
            </button>
        </div>
    </animated.div> 
    )
}

export default SubmitScorePopUp