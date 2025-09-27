import React, { useContext, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import coin from "../assets/icons8-coin-48.png";
import { DarkModeContext } from "../App";
import { useNavigate, useLocation } from "react-router-dom";

export default function Mheader({ storedUser }) {

    const navigate = useNavigate();
    const location = useLocation();
    const firstLetter = storedUser?.name?.charAt(0)?.toUpperCase() || "G";
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    const [activeButton, setActiveButton] = useState(location.pathname);

    const handleNav = (path) => {
        setActiveButton(path);
        navigate(path);
    };

    const navButtons = [
        { name:"Home",path:"/Collect"},
        { name:"Donate",path:"/Donate"},
        { name:"Blog",path:"/Blog"},

    ];

    return (
         <div className="fixed top-0 w-full left-0 flex flex-wrap items-center justify-between p-6 bg-sky-200 dark:bg-gray-900 z-50 dark:shadow-gray-800/80 shadow-lg backdrop-blur-md">
      <div className="flex items-center">
        <div className="p-1 rounded-full ml-2 sm:ml-4 bg-gradient-to-r from-green-400 to-blue-500">
          <div className="rounded-full p-2">
            <img src={logo} alt="Logo" className="h-6 w-6 rounded-full object-contain" />
          </div>
        </div>
        <div>
          <h2 className="ml-2 sm:ml-4 font-bold text-xl sm:text-3xl dark:text-white">Waste-to-Wallet</h2>
          <p className="text-sm dark:text-white sm:text-lg ml-2 sm:ml-4 text-gray-600 whitespace-nowrap">
            Turn your waste into rewards
          </p>
        </div>

        <div className="flex flex-row items-center gap-8 px-10 ml-64">
            {navButtons.map((btn) => (
                <button 
                    key={btn.name}
                    onClick={() => handleNav(btn.path)}
                className={`text-2xl px-6 py-2 rounded-full transition transform focus:outline-none focus:ring-2 focus:ring-sky-500
                    ${activeButton === btn.path ? "shadow-[0_0_20px_#3b82f6]":""} dark:text-white hover:text-gray-500`}>
                        {btn.name}
                    </button>
            ))}

            <button onClick={() => navigate("/Profile")}
                className="ml-32 w-16 h-16 rounded-full bg-sky-500 text-white font-semibold text-2xl shadow hover:scale-105 transition transfor focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                    {firstLetter}
                </button>
        </div>

        <button className="px-4 py-2 flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg trasition-colors duration-300 "
            onClick={toggleDarkMode}
        >
                {darkMode? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
        </button>

        <div className="ml-4 w-56 h-16 bg-white rounded-3xl dark:bg-black shadow-lg flex items-center justify-center text-white font-semibold hover:bg-[#FFD700]">
            <img src={coin} alt="Coin Logo" className="h-12 w-12 rounded-full object-contain" />
            <h3 className="text-[#FFD700] text-2xl dark:text-yellow-600 hover:text-white">2500 Earning</h3>
        </div>
        </div>
        </div>
    );
}