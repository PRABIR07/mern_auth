import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <nav className=" flex justify-between items-center shadow-xl bg-cyan-200 sticky top-0 z-10 p-2">
      <img className=" w-20 rounded-full p-2" src={logo} alt="logo" />
      <ul className="flex gap-5 font-semibold text-gray-600 ">
        <li>
          <NavLink to="/" >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/faq"}>Faq</NavLink>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
        <NavLink to={"/Login"}  className="bg">Login</NavLink>
        <NavLink to={"/signup"}>SignUp</NavLink>
      </ul>
    </nav>
  );
}

export default Header;
