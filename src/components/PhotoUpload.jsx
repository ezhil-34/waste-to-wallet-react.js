import React from "react";
import { Camera } from "lucide-react";

export default function PhotoUpload({ photo, setPhoto }) {
  return (
    <>
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
      {photo && (
        <p className="mt-2 text-sm text-gray-600">Selected: {photo.name}</p>
      )}
    </>
  );
}
