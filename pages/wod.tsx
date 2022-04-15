import { atom, useRecoilState } from "recoil"
import type { NextPage } from 'next'
import Layout from "../components/layout/Layout"
import UserScoreCard from "../components/WOD/UserScoreCard"
export const submitScorePopUpState = atom({
    key: "submitScorePopUpState",
    default: false
})
const WOD: NextPage = () => {
    const [submitScorePopUp, setSubmitScorePopUp] = useRecoilState(submitScorePopUpState)
    const handleClick = () => {
        if (!submitScorePopUp) {
            setSubmitScorePopUp((prev)=> !prev)   
        }
        
      }
    return (
        <Layout>
            <div className="bg-gray-50 flex flex-col w-full items-center z-40">
                <div className="mt-3">
                    <h1 className="text-3xl">Workout Of The Day: <span className="text-yellow-400 font-semibold">FRAN</span></h1>
                </div>
                <div className="mt-5 text-lg bg-white p-3 shadow rounded-md">
                    <p>Workout Type: <span className="font-semibold">Bodybuilding</span></p>
                    <p>Muscle Group Targeted: <span className="font-semibold">BACK</span></p>
                    <p className="font-semibold">Workout:</p>
                    <ul className="ml-4">
                        <li>3x12 Barbell Rows</li>
                        <li>3x12 Lat Pull Downs</li>
                        <li>3x8 Dumbell Rows</li>
                        <li>3xMAX Pull Ups</li>
                    </ul>
                </div>
                <div className="flex flex-col w-full items-center justify-center pb-10">
                    <div className="flex flex-col w-full container items-center justify-center">
                        <div className="flex w-full sm:max-w-xl justify-between items-center px-3 sm:px-0">
                            <h2 className="text-3xl my-5 font-semibold text-left">Scores:</h2>
                            <div className="flex flex-col">
                                <button className='rounded bg-yellow-300  px-2 py-1 'onClick={handleClick}>Sumbit Score</button>
                            </div>
                        </div>
                        <div className="flex flex-col w-full sm:max-w-xl shadow sm:rounded bg-white">
                        <UserScoreCard name={"Daniel McGreen"} score ={"5 Rounds +11 reps"} />
                        <UserScoreCard name={"Marty Sullivan"} score ={"6 Rounds"} />
                        <UserScoreCard name={"Anothny Ironsman"} score ={"5 Rounds +16 reps"} />
                        <UserScoreCard name={"Lars Lucchanon"} score ={"6 Rounds +3 reps"} />
                        <UserScoreCard name={"Lars Lucchanon"} score ={"6 Rounds +3 reps"}/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WOD