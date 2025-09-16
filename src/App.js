import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Open from "./pages/Open";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
 
    return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          
        </Routes>
        <ToastContainer position="top-right" autoClose={2000} />
      </Router>
    );
  
}

export default App;
