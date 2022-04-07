import Footer from "../layout/Footer"
import Header, { signInPopUpState } from "../layout/Header"
import { useRecoilState } from "recoil"
import { useTransition } from 'react-spring'
import SignInPopUp from "../SignInPopUp"
import LeftSideBar from "../LeftSideBar"
import CenterFeed from "../CenterFeed"

const Layout = ({ children }: any) => {

    const [signInPopUp, setSignInPopUp] = useRecoilState(signInPopUpState)
    const transitions = useTransition(signInPopUp, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return (
        <div className='flex flex-col h-screen'>
            {signInPopUp &&
                transitions(
                    ({ styles, item }: any) =>
                        <SignInPopUp styles={styles} item={item} />
                )
            }
            <div className=" z-50">
                <Header />
            </div>

            <div className="flex-grow">
                <LeftSideBar />
                <CenterFeed>
                    {children} 
                </CenterFeed>
            </div>

            <div className="w-full z-50">
                   <Footer/> 
            </div>
        </div>
    )
}

export default Layout