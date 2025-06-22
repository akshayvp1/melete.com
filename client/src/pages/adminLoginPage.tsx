import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminLogin from "../components/AdminLogin";

function AdminLoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow px-4 sm:px-8 md:px-16 lg:px-32 mt-35">
        <AdminLogin />
      </main>
      <Footer />
    </div>
  );
}

export default AdminLoginPage;