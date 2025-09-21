import React from "react";
import {  CreditCard } from "lucide-react";
import toast from "react-hot-toast";

export default function RewardCard({ icon, title, description, points, borderColor, bgGradient, category }) {
  return (
    <div className={`w-full p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-${borderColor}-500 border-l-8 border-${borderColor} hover:shadow-2xl transition`}>
    <div className="flex items-center justify-between ">
      <div className={`flex flex-row items-center justify-center w-12 h-12 rounded-full ${bgGradient} mb-4`}>
        {icon}
       
      </div>
       <span className="text-gray-700 bg-gray-300 px-3 py-1 rounded-lg dark:text-white font-bold text-lg">{category}</span>
      </div>
      <h4 className="text-3xl font-bold dark:text-white mb-2">{title}</h4>
      <p className="text-xl sm:text-md dark:text-white text-gray-500">{description}</p>
      <p className="flex items-center gap-2 mt-8 text-xl dark:text-white justify-start">
        <CreditCard className="text-red-500 h-8 w-8" /> {points} points
      </p>
      <button
        onClick={() => toast.success("Reward Redeemed! 🎉")}
        className="w-full mt-8 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
      >
        Redeem Now
      </button>
      <p className="text-gray-500 text-xl flex justify-center mt-4">Proceed within 24 hours</p>
    </div>
  );
}
