import Footer from "../layout/Footer"
import Header, { signInPopUpState } from "../layout/Header"
import { useRecoilState } from "recoil"
import { useTransition } from 'react-spring'
import SignInPopUp from "../SignInPopUp"
import LeftSideBar from "../LeftSideBar"

const Layout = ({ children }: any) => {

    const [signInPopUp, setSignInPopUp] = useRecoilState(signInPopUpState)
    const transitions = useTransition(signInPopUp, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 }
    });
    return (
        <div className='flex flex-col min-h-screen'>
            {signInPopUp &&
                transitions(
                    ({ styles, item }: any) =>
                        <SignInPopUp styles={styles} item={item} />
                )
            }
            <div className="flex z-50">
                <Header />
            </div>
            <div className="flex flex-col flex-1">
                <LeftSideBar />
                {children}
            </div>
            {/* <div className="flex w-full"> <Footer />  </div> */}

        </div>
    )
}

export default Layout