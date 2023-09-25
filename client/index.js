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
import Onboarding, { teamLoader } from "./pages/Onboarding.jsx";

const router = createBrowserRouter([
  {
    path: "home",
    element: <Home />},
  {
    path: "onboard",
    element: <Onboarding />,
  }
    
    // children: [
    //   {
    //     path: "home",
    //     element: <Home />,
    //   },
    //   {
    //     path: "onboard",
    //     element: <Onboarding />,
    //   },
    // ],
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);