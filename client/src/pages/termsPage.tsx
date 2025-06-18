import React from 'react';
import PrivacyPolicyPage from '../components/termsAndConditions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16 md:pt-20">
        <PrivacyPolicyPage />
      </div>
      <Footer />
    </>
  );
};

export default TermsPage;