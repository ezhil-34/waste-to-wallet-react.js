// Card.jsx
import React from "react";

export default function Card({
  icon,
  number,
  title,
  text,
  color = "green",
}) {
  return (
    <div
      className={`w-full sm:w-80 p-10 mt-8 bg-white dark:bg-gray-900 rounded-2xl
                  shadow-md border border-${color}-500 border-l-8
                  hover:shadow-2xl hover:shadow-${color}-500 transition text-center`}
    >
      {icon && (
        <div
          className={`flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-${color}-500 mb-4`}
        >
          {icon}
        </div>
      )}

      {number && (
        <div
          className={`flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-${color}-500 mb-4`}
        >
          <h6 className="text-white text-xl font-bold">{number}</h6>
        </div>
      )}

      <h4 className="text-xl font-bold mb-2 text-center dark:text-white">{title}</h4>
      {text && (
        <p className="text-lg sm:text-md text-gray-600 dark:text-white">{text}</p>
      )}
    </div>
  );
}
