import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Card from './components/Card.jsx';

const App = () => {
    return (
        <>
            <Header />
            <Card title='test' />
            <div>
                hi is this from react
            </div>
        </>
    )
}

export default App;