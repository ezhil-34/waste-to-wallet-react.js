import React from "react";

export default function QuantityInput({ category, quantity, setQuantity }) {
  return (
    <>
      <label className="block text-xl mt-4 dark:text-white font-bold mb-1">
        Quantity {category ? `(${category.type})` : ""}
      </label>
      <input
        type="number"
        min={0}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Enter Quantity"
        className="w-full rounded-xl mt-4 border border-gray-300 p-3 focus:border-green-500"
      />
    </>
  );
}
