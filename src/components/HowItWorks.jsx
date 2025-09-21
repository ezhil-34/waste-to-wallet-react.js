import React from "react";

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
      text: "Our verification system reviews and approves your submissions",
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
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-component for a single step
function StepCard({ number, color, title, text }) {
  return (
    <div
      className={`w-full sm:w-80 p-10 dark:bg-gray-900 bg-white rounded-2xl shadow-md
                  border border-${color}-500 border-l-8 border-l-${color}-500
                  hover:shadow-2xl hover:shadow-${color}-500 transition text-center`}
    >
      <div
        className={`flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-${color}-500 mb-4`}
      >
        <h6 className="text-white text-xl font-bold dark:text-white">{number}</h6>
      </div>
      <h4 className="text-xl font-bold mb-2 text-center dark:text-white">
        {title}
      </h4>
      <p className="text-lg sm:text-md text-gray-600 dark:text-white">{text}</p>
    </div>
  );
}
