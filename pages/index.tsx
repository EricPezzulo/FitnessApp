import type { NextPage } from 'next'
import { useRecoilState } from 'recoil'
import CenterFeed, { articles } from '../components/CenterFeed'
import HomepagePost from '../components/homepage/HomepagePost'
import { signInPopUpState } from '../components/layout/Header'
import Layout from '../components/layout/Layout'
import LeftSideBar from '../components/LeftSideBar'

const Home: NextPage = () => {
  const [signInPopUp, setSignInPopUp] = useRecoilState(signInPopUpState)

  return (
    <Layout>
      <div className='grid place-items-center'>
        <CenterFeed>
          <div className='grid place-items-center w-full'>
            <h3 className='text-3xl text-center'>Workout Of The Day</h3>
            <div className='bg-gray-200 w-4/5 h-64 my-4'>
            </div>
          </div>
          {articles.map((article, key): any => {
            return (
              <div key={key}>
                <HomepagePost img={article.img} textContent={article.textContent} title={article.title} />
              </div>
            )
          })}
          </CenterFeed>
      </div>
    </Layout>
  )
}

export default Home
