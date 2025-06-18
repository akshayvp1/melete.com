import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Expert from '../components/experts';

function ExpertPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900">
      <Navbar />
      {/* Added padding-top to account for fixed Navbar height (adjust value based on actual Navbar height) */}
      <main className="pt-16">
        <Expert />
      </main>
      <Footer />
    </div>
  );
}

export default ExpertPage;