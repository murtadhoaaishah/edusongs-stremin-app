import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <div className="bg-white max-w-md mx-auto min-h-screen lg:max-w-lg flex flex-col">
        <div className="my-8 mx-10 max-w-md">
          <input type="email" id="email" placeholder="Email" />
          <input type="password" id="password" placeholder="Password" />
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
    </div>
  );
};

export default LoginPage;
