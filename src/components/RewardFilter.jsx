import React from "react";

export default function RewardFilters({ selectedFilter, setSelectedfilter}) {
  const filters = ["All", "Mobile", "Transport", "Shopping", "Gaming"];

  return (
    <div className="flex items-center ml-2 mt-8 gap-3">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setSelectedfilter(f)}
          className={`text-3xl px-6 py-2 shadow-[0_0_20px_#3b82f6] rounded-lg border dark:text-white border-sky-500
  ${selectedFilter === f ? "bg-sky-500 text-white" : ""}`}

        >
          {f}
        </button>
      ))}
    </div>
  );
}
