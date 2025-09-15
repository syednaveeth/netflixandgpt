// Login.js
import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [issignin, setissignin] = useState(true);

  const loginhandler = () => {
    setissignin(!issignin);
  };

  return (
    <div className=" relative h-screen w-full">
      <Header />

      <img
        className="h-screen w-full object-cover absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_small.jpg"
        alt="background"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>

      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 bg-black/75 border border-gray-600 p-12 rounded-lg w-96 space-y-6 text-white"
      >
        <h2 className="text-2xl font-bold text-center">
          {" "}
          {issignin ? "Sign In" : "Sign Up"}
        </h2>

        {issignin ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="User Name"
            className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-red-600"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-red-600"
        />

        <button className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition">
          {issignin ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer" onClick={loginhandler}>
          {issignin
            ? "New to Netflix? Sign up now."
            : " Alredy Registered Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
