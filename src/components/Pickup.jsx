import React from "react";

export default function Pickup( { req, onAccept }) {

    return(
        <div className="rounded-xl ml-12 mt-8 bg-white  p-4 flex justify-between items-center border border-white-200 shadow-lg">
            <div>
                <p className="text-4xl font-bold mt-4 text-gray-800">
                    {req.type}{" "}
                    <span className="ml-2 mt-4 text-xl px-2 py-1 rounded-full bg-yellow-200 text-yellow-800">
                        {req.status}
                    </span>
                </p>
                <p className="text-gray-600  text-2xl mt-4">{req.details}</p>
                <p className="text-gray-500 text-2xl  mt-4">Requested by {req.user} • {req.time} </p>
            </div>
            <button onClick={onAccept}
                className="text-white bg-blue-500 px-4 py-1 rounded-full hover:bg-green-700">Accept</button>
        </div>
    );
}