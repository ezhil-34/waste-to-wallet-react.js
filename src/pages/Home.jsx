import React, { useState, useEffect} from "react";
import { FaSun, FaMoon, FaUpload } from "react-icons/fa";
import logo from "../assets/logo.png";
import coin from "../assets/icons8-coin-48.png";
import { Smartphone } from "lucide-react";


export default function Home(){
   const storedUser = JSON.parse(localStorage.getItem("user"));

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

            <button className="text-2xl  px-6 py-2 dark:text-white hover:text-gray-500">Home</button>

            <button className="text-2xl px-6 py-3 dark:text-white hover:text-gray-500">Upload</button>

            <button className="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Rewards</button>

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

        <div className="pt-44 pl-8 ">
          <h4 className="text-6xl font-bold dark:text-white ">Good Morning <span className="text-6xl dark:text-white font-bold">{storedUser.name}</span>!</h4>
          <p className="pt-4 pl-2 text-3xl dark:text-white flex items-center gap-2">You have earned {" "}  <img
              src={coin}
              alt="Coin Logo"
              className="h-10  w-10 rounded-full object-contain"
            /><span className="dark:text-yellow-600 bg-clip-text text-transparent bg-[#FFD700]">2500 points</span> this month</p>
        </div>
        <div>
          
        </div>

         <div className=" mt-16 flex pl-8 ">

        <div className="w-full max-w-6xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
    
          <h5 className="text-left  flex items-center  font-bold text-4xl dark:text-white">
            <FaUpload className=" text-green-500 mr-6 h-10 w-10" />Upload Waste</h5>
          <p className="text-2xl mt-4 text-gray-700 ">Turn your recyclable into rewards</p>
          <div className="flex items-center">
          <div className="w-full sm:w-80 p-10 mt-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-green-500 border-l-8 border-l-green-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-green-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">
                  <img
                src={logo}
                alt="Logo"
                className="h-6 w-6 rounded-full object-contain"
              /></h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">Plastic </h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                    5pts/bottle
                   </p>
               </div>

               <div className="w-full sm:w-80 p-10 mt-8 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-green-500 border-l-8 border-l-green-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-green-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">
                    <Smartphone className="text-purple-500 w-6 h-6" />
                  </h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">E-Waste </h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                     1000pts/Kg
                   </p>
               </div>
               </div>
        </div>
        
        </div>

      
      
      
      </div>
      </div>
    );
}