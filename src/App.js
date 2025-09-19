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
       
      <DarkModeContext.Provider value ={{ darkMode, toggleDarkMode }}>
      <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Rewards" element={<Rewards />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
         <ToastContainer position="top-right" autoClose={2000} />
         <Toaster position="top-center" reverseOrder={false} text-lg/>
      </Router>
      </DarkModeContext.Provider>
    );
  
}

export default App;
