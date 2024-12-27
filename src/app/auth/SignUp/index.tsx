import React from "react";

const SignUp = () => {
  return <div>
    <div className="bg-black mx-auto max-w-md min-h-screen lg:max-w-lg">
      {/* Logo Section */}
      <div className="pt-10">
        {/* <img className="w-1/3 mx-0 px-0" src="/edusongs-stremin-app/public/images/edusongslogo.png" alt=""> */}
        <h1 className="uppercase text-green font-bold text-xl">edusongs</h1>
        <p className="text-white">Sign up to join</p>
      </div>

      {/* Form Section */}
      <div className="my-10 mx-auto">
        <input
          type="text"
          id="name"
          placeholder="Name"
          className="w-full my-1 text-black bg-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="w-full my-1 text-black bg-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          className="w-full my-1 text-black bg-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        />
        <input
          type="tel"
          id="phone"
          placeholder="Phone"
          className="w-full my-1 text-black bg-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green focus:border-gray"
        />
        <input
          type="text"
          id="address"
          placeholder="Address"
          className="w-full my-1 text-black bg-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
        />

        <a
          className="h-12 w-full my-4 bg-green text-black rounded-full flex items-center justify-center text-lg font-semibold hover:bg-teal-200 transition duration-200"
          href="#"
        >
          Sign In
        </a>

        <p className="my-4 text-center text-gray-400">
          By clicking Sign up, you will create an account and agree to our{' '}
          <a className="text-white hover:text-green" href="#">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="text-white hover:text-green" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  </div>;
};

export default SignUp;
