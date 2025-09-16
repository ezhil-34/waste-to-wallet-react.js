import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Open from "./pages/Open";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Upload from "./pages/Upload";

function App() {
 
    return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Open />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
        
      </Router>
    );
  
}

export default App;
