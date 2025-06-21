
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
import ParentSupportPage from '../pages/parentSupportPage';
import ChildSupportPage from '../pages/childSupportPage';
import AdultSupportPage from '../pages/adultSupportPage';
import PregnancySupportPage from '../pages/pregnancySupportPage';
import OldAgePage from '../pages/oldAgePage';

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
        <Route path="/parent-support" element={<ParentSupportPage/>}/>
        <Route path="/child-support" element={<ChildSupportPage/>}/>
        <Route path="/adult-support" element={<AdultSupportPage/>}/>
        <Route path="/pregnancy-support" element={<PregnancySupportPage/>}/>
        <Route path="/oldage-support" element={<OldAgePage/>}/>



    </Routes>
  )
}

export default commonRoutes