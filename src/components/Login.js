import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt="Netflix-Background-logo"
        />
      </div>
      <form className="w-3/12 absolute p-4 bg-black my-48 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl mx-2 py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-2 w-full bg-gray-700 rounded-xl"
          />
        )}
        {!isSignInForm && (
          <input
            type="phone"
            placeholder="Phone number"
            className="p-4 my-2 w-full bg-gray-700 rounded-xl"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-xl"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-2 w-full bg-gray-700 rounded-xl"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now..."
            : "Already registered Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
