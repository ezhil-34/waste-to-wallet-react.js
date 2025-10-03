import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();
  const { role } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect data from form
    const user = {
      name: e.target.name.value,
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role,
    };

    try {
      // Correct URL matching backend route
      const res = await fetch(`http://localhost:5000/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        navigate(`/Login/${role}`);
      } else {
        toast.error(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Server error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-sky-200 to-white min-h-screen justify-center">
      <div className="w-full max-w-6xl h-[600px] bg-white rounded-3xl shadow-2xl border border-r-8 border-r-sky-500 overflow-hidden flex">
        {/* Left Side */}
        <div className="w-2/5 bg-sky-500 flex flex-col items-center justify-center">
          <h2 className="text-white font-bold text-4xl">Welcome to EcoWallet</h2>
          <p className="text-white text-center mt-4 text-lg">
            Turn your waste to <br /> rewards just by uploading your waste
          </p>
          <p className="text-white text-center mt-16 text-lg">Already have an Account?</p>
          <button
            onClick={() => navigate(`/Login/${role}`, { replace: true })}
            className="bg-sky-500 border border-white text-white mt-2 px-16 py-3 shadow-md text-lg rounded-full"
          >
            Sign in
          </button>
        </div>

        {/* Right Side */}
        <div className="w-3/5 bg-white text-center flex flex-col items-center justify-center">
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-500 font-bold text-5xl">
            Create {role} Account
          </h1>
          <h2 className="text-sky-500 font-bold text-3xl mt-2">Enter your details</h2>

          <form className="w-3/4 mt-8" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Enter your Name"
              required
              className="w-full border border-gray-300 p-3 mb-4 rounded-lg"
            />
            <input
              name="username"
              type="text"
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
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Password must be at least 8 characters and include uppercase, lowercase, and a number"
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
  );
}
