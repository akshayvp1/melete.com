import React from 'react';
import Navbar from '../components/Navbar';
import ParentSupport from '../components/parentSupport';
import Footer from '../components/Footer';

function ParentSupportPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ParentSupport />
      </main>
      <Footer />
    </div>
  );
}

export default ParentSupportPage;