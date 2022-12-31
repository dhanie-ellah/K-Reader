import React from 'react'
import Logo from '../Assets/K-Reader.png'
import Search from '../Assets/fe_search.png'
import Filter from '../Assets/bi_filter.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav>
      {/* DESKTOP NAV */}
      <div className=" flex items-center justify-between px-[100px] py-[25px] bg-bg text-[13px] md:px-[25px] md:hidden">
        <Link to="/">
          <img src={Logo} alt="" className=" cursor-pointer" />
        </Link>
        <div className="relative">
          <input
            placeholder="Search"
            className=" bg-green rounded-md px-[30px] py-[10px] outline-none border-none"
          />
          <img
            src={Search}
            alt=""
            className=" w-[15px] absolute left-[8px] top-[13px] "
          />
          <img
            src={Filter}
            alt=""
            className=" w-[15px] absolute right-[8px] top-[13px] "
          />
        </div>
        <div className=" flex items-center gap-[25px]">
          <a href="/" className=" text-primary">
            Home
          </a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Login</a>
          <a
            href="/"
            className=" bg-primary rounded-[5px] px-[20px] py-[10px] text-white font-[300]"
          >
            Create Account
          </a>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className=" hidden items-center justify-between px-[100px] py-[25px] bg-bg text-[13px] md:px-[25px] md:flex">
        <Link to="/" className="z-20">
          <img src={Logo} alt="" className={` cursor-pointer`} />
        </Link>
        <div
          className={`${showNav ? "flex" : "hidden"} w-[100vw] h-[100vh] bg-bg fixed top-0 left-0 flex-col items-center justify-center gap-[25px]`}
        >
          <div className="relative">
            <input
              placeholder="Search"
              className=" bg-green rounded-md px-[30px] py-[10px] outline-none border-none"
            />
            <img
              src={Search}
              alt=""
              className=" w-[15px] absolute left-[8px] top-[13px] "
            />
            <img
              src={Filter}
              alt=""
              className=" w-[15px] absolute right-[8px] top-[13px] "
            />
          </div>
          <div className=" flex items-center gap-[25px] flex-col">
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Contact Us</a>
            <a href="/">Login</a>
            <a
              href="/"
              className=" bg-primary rounded-[5px] px-[20px] py-[10px] text-white font-[300]"
            >
              Create Account
            </a>
          </div>
        </div>

        <FontAwesomeIcon
          icon={showNav ? faClose : faBars}
          size="xl"
          className="text-primary hidden lg:block z-20"
          onClick={() => {
            setShowNav(!showNav);
          }}
        />
      </div>
    </nav>
  );
}

export default Nav