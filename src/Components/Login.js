// Login.js
import React, { use, useRef, useState } from "react";
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

//import { userimg } from "../Utils/constant";
import userimage from "../Utils/image/users.png";

import { bgImg } from "../Utils/constant";
const Login = () => {
  const Dispatch = useDispatch();
  const [issignin, setissignin] = useState(true);
  const [validateData, setvalidateData] = useState();

  const email = useRef();
  const password = useRef();
  const username = useRef();

  const HandlingError = () => {
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
              const {
                uid,
                email,
                password,
                displayName,
                photoURL,
              } = auth.currentUser;

              Dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  password: password,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              // Profile updated successfully.
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
          // The onAuthStateChanged listener in Browser.js will handle navigation.
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
    setvalidateData(""); // Clear validation message on toggle
  };

  return (
    <div className="relative h-screen w-full">
      <Header />
      {/* ... rest of your JSX code ... */}
      <img
        className="h-screen w-full object-cover absolute"
        src={bgImg}
        alt="background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/75 border border-gray-600 p-12 rounded-lg w-96 space-y-6 text-white"
      >
        <h2 className="text-2xl font-bold text-center">
          {issignin ? "Sign In" : "Sign Up"}
        </h2>
        {!issignin && (
          <input
            ref={username}
            type="text"
            placeholder="User Name"
            className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          ref={email}
          className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          onClick={HandlingError}
          className="w-full bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
        >
          {issignin ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold ">{validateData}</p>
        <p className="cursor-pointer" onClick={toggleLoginhandler}>
          {issignin
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
