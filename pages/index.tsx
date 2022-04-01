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
          <div className='grid place-items-center w-full pb-5'>
            <div className='flex group relative w-full h-full hover:cursor-pointer'>
              <div className='absolute w-full h-full bg-gray-900 bg-opacity-60 group-hover:bg-opacity-80 z-30 duration-200'></div>
                <img className='object-cover flex w-full max-h-108' src="https://external-preview.redd.it/b3NfiLJNwTjh_xxyNN52lpWlhVqMjMHR5wsWIIcrkzs.jpg?auto=webp&s=64f2aae47ebcea88cf357b3983a38fe259aa8a31" alt="hero" />
              <h3 className='absolute flex justify-center items-center h-full w-full text-5xl text-white text-center font-extrabold duration-200 z-30'>Workout Of The Day</h3>
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
