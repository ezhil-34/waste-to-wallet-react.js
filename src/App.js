import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Open from "./pages/Open";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Rewards from "./pages/Rewards";

function App() {
 
    return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
          <Route path="/Rewards" element={<Rewards />} />
        </Routes>
         <ToastContainer position="bottom-right" autoClose={2000} />
      </Router>
    );
  
}

export default App;
