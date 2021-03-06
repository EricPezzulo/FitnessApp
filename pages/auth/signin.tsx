import { signIn } from "next-auth/react";
import Layout from "../../components/layout/Layout";
const signin = () => {
    
  return (
      <Layout>
          <div className="flex w-full h-full items-center justify-center">

          
        <div className="bg-white shadow  rounded-md h-auto py-10 w-1/3 self-center mt-20">
          <p className="text-xl text-center">Sign In with social </p>
          <hr className="mt-2 mb-10" />
          <div className="flex items-center justify-center h-full">
            <button
              className="flex items-center shadow px-4 py-2 rounded-md hover:bg-yellow-100 duration-100"
              onClick={() =>
                signIn("google", {
                  callbackUrl:"http://localhost:3000"
                })
              }
            >
              <div className="w-7 mr-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                  alt=""
                />
              </div>
              <p className="text-xl">Sign In with Google</p>
            </button>
          </div>
        </div></div>
      </Layout>
  );
};

export default signin;