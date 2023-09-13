"use client";
import Image from "next/image";

const Login: React.FC = () => {
  return (
    <div className="bg-indigo-400 w-full h-screen items-center justify-center flex">
      <div className="w-full absolute z-0 h-screen overflow-hidden">
        <img
          src="/images/loginBanner.jpg"
          alt="loginBanner"
          className="w-full"
        />
      </div>
      <div className="w-1/2 xl:max-w-screen-sm bg-white py-12 rounded-md z-10">
        <div className="flex justify-center">
          <Image src="/images/logo.svg" alt="logo" width={300} height={200} />
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
          >
            Log in
          </h2>
          <div className="mt-12">
            <form>
              <div>
                <div className="input-text">
                  Email Address
                </div>
                <input
                  className="input-field"
                  type=""
                  placeholder="mike@gmail.com"
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="input-text">
                    Password
                  </div>
                  <div>
                    <a
                      className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input
                  className="input-field"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-10">
                <button
                  className="auth-button"
                >
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ?{" "}
              <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
