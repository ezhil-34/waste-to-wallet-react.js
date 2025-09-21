import React from "react";
import coin from "../assets/icons8-coin-48.png";

export default function Greeting({ storedUser }) {
  return (
    <>
      <h4 className="text-6xl font-bold dark:text-white">
        Good Morning <span className="text-6xl dark:text-white font-bold">{storedUser.name}</span>!
      </h4>
      <p className="pt-4 pl-2 text-3xl dark:text-white flex items-center gap-2">
        You have earned{" "}
        <img src={coin} alt="Coin Logo" className="h-10 w-10 rounded-full object-contain" />
        <span className="dark:text-yellow-600 bg-clip-text text-transparent bg-[#FFD700]">2500 points</span> this month
      </p>
    </>
  );
}
