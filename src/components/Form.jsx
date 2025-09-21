import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Camera } from "lucide-react";
import { toast } from "react-toastify";

export default function UploadForm({ items }) {
  const [category, setCategory] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !quantity || !photo) {
      alert("Please fill in all fields");
      return;
    }
    const newEntry = {
      category: category.name,
      type: category.type,
      quantity,
      photoName: photo.name,
      date: new Date().toLocaleString(),
    };
    const existing = JSON.parse(localStorage.getItem("recyclingData")) || [];
    localStorage.setItem("recyclingData", JSON.stringify([newEntry, ...existing]));
    toast.success("Saved! Data available in localStorage.");
  };

  return (
    <div className="w-full max-w-7xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
      <h5 className="text-left flex items-center font-bold text-4xl dark:text-white">
        <FaUpload className="text-green-500 mr-6 h-10 w-10" /> Waste Details
      </h5>

      <form onSubmit={handleSubmit}>
        {/* Category */}
        <label className="block dark:text-white text-xl font-bold mt-8 mb-1">
          Waste Category
        </label>
        <select
          value={category?.name || ""}
          onChange={(e) => setCategory(items.find(i => i.name === e.target.value))}
          className="w-full rounded-xl mt-4 h-12 border border-gray-300 p-3 focus:border-green-500 focus:ring-green-800"
        >
          <option value="">Select category</option>
          {items.map(item => (
            <option key={item.name} value={item.name}>
              {item.name} – {item.points} pts/{item.type}
            </option>
          ))}
        </select>

        {/* Quantity */}
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

        {/* Upload Photo */}
        <label className="block dark:text-white text-xl font-bold mt-4 mb-2">
          Upload Photo
        </label>
        <label className="flex flex-col items-center mt-4 justify-center w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 cursor-pointer hover:border-green-500">
          <Camera className="text-green-500 mb-2" size={32} />
          <span className="text-gray-500 dark:text-white text-xl font-bold text-center">
            Take a photo of your recyclables
          </span>
          <span className="mt-4 text-xl inline-block px-4 py-1 bg-green-100 text-green-700 rounded-lg">
            Take Photo
          </span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setPhoto(e.target.files[0])}
          />
        </label>
        {photo && <p className="mt-2 text-sm text-gray-600">Selected: {photo.name}</p>}

        <button
          type="submit"
          className="w-full mt-4 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
        >
          Submit for Verification
        </button>
      </form>
    </div>
  );
}
