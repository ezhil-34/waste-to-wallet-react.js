import React from "react";
import Header from "../components/Cheader";
import { useContext } from "react";
import { DarkModeContext } from "../App";
import Dashboard from "../components/Dashboard";
import Card from "../components/Ccard";
import Pick from "../components/Pick";
import Today from "../components/Today";
import { Leaf,Truck, Award, DollarSign } from "lucide-react";


export default function Collect(){
     const storedUser = JSON.parse(localStorage.getItem("user"));
      const { darkMode } = useContext(DarkModeContext);
        const topStats = [
    { label: "Total Earnings", value: "₹15,750", sub: "+₹450 this week", icon: <DollarSign /> },
    { label: "KG Collected", value: "234.5", icon: <Leaf /> },
    { label: "Pickups Done", value: "42", icon: <Truck /> },
    { label: "Rating", value: "4.8/5", icon: <Award /> },
  ];
    return(
        <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
            <Header storedUser={storedUser} />
        <div className="pt-44 pl-10">
            <Dashboard storedUser={storedUser} />
        </div>
        <div className="pt-20 pl-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
           {topStats.map((s,idx) => (
            <Card key={idx} {...s} />
           ))}
        </div>
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6  mt-10">
        {/* Nearby Pickup Requests - 75% width */}
        <div className="lg:col-span-8 ml-12 mb-4">
            <Pick />
        </div>

        {/* Today’s Activity - 25% width */}
        <div className="lg:col-span-4  " >
            <Today />
        </div>
        </div>

           

        </div>
         
        </div>
    );
}