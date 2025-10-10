// Login.js
import React, { useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import { updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import userimage from "../Utils/image/users.png";
import { bgImg } from "../Utils/constant";

const Login = () => {
  const Dispatch = useDispatch();
  const [issignin, setissignin] = useState(true);
  const [validateData, setvalidateData] = useState("");

  const email = useRef();
  const password = useRef();
  const username = useRef();

  const HandlingError = (e) => {
    e.preventDefault();
    const validatedata = Validate(
      email.current.value,
      password.current.value,
      username?.current?.value
    );
    setvalidateData(validatedata);

    if (validatedata) return;

    if (!issignin) {
      // Signed up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: username.current.value,
            photoURL: userimage,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              Dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setvalidateData("Error updating profile: " + error.message);
            });
        })
        .catch((error) => {
          setvalidateData(
            error.code === "auth/email-already-in-use"
              ? "User already exists. Please use a different email or log in."
              : error.message
          );
        });
    } else {
      // Sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // User signed in.
        })
        .catch((error) => {
          setvalidateData(
            error.code === "auth/invalid-credential"
              ? "Invalid credentials. Please check your email and password."
              : error.message
          );
        });
    }
  };

  const toggleLoginhandler = () => {
    setissignin(!issignin);
    setvalidateData("");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={bgImg}
        alt="background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

      <form
        onSubmit={HandlingError}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-md bg-black/85 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6 text-white shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white">
          {issignin ? "Sign In" : "Sign Up"}
        </h2>

        {!issignin && (
          <div>
            <input
              ref={username}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 sm:p-4 rounded-lg bg-gray-900/80 border border-gray-600 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
            />
          </div>
        )}

        <div>
          <input
            ref={email}
            type="email"
            placeholder="Email address"
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-900/80 border border-gray-600 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        <div>
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 sm:p-4 rounded-lg bg-gray-900/80 border border-gray-600 outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 py-3 sm:py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm sm:text-base"
        >
          {issignin ? "Sign In" : "Sign Up"}
        </button>

        {validateData && (
          <p className="text-red-400 text-xs sm:text-sm text-center font-medium bg-red-900/20 py-2 px-3 rounded-lg">
            {validateData}
          </p>
        )}

        <p className="text-gray-300 text-center text-xs sm:text-sm mt-4 sm:mt-6">
          {issignin ? "New to MOVIEFLOW?" : "Already have an account?"}{" "}
          <span
            onClick={toggleLoginhandler}
            className="text-white hover:text-red-400 font-semibold cursor-pointer transition-colors duration-200 ml-1"
          >
            {issignin ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>

      {/* Additional responsive background elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default Login;
