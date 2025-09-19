import React, { useContext} from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png";
import coin from "../assets/icons8-coin-48.png";
import { Gift, Smartphone, CreditCard, ShoppingCart,  } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SiAmazon, SiGooglepay } from "react-icons/si";
import { DarkModeContext } from "../App";
import toast from "react-hot-toast";


export default function Rewards(){
 
   const navigate = useNavigate();
   const storedUser = JSON.parse(localStorage.getItem("user"));
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

          <div className="flex flex-row items-center gap-8 px-8 ml-64">

            <button onClick= {() => navigate("/Home")}
              className="text-2xl  px-6 py-2 dark:text-white  rounded-full hover:text-gray-500">Home</button>

            <button onClick= {() => navigate("/Upload")}
              className="text-2xl px-6 py-3 dark:text-white hover:text-gray-500">Upload</button>

            <button onClick= {() => navigate("/Rewards")}
            className="text-2xl px-6 py-3  dark:text-white shadow-[0_0_20px_#3b82f6] rounded-full hover:text-gray-500">Rewards</button>

            <button className="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Blogs</button>

            <button className ="text-2xl px-6 py-3  dark:text-white hover:text-gray-500">Donate</button>

            
              <button onClick={() => navigate("/Profile")}
              className="ml-32 w-16 h-16 rounded-full bg-sky-500 text-white font-semibold text-2xl shadow hover:scale-105 transition tranform focus:outline-none focus:ring-2 focus:ring-sky-500">{firstLetter}</button>
            


          </div>
          <button
              className=" px-4 py-2 flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors duration-300"
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

        <div className="pt-44 pl-8  ">
             <h4 className="text-6xl font-bold flex items-center dark:text-white "> Rewards Store <span><Gift className=" text-red-500 h-12 w-12 ml-8" /></span> </h4>
             <p className="text-3xl dark:text-white mt-4 ">Redeem your eco-points for amazing rewards</p>
         
        </div>
        <div>

        <div className="flex items-center ml-8 mt-8 gap-3">
            <button className=" text-3xl px-6 py-2 rounded-lg border dark:text-white border-sky-500 shadow-[0_0_20px_#3b82f6]">All</button>
            <button className=" text-3xl px-6 py-2 rounded-lg border dark:text-white border-sky-500 ">Mobile</button>
            <button className=" text-3xl px-6 py-2 rounded-lg border dark:text-white border-sky-500 ">Transport</button>
            <button className=" text-3xl px-6 py-2 rounded-lg border dark:text-white border-sky-500 ">Shopping</button>
             <button className=" text-3xl px-6 py-2 rounded-lg border dark:text-white border-sky-500 ">Gaming</button>
            
        </div>



        <div className=" mt-16 px-8 " >  
        <div className="  p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200">
        <div className="w-full  p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-violet-800 border-l-8 border-l-violet-800 hover:shadow-2xl  transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-violet-900 to-violet-500 mb-4">
            <Smartphone className="text-white w-6 h-6" />
          </div>
          <h4 className="text-3xl font-bold dark:text-white mb-2">Mobile recharge</h4>
          <p className="text-xl sm:text-md dark:text-white text-gray-500">
            $100 mobile top-up
          </p>
          <p className="flex items-center gap-2 mt-8  text-xl dark:text-white justify-start "><span><Gift className=" text-red-500 h-8 w-8 "/></span>500 points</p>
          <button onClick={() => toast.success("Reward Redeemed! 🎉")} className="w-full mt-8 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">Redeem Now</button>
          <p className="text-gray-500 text-xl flex justify-center mt-4">Proceed within 24 hours</p>
        </div>

         <div className="w-full  p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-orange-800 border-l-8 border-l-orange-800 hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-900 to-orange-500 mb-4">
            <CreditCard className="text-white w-6 h-6" />
          </div>
          <h4 className="text-3xl font-bold dark:text-white mb-2">Metro Card</h4>
          <p className="text-xl sm:text-md dark:text-white text-gray-500">
            $100 metro balance
          </p>
          <p className="flex items-center gap-2 mt-8  text-xl dark:text-white justify-start "><span><CreditCard className=" text-red-500 h-8 w-8 "/></span>1500 points</p>
          <button onClick={() => toast.success("Reward Redeemed! 🎉")} className="w-full mt-8 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">Redeem Now</button>
           <p className="text-gray-500 text-xl flex justify-center mt-4">Proceed within 24 hours</p>
        </div>

        
         

         <div className="w-full  p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-yellow-800 border-l-8 border-l-yellow-800 hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-900 to-yellow-500 mb-4">
            <ShoppingCart  className="text-white w-6 h-6" />
          </div>
          <h4 className="text-3xl font-bold dark:text-white mb-2">Grocery Voucher</h4>
          <p className="text-xl sm:text-md dark:text-white text-gray-500">
            $100 partner at store
          </p>
          <p className="flex items-center gap-2 mt-8  text-xl dark:text-white justify-start "><span><CreditCard className=" text-red-500 h-8 w-8 "/></span>1000 points</p>
          <button onClick={() => toast.success("Reward Redeemed! 🎉")} className="w-full mt-8 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">Redeem Now</button>
           <p className="text-gray-500 text-xl flex justify-center mt-4">Proceed within 24 hours</p>
        </div>

         <div className="w-full  p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-[#232F3E] border-l-8 border-l-[#232F3E] hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#232F3E] mb-4">
            <SiAmazon className="text-yellow-400 w-6 h-6" />
          </div>
          <h4 className="text-3xl font-bold dark:text-white mb-2">Amazon Pay </h4>
          <p className="text-xl sm:text-md dark:text-white text-gray-500">
            $100 redeem on amazon
          </p>
          <p className="flex items-center gap-2 mt-8  text-xl justify-start dark:text-white "><span><CreditCard className=" text-red-500 h-8 w-8 "/></span>5000 points</p>
          <button onClick={() => toast.success("Reward Redeemed! 🎉")}  className="w-full mt-8 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">Redeem Now</button>
           <p className="text-gray-500 text-xl flex justify-center mt-4">Proceed within 24 hours</p>
        </div>

         <div className="w-full  p-6 bg-white rounded-2xl dark:bg-gray-900 shadow-md border border-violet-800 border-l-8 border-l-violet-800 hover:shadow-2xl transition">
          <div className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white mb-4">
            <SiGooglepay className="text-[#4285F4] w-6 h-6" />
          </div>
          <h4 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">Gpay</h4>
          <p className="text-xl sm:text-md dark:text-white text-gray-500">
            $100 redeem on Gpay
          </p>
          <p className="flex items-center gap-2 mt-8  text-xl justify-start dark:text-white "><span><CreditCard className=" text-red-500 h-8 w-8 "/></span>10000 points</p>
          <button onClick={() => toast.success("Reward Redeemed! 🎉")} className="w-full mt-8 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition">Redeem Now</button>
           <p className="text-gray-500 text-xl flex justify-center mt-4">Proceed within 24 hours</p>
        </div>
            
        </div>
        </div>
          
        </div>
        </div>
        </div>
    );
}
      
