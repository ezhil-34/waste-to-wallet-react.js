import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup(){
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {

            name: e.target.name.value,
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value,

        };

        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Account created successfully!");
        navigate("/Login");
    };

    return(
         <div className="flex flex-col items-center  bg-gradient-to-b from-sky-200 to-white min-h-screen justify-center ">
                <div className="w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-2xl border border-r-8 border-r-sky-500 border-sky-500  overflow-hidden flex">

                    <div className="w-2/5 bg-sky-500 flex flex-col  items-center justify-center ">
                        <h2 className="text-white font-bold text-4xl ">Welcome to EcoWallet</h2>
                        <p className="text-white text-center mt-4 text-lg">Trun your waste to  <br />  rewards just by upload your waste</p>
                        <p className="text-white text-center mt-16 text-lg">Already have an Account</p>
                        <button onClick={() => navigate("/Login") }
                            className=" bg-sky-500 border border-white text-white mt-2 px-16 py-3 shadow-md text-lg rounded-full">Sign in</button>

                    </div>

                    <div className="w-3/5 bg-white text-center flex flex-col  items-center justify-center">
                        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-500 font-bold text-5xl">Create Account</h1>
                        <h2 className="text-sky-500 font-bold text-3xl mt-2" >Enter your details</h2>

                    <form className="w-3/4 mt-8" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            type = "text"
                            placeholder="Enter you Name"
                            required

                            className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
                        />
                        <input
                            name="username"
                            type = "text"
                            placeholder="Enter your Username"
                            required

                            className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
                        />
                        <input 
                            name="email"
                            type="email"
                            placeholder="Enter your Email"
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9._]+\.[a-z]{2,}$"
                            title="Enter a valid email address"
                            className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
                        />

                        <input 
                            name = "password"
                            type ="password"
                            placeholder="Enter your password"
                            required
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Password must be at least 8 character and include uppercase lowercase and a number"
                            className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
                        />

                        <button 
                            type="submit"
                            className="bg-sky-500 border border-white text-white mt-8 px-16 py-3 shadow-md text-lg rounded-full"
                        >
                            Sign Up
                        </button>
                        
                    </form>

                    </div>
                </div>
            </div>
    )
}