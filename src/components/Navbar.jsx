import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[2000px] mx-auto flex justify-between items-center padding-x py-4">
        <Link to="/" className="flex justify-center items-center">
          <span className="object-contain font-black tracking-wide text-2xl">
            CarHub
          </span>
        </Link>
        <CustomButton
          title="Sign In"
          containerStyles="rounded-full bg-[#2B59FF] text-white xl:bg-white xl:text-black min-w-[130px] text-md font-medium"
        ></CustomButton>
      </nav>
    </header>
  );
};

export default Navbar;
