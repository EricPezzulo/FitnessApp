import { useQuery } from "@apollo/client"
import { gql } from "apollo-server-micro"
import { useSession } from "next-auth/react"
import { Router, useRouter } from "next/router"
import { Gear } from "styled-icons/bootstrap"
import Layout from "../components/layout/Layout"

const FetchSavedWorkouts  = gql`
query FetchUser($userId: String!) {
  fetchUser(id: $userId) {
    savedWorkouts {
      name
      slug
      id
    }
  }
}`

const myaccount = () => {
    const {data:session}:any = useSession()
    const router  = useRouter()
    const userId = session?.id
    const {data: userData, loading: userLoading, error: userError} = useQuery(FetchSavedWorkouts, {
        variables:{ userId }
    })
    const savedWorkouts = userData?.fetchUser[0]?.savedWorkouts
  return (
      <Layout>
            <div className="z-40 w-full flex flex-col items-center">
                <div className="w-full max-w-7xl">
                    <div className="flex flex-col w-full">
                        <div className="w-12 h-12 text-gray-400"><Gear /></div>
                        <h2 className="text-2xl font-medium px-2">My Account</h2>
                    </div>
                        <div>
                            <p className="text-lg">Name: {session?.user?.name}</p>
                        </div>
                        <div className="shadow w-96 rounded h-64">
                            <h2 className='text-2xl'>Saved Workouts</h2>
                            <ul className="pl-8">
                                {!userLoading ? savedWorkouts?.map((w:any, key:any)=> {
                                    return (
                                        <li onClick={()=> router.push(`/workouts/${w.slug}`)}className='list-disc text-xl hover:cursor-pointer hover:text-yellow-500 duration-150' key={key}>{w.name}</li>
                                    )
                                }) : <p>Loading...</p>}
                            </ul>
                        </div>
                </div>
            </div>        
      </Layout>
    
  )
}

export default myaccount