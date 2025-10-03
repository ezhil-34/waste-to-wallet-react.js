import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import L from "leaflet";
import CategorySelect from "./CategorySelect";
import QuantityInput from "./QuantityInput";
import PhotoUpload from "./PhotoUpload";
import LocationPicker from "./LocationPicker";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinalUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",

});



export default function UploadForm({ items }) {
  const [category, setCategory] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location,setLocation] = useState(null);
  const [address,setAddress] = useState("");

  const getLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const coords = {
         
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          };
          setLocation(coords);

          try {
            const res = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`
            );
            setAddress(res.data.display_name);
          } catch (err) {
            console.error("Error fetching address", err);
          }
        },
        () => alert("Location access denied")
      );
    } else {
      alert("Geolocation not supported");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!category || !quantity || !photo){
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
     formData.append("category", category.name);
  formData.append("type", category.type);
  formData.append("quantity", quantity);
  formData.append("photo", photo);
  formData.append("address", address);
  if (location) {
    formData.append("latitude", location.latitude);
    formData.append("longitude", location.longitude);
  }

  axios.post(`http://localhost:5000/api/waste`, formData, {
  headers: { "Content-Type": "multipart/form-data" }
})
.then(res => {
  toast.success("Waste submitted successfully!");
})
.catch(err => {
  console.error("Upload error:", err.response?.data || err.message);
  toast.error("Error submitting waste");
});

  };

  return (
    <div className="w-full max-w-7xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
      <h5 className="text-left flex items-center font-bold text-4xl dark:text-white">
        <FaUpload className="text-green-500 mr-6 h-10 w-10" /> Waste Details
      </h5>

      <form onSubmit={handleSubmit}>
        <CategorySelect items={items} category={category} setCategory={setCategory}  />
        <QuantityInput category={category} quantity={quantity} setQuantity={setQuantity} />
        <PhotoUpload photo={photo} setPhoto={setPhoto} />
        <LocationPicker 
          location={location}
          setLocation={setLocation}
          address={address}
          setAddress={setAddress}
          getLocation={getLocation}
          />
        
        <button
          type="submit"
          className="w-full mt-4 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
        >
          Submit for Verification
        </button>
      </form>
    </div>
  );
}
