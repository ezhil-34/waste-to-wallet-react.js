import React from "react";
import { Activity } from "./Activity";

export default function Today(){
  return (
    <div className="mr-8">
      <Activity title="Today’s Activity">
        <div className="flex flex-col text-2xl  justify-between h-full space-y-4">
          <p className="flex justify-between mt-8 dark:text-white text-gray-700">
            <span>Pickups Completed</span> <span>3</span>
          </p>
          <p className="flex justify-between dark:text-white text-gray-700">
            <span>Pending Pickups</span> <span>2</span>
          </p>
          <p className="flex justify-between  text-green-600 font-bold mt-2">
            <span>Today’s Earnings</span> <span>₹450</span>
          </p>
        </div>
      </Activity>
    </div>
  );
}
