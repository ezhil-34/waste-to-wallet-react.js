
import React, { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { DarkModeContext } from "../App";

export default function Login(){
        const { role } = useParams();
         const navigate = useNavigate();
       
         const handleLogin = async (e) => {
            e.preventDefault();

            
            const email = e.target.email.value;
            const password = e.target.password.value;

            const res = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({email,password,role }),
            });

            const data = await res.json();

            if(res.ok) {
                toast.success(`${role} Login successful!`);
                localStorage.setItem("token",data.token);
                localStorage.setItem("role",data.role);
                navigate(role === "Citizen" ? "/Home" :"/Collect");
            }
            else{
                toast.error(data.message);
            }
           
         };
         const {darkMode } = useContext(DarkModeContext);
        return(
           
            <div className="flex flex-col items-center  bg-gradient-to-b from-sky-200 to-white min-h-screen justify-center ">
                <div className="w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-2xl border border-l-8 border-l-sky-500 border-sky-500 overflow-hidden flex">
                    <div className="w-3/5 bg-white text-center flex flex-col  items-center justify-center">
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 font-bold text-5xl">Waste to Wallet</h1>
                        <h2 className="text-sky-500 font-bold text-3xl mt-2" >Sign in as {role}</h2>

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
                        <button onClick={() => navigate(`/Signup/${role}`) }
                            className=" bg-sky-500 border border-white text-white mt-2 px-16 py-3 shadow-md text-lg rounded-full">Sign up</button>

                    </div>
                </div>
            </div>
        )
}