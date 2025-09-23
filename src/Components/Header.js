import React from "react";
import userImg from "../Utils/image/users.png";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const handlingSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign-out error:", error);
        navigate("/error"); // fixed typo "errer" -> "error"
      });
  };

  const user = useSelector((store) => store?.user);
  return (
    <div className="absolute z-10 justify-between flex bg-black w-screen h-25 ">
      <img
        className="h-20 ml-20 mt-3"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div>
          <img
            alt="userlogo"
            className="h-20 w-20 mx-5 mt-2 p-2 rounded-[50px]"
            src={user.photoURL || userImg}
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
