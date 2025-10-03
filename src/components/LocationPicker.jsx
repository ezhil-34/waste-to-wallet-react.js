import React, { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import LocationMarker from "./LocationMaker";

export default function LocationPicker({
    location,
    setLocation,
    address,
    setAddress,
    getLocation,
}) {
    const [ showMap, setShowMap ] = useState(false);

    return (
        <div>
            <button 
                type ="button"
                onClick={getLocation}
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg">
                Get Current Location
            </button>

            <button
                type="button"
                onClick={() => setShowMap(!showMap)}
                className="mt-4 ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg"

            >
                {showMap? "Hide Map":"Show Map"}

            </button>

            { showMap && (
                <div className="mt-6 border rounded-xl shadow-md overflow-hidden">
                    <MapContainer
                        center={location? [location.latitude, location.longitude] : [20.5937, 78.9629]}
                        zoom={location?.latitude? 14: 5}
                        style={{height: "300px",width:"100%"}} 
                        >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                            />

                           <LocationMarker setLocation={setLocation} setAddress={setAddress} />
                           {location?.latitude !== undefined && location?.longitude !== undefined && (
                                <Marker position={[location.latitude, location.longitude]} />

                           )} 

                        </MapContainer>

                
                        
                </div>


            )}

            {location &&  (
                <p className="mt-2 text-gray-600">
                   📍 {address || "Fetching address..."} <br />
                    Lat: {location.latitude}, Lng: {location.longitude}
                </p>
            )}
        </div>
    );
}