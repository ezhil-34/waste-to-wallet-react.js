import React from "react";
import Pickup from "../components/Pickup";
import {Activity} from "../components/Activity";

export default function Pick(){

     const req = [
    {
      type: "Plastic Bottles",
      status: "pending",
      details: "8 kg • 0.5 km away • +80 points",
      address: "123 MG Road, Bangalore",
      user: "Rajesh Kumar",
      time: "10 mins ago",
    },
    {
      type: "Cardboard",
      status: "pending",
      details: "15 kg • 1.2 km away • +120 points",
      address: "456 Brigade Road, Bangalore",
      user: "Priya Sharma",
      time: "25 mins ago",
    },
  ];
    const handleAccept = (req) => {
        console.log("Accepted:",req);
    };
    return(
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <Activity title="Nearby Pickup Requests">
                <div className="flex justify-end mb-4">
                    

                </div>
                <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
                    {req.map((r,idx) =>(
                        <Pickup key = {idx} req ={r} onAccept={() => handleAccept(r)} />
                    ))}
                </div>
                </Activity>
            </div>
        
        </div>
    );
}