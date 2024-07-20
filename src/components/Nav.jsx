import headerlogo from "../assets/images/header-logo.svg";
import { FiMenu } from "react-icons/fi";

import Switcher from "./Switcher.jsx";
import { useState } from "react";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  const show = () => {
    setSideBar(true);
  };
  const toggleDarkMode = () => {
    let theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <header className=" padding-x  py-8 absolute z-10 w-full">
      <section className="wide:flex wide:justify-between wide:items-center lg:flex lg:justify-between lg:items-center  max-container max-lg:flex max-lg:justify-between    max-lg:">
        <div className="  ">
          <a className=" " href="/">
            <img
              className="  "
              src={headerlogo}
              alt="logo"
              width={130}
              height={19}
            />
          </a>
        </div>
        <ul className=" mx-2 flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <li>
            <a
              href="#home"
              className="font-montserrat leading-normal text-lg text-slate-gray">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-us"
              className="font-montserrat leading-normal text-lg text-slate-gray">
              About Us
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="font-montserrat leading-normal text-lg  text-slate-gray">
              Products
            </a>
          </li>
          <li>
            <a
              href="#contact-us"
              className="font-montserrat leading-normal text-lg text-slate-gray">
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg  text-slate-gray">
              Sign in
            </a>
            <span className=" text-slate-gray ">/</span>
            <a
              href="/"
              className="font-montserrat leading-normal text-lg  text-slate-gray">
              Explore now
            </a>
          </li>
        </ul>

        <div className="flex  leading-normal items-center justify-center gap-2  max-lg:hidden">
          <p className="dark:text-slate-gray  text-slate-gray font-medium gap-2  font-montserrat text-lg">
            Dark Mode
          </p>
          <Switcher toggle={toggleDarkMode} />
        </div>

        <div className=" dark:text-white	 hidden max-lg:block bg-white    max-lg:z-20  max-lg:dark:bg-black  ">
          <div className=" flex justify-end">
            <FiMenu
              style={{ display: setSideBar ? "hidden" : "none" }}
              onClick={toggleSidebar}
              className="text-right dark:text-white max-lg:text-black max-lg:text-3xl flex justify-items-end cursor-pointer"
            />
          </div>
          <div style={{ display: sideBar ? "block" : "none" }} >
            <ul className=" flex  leading-normal items-center justify-center   flex-col gap-16 ">
              <li>
                <a
                  href="#home"
                  className="font-montserrat text-lg text-slate-gray">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about-us"
                  className="font-montserrat  text-lg text-slate-gray">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="font-montserrat leading-normal text-lg  text-slate-gray">
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="font-montserrat leading-normal text-lg text-slate-gray">
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="font-montserrat leading-normal text-lg  text-slate-gray">
                  Sign in
                </a>
                <span className=" text-slate-gray ">/</span>
                <a
                  href="/"
                  className="font-montserrat leading-normal text-lg  text-slate-gray">
                  Explore now
                </a>
              </li>
            </ul>
            <div className="flex mt-9 leading-normal items-center justify-center gap-2  ">
              <p className="dark:text-slate-gray  text-slate-gray font-medium gap-2  font-montserrat text-lg">
                Dark Mode
              </p>
              <Switcher toggle={toggleDarkMode} />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Nav;
