import React, { useState } from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';

export default function AppRouter() {
    const [currentLocation, setCurrentLocation] = useState('');

    return (
        <Router>
            <div className="page-wrapper">
                <Navbar currentLocation={currentLocation} />
                <Routes>
                    <Route exact path='/' element={<Home setCurrentLocation={setCurrentLocation} />} />
                    <Route exact path='/about' element={<About setCurrentLocation={setCurrentLocation} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}
