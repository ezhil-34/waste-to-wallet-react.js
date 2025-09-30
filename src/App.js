import React, { useState, useEffect, createContext} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Open from "./pages/Open";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";
import Option from "./pages/Option";
import Collect  from "./pages/Collector";



export const DarkModeContext = createContext();
function App() {
    
  const[darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored === "true";
  }
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const next = !prev;
      localStorage.setItem("darkMode",next);
      return next;
    });
  };
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-200 to-white
                    dark:from-gray-900 dark:to-gray-800
                    transition-colors duration-500">
       
      <DarkModeContext.Provider value ={{ darkMode, toggleDarkMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/Signup/:role" element={<Signup />} />
          <Route path="/Login/:role" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Option" element={<Option />} />
          <Route path="/Collect" element={<Collect />} />
        
        </Routes>
         <ToastContainer position="top-right" autoClose={2000} />
         <Toaster position="top-center" reverseOrder={false} text-lg/>
      </Router>
      </DarkModeContext.Provider>
      </div>
    );
  
}

export default App;
