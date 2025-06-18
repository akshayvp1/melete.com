import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdminLogin from "../components/AdminLogin";

function AdminLoginPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-between">
        <div className="flex-grow pt-20 px-4 sm:px-8 md:px-16 lg:px-32">
          <AdminLogin />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AdminLoginPage;
