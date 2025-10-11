import React from "react";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../Utils/userSlice";
import { addGptSearchdata } from "../Utils/gptSlice";
import { toggleShowGptSearch } from "../Utils/gptSlice";
import logo from "../Utils/image/logo_img.png";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const showGptSearch = useSelector((store) => store.gptSlice.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            password: password,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handlingSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.error("Sign-out error:", error);
      });
  };

  const nameofuser = useSelector((store) => store?.user?.displayName);

  return (
    <div className="z-50 w-full flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4  backdrop-blur-sm">
      {/* Logo - Proper sizing */}
      <img
        className="h-10 sm:h-15 lg:h-32 w-auto cursor-pointer"
        src={logo}
        alt="logo"
        onClick={() => navigate("/browse")}
      />

      {user && (
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* GPT Search Button - Compact sizing */}
          <button
            onClick={() => dispatch(toggleShowGptSearch())}
            className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-lg hover:from-red-500 hover:to-red-600 transition-all duration-200 text-xs sm:text-sm lg:text-base whitespace-nowrap border border-red-400/30"
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          {/* User Profile - Compact design */}
          <div className="flex items-center gap-2 bg-black/40 rounded-full pl-1 pr-2 sm:pl-2 sm:pr-3 py-1 border border-gray-600/50">
            {/* User Image */}
            <img
              alt="userlogo"
              className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-full border border-red-500/60 object-cover"
              src={user.photoURL}
            />

            {/* User Info */}
            <div className="hidden sm:flex flex-col">
              <span className="text-white text-xs lg:text-sm leading-tight">
                {nameofuser}
              </span>
              <button
                onClick={handlingSignout}
                className="text-gray-300 hover:text-white text-xs transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>

            {/* Mobile Sign Out */}
            <button
              onClick={handlingSignout}
              className="sm:hidden text-gray-300 hover:text-white"
              title="Sign Out"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
