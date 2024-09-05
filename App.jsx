import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import ProductPage from "./Product";
import Explore from './Explore';
import StatePage from './StatePage'; 
import VRExperience from './VRExperience';
import StateDetails from './StateDetails';
import Contact from './Contact';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user)); // Save user to localStorage
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Signup onLogin={handleLogin} />} />
        <Route 
          path="/login" 
          element={
            user ? (
              <Navigate to="/product" />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/home" element={<Home user={user} onLogout={handleLogout} />} />
        <Route
          path="/product"
          element={user ? <ProductPage user={user} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        
        <Route path="/explore" element={<Explore />} />
        <Route path="/state/:state" element={<StatePage />} />
        
        <Route path="/statedetails" element={<StateDetails />} />
        <Route path="/vrexperience" element={<VRExperience />} />
        <Route path="/contact" element={<Contact user={user} onLogout={handleLogout} />} />

      
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
