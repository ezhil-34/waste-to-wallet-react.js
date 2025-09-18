import React, { useState, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaUpload } from "react-icons/fa";
import { Camera, Sparkles } from "lucide-react";
import logo from "../assets/logo.png";
import coin from "../assets/icons8-coin-48.png";
import { toast } from "react-toastify";
import { DarkModeContext } from "../App";


export default function Home() {
  const navigate = useNavigate();

  // item list with points & type
  const items = [
    { name: "Plastic Bottles", points: 10, type: "bottles" },
    { name: "E-Waste", points: 1000, type: "kg" },
    { name: "Cardboard", points: 500, type: "kg" },
  ];

  const [category, setCategory] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState(null);


  const {darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleFile = (e) => setPhoto(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category || !quantity || !photo) {
      alert("Please fill in all fields");
      return;
    }

    // Create new entry
    const newEntry = {
      category: category.name,
      type: category.type,
      quantity,
      photoName: photo.name,
      date: new Date().toLocaleString(),
    };

    // Save array of records
    const existing = JSON.parse(localStorage.getItem("recyclingData")) || [];
    localStorage.setItem("recyclingData", JSON.stringify([newEntry, ...existing]));

    toast.success("Saved! Data available in localStorage.");

  
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
        
        <div className="fixed top-0 w-full left-0 flex flex-wrap items-center justify-between p-8 bg-sky-200 dark:bg-gray-900 z-50 shadow-lg">
          <div className="flex items-center">
            <div className="p-1 rounded-full ml-2 sm:ml-4 bg-gradient-to-r from-green-400 to-blue-500">
              <div className="rounded-full p-2">
                <img src={logo} alt="Logo" className="h-6 w-6 rounded-full object-contain" />
              </div>
            </div>
            <div>
              <h2 className="ml-2 sm:ml-4 font-bold text-xl sm:text-3xl dark:text-white">
                Waste-to-Wallet
              </h2>
              <p className="text-sm sm:text-lg ml-2 sm:ml-4 text-gray-600 dark:text-white">
                Turn your waste into rewards
              </p>
            </div>

            
            <div className="flex flex-row items-center gap-8 px-12 ml-64">
              <button
                onClick={() => navigate("/Home")}
                className="text-2xl px-6 py-2 dark:text-white rounded-full hover:text-gray-500"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/Upload")}
                className="text-2xl px-6 py-3 dark:text-white shadow-[0_0_20px_#3b82f6] rounded-full hover:text-gray-500"
              >
                Upload
              </button>
              <button onClick={() => navigate("/Rewards")}
              className="text-2xl px-6 py-3 dark:text-white hover:text-gray-500">
                Rewards
              </button>
              <button className="text-2xl px-6 py-3 dark:text-white hover:text-gray-500">
                Blogs
              </button>
              <button className="text-2xl px-6 py-3 dark:text-white hover:text-gray-500">
                Donate
              </button>
            </div>

            
            <button
              className="ml-32 px-4 py-2 flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg transition-colors duration-300"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun className="h-5 w-5" /> : <FaMoon className="h-5 w-5" />}
            </button>

           
            <div className="ml-4 w-56 h-16 bg-white rounded-3xl dark:bg-black shadow-lg flex items-center justify-center">
              <img src={coin} alt="Coin" className="h-12 w-12 rounded-full object-contain" />
              <h3 className="text-[#FFD700] text-2xl dark:text-yellow-600 font-semibold">
                2500 points
              </h3>
            </div>
          </div>
        </div>

        
        <div className="pt-44 pl-8">
          <h4 className="text-6xl flex items-center font-bold dark:text-white">
            Upload Waste <Camera className="ml-6 h-10 w-10" />
            <Sparkles className="text-yellow-500 ml-6 h-10 w-10" />
          </h4>
          <p className="pt-4 text-3xl dark:text-white">
            Take a photo of your recyclables and earn points!
          </p>
        </div>

        
        <div className="mt-16 ml-16 flex justify-center pl-8">
          <div className="w-full max-w-7xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
            <h5 className="text-left flex items-center font-bold text-4xl dark:text-white">
              <FaUpload className="text-green-500 mr-6 h-10 w-10" /> Waste Details
            </h5>

            <form onSubmit={handleSubmit}>
              
              <div>
                <label className="block dark:text-white text-xl font-bold mt-8 text-gray-700 mb-1">
                  Waste Category
                </label>
                <select
                  value={category?.name || ""}
                  onChange={(e) => {
                    const item = items.find((i) => i.name === e.target.value);
                    setCategory(item);
                  }}
                  className="w-full  rounded-xl mt-4 h-12 border border-gray-300 p-3 focus:border-green-500 focus:ring-green-800"
                >
                  <option value="" >
                    Select category
                  </option>
                  {items.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name} – {item.points} pts/{item.type}
                    </option>
                  ))}
                </select>
              </div>

             
              <div>
                <label className="block text-xl mt-4 dark:text-white font-bold text-gray-700 mb-1">
                  Quantity {category ? `(${category.type})` : ""}
                </label>
                <input
                  type="number"
                  min={0}
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Enter Quantity"
                  className="w-full rounded-xl mt-4 border border-gray-300 p-3 focus:border-green-500 focus:ring-green-500"
                />
              </div>

              {/* Upload Photo */}
              <div>
                <label className="block dark:text-white text-xl font-bold mt-4 text-gray-700 mb-2">
                  Upload Photo
                </label>
                <label className="flex flex-col items-center mt-4 justify-center w-full border-2 border-dashed border-gray-300 rounded-2xl p-6 cursor-pointer hover:border-green-500">
                  <Camera className="text-green-500 mb-2" size={32} />
                  <span className="text-gray-500 dark:text-white text-xl font-bold text-center">
                    Take a photo of your recyclables
                  </span>
                  <span className="mt-4 text-xl inline-block px-4 py-1 bg-green-100 text-green-700 rounded-lg">
                    Take Photo
                  </span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
                </label>
                {photo && (
                  <p className="mt-2 text-sm text-gray-600">Selected: {photo.name}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-4 text-2xl bg-sky-400 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition"
              >
                Submit for Verification
              </button>
            </form>
          </div>
        </div>
         
                  
      <div className=" mt-16 pl-24 flex items-center justify-center flex-wrap ">

        <div className="w-full  max-w-7xl dark:bg-gray-900 bg-white rounded-2xl shadow-2xl border border-gray-200 sm:p-12 p-8">
      
          <h5 className="text-center  font-bold text-4xl dark:text-white">Upload Guideliness</h5>
  

           <div className="flex w-50 justify-center items-stretch gap-6 mt-16 sm:gap-8  px-4 sm:px-20">
        
               <div className="w-full  p-10 dark:bg-gray-900 bg-white rounded-2xl shadow-md border border-blue-500 border-l-8 border-l-blue-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-blue-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">1</h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">Clean Items</h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                   Make sure recyclables items are clean and empty
                   </p>
               </div>

                <div className="w-full  p-10 dark:bg-gray-900 bg-white rounded-2xl shadow-md border border-green-500 border-l-8 border-l-green-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-green-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">2</h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">Clear Photo</h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                    Take a well fit photo showing all items
                   </p>
               </div>

               <div className="w-full  p-10 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-yellow-500 border-l-8 border-l-yellow-500 hover:shadow-2xl transition text-center">
                 <div className="flex items-center justify-center mx-auto w-12 h-12 rounded-full bg-yellow-500 mb-4">
                     <h6 className="text-white text-xl font-bold dark:text-white">3</h6>
                 </div>
                   <h4 className="text-xl font-bold mb-2 text-center dark:text-white">Accurate Count </h4>
                   <p className="text-lg sm:text-md text-gray-600 dark:text-white">
                    Count items carefully for fait rewards
                   </p>
               </div>

           </div>
           </div>
        </div>
         

      </div>
    </div>
  );
}
