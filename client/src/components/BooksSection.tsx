import React from 'react';
import { motion } from 'framer-motion';
import YogaImage from '../assets/yoga.png';
import MindfulImage from '../assets/mindfulGuide.jpg';
import EmotionalWellImage from '../assets/emotional.jpg';
import { Book } from '../types/types';

const books: Book[] = [
  { title: 'Mindfulness Guide', desc: 'Live in the moment.', image: MindfulImage },
  { title: 'Yoga for Peace', desc: 'Find calm through movement.', image: YogaImage },
  { title: 'Emotional Wellness', desc: 'Understand your emotions.', image: EmotionalWellImage },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: i * 0.1, duration: 0.7 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  },
};

const BooksSection: React.FC = () => {
  return (
    <motion.section
      className="py-24 text-center"
      style={{ backgroundColor: '#F0F0F0' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
          Explore Our Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              className="p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-[#F0F0F0]"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover="hover"
            >
              <motion.img
                src={book.image}
                alt={book.title}
                className="w-28 h-28 rounded-full mx-auto mb-5 object-cover border-2 border-[#66BFA1]"
                initial={{ rotate: -10 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.6 }}
              />
              <h3 className="text-lg font-semibold mb-3" style={{ color: '#015F4A' }}>
                {book.title}
              </h3>
              <p className="text-gray-600 text-sm">{book.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BooksSection;