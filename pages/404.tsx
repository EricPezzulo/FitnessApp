import CenterFeed from "../components/CenterFeed";
import Layout from "../components/layout/Layout";

export default function Custom404() {
    return (
        <Layout>
            <CenterFeed>
                <div className='flex flex-col w-full h-children items-center justify-center'>
                    <h1 className="text-yellow-400 text-6xl font-bold">404 🤔</h1>
                    <p className="text-2xl py-2">...this page doesnt exist</p>
                </div>
            </CenterFeed>
        </Layout>
    )
}