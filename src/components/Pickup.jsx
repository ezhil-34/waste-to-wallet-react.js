import React from "react";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Pickup( { req, onAccept }) {
    const navigate = useNavigate();
     const handleAccept = () => {
    // navigate to map picker page
    navigate("/pick-location", {
      state: { requestId: req.id }, // optional, pass info
    });
}
    return(
        <div className="rounded-xl ml-6 mt-8 bg-white dark:bg-gray-900  p-4 flex justify-between items-center border border-white-200 shadow-lg">
            <div className="ml-4">
                <p className="text-4xl dark:text-white font-bold mt-4 text-gray-800">
                    {req.type}{" "}
                    <span className="ml-2 mt-4 text-xl px-2 py-1 rounded-full bg-yellow-200 text-yellow-800">
                        {req.status}
                    </span>
                </p>
                <p className="text-gray-600 dark:text-white text-2xl mt-4">{req.details}</p>
                <p className="text-gray-500  dark:text-white text-2xl  mt-4">Requested by {req.user} • {req.time} </p>
                <p className="text-gray-500 dark:text-whiteflex items-center gap-2 text-2xl mt-4">
                    <MapPin className="text-gray-500"/>
                    {req.address}</p>
            </div>
            <button onClick={handleAccept}
                className="text-white  bg-blue-500 px-8 font-bold py-4 rounded-full hover:bg-green-700">Accept</button>
        </div>
    );
}