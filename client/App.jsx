import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Onboarding from './pages/Onboarding.jsx'
import Home from "./pages/Home.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx"

const App = () => {
    return (
        <>
        <Header />
        </>
 
    )
}

export default App;


// const App = () => {
//     return (
//         // <Router>
//         <>
   
//         <Header />
//         <div className="container">
//             {/* <Home /> */}
    
//             {/* <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/onboard" element={<Onboarding />} />
//             </Routes> */}

//         </div>
//         {/* </Router> */}

// </>