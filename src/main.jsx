import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import App from './App.jsx';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Boycott from './components/Boycott/Boycott.jsx';
import Donate from './components/Donate/Donate.jsx';
import Education from './components/Education/Education.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />                          
      <Route path="about" element={<About />} />                
      <Route path="boycott" element={<Boycott />} />             
      <Route path="donate" element={<Donate />} />                
      <Route path="education" element={<Education />} />          
      <Route path="feedback" element={<Feedback />} />           
    </Route>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
