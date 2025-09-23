import React, { useContext, useState, useRef} from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import coin from "../assets/icons8-coin-48.png";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../App";


export default function Home(){

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
    }
  };

   const storedUser = JSON.parse(localStorage.getItem("user"));
   const navigate = useNavigate();

   const firstLetter = storedUser?.name?.charAt(0)?.toUpperCase() || "?";

  const {darkMode, toggleDarkMode } = useContext(DarkModeContext);
    return (
      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white  dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
            <div className="fixed top-0 w-full left-0 flex flex-wrap items-center justify-between p-6 bg-sky-200 dark:bg-gray-900 z-50 dark:shadow-gray-800/80 shadow-lg backdrop-blur-md">
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

          <div className="flex flex-row items-center gap-8 px-10 ml-64">

            <button onClick={() => navigate("/Home")}
              className="text-2xl  px-6 py-2 dark:text-white  rounded-full hover:text-gray-500">Home</button>

            <button onClick= {() => navigate("/Upload")}
              className="text-2xl px-6 py-3 dark:text-white hover:text-gray-500">Upload</button>

            <button onClick={() => navigate("/Rewards")}
            className="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Rewards</button>

            <button className="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Blogs</button>

            <button className ="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Donate</button>

            
              <button onClick={() => navigate("/Profile")}
              className="ml-32 w-16 h-16 shadow-[0_0_20px_#3b82f6] rounded-full bg-sky-500 text-white font-semibold text-2xl  hover:scale-105 transition tranform focus:outline-none focus:ring-2 focus:ring-sky-500">{firstLetter}</button>
           


          </div>
          <button  className=" px-4 py-2 flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors duration-300"
                onClick={toggleDarkMode}
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
          <h4 className="text-6xl font-bold dark:text-white ">Profile & Achievements 🏆</h4>
          <p className="pt-4 pl-2 text-3xl dark:text-white flex items-center gap-2"> 
            Track your eco-impact and unlock new badges
             </p>
        </div>


          <div className="mt-16  flex justify-center ">
          <div className="w-full  justify-center flex flex-col items-center max-w-7xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
                 <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
          className="hidden"
        />

        {/* Round avatar button */}
        <button
          onClick={() => fileInputRef.current.click()}  // open file picker
          className="w-28 h-28 rounded-full bg-sky-500 text-white font-semibold text-2xl
                     hover:scale-105 transition transform focus:outline-none focus:ring-2
                     focus:ring-sky-500 shadow-[0_0_20px_#3b82f6] overflow-hidden"
        >
          {image ? (
            <img
              src={image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            firstLetter
          )}
        </button>
        <h5 className="text-2xl mt-6 font-bold dark:text-white ">{storedUser.name}</h5>
        <h6  className="text-2xl mt-4 text-gray-400 ">{storedUser.email}</h6>

            </div>
            </div>
        </div>
        </div>
    );
}