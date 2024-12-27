import React from "react";
import "/edusongs-stremin-app/output/login.css"; // Adjust this path as needed for your project


const LoginPage: React.FC = () => {
  return <div>
    <div className="bg-white max-w-md mx-auto min-h-screen lg:max-w-lg flex flex-col">
      {/* Header Section */}
      <div className="pt-6">
        {/* Logo */}
        <div className="flex items-center justify-center">
          <h1 className="uppercase tracking-wide text-green text-2xl font-bold p-10">
            edusongs
          </h1>
          {/* <img className="w-1/3" src="/edusongs-stremin-app/public/images/edusongslogo.png" alt="" /> */}
        </div>

        {/* Navigation */}
        <div className="flex mx-10 font-medium">
          <p className="mx-0 w-16 text-blueBlack border-b-2 pb-1 border-black cursor-pointer">
            Sign in
          </p>
          <p className="mx-0 w-full px-3 text-gray-400 border-b-2 border-gray-400 cursor-pointer">
            Sign up
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="my-8 mx-10 max-w-md">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="block w-full my-1 text-gray-800 bg-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="block w-full my-1 text-gray-800 bg-gray-300 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
        />
        <a
          href="#"
          className="h-12 w-100 my-2 bg-green text-black rounded-full flex items-center justify-center text-lg font-semibold hover:bg-teal-200 transition duration-200"
        >
          Sign In
        </a>
        <a
          href="#"
          className="flex items-center justify-center my-3 text-center hover:text-gray-400 text-blueBlack"
        >
          Forgot Password?
        </a>
      </div>

      {/* Footer Section */}
      <div className="mt-10 pt-20 text-center text-blueBlack">
        <p className="font-normal">
          By using this app you agree with the
          <br />
          <a
            href="#"
            className="font-semibold pb-4 w-fit border-b-4 border-black"
          >
            Terms of Service
          </a>
        </p>
      </div>
    </div>

  </div>;
};

export default LoginPage;
