import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginRegister from '../components/AdminLogin';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900 flex flex-col">
      <Navbar />
      <section className="py-12 md:py-24 text-center flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#015F4A' }}>
            {window.location.pathname.includes('login') ? 'Welcome Back' : 'Join Melete Wellness'}
          </h2>
          <LoginRegister />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default LoginPage;