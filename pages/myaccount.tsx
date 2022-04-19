import { useSession } from "next-auth/react"
import { Gear } from "styled-icons/bootstrap"
import Layout from "../components/layout/Layout"

const myaccount = () => {
    const {data:session}:any = useSession()
  return (
      <Layout>
            <div>
                <div className="m-14 flex flex-col items-center w-full">
                <div className="flex items-center">
                    <div className="w-12 h-12 text-gray-400 "><Gear /></div>
                    <h2 className="text-2xl font-medium px-2">My Account</h2>
                </div>
                    <div>
                        <p className="text-lg">Name: {session?.user?.name}</p>
                      

                    </div>
                </div>
            </div>        
      </Layout>
    
  )
}

export default myaccount