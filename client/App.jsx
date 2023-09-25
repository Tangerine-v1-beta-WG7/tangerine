import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Onboarding from './pages/Onboarding.jsx'
import Home from "./pages/Home.jsx";

const App = () => {
    return (
        <Router>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/onboard" element={<Onboarding />} />
                </Routes>

            </div>
        </Router>
    )
}

export default App;