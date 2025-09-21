import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../App";
import logo from "../assets/logo.png";

export default function Header() {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    return(
        <div className={darkMode ? "dark" : ""}>
        <header className="fixed top-0 left-0  w-full flex items-center justify-between p-8 bg-sky-200 dark:bg-gray-900 shadow-lg z-50 backdrop-blur-md">
            <div className="flex items-center">
                <div className="p-1 ml-4 rounded-full bg-gradient-to-r from-green-400 to-blue-500">
                    <div className="rounded-full p-2">
                    <img src={logo} alt="Logo" className="h-6 w-6 rounded-full object-contain" />
                </div>
                </div>
                <div className="ml-3">
                    <h2 className="font-bold dark:text-white text-2xl">Waste-to-Wallet</h2>
                    <p className="text-lg  dark:text-gray-600">Turn your waste into rewards</p>
                </div>
            </div>

            <div className="flex items-center justify-end">
                <button onClick={toggleDarkMode}
               className="mr-6 px-4 py-2 flex items-center gap-2  bg-gray-100 dark:bg-gray-700  text-gray-900 dark:text-white rounded-lg transition-colors duration-300">
                    { darkMode? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                </button>
                <button onClick={() => navigate("/Login")}
                    className="w-full sm:w-auto mt-16 sm:mt-0 bg-blue-500 dark:text-white text-white text-sm sm:text-lg px-6 py-2 rounded-md font-bold shadow-md hover:bg-green-600">
                        Get Started
                    </button>
            </div>
        </header>
        </div>
    );
}