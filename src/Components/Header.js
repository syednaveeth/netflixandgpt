import React from "react";
//import userImg from "../Utils/image/users.png";
import { signOut } from "firebase/auth";

//import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Netflixlogo } from "../Utils/constant";
import { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  //const navigate = useNavigate();

  const Dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/browse");
        // ...
      } else {
        Dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handlingSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign-out error:", error);
        // navigate("/error"); // have to create a error element error component
      });
  };

  const user = useSelector((store) => store?.user);
  return (
    <div className="absolute z-10 justify-between flex bg-gradient-to-b from-black w-screen h-25 ">
      <img className="h-20 ml-20 mt-3" src={Netflixlogo} alt="logo" />
      {user && (
        <div>
          <img
            alt="userlogo"
            className="h-20 w-20 mx-5 mt-2 p-2 rounded-[50px]"
            src={user.photoURL}
          />
          <div
            onClick={handlingSignout}
            className="text-white font-bold text-center cursor-pointer pb-2"
          >
            signOut
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
