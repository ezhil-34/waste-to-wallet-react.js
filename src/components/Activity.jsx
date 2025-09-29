// activity.jsx
import React from "react";

export function Activity({ title, children }) {
  return (
    <div className="rounded-xl ml-12 p-6 mt-16 shadow-2xl border border-gray-200">
      <h4 className="font-semibold text-brown-700 mb-2 mt-4 text-5xl">{title}</h4>
      {children}
    </div>
  );
}
  