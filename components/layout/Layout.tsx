import Footer from "../layout/Footer"
import Header, { signInPopUpState } from "../layout/Header"
import { useRecoilState } from "recoil"
import { useTransition } from 'react-spring'
import SignInPopUp from "../SignInPopUp"
import LeftSideBar from "../LeftSideBar"
import CenterFeed from "../CenterFeed"
import {submitScorePopUpState} from "../../pages/wod"
import SubmitScorePopUp from "../SubmitScorePopUp"

const Layout = ({ children }: any) => {

    const [signInPopUp, setSignInPopUp] = useRecoilState(signInPopUpState)
    const [submitScorePopUp, setSubmitScorePopUp] = useRecoilState(submitScorePopUpState)
    const transitions = useTransition(signInPopUp, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    return (
        <div className='flex flex-col min-h-screen bg-white jusfify-between'>
            {signInPopUp &&
                transitions(
                    ({ styles, item }: any) =>
                        <SignInPopUp styles={styles} item={item} />
                )
            }
            {submitScorePopUp &&
                transitions(
                    ({ styles, item }: any) =>
                        <SubmitScorePopUp styles={styles} item={item} />
                )
            }
            <div>
                <Header />
                <div className="flex absolute top-20">
                    <LeftSideBar />
                </div>
            </div>

            <div className="flex flex-1 bg-white">
                
                {/* <CenterFeed> */}
                    {children} 
                {/* </CenterFeed> */}
            </div>

            <div className="flex w-full z-40">
                   <Footer/> 
            </div>
        </div>
    )
}

export default Layout