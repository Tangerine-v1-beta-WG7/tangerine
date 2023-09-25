import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Card from './components/Card.jsx';
import Onboarding from './pages/Onboarding.jsx'

const App = () => {
    return (
        <>
            <Header />
            <div className="container">
                <React.Fragment>
                    <Card title='Total Employee Count' amount='249' />
                    <Card title='Onboards this week' amount='12' />
                    <Card title='Offboards this week' amount='4' />

                </React.Fragment>

            </div>
        </>
    )
}

export default App;