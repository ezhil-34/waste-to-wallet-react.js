import React from "react";

export default function Ccard({label, value, sub, icon }){
    
    return(
        <div className="rounded-xl p-5 h-40 flex items-center border border-white-200 justify-between shadow-xl hover:shadow-2xl">
            <div>
            <p className="font-bold mt-2 dark:text-white text-xl">{label}</p>
            <h2 className="text-2xl mt-2 font-bold text-green-600">{value}</h2>
            {sub && <p className="text-lg mt-2 text-blue-600">{sub}</p>}
            </div>
            <div className="text-green-600">{icon}</div>
        </div>
    );
}