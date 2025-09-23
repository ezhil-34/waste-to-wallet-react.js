import React from "react";
import Card from "../components/Card";

export default function Guideline() {
  const rules = [
    { number: 1, color: "blue",  title: "Earn Points",   text: "Upload recyclable waste to earn eco-points" },
    { number: 2, color: "green", title: "Choose Rewards",   text: "Select from mobile recharges, vouchers, and more" },
    { number: 3, color: "yellow",title: "Get Rewards",text: "Receive your reward within 24 hours" },
  ];

  return (
    <section className="mt-16 flex items-center justify-center">
      <div className="w-full  max-w-7xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
        <h5 className="text-center font-bold text-4xl dark:text-white">
        
         How Rewards Works
        </h5>
        <div className="flex justify-center items-stretch gap-6 mt-16 sm:gap-8 px-4 sm:px-20">
          {rules.map((rule) => (<Card key={rule.number} {...rule} />))}
        </div>
      </div>
    </section>
  );
}
