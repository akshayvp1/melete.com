import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const BetterLYFCard: React.FC = () => {
  return (
    <motion.section
      className="py-10 text-center"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="p-8 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-[#31A382] shadow-lg"
          style={{ backgroundColor: '#015F4A', color: 'white' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-3">
            “Crush Goals, Collect Rewards. Your habit just became your hustle”
          </h3>
          <p className="text-lg mb-6">Complete Your Daily Target And Achieve Your Coins</p>
          <motion.span
            className="px-6 py-3 bg-white text-[#015F4A] rounded-full font-semibold"
            whileHover={{ scale: 1.1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Refer Your Friends
          </motion.span>
          <div className="absolute top-0 left-4 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
          <div className="absolute top-0 right-4 w-4 h-4 bg-white rounded-full transform -translate-y-1/2"></div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BetterLYFCard;