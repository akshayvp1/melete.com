import React, { useCallback } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/meleteProvide';
import TherapyImprovementsSection from '../components/TherapyImprovementsSection';
import BetterLYFCard from '../components/BetterLYFCard';
import ConsultantsSection from '../components/getCounsellors';
import WhatWeOffer from '../components/offer';
import Footer from '../components/Footer';
import SubscriptionPlans from '../components/planComponents';

// Constants
const CONTACT_CONFIG = {
  phoneNumber: '+918943175522',
  defaultMessage: 'Hello, I would like to know more about your services.',
  whatsappIconUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg',
} as const;

const LAYOUT_CONFIG = {
  navbarHeight: 'pt-16', // Adjust based on actual Navbar height
  whatsappIconSize: 'w-12 h-12',
} as const;

/**
 * Home Page Component
 * 
 * Main landing page that displays various sections including hero, services,
 * consultants, and subscription plans with integrated WhatsApp support.
 */
const Home: React.FC = () => {
  /**
   * Handles WhatsApp contact button click
   * Opens WhatsApp with pre-filled message in a new tab
   */
  const handleWhatsAppClick = useCallback(() => {
    try {
      const encodedMessage = encodeURIComponent(CONTACT_CONFIG.defaultMessage);
      const whatsappUrl = `https://wa.me/${CONTACT_CONFIG.phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Failed to open WhatsApp:', error);
      // Fallback: could show a toast notification or alternative contact method
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white font-sans overflow-x-hidden text-gray-900">
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className={LAYOUT_CONFIG.navbarHeight} role="main">
        <HeroSection />
        <TherapyImprovementsSection />
        <BetterLYFCard />
        <ConsultantsSection />
        <WhatWeOffer />
        <SubscriptionPlans />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* WhatsApp Contact Button */}
      <WhatsAppButton onClick={handleWhatsAppClick} />
    </div>
  );
};

/**
 * WhatsApp Contact Button Component
 * Floating action button for WhatsApp contact
 */
interface WhatsAppButtonProps {
  onClick: () => void;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-full"
      onClick={onClick}
      title="Chat with us on WhatsApp"
      aria-label="Contact us via WhatsApp"
      type="button"
    >
      <img
        src={CONTACT_CONFIG.whatsappIconUrl}
        alt="WhatsApp"
        className={`${LAYOUT_CONFIG.whatsappIconSize} hover:scale-110 transition-transform duration-300 drop-shadow-lg`}
        loading="lazy"
      />
    </button>
  );
};

export default Home;