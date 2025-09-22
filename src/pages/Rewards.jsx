import React, { useContext } from "react";
import { DarkModeContext } from "../App";
import MHeader from "../components/Mheader";
import RewardGrid from "../components/RewardGrid";
import Manual from "../components/Manual";

export default function Rewards() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { darkMode } = useContext(DarkModeContext);

  

  return (

    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        <MHeader storedUser={storedUser} />
        
        <div className="pt-44 pl-8">
          <h4 className="text-6xl font-bold flex items-center dark:text-white">
            Rewards Store
          </h4>
          <p className="text-3xl dark:text-white mt-4">
            Redeem your eco-points for amazing rewards
          </p>
        </div>

        <div className="mt-16 px-8">
          <RewardGrid />
        </div>

        <Manual />
      </div>
    </div>
  );
}
