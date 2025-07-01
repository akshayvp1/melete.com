


import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  Brain,
  AlertTriangle,
  Frown,
  Bed,
  Apple,
  Dumbbell,
  Award,
  Clock,
  Users,
  Monitor,
  Target,
  Heart,
  HeartHandshake,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { TherapyImprovement } from '../types/types';

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7 } },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

// Icon map for lucide-react
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Star,
  Brain,
  AlertTriangle,
  Frown,
  Bed,
  Apple,
  Dumbbell,
  Award,
  Clock,
  Users,
  Monitor,
  Target,
  Heart,
  HeartHandshake,
};

// Skeleton loader for cards
const SkeletonCard: React.FC = () => (
  <div className="flex-shrink-0 w-80 md:w-1/4 snap-center">
    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  </div>
);

const TherapyImprovementsSection: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const navigate = useNavigate();
    const SelfImage =
    "https://res.cloudinary.com/dedrcfbxf/image/upload/v1751363240/Self-Confidence_s2ayoj.webp";
  const StressImage =
    "https://res.cloudinary.com/dedrcfbxf/image/upload/v1751363122/stress_avadul.webp";
  const AnxietyImage =
    "https://res.cloudinary.com/dedrcfbxf/image/upload/v1751363542/Anxiety_sb7fxe.webp";
  const DepressionImage =
    "https://res.cloudinary.com/dedrcfbxf/image/upload/v1751363460/Depression_lhpzhm.webp";
  const therapyImprovements: TherapyImprovement[] = [
    {
      title: 'Self Confidence',
      desc: 'Self-confidence means believing in yourself and your abilities. It is about trusting your own decisions, knowing your strengths and weaknesses, and feeling in control of your life.bgImage',
      icon: 'Star',
      bgImage: SelfImage,
    },
    {
      title: 'Stress',
      desc: 'Psychological stress is the way our mind and body respond to pressure or challenges, whether they come from inside us or from the world around us. It happens when we feel off balance or overwhelmed.',
      icon: 'Brain',
      bgImage: StressImage,
    },
    {
      title: 'Anxiety',
      desc: 'Anxiety is a common emotion, and it can cause physical symptoms, such as shaking and sweating. When anxiety becomes persistent or excessive, a person may have an anxiety disorder.',
      icon: 'AlertTriangle',
      bgImage: AnxietyImage,
    },
    {
      title: 'Depression',
      desc: 'Depression is a common and serious mental disorder that negatively affects how you feel, think, act, and perceive the world.',
      icon: 'Frown',
      bgImage: DepressionImage,
    },
  ];

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageSrc));
  };

  return (
    <motion.section
      className="py-16 bg-gradient-to-br from-slate-50 via-white to-emerald-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-labelledby="improvements-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="improvements-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#015F4A]"
        >
          What You Can Improve With Us
        </h2>
        <div className="relative">
          <motion.div
            className="flex flex-row overflow-x-auto md:overflow-x-visible gap-6 snap-x snap-mandatory pb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {therapyImprovements.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              const isImageLoaded = loadedImages.has(item.bgImage);

              return (
                <motion.div
                  key={item.title}
                  className="flex-shrink-0 w-80 md:w-1/4 snap-center"
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/improve')}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/improve')}
                  aria-label={`Learn more about improving ${item.title}`}
                >
                  {isImageLoaded ? (
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 group relative">
                      <div
                        className="h-48 w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${item.bgImage})` }}
                      />
                      <div className="p-6 text-center">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-[#31A382] mx-auto mb-4" aria-hidden="true" />
                        )}
                        <h3 className="text-lg font-semibold text-[#015F4A] mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-[#015F4A] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-medium">Learn More</span>
                      </div>
                    </div>
                  ) : (
                    <SkeletonCard />
                  )}
                  <img
                    src={item.bgImage}
                    alt=""
                    className="hidden"
                    onLoad={() => handleImageLoad(item.bgImage)}
                    onError={() => handleImageLoad(item.bgImage)} // Fallback to skeleton if image fails
                  />
                </motion.div>
              );
            })}
          </motion.div>
          {/* Scroll indicators for mobile */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F9F9] to-transparent pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F9F9F9] to-transparent pointer-events-none md:hidden" />
        </div>
        <div className="flex justify-center mt-8">
                <Link
                  to="/improve"
                  className="px-6 py-3 bg-[#015F4A] text-white font-medium rounded-lg hover:bg-[#013F3A] transition-colors duration-300"
                >
                  Show More
                </Link>
              </div>
      </div>
    </motion.section>
  );
};

export default TherapyImprovementsSection;