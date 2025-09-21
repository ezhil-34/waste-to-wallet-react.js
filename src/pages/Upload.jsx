import React from "react";
import Header from "../components/Mheader";
import Form from "../components/Form";
import Guideline from "../components/Guideline";
import { Camera, Sparkles } from "lucide-react";

export default function Home() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const items = [
    { name: "Plastic Bottles", points: 10,   type: "bottles" },
    { name: "E-Waste",         points: 1000, type: "kg" },
    { name: "Cardboard",       points: 500,  type: "kg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <Header storedUser={storedUser} />

      <div className="pt-44 pl-8">
        <h4 className="text-6xl flex items-center font-bold dark:text-white">
          Upload Waste <Camera className="ml-6 h-10 w-10" />
          <Sparkles className="text-yellow-500 ml-6 h-10 w-10" />
        </h4>
        <p className="pt-4 text-3xl dark:text-white">
          Take a photo of your recyclables and earn points!
        </p>
      </div>

      <div className="mt-16 flex justify-center px-8">
        <Form items={items} />
      </div>

      <Guideline />
    </div>
  );
}
