import React from "react";

export default function Ccard({label, value, sub, icon }){
    
    return(
        <div className="rounded-xl p-5 flex items-center justify-between shadow-2xl">
            <div>
            <p className="text-blue-600 text-lg">{label}</p>
            <h2 className="text-2xl font-bold text-blue-600">{value}</h2>
            {sub && <p className="text-lg text-blue-600">{sub}</p>}
            </div>
            <div className="text-blue-600">{icon}</div>
        </div>
    );
}