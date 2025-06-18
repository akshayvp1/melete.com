import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900 flex flex-col">
      <Navbar />
      <section className="py-24 text-center flex-grow">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#015F4A' }}>
            Wellness Blog
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#666' }}>
            Explore insightful articles on mental wellness, self-improvement, and more.
          </p>
          <Blog />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;