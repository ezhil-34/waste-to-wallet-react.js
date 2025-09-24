import React from "react";
import logo from "../assets/logo.png";  


export default function Option(){

    return(
       <div className=" min-h-screen flex items-center justify-center dark:bg-gray-900  ">
        <div className="flex flex-col  items-center justify-center dark:bg-gray-800 p-8 rounded-2xl shadow-2xl  max-w-2xl">
            <div className="flex justify-center">
              <div className="w-30 h-30 rounded-full flex item-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
                <div className="rounded-full p-1  overflow-hidden">
                    <img src={logo} alt="Logo" className="h-24 w-24 rounded-full object-cover " />
                </div>
              </div>
            </div>
            <h1 className="font-bold text-6xl  mt-8 bg-clip-text text-transparent dark:text-white bg-gradient-to-r from-green-400 to-blue-500">Join Waste to Wallet</h1>
            <p className="mt-4 text-2xl text-green-800">Create your account and start earning reward as</p>

        
        </div>
          
       </div>
    );
}
