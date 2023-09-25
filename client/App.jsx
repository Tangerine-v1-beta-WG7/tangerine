import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Onboarding from './pages/Onboarding.jsx'

const App = () => {
    return (
        <>
            <Header />
            <Onboarding />
        </>
    )
}

export default App;