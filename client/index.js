// import React from "react";
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx'
// import './style.css';


// const root = createRoot(document.getElementById('root'));
// root.render(
//     <App />
// )


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx"


const router = createBrowserRouter([ {
    path: "/",
    element: <Home />},
  {
    path: "onboard",
    element: <Onboarding />,
  }, 
  {
    path: "signup",
    element: <Signup />,
  }, 
  {
    path: "login",
    element: <Login />
  }
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);