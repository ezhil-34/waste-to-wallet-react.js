
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DarkModeContext } from "../App";

export default function Login(){
         const navigate = useNavigate();
       
         const handleLogin = (e) => {
            e.preventDefault();

            const storedUser = JSON.parse(localStorage.getItem("user"));
            const email = e.target.email.value;
            const password = e.target.password.value;

            if(

                storedUser &&
                storedUser.email === email &&
                storedUser.password === password
            ){
                 toast.success("Login successful!");
                navigate("/Home");
            }
            else{
                toast.error("Invalid credentials");
            }
         };
         const {darkMode } = useContext(DarkModeContext);
        return(
           
            <div className="flex flex-col items-center  bg-gradient-to-b from-sky-200 to-white min-h-screen justify-center ">
                <div className="w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-2xl border border-l-8 border-l-sky-500 border-sky-500 overflow-hidden flex">
                    <div className="w-3/5 bg-white text-center flex flex-col  items-center justify-center">
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 font-bold text-5xl">Waste to Wallet</h1>
                        <h2 className="text-sky-500 font-bold text-3xl mt-2" >Sign in</h2>

                        <form className="w-3/4 mt-8" onSubmit={handleLogin}>
                            <input 
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
                            />

                            <input 
                                name="password"
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
                            />

                            <button 
                                type="submit"
                                className="bg-sky-500 border border-white text-white mt-8 px-16 py-3 shadow-md text-lg rounded-full"
                                >
                                    Sign in
                                </button>
                                <button onClick={darkMode} className="hidden">
                                    Toggle Dark
                                    </button>

                        </form>



                    </div>

                    <div className="w-2/5 bg-sky-500 flex flex-col  items-center justify-center ">
                        <h2 className="text-white font-bold text-5xl  ">Welcome Back</h2>
                        <p className="text-white text-center mt-4 text-lg">Enter you details and start earning  <br /> and contribute to society</p>
                        <p className="text-white text-center mt-16 text-lg">Don't have an Account</p>
                        <button onClick={() => navigate("/Signup") }
                            className=" bg-sky-500 border border-white text-white mt-2 px-16 py-3 shadow-md text-lg rounded-full">Sign up</button>

                    </div>
                </div>
            </div>
        )
}