import React from "react";
//import { useSelector } from "react-redux";
import Header from "./Header";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";

const Browser = () => {
  // hook must be here
  // const email = useSelector((store) => store.user?.email);
  const Dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //  on AuthStateChanged get a sign-in user information
      if (user) {
        //0
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, password, displayName, photoURL } = user;

        Dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        // ...
      } else {
        Dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div className="w-screen bg-black  ">
      <Header />
    </div>
  );
};

export default Browser;
