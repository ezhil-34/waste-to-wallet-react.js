import React, { useState, useEffect} from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import coin from "../assets/icons8-coin-48.png";
import { Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Rewards(){
 
   const navigate = useNavigate();

   const [darkMode, setDarkMode] = useState(false);

   useEffect(() => {
      const saveMode = localStorage.getItem("darkMode") === true;
      setDarkMode(saveMode);
   }, []);

   const toogleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode",!darkMode);
   };
    return (
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white  dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
            <div className="fixed top-0 w-full left-0 flex flex-wrap items-center justify-between p-8 bg-sky-200 dark:bg-gray-900 z-50 dark:shadow-gray-800/80 shadow-lg backdrop-blur-md">
        <div className="flex items-center">
          <div className="p-1 rounded-full ml-2 sm:ml-4 bg-gradient-to-r from-green-400 to-blue-500">
            <div className="rounded-full p-2">
              <img
                src={logo}
                alt="Logo"
                className="h-6 w-6 rounded-full object-contain"
              />
            </div>
          </div>
          <div>
            <h2 className="ml-2 sm:ml-4 font-bold text-xl sm:text-3xl dark:text-white">
              Waste-to-Wallet
            </h2>
            <p className="text-sm dark:text-white sm:text-lg ml-2 sm:ml-4 text-gray-600">
              Turn your waste into rewards
            </p>
          </div >

          <div className="flex flex-row items-center gap-8 px-12 ml-64">

            <button onClick= {() => navigate("/Home")}
              className="text-2xl  px-6 py-2 dark:text-white  rounded-full hover:text-gray-500">Home</button>

            <button onClick= {() => navigate("/Upload")}
              className="text-2xl px-6 py-3 dark:text-white hover:text-gray-500">Upload</button>

            <button onClick= {() => navigate("/Rewards")}
            className="text-2xl px-6 py-3  dark:text-white shadow-[0_0_20px_#3b82f6] rounded-full hover:text-gray-500">Rewards</button>

            <button className="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Blogs</button>

            <button className ="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Donate</button>


          </div>
          <button className=" ml-32 px-4 py-2 flex items-center gap-2  bg-gray-100 dark:bg-gray-700  text-gray-900 dark:text-white rounded-lg transition-colors duration-300"
                  onClick={toogleDarkMode}
          >
              {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
              
          </button>
        
          <div class="ml-4 w-56 h-16 bg-white rounded-3xl  dark:bg-black shadow-lg flex items-center justify-center text-white font-semibold hover:bg-[#FFD700]">
            <img
              src={coin}
              alt="Coin Logo"
              className="h-12 w-12 rounded-full object-contain"
            />
            <h3 className="text-[#FFD700] text-2xl  dark:text-yellow-600 hover:text-white">2500 points</h3>
          </div>

        
            

          </div>

        
        
        </div>

        <div className="pt-44 pl-8  ">
             <h4 className="text-6xl font-bold flex items-center dark:text-white "> Rewards Store <span><Gift className=" text-red-500 h-12 w-12 ml-8" /></span> </h4>
             <p className="text-3xl mt-4 ">Redeem your eco-points for amazing rewards</p>
         
        </div>
        <div>

        <div className="flex items-center ml-8 mt-8 gap-3">
            <button className=" text-3xl px-6 py-2 rounded-lg border border-sky-500 shadow-[0_0_20px_#3b82f6]">All</button>
            <button className=" text-3xl px-6 py-2 rounded-lg border border-sky-500 ">Mobile</button>
            <button className=" text-3xl px-6 py-2 rounded-lg border border-sky-500 ">Transport</button>
            <button className=" text-3xl px-6 py-2 rounded-lg border border-sky-500 ">Shopping</button>
             <button className=" text-3xl px-6 py-2 rounded-lg border border-sky-500 ">Gaming</button>
            
        </div>
          
        </div>
        </div>
        </div>
    );
}
      
