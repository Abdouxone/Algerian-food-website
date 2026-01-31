"use client";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaUserFriends, FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";

export default function TopNav() {
  const [SideNav, setSideNav] = useState(false);
  useEffect(() => {
    console.log(SideNav);
  }, [SideNav]);
  return (
    <div className=" mx-auto flex justify-between  items-center p-4">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setSideNav(!SideNav)}>
          <AiOutlineMenu color="black" size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-3 ">
          Alg
          <span className="font-bold">Plats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[15px] ">
          <p className="bg-orange-700 rounded-full text-white p-2 font-bold">
            Delivery
          </p>
          <p className="p-2 font-bold">Batell</p>
        </div>
      </div>
      <div className="bg-gray-200 flex items-center rounded-full text-3xl px-2 w-50 sm:w-100 lg:w-125">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-700 rounded-full p-2 hidden md:flex items-center">
        <BsFillCartFill color="white" size={20} />
        <p className="text-white font-bold pl-2">Cart</p>
      </button>
      {SideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0 "
          onClick={() => setSideNav(!SideNav)}
        ></div>
      ) : null}
      <div
        className={
          SideNav
            ? "fixed top-0 left-0 w-75 h-screen bg-white z-10 duration-400"
            : "fixed top-0 -left-full w-75 h-screen bg-white z-10 duration-400"
        }
      >
        <div
          className="p-2 absolute rounded-full items-center right-2 mt-4 cursor-pointer"
          onClick={() => setSideNav(!SideNav)}
        >
          <AiOutlineClose size={25} color="black" />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl p-5 font-bold">
          Alg
          <span className="text-orange-700">Plats</span>
        </h1>
        <nav>
          <ul className="flex flex-col p-3 text-xl text-gray-900">
            <li className="flex pb-4">
              <BsPerson size={25} color="black" />
              <h1 className="px-2">My Account</h1>
            </li>
            <li className="flex py-4">
              <TbTruckReturn size={25} color="black" />
              <h1 className="px-2">Delivery</h1>
            </li>

            <li className="flex py-4">
              <FaGoogleWallet size={25} color="black" />
              <h1 className="px-2">Wallet</h1>
            </li>
            <li className="flex py-4">
              <MdOutlineFavorite size={25} color="black" />
              <h1 className="px-2">Favorite</h1>
            </li>
            <li className="flex py-4">
              <MdHelp size={25} color="black" />
              <h1 className="px-2">Help</h1>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
