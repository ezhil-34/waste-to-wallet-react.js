import React from "react";
import Card from "./Card";
import { Smartphone, Box } from "lucide-react";
import logo from "../assets/logo.png";

export default function UploadSection() {
  const items = [
    {
      color: "green",
      title: "Plastic",
      text: "5pts/bottle",
      icon: <img src={logo} alt="Logo" className="h-6 w-6 rounded-full object-contain" />,
    },
    {
      color: "sky",
      title: "E-Waste",
      text: "1000pts/Kg",
      icon: <Smartphone className="text-white w-6 h-6" />,
    },
    {
      color: "yellow",
      title: "Cardboard",
      text: "500pts/Kg",
      icon: <Box className="text-white w-6 h-6" />,
    },
  ];

  return (
    <div className="w-full max-w-7xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
      <h5 className="text-left flex items-center font-bold text-4xl dark:text-white">
        Upload Waste
      </h5>
      <p className="text-2xl mt-4 text-gray-700">Turn your recyclable into rewards</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
}
