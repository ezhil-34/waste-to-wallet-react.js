import React, {  useContext} from "react";
import { FaSun, FaMoon} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import coin from "../assets/icons8-coin-48.png";
import { RefreshCcw, Award, Gift } from "lucide-react";
import { DarkModeContext } from "../App";


export default function Logo() {
  const navigate = useNavigate();

  
     const {darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "dark" : ""}>
  <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white  dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
  <div className="fixed top-0 w-full left-0 flex flex-wrap items-center  justify-between p-8 bg-sky-200
                  shadow-lg dark:bg-gray-900 dark:shadow-gray-800/80 z-50 backdrop-blur-md">
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
            <h2 className="ml-2 sm:ml-4 font-bold dark:text-white text-xl sm:text-3xl">
              Waste-to-Wallet
            </h2>
            <p className="text-sm sm:text-lg ml-2 dark:text-white sm:ml-4 text-gray-600">
              Turn your waste into rewards
            </p>
          </div>
        </div>
        <div className="flex items-center  justify-end">
        <button className="mr-6 px-4 py-2 flex items-center gap-2  bg-gray-100 dark:bg-gray-700  text-gray-900 dark:text-white rounded-lg transition-colors duration-300"
                          onClick={toggleDarkMode}
                  >
                      {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
                      
         </button>
        <button onClick={() => navigate("/Login")}
         className="w-full sm:w-auto mt-16 sm:mt-0 bg-blue-500 dark:text-white text-white text-sm sm:text-lg px-6 py-2 rounded-md font-bold shadow-md hover:bg-green-600">
          Get Started
        </button>
        </div>
      </div>

      
      <div className="px-4 sm:px-10 mt-32 flex flex-col items-center text-center">
        <h3 className="text-3xl sm:text-6xl dark:text-white font-bold mb-6 mt-16">
          Transform Waste into{" "}
          <span className="bg-clip-text dark:text-white text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Rewards
          </span>
        </h3>
        <p className="text-base dark:text-white sm:text-2xl text-gray-600 max-w-3xl">
          Join our sustainable platform where your recycling efforts are
          rewarded. Upload photos of your waste, get verified and earn points you
          can redeem for real rewards.
        </p>
        <button className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 mt-16 text-white dark:text-white text-lg px-6 py-3 rounded-md font-bold shadow-md hover:to-green-600">
          Start earning Today
        </button>
      </div>

      
      <div className="flex flex-wrap justify-center items-stretch gap-6 mt-16 sm:gap-8 py-12 px-4 sm:px-12">
        
        <div className="w-full sm:w-80 p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-blue-500 border-l-8 border-l-blue-500 hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-200 mb-4">
            <RefreshCcw className="text-blue-500 w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold dark:text-white mb-2">Easy Upload</h4>
          <p className="text-lg sm:text-md dark:text-white text-gray-600">
            Simply snap a photo of your recyclable waste and categorize it
          </p>
        </div>

       
        <div className="w-full sm:w-80 p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-green-500 border-l-8 border-l-green-500 hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full dark:text-white bg-green-200 mb-4">
            <Award className="text-green-500 w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold mb-2 dark:text-white">Smart Verification</h4>
          <p className="text-lg sm:text-md text-gray-600 dark:text-white">
            Our AI-powered system verifies your submissions and calculates rewards
          </p>
        </div>

        
        <div className="w-full sm:w-80 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-yellow-500 border-l-8 border-l-yellow-500 hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-200 mb-4">
            <img
              src={coin}
              alt="Coin Logo"
              className="h-6 w-6 rounded-full object-contain"
            />
          </div>
          <h4 className="text-lg font-bold mb-2 dark:text-white">Earn Points</h4>
          <p className="text-lg sm:text-md text-gray-600 dark:text-white">
            Get rewards with points for every verified waste submission
          </p>
        </div>

       
        <div className="w-full sm:w-80 p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-purple-500 border-l-8 border-l-purple-500 hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-200 mb-4">
            <Gift className="text-purple-500 w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold mb-2 dark:text-white">Redeem Rewards</h4>
          <p className="text-lg sm:text-md text-gray-600 dark:text-white">
            Use your points for gift cards, cash or donations to charity
          </p>
        </div>
      </div>
      <div className=" mt-16 flex justify-center ">

        <div className="w-full max-w-6xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
      
          <h5 className="text-center  font-bold text-4xl dark:text-white">How it works</h5>
  

           <div className="flex flex-wrap justify-center items-stretch gap-6 mt-16 sm:gap-8  px-4 sm:px-12">
        
               <div className="w-full sm:w-80 p-10 dark:bg-gray-900 bg-white rounded-2xl shadow-md border border-blue-500 border-l-8 border-l-blue-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-blue-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">1</h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">Submit Waste</h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                   Take photo of your recyclable materials and upload them through our app
                   </p>
               </div>

                <div className="w-full sm:w-80 p-10 dark:bg-gray-900 bg-white rounded-2xl shadow-md border border-green-500 border-l-8 border-l-green-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-green-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">2</h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">Get Verified</h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                    Our verification system reviews and approves your submissions
                   </p>
               </div>

               <div className="w-full sm:w-80 p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-yellow-500 border-l-8 border-l-yellow-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-yellow-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">3</h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">Earn & Redeem</h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                    Collect points and redeem them for rewards in our marketplace
                   </p>
               </div>

           </div>
           </div>
        </div>

      <div className=" mt-16 flex flex-wrap items-center justify-center ">

        <div className="w-full max-w-6xl  bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8 bg-gradient-to-r from-green-400 to-blue-500">
      
          <h5 className="text-center mb-8 text-white font-bold text-4xl dark:text-white">Ready to Make a Difference ? </h5>

          <p className="text-center text-lg mb- 8 text-white dark:text-white">Join if you are ready to earning reward while helping the environment</p>

          <div className="flex justify-center mt-8">
            <button className="w-full sm:w-auto bg-white text-blue-500  text-lg px-6 py-3 rounded-md font-bold shadow-md hover:bg-green-600 ">
            Start earning Today
            </button>
         </div>

        </div>
      </div>

    </div>
    </div>
  );
}
