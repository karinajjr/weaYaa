import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Login from "./routes/login";
import SidebarComponent from '../src/components/Sidebar';



// src/index.js

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login"/>,
  },
 

  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/sidebar",
    element: <SidebarComponent />,
  },

 
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


reportWebVitals();
