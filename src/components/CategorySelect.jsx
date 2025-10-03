import React from "react";

export default function CategorySelect({ items, category, setCategory }) {
  return (
    <>
      <label className="block dark:text-white text-xl font-bold mt-8 mb-1">
        Waste Category
      </label>
      <select
        value={category?.name || ""}
        onChange={(e) =>
          setCategory(items.find((i) => i.name === e.target.value))
        }
        className="w-full rounded-xl mt-4 h-12 border border-gray-300 p-3 focus:border-green-500 focus:ring-green-800"
      >
        <option value="">Select category</option>
        {items.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name} – {item.points} pts/{item.type}
          </option>
        ))}
      </select>
    </>
  );
}
