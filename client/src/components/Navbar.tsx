
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import MeleteLogo from '../assets/logoWhite.png';
import MeleteLogo1 from '../assets/Melete-logo-2.svg';
import { NavItem } from '../types/types';

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/service' },
  { name: 'About', href: '/about' },
  { 
    name: 'Specialized Care', 
    items: [
      'Child-Support',
      'Adult-Support', 
      'Parent-Support',
      'Pregnancy-Support',
      'Oldage-Support'
    ]
  },
  { name: 'Our Experts', href: '/experts' },
  
  // { name: 'Contact', href: '/contact' },
  { name: 'Improve With Us', href: '/improve' },
];

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
};



const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDropdownToggle = (index: number): void => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleMouseEnter = (index: number): void => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setOpenDropdown(index);
  };

  const handleMouseLeave = (): void => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = (): void => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  };

  const handleMobileMenuClose = (): void => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    e.currentTarget.src = MeleteLogo;
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 shadow-lg"
        style={{ backgroundColor: '#F9F9F9' }}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <NavLink to="/" onClick={handleMobileMenuClose}>
              <img
                src={MeleteLogo1}
                alt="Melete Mental Health Services Logo"
                className="h-12 w-auto transition-transform duration-300"
                onError={handleLogoError}
              />
            </NavLink>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              className="focus:outline-none text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((menu, idx) => (
              <div 
                key={idx} 
                className="group relative"
                onMouseEnter={() => menu.items && handleMouseEnter(idx)}
                onMouseLeave={() => menu.items && handleMouseLeave()}
              >
                {menu.items ? (
                  <>
                    <button
                      className="flex items-center text-gray-800 font-semibold text-base hover:text-emerald-700 transition-colors duration-300 group"
                      onClick={() => handleDropdownToggle(idx)}
                      aria-expanded={openDropdown === idx}
                      aria-haspopup="true"
                    >
                      {menu.name}
                      <ChevronDown 
                        className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                          openDropdown === idx ? 'rotate-180' : 'group-hover:rotate-180'
                        }`} 
                      />
                    </button>
                    <motion.div
                      className={`absolute left-0 top-full bg-white shadow-2xl border border-gray-100 rounded-xl mt-2 min-w-[280px] max-w-[320px] z-50 overflow-hidden transition-all duration-200 ${
                        openDropdown === idx ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ 
                        opacity: openDropdown === idx ? 1 : 0, 
                        y: openDropdown === idx ? 0 : -10, 
                        scale: openDropdown === idx ? 1 : 0.95 
                      }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                    >
                      <div className="py-3">
                        {menu.items.map((item, itemIdx) => (
                          <NavLink
                            key={item}
                            to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="group/item flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 border-l-3 border-transparent hover:border-l-3 hover:border-emerald-600"
                            onClick={() => setOpenDropdown(null)}
                          >
                            <div className="flex items-center space-x-3 w-full">
                              <div className="w-2 h-2 rounded-full bg-emerald-600 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                              <span className="flex-1 text-left leading-relaxed">{item}</span>
                            </div>
                          </NavLink>
                        ))}
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <NavLink
                    to={menu.href || '#'}
                    className={({ isActive }: { isActive: boolean }) =>
                      `text-base font-semibold transition-colors duration-300 hover:text-emerald-700 ${
                        isActive ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-gray-800'
                      }`
                    }
                  >
                    {menu.name}
                  </NavLink>
                )}
              </div>
            ))}
            {/* <motion.button
              className="px-6 py-2 rounded-full font-semibold text-base shadow-md hover:opacity-90 transition-all duration-300 text-white"
              style={{ backgroundColor: '#015F4A' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button> */}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleMobileMenuClose}
            />
            <motion.div
              className="md:hidden fixed left-0 right-0 top-16 backdrop-blur-md z-40 flex flex-col min-h-[calc(100vh-4rem)]"
              style={{ backgroundColor: '#F9F9F9' }}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex-1 overflow-y-auto p-6 space-y-3">
                {navItems.map((menu, idx) => (
                  <div key={idx} className="mb-2">
                    {menu.items ? (
                      <div>
                        <button
                          className="w-full flex justify-between items-center text-gray-800 font-semibold text-lg hover:text-emerald-700 transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-gray-50"
                          onClick={() => handleDropdownToggle(idx)}
                          aria-expanded={openDropdown === idx}
                          aria-haspopup="true"
                        >
                          {menu.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              openDropdown === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === idx && (
                            <motion.div
                              className="bg-white rounded-xl mt-3 shadow-lg border border-gray-100 overflow-hidden"
                              initial={{ opacity: 0, height: 0, y: -10 }}
                              animate={{ opacity: 1, height: 'auto', y: 0 }}
                              exit={{ opacity: 0, height: 0, y: -10 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                              <div className="py-2">
                                {menu.items.map((item, itemIdx) => (
                                  <NavLink
                                    key={item}
                                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="group/mobile-item flex items-center px-6 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 border-l-4 border-transparent hover:border-l-4 hover:border-emerald-600"
                                    onClick={handleMobileMenuClose}
                                  >
                                    <div className="flex items-center space-x-3 w-full">
                                      <div className="w-2 h-2 rounded-full bg-emerald-600 opacity-0 group-hover/mobile-item:opacity-100 transition-opacity duration-200"></div>
                                      <span className="flex-1 text-left leading-relaxed">{item}</span>
                                    </div>
                                  </NavLink>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={menu.href || '#'}
                        className={({ isActive }: { isActive: boolean }) =>
                          `block text-lg font-semibold transition-colors duration-300 py-3 px-2 rounded-lg hover:bg-gray-50 ${
                            isActive ? 'text-emerald-700 bg-emerald-50 border-l-4 border-emerald-700' : 'text-gray-800 hover:text-emerald-700'
                          }`
                        }
                        onClick={handleMobileMenuClose}
                      >
                        {menu.name}
                      </NavLink>
                    )}
                  </div>
                ))}
                <motion.button
                  className="w-full px-8 py-3 rounded-full font-semibold text-base shadow-md hover:opacity-90 transition-all duration-300 text-white mt-4"
                  style={{ backgroundColor: '#015F4A' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleMobileMenuClose}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;