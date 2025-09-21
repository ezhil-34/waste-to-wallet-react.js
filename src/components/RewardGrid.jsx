import React, { useState } from "react";
import RewardCard from "../components/Rewardcard";
import RewardFilter from "../components/RewardFilter";
import { CreditCard, Smartphone, ShoppingCart } from "lucide-react";
import { SiAmazon, SiGooglepay } from "react-icons/si";

export default function RewardGrid() {

  const [selectedFilter, setSelectedfilter] = useState("All");
  const rewards = [
    { title: "Mobile Recharge", description: "$100 mobile top-up", points: 500, icon: <Smartphone className="text-white w-6 h-6" />, borderColor: "violet-800", bgGradient: "bg-gradient-to-br from-violet-900 to-violet-500", category: "Mobile"},
    { title: "Metro Card", description: "$100 metro balance", points: 1500, icon: <CreditCard className="text-white w-6 h-6" />, borderColor: "orange-800", bgGradient: "bg-gradient-to-br from-orange-900 to-orange-500", category: "Transport" },
    { title: "Grocery Voucher", description: "$100 partner at store", points: 1000, icon: <ShoppingCart className="text-white w-6 h-6" />, borderColor: "yellow-800", bgGradient: "bg-gradient-to-br from-yellow-900 to-yellow-500",category: "Shopping" },
    { title: "Amazon Pay", description: "$100 redeem on amazon", points: 5000, icon: <SiAmazon className="text-yellow-400 w-6 h-6" />, borderColor: "[#232F3E]", bgGradient: "bg-[#232F3E]",category: "Mobile" },
    { title: "Gpay", description: "$100 redeem on Gpay", points: 10000, icon: <SiGooglepay className="text-[#4285F4] w-6 h-6" />, borderColor: "violet-800", bgGradient: "bg-white",category: "Mobile" },
  ];

  const filteredRewards = selectedFilter === "All" ? rewards : rewards.filter(r => r.category === selectedFilter);
  return (
    <div> <RewardFilter selectedFilter={selectedFilter}
                        setSelectedfilter={setSelectedfilter} 
                        />
    <div className="p-8 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200">
      {filteredRewards.map((r) => (
        <RewardCard key={r.title} {...r} />
      ))}
    </div>
    </div>
  );
}
