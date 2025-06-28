



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Consultant } from '../types/types';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.5,
      ease: "easeOut"
    },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const badgeVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

interface ConsultantCardProps {
  consultant: Consultant;
  index: number;
}

interface ConsultantGridProps {
  consultants: Consultant[];
  maxVisible?: number;
  showAll?: boolean;
}

const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant, index }) => {
  const phoneNumber = '+918943175522';
  const [expandedExpertise, setExpandedExpertise] = useState(false);
  const [expandedLanguages, setExpandedLanguages] = useState(false);
  const [expandedCounselling, setExpandedCounselling] = useState(false);

  const handleBookSession = () => {
    const expertise = Array.isArray(consultant.expertise) ? consultant.expertise.join(', ') : consultant.expertise || 'General Counseling';
    const languages = Array.isArray(consultant.languages) ? consultant.languages.join(', ') : consultant.languages || 'English';
    const counselling = Array.isArray(consultant.counsellingTypes) ? consultant.counsellingTypes.join(', ') : consultant.counsellingTypes || 'Individual Counseling';
    
    const message = `Hello, I'm interested in booking a session with ${consultant.name}.\n\nDetails:\n- Qualification: ${consultant.qualification || 'Professional Counselor'}\n- Expertise: ${expertise}\n- Languages: ${languages}\n- Counseling: ${counselling}${consultant.experience ? `\n- Experience: ${consultant.experience}` : ''}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      whileHover="hover"
    >
      {/* Experience Badge */}
      {consultant.experience && (
        <motion.div
          className="absolute top-4 right-4 z-10 bg-gradient-to-r from-[#31A382] to-[#2F9B7A] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md"
          variants={badgeVariants}
          whileHover="hover"
        >
          <div className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {consultant.experience}
          </div>
        </motion.div>
      )}

      {/* Card Content */}
      <div className="p-6 flex flex-col h-full">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={consultant.image || consultant.image || '/default-avatar.png'}
              alt={consultant.name}
              className="w-24 h-24 rounded-full object-cover border-3 border-[#31A382] shadow-md"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#31A382]/10 to-transparent"></div>
          </motion.div>
        </div>

        {/* Consultant Info */}
        <div className="text-center mb-6 flex-grow">
          <h3 className="text-xl font-bold text-[#015F4A] mb-2 leading-tight">
            {consultant.name}
          </h3>
          
          <p className="text-[#31A382] font-medium text-sm mb-4">
            {consultant.qualification || 'Professional Counselor'}
          </p>

          <div className="space-y-3 text-left">
            {/* Expertise Section */}
            <div>
              <h4 className="font-semibold text-gray-800 text-xs mb-1.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-[#31A382]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expertise
              </h4>
              <div className="flex flex-wrap gap-1">
                {Array.isArray(consultant.expertise) ? (
                  <>
                    {(expandedExpertise 
                      ? consultant.expertise 
                      : consultant.expertise.slice(0, 3)
                    ).map((item, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-gradient-to-r from-[#31A382]/10 to-[#2F9B7A]/10 text-[#015F4A] text-xs font-medium px-2.5 py-1 rounded-full border border-[#31A382]/20"
                      >
                        {item}
                      </span>
                    ))}
                    {!expandedExpertise && consultant.expertise.length > 3 && (
                      <button
                        onClick={() => setExpandedExpertise(true)}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 transition-colors duration-200 cursor-pointer"
                      >
                        +{consultant.expertise.length - 3} more
                      </button>
                    )}
                    {expandedExpertise && consultant.expertise.length > 3 && (
                      <button
                        onClick={() => setExpandedExpertise(false)}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 transition-colors duration-200 cursor-pointer"
                      >
                        Show less
                      </button>
                    )}
                  </>
                ) : (
                  <span className="inline-block bg-gradient-to-r from-[#31A382]/10 to-[#2F9B7A]/10 text-[#015F4A] text-xs font-medium px-2.5 py-1 rounded-full border border-[#31A382]/20">
                    {consultant.expertise || 'General Counseling'}
                  </span>
                )}
              </div>
            </div>
            
            {/* Languages Section */}
            <div>
              <h4 className="font-semibold text-gray-800 text-xs mb-1.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-[#31A382]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.991-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 12.118 11.618 14z" clipRule="evenodd" />
                </svg>
                Languages
              </h4>
              <div className="flex flex-wrap gap-1">
                {Array.isArray(consultant.languages) ? (
                  <>
                    {(expandedLanguages 
                      ? consultant.languages 
                      : consultant.languages.slice(0, 2)
                    ).map((lang, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200"
                      >
                        {lang}
                      </span>
                    ))}
                    {!expandedLanguages && consultant.languages.length > 2 && (
                      <button
                        onClick={() => setExpandedLanguages(true)}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 transition-colors duration-200 cursor-pointer"
                      >
                        +{consultant.languages.length - 2} more
                      </button>
                    )}
                    {expandedLanguages && consultant.languages.length > 2 && (
                      <button
                        onClick={() => setExpandedLanguages(false)}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 transition-colors duration-200 cursor-pointer"
                      >
                        Show less
                      </button>
                    )}
                  </>
                ) : (
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full border border-blue-200">
                    {consultant.languages || 'English'}
                  </span>
                )}
              </div>
            </div>
            
            {/* Counseling Types Section */}
            <div>
              <h4 className="font-semibold text-gray-800 text-xs mb-1.5 flex items-center gap-1">
                <svg className="w-3 h-3 text-[#31A382]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
                Counseling
              </h4>
              <div className="flex flex-wrap gap-1">
                {Array.isArray(consultant.counsellingTypes) ? (
                  <>
                    {(expandedCounselling 
                      ? consultant.counsellingTypes 
                      : consultant.counsellingTypes.slice(0, 2)
                    ).map((type, idx) => (
                      <span 
                        key={idx}
                        className="inline-block bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded-full border border-purple-200"
                      >
                        {type}
                      </span>
                    ))}
                    {!expandedCounselling && consultant.counsellingTypes.length > 2 && (
                      <button
                        onClick={() => setExpandedCounselling(true)}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 transition-colors duration-200 cursor-pointer"
                      >
                        +{consultant.counsellingTypes.length - 2} more
                      </button>
                    )}
                    {expandedCounselling && consultant.counsellingTypes.length > 2 && (
                      <button
                        onClick={() => setExpandedCounselling(false)}
                        className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full border border-gray-200 transition-colors duration-200 cursor-pointer"
                      >
                        Show less
                      </button>
                    )}
                  </>
                ) : (
                  <span className="inline-block bg-purple-50 text-purple-700 text-xs font-medium px-2.5 py-1 rounded-full border border-purple-200">
                    {consultant.counsellingTypes || 'Individual'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Book Session Button */}
       
      </div>
    </motion.div>
  );
};

const ConsultantGrid: React.FC<ConsultantGridProps> = ({ 
  consultants, 
  maxVisible = 3, 
  showAll = false 
}) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(showAll);
  
  const displayedConsultants = isExpanded 
    ? consultants 
    : consultants.slice(0, maxVisible);
  
  const hasMore = consultants.length > maxVisible;

  const handleShowMore = () => {
    if (showAll) {
      // If we're already showing all, navigate to experts page
      navigate('/experts');
    } else {
      // Otherwise, expand the current view
      setIsExpanded(true);
    }
  };

  const handleViewAllExperts = () => {
    navigate('/experts');
  };

  return (
    <div className="w-full">
      {/* Grid Container */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {displayedConsultants.map((consultant, index) => (
          <ConsultantCard
            key={consultant.id || index}
            consultant={consultant}
            index={index}
          />
        ))}
      </motion.div>

      {/* Show More / View All Button */}
      {hasMore && !isExpanded && (
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.button
            onClick={handleShowMore}
            className="group relative bg-gradient-to-r from-[#31A382] to-[#2F9B7A] text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 12px 30px rgba(49, 163, 130, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Show More Experts
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2F9B7A] to-[#31A382] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      )}

      {/* View All Experts Button (when expanded but not on experts page) */}
      {isExpanded && !showAll && (
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={handleViewAllExperts}
            className="text-[#31A382] font-semibold py-2 px-6 rounded-full border-2 border-[#31A382] hover:bg-[#31A382] hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Experts →
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default ConsultantCard;
export { ConsultantGrid };