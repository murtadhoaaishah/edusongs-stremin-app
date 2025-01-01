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
        <input type="text" id="name" placeholder="Name"/>
        <input type="email" id="email" placeholder="Email"/>
        <input type="password" id="password" placeholder="Password"/>
        <input type="tel" id="phone" placeholder="Phone" />
        <input type="text" id="address" placeholder="Address"/>

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
