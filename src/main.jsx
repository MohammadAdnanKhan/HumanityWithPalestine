import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Boycott from './pages/Boycott/Boycott.jsx';
import Donate from './pages/Donate/Donate.jsx';
import Education from './pages/Education/Education.jsx';
import Feedback from './pages/Feedback/Feedback.jsx';
import MailProtest from './pages/MailProtest/MailProtest.jsx';
import Suggestions from './pages/Suggestions/Suggestions.jsx';
import NotFound from './pages/Notfound/Notfound.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />                          
      <Route path="about" element={<About />} />                
      <Route path="boycott" element={<Boycott />} />             
      <Route path="donate" element={<Donate />} />                
      <Route path="education" element={<Education  csvUrl="/education.csv" />} />          
      <Route path="feedback" element={<Feedback />} />   
      <Route path="mailprotest"  element={<MailProtest csvUrl="/mail.csv" />} />
      <Route path="suggestions" element={<Suggestions />} /> 
      <Route path="*" element={<NotFound />} />           
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);