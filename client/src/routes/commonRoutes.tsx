
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BlogPage from '../pages/BlogPage';
import ContactPage from '../pages/ContactPage';
// import LoginPage from '../pages/LoginPage';
import AboutPage from '../pages/aboutPage';
import ServicePage from '../pages/servicePage';
import ExpertPafe from '../pages/expertPage'
import ImprovePage from '../pages/improvePage';
import PrivacyPolicyPage from '../pages/termsPage';
function commonRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Add routes for dropdown items */}
        <Route path="/service" element={<ServicePage />} />
        <Route path="/experts" element={<ExpertPafe />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/improve" element={<ImprovePage/>}/>
        <Route path="/privacy" element={<PrivacyPolicyPage/>}/>

    </Routes>
  )
}

export default commonRoutes