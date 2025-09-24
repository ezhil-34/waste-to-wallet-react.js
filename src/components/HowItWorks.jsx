import React from "react";
import Card from "../components/Card";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      color: "blue",
      title: "Submit Waste",
      text: "Take photo of your recyclable materials and upload them through our app",
    },
    {
      number: 2,
      color: "green",
      title: "Get Verified",
      text: " Our verified collectors handle everything safely. ",
    },
    {
      number: 3,
      color: "yellow",
      title: "Earn & Redeem",
      text: "Collect points and redeem them for rewards in our marketplace",
    },
  ];

  return (
    <section className="mt-16 flex justify-center">
      <div className="w-full max-w-6xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
        <h5 className="text-center font-bold text-4xl dark:text-white">
          How it works
        </h5>
        <div className="flex flex-wrap justify-center items-stretch gap-6 mt-16 sm:gap-8 px-4 sm:px-12">
          {steps.map((step) => (
            <Card key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
