// Login.js
import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { Validate } from "../Utils/Validate";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const Dispatch = useDispatch();
  const [issignin, setissignin] = useState(true);

  const [validateData, setvalidateData] = useState();
  const navigate = useNavigate();

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

    if (validateData) return;
    if (!issignin) {
      // Signed up form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        username?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential?.user;

          updateProfile(user, {
            // add a user name and  photoURL to the updateProfile
            displayName: username.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/141126923?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...

              navigate("/browser");
            })
            .catch((error) => {
              // An error occurred
              setvalidateData(error);
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setvalidateData(
            errorCode + errorMessage ===
              "auth/email-already-in-useFirebase: Error (auth/email-already-in-use)."
              ? "User already exists. Please use a different email or log in."
              : " "
          );

          // ..
        });
    } else {
      //sign in form
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
        // username?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browser");
          /*  Dispatch(
            addUser ({
              email: user.email,
            })
          ); */

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setvalidateData(
            errorCode + errorMessage ===
              "auth/invalid-credentialFirebase: Error (auth/invalid-credential)."
              ? "User does not exist. Please create an account."
              : ""
          );
        });
    }
  };

  const toggleLoginhandler = () => {
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
        onSubmit={(e) => {
          e.preventDefault();
        }}
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
          // onChange={hadlingEmail}
          className="w-full p-3 rounded bg-gray-800 outline-none focus:ring-2 focus:ring-red-600"
        />

        <input
          // onChange={hadlingpassword}
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
        <p className="text-red-500 font-bold ">{validateData} </p>

        <p className="cursor-pointer" onClick={toggleLoginhandler}>
          {issignin
            ? "New to Netflix? Sign up now."
            : " Alredy Registered Sign In Now "}
        </p>
      </form>
    </div>
  );
};

export default Login;
