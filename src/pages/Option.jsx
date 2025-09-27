import React from "react";
import logo from "../assets/logo.png";  
import { User, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";


export default function Option(){
    const navigate = useNavigate();
    return(
      <div className="min-h-screen flex items-center justify-center   dark:bg-gray-900">
  <div className="flex flex-col items-center   dark:bg-gray-800 
                  p-10 rounded-3xl shadow-2xl w-[90%] max-w-3xl">
            <div className="flex justify-center">
              <div className="w-30 h-30 rounded-full flex item-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
                <div className="rounded-full p-1  overflow-hidden">
                    <img src={logo} alt="Logo" className="h-24 w-24 rounded-full object-cover " />
                </div>
              </div>
            </div>
           <h1 className="font-extrabold text-center text-4xl sm:text-6xl mt-8 
               bg-clip-text text-transparent bg-gradient-to-r 
               from-green-400 to-blue-500">
          Join Waste to Wallet
            </h1>
          <p className="mt-4 text-xl sm:text-2xl text-center text-green-800 dark:text-green-300">
            Create your account and start earning rewards as
          </p>

            <div className="mt-10 flex gap-8">
              <div className="group flex dark:bg-gray-900 rounded-xl shadow-2xl border border-white-400 p-8  flex-col justify-center items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                <User className="w-10 h-10 text-sky-500 group-hover:text-green-500" />
                <p className="mt-4 text-lg dark:text-gray-900 text-gray-500">Countinue as</p>
                <h1 className=" text-2xl font-bold dark:text-white text-gray-800">Citizen</h1>
                <button onClick={() => navigate("/Login/Citizen")}
                            
                            className="bg-sky-500 hover:bg-sky-600 text-white mt-8 px-16 py-3 shadow-md text-lg rounded-full"
                        >
                           Join
                        </button>
              
              </div>
              <div className="group flex flex-col justify-center  dark:bg-gray-900 rounded-xl shadow-2xl border border-white-400 p-6 items-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
               
                <Users className="w-10 h-10 text-sky-500 group-hover:text-green-500" />
                 <p className="mt-4 text-xl dark:text-gray-900 text-gray-500">Countinue as</p>
                 <h2 className="text-2xl font-bold dark:text-white text-gray-800">Collector</h2>
                 <button onClick={() => navigate("/Login/Collector")}
                           
                            className="bg-sky-500  hover:bg-sky-600   text-white mt-8 px-16 py-3 shadow-md text-lg rounded-full"
                        >
                           Join
                        </button>


              </div>
            </div>

        
        </div>
          
       </div>
    );
}
