import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import data from "./data.json";
import Housing from "./pages/Housing";

export default function AppRouter() {
  const [currentLocation, setCurrentLocation] = useState("");

  return (
    <Router>
      <Navbar currentLocation={currentLocation} />
      <div className="page-wrapper">
        <Routes>
          <Route path="/logement/:id" element={<Housing housings={data} />} />
          <Route
            path="/about"
            element={<About setCurrentLocation={setCurrentLocation} />}
          />
          <Route
            exact
            path="/"
            element={
              <Home housings={data} setCurrentLocation={setCurrentLocation} />
            }
          />
          {/* l'étoile ça prend toutes les pages qui n'existe pas */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
