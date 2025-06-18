import React from 'react';
import { motion } from 'framer-motion';
import Background from '../assets/Melete-logo-3.png';
import { Heart } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const MentalFitnessSection: React.FC = () => {
  return (
    <motion.section
      className="py-24 text-center relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#015F4A] opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-10" style={{ color: 'white' }}>
          How Can You Become Mentally Fit?
        </h2>
        <motion.div
          className="relative w-full max-w-lg mx-auto h-72 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <motion.circle
              cx="100"
              cy="100"
              r="60"
              fill="none"
              stroke="#31A382"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.path
              d="M70 100 C70 120 130 120 130 100"
              fill="none"
              stroke="#31A382"
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.g
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
            >
              <Heart style={{ color: '#31A382' }} className="w-12 h-12" x="90" y="90" />
            </motion.g>
          </svg>
        </motion.div>
        <p className="text-lg max-w-3xl mx-auto mb-12 leading-relaxed" style={{ color: 'white' }}>
          Mental fitness is about cultivating resilience, balance, and clarity through mindfulness, self-reflection, and
          healthy habits.
        </p>
        <motion.button
          className="px-10 py-4 rounded-full font-semibold shadow-xl bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300"
          whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
};

export default MentalFitnessSection;