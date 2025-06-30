





// import React, { useEffect, useState } from 'react';
// import { motion, Variants } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import ConsultantCard from './ConsultantCard';
// import { Consultant } from '../types/types';
// import AuthService from '../services/AuthService';
// import { Link } from 'react-router-dom';

// // Animation variants
// const sectionVariants: Variants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// };

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const buttonVariants: Variants = {
//   hover: {
//     scale: 1.05,
//     boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
//     transition: { duration: 0.3 },
//   },
//   tap: { scale: 0.95 },
// };

// // Skeleton loader component for better UX
// const SkeletonCard: React.FC = () => (
//   <div className="flex-shrink-0 w-80 md:w-1/3 snap-center">
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 animate-pulse">
//       <div className="h-48 bg-gray-200" />
//       <div className="p-6 space-y-4">
//         <div className="h-6 bg-gray-200 rounded w-3/4" />
//         <div className="h-4 bg-gray-200 rounded w-full" />
//         <div className="h-4 bg-gray-200 rounded w-5/6" />
//         <div className="h-10 bg-gray-200 rounded-full w-32" />
//       </div>
//     </div>
//   </div>
// );

// const CounsellorList: React.FC = () => {
//   const [consultants, setConsultants] = useState<Consultant[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCounsellors = async () => {
//       try {
//         setLoading(true);
//         const counsellors = await AuthService.frontGetCounsellors();
//         setConsultants(counsellors);
//       } catch (err: unknown) {
//         const errorMessage = err instanceof Error ? err.message : 'Failed to fetch counsellors';
//         setError(errorMessage);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCounsellors();
//   }, []);

//   if (loading) {
//     return (
//       <section className="py-20 bg-gray-100" aria-labelledby="counsellors-heading">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2
//             id="counsellors-heading"
//             className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#015F4A]"
//           >
//             Our Expert Counsellors
//           </h2>
//           <div className="flex flex-row overflow-x-auto md:overflow-x-visible gap-6 snap-x snap-mandatory pb-4">
//             {[...Array(3)].map((_, index) => (
//               <SkeletonCard key={index} />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="py-20 bg-gray-100" aria-labelledby="error-heading">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 id="error-heading" className="text-2xl font-semibold text-red-500 mb-4">
//             Something Went Wrong
//           </h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button
//             className="px-6 py-2 rounded-full bg-[#31A382] text-white font-medium hover:bg-[#2F9B7A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:ring-offset-2"
//             onClick={() => window.location.reload()}
//             aria-label="Retry loading counsellors"
//           >
//             Try Again
//           </button>
//         </div>
//       </section>
//     );
//   }

//   if (consultants.length === 0) {
//     return (
//       <section className="py-20 bg-gray-100" aria-labelledby="empty-heading">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 id="empty-heading" className="text-2xl font-semibold text-gray-600 mb-4">
//             No Counsellors Available
//           </h2>
//           <p className="text-gray-500 mb-6">Check back later for our expert counsellors.</p>
//           <Link
//             to="/service"
//             className="inline-block px-6 py-2 rounded-full bg-[#31A382] text-white font-medium hover:bg-[#2F9B7A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:ring-offset-2"
//             aria-label="Explore our services"
//           >
//             Explore Services
//           </Link>
//         </div>
//       </section>
//     );
//   }

//   const filteredConsultants = consultants.filter((c) => !c.isBlocked).slice(0, 3);

//   return (
//     <motion.section
//       className="py-20 bg-gray-100"
//       variants={sectionVariants}
//       initial="hidden"
//       animate="visible"
//       aria-labelledby="counsellors-heading"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2
//           id="counsellors-heading"
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#015F4A]"
//         >
//           Our Expert Counsellors
//         </h2>
//         <div className="relative">
//           <motion.div
//             className="flex flex-row overflow-x-auto md:overflow-x-visible gap-6 snap-x snap-mandatory pb-4"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {filteredConsultants.map((consultant, index) => (
//               <motion.div
//                 key={consultant.id}
//                 className="flex-shrink-0 w-80 md:w-1/3 snap-center"
//                 variants={cardVariants}
//                 transition={{ delay: index * 0.2 }}
//               >
//                 <ConsultantCard consultant={consultant} index={index} />
//               </motion.div>
//             ))}
//           </motion.div>
//           {/* Scroll indicators for mobile */}
//           <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none md:hidden" />
//           <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none md:hidden" />
//         </div>
//         {consultants.length > 3 && (
//           <div className="text-center mt-12">
//             <motion.button
//               className="px-8 py-3 rounded-full font-semibold bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:ring-offset-2"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//               onClick={() => navigate('/experts')}
//               aria-label="View more expert counsellors"
//             >
//               Show More
//             </motion.button>
//           </div>
//         )}
//       </div>
//     </motion.section>
//   );
// };

// export default CounsellorList;.




// import React, { useState, useEffect } from 'react';
// import { Star, Users, Clock, MapPin, MessageCircle, Award, Heart, Shield, CheckCircle, GraduationCap } from 'lucide-react';
// import AuthService from '../services/AuthService'; // Adjust path to your AuthService
// import { Consultant } from '../types/types'; // Import the unified Consultant interface
// import { Link } from 'react-router-dom'; // Import Link for navigation

// interface CounsellorCardProps {
//   consultant: Consultant;
// }

// const CounsellorCard: React.FC<CounsellorCardProps> = ({ consultant }) => {
//   const [expandedExpertise, setExpandedExpertise] = useState(false);

//   const handleBookSession = (): void => {
//     const phoneNumber = '+918943175522'; // Hardcoded as per original
//     const expertise = Array.isArray(consultant.expertise) ? consultant.expertise.join(', ') : consultant.expertise || 'General Counseling';
//     const languages = Array.isArray(consultant.languages) ? consultant.languages.join(', ') : consultant.languages || 'English';
//     const counsellingTypes = Array.isArray(consultant.counsellingTypes) ? consultant.counsellingTypes.join(', ') : consultant.counsellingTypes || 'Individual Counseling';
    
//     // Only include experience in the message if it's defined and greater than 0
//     const experienceText = consultant.experience !== undefined && consultant.experience > 0 
//       ? `\n- Experience: ${consultant.experience}+ years` 
//       : '';
    
//     const message = `Hello, I'm interested in booking a session with ${consultant.name}.\n\nDetails:\n- Qualification: ${consultant.qualification || 'Professional Counselor'}\n- Expertise: ${expertise}\n- Languages: ${languages}\n- Counseling: ${counsellingTypes}${experienceText}`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
//     window.open(whatsappUrl, '_blank');
//   };

//   return (
//     <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
//       {/* Compact Professional Header */}
//       <div className="relative bg-white p-5 border-b border-gray-50">
//         {/* Verification Badge */}
//         <div className="absolute top-3 right-3 flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
//           <CheckCircle className="w-3 h-3 mr-1" />
//           Verified
//         </div>
        
//         <div className="text-center">
//           {/* Professional Profile Image - Made Larger */}
//           <div className="relative inline-block mb-4">
//             <img
//               src={consultant.image}
//               alt={`${consultant.name}`}
//               className="w-32 h-32 rounded-full object-cover border-3 border-white shadow-xl ring-4 ring-[#015F4A]/10"
//             />
//             <div className="absolute -bottom-2 -right-2 bg-[#015F4A] w-6 h-6 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
//               <div className="w-2 h-2 bg-white rounded-full"></div>
//             </div>
//           </div>
          
//           {/* Name and Title */}
//           <h3 className="text-lg font-bold text-gray-900 mb-1">{consultant.name}</h3>
//           <p className="text-[#015F4A] font-medium text-xs mb-2">{consultant.qualification}</p>
          
//           {/* Experience Badge - Only show if experience is greater than 0 */}
//           {consultant.experience !== undefined && consultant.experience > 0 && (
//             <div className="inline-flex items-center bg-[#015F4A]/5 border border-[#015F4A]/20 rounded-full px-3 py-1 mb-2">
//               <Award className="w-3 h-3 text-[#015F4A] mr-1" />
//               <span className="text-[#015F4A] font-medium text-xs">{consultant.experience}+ years</span>
//             </div>
//           )}
          
//           {/* Rating - Commented out as in original */}
//           {/* <div className="flex items-center justify-center">
//             <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-2 py-1">
//               <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
//               <span className="font-medium text-gray-900 text-xs">{consultant.rating.toFixed(1)}</span>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       {/* Compact Professional Details */}
//       <div className="p-4">
//         {/* Specializations */}
//         <div className="mb-4">
//           <h4 className="text-xs font-bold text-gray-700 mb-2 flex items-center">
//             <GraduationCap className="w-3 h-3 mr-1 text-[#015F4A]" />
//             SPECIALIZATIONS
//           </h4>
//           <div className="flex flex-wrap gap-1">
//             {(expandedExpertise ? consultant.expertise : consultant.expertise.slice(0, 3)).map((skill, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-1 bg-[#015F4A]/5 text-[#015F4A] text-xs font-medium rounded border border-[#015F4A]/20"
//               >
//                 {skill}
//               </span>
//             ))}
//             {consultant.expertise.length > 3 && !expandedExpertise && (
//               <button
//                 onClick={() => setExpandedExpertise(true)}
//                 className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded border border-gray-200 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
//               >
//                 +{consultant.expertise.length - 3}
//               </button>
//             )}
//             {consultant.expertise.length > 3 && expandedExpertise && (
//               <button
//                 onClick={() => setExpandedExpertise(false)}
//                 className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded border border-gray-200 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
//               >
//                 Show less
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Professional Information */}
//         <div className="space-y-2">
//           <div className="border-l-2 border-[#015F4A] pl-2">
//             <span className="text-xs font-medium text-gray-500 uppercase">Languages</span>
//             <p className="text-xs text-gray-800 font-medium">{consultant.languages.join(' • ') || 'N/A'}</p>
//           </div>
          
//           <div className="border-l-2 border-[#015F4A] pl-2">
//             <span className="text-xs font-medium text-gray-500 uppercase">Approaches</span>
//             <p className="text-xs text-gray-800 font-medium">{consultant.counsellingTypes.join(' • ') || 'N/A'}</p>
//           </div>
          
//           {consultant.specialization && (
//             <div className="border-l-2 border-[#015F4A] pl-2">
//               <span className="text-xs font-medium text-gray-500 uppercase">Focus</span>
//               <p className="text-xs text-gray-800 font-medium">{consultant.specialization}</p>
//             </div>
//           )}
          
//           {consultant.location && (
//             <div className="border-l-2 border-[#015F4A] pl-2">
//               <span className="text-xs font-medium text-gray-500 uppercase">Location</span>
//               <p className="text-xs text-gray-800 font-medium">{consultant.location}</p>
//             </div>
//           )}
//         </div>

//         {/* Book Session Button */}
//         {/* <div className="mt-4">
//           <button
//             onClick={handleBookSession}
//             className="w-full bg-[#015F4A] text-white font-medium py-2 rounded-lg hover:bg-[#013F3A] transition-colors duration-300 flex items-center justify-center"
//           >
//             <MessageCircle className="w-4 h-4 mr-2" />
//             Book a Session
//           </button>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// const ExpertCounsellorsComponent: React.FC = () => {
//   const [consultants, setConsultants] = useState<Consultant[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const itemsPerPage = 4; // Show 4 counsellors per page

//   useEffect(() => {
//     const fetchCounsellors = async () => {
//       try {
//         setLoading(true);
//         const counsellors = await AuthService.frontGetCounsellors();
//         setConsultants(counsellors.filter((c) => !c.isBlocked));
//       } catch (err: any) {
//         console.error('Error fetching counsellors:', err);
//         setError(err.message || 'Failed to fetch counsellors');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCounsellors();
//   }, []);

//   // Limit to first 4 counsellors
//   const displayedConsultants = consultants.slice(0, itemsPerPage);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Compact Professional Hero Section */}
      

//       {/* Counsellors Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {loading && (
//           <div className="text-center py-12">
//             <div className="inline-block w-8 h-8 border-4 border-t-[#015F4A] border-gray-200 rounded-full animate-spin mb-4" />
//             <p className="text-gray-700 text-base">Loading counsellors...</p>
//           </div>
//         )}

//         {error && (
//           <div className="text-center py-12">
//             <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
//               <div className="text-red-500 text-3xl mb-3">⚠️</div>
//               <p className="text-red-800 font-medium">{error}</p>
//             </div>
//           </div>
//         )}

//         {!loading && !error && consultants.length > 0 && (
//           <>
            

//             {/* Counsellors Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
//               {displayedConsultants.map((consultant: Consultant) => (
//                 <CounsellorCard key={consultant.id} consultant={consultant} />
//               ))}
//             </div>

//             {/* Show More Button */}
//             {consultants.length > itemsPerPage && (
//               <div className="flex justify-center mt-8">
//                 <Link
//                   to="/experts"
//                   className="px-6 py-3 bg-[#015F4A] text-white font-medium rounded-lg hover:bg-[#013F3A] transition-colors duration-300"
//                 >
//                   Show More
//                 </Link>
//               </div>
//             )}
//           </>
//         )}

//         {!loading && !error && consultants.length === 0 && (
//           <div className="text-center py-12">
//             <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
//               <div className="text-gray-400 text-4xl mb-4">🧠</div>
//               <h3 className="text-xl font-bold text-gray-900 mb-3">No Counsellors Available</h3>
//               <p className="text-gray-600">Please check back later for available professionals.</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExpertCounsellorsComponent;






import React, { useState, useEffect } from 'react';
import { Star, Users, Clock, MapPin, MessageCircle, Award, Heart, Shield, CheckCircle, GraduationCap } from 'lucide-react';
import AuthService from '../services/AuthService'; // Adjust path to your AuthService
import { Consultant } from '../types/types'; // Import the unified Consultant interface
import { Link } from 'react-router-dom'; // Import Link for navigation

interface CounsellorCardProps {
  consultant: Consultant;
}

const CounsellorCard: React.FC<CounsellorCardProps> = ({ consultant }) => {
  const [expandedExpertise, setExpandedExpertise] = useState(false);

  const handleBookSession = (): void => {
    const phoneNumber = '+918943175522'; // Hardcoded as per original
    const expertise = Array.isArray(consultant.expertise) ? consultant.expertise.join(', ') : consultant.expertise || 'General Counseling';
    const languages = Array.isArray(consultant.languages) ? consultant.languages.join(', ') : consultant.languages || 'English';
    const counsellingTypes = Array.isArray(consultant.counsellingTypes) ? consultant.counsellingTypes.join(', ') : consultant.counsellingTypes || 'Individual Counseling';
    
    // Only include experience in the message if it's defined and greater than 0
    const experienceText = consultant.experience !== undefined && consultant.experience > 0 
      ? `\n- Experience: ${consultant.experience}+ years` 
      : '';
    
    const message = `Hello, I'm interested in booking a session with ${consultant.name}.\n\nDetails:\n- Qualification: ${consultant.qualification || 'Professional Counselor'}\n- Expertise: ${expertise}\n- Languages: ${languages}\n- Counseling: ${counsellingTypes}${experienceText}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex-shrink-0 w-full sm:w-auto">
      {/* Compact Professional Header */}
      <div className="relative bg-white p-5 border-b border-gray-50">
        {/* Verification Badge */}
        <div className="absolute top-3 right-3 flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
          <CheckCircle className="w-3 h-3 mr-1" />
          Verified
        </div>
        
        <div className="text-center">
          {/* Professional Profile Image - Made Larger */}
          <div className="relative inline-block mb-4">
            <img
              src={consultant.image}
              alt={`${consultant.name}`}
              className="w-32 h-32 rounded-full object-cover border-3 border-white shadow-xl ring-4 ring-[#015F4A]/10"
            />
            <div className="absolute -bottom-2 -right-2 bg-[#015F4A] w-6 h-6 rounded-full border-3 border-white flex items-center justify-center shadow-lg">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Name and Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-1">{consultant.name}</h3>
          <p className="text-[#015F4A] font-medium text-xs mb-2">{consultant.qualification}</p>
          
          {/* Experience Badge - Only show if experience is greater than 0 */}
          {consultant.experience !== undefined && consultant.experience > 0 && (
            <div className="inline-flex items-center bg-[#015F4A]/5 border border-[#015F4A]/20 rounded-full px-3 py-1 mb-2">
              <Award className="w-3 h-3 text-[#015F4A] mr-1" />
              <span className="text-[#015F4A] font-medium text-xs">{consultant.experience}+ years</span>
            </div>
          )}
          
          {/* Rating - Commented out as in original */}
          {/* <div className="flex items-center justify-center">
            <div className="flex items-center bg-yellow-50 border border-yellow-200 rounded-full px-2 py-1">
              <Star className="w-3 h-3 text-yellow-500 fill-current mr-1" />
              <span className="font-medium text-gray-900 text-xs">{consultant.rating.toFixed(1)}</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Compact Professional Details */}
      <div className="p-4">
        {/* Specializations */}
        <div className="mb-4">
          <h4 className="text-xs font-bold text-gray-700 mb-2 flex items-center">
            <GraduationCap className="w-3 h-3 mr-1 text-[#015F4A]" />
            SPECIALIZATIONS
          </h4>
          <div className="flex flex-wrap gap-1">
            {(expandedExpertise ? consultant.expertise : consultant.expertise.slice(0, 3)).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-[#015F4A]/5 text-[#015F4A] text-xs font-medium rounded border border-[#015F4A]/20"
              >
                {skill}
              </span>
            ))}
            {consultant.expertise.length > 3 && !expandedExpertise && (
              <button
                onClick={() => setExpandedExpertise(true)}
                className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded border border-gray-200 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                +{consultant.expertise.length - 3}
              </button>
            )}
            {consultant.expertise.length > 3 && expandedExpertise && (
              <button
                onClick={() => setExpandedExpertise(false)}
                className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded border border-gray-200 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                Show less
              </button>
            )}
          </div>
        </div>

        {/* Professional Information */}
        <div className="space-y-2">
          <div className="border-l-2 border-[#015F4A] pl-2">
            <span className="text-xs font-medium text-gray-500 uppercase">Languages</span>
            <p className="text-xs text-gray-800 font-medium">{consultant.languages.join(' • ') || 'N/A'}</p>
          </div>
          
          <div className="border-l-2 border-[#015F4A] pl-2">
            <span className="text-xs font-medium text-gray-500 uppercase">Approaches</span>
            <p className="text-xs text-gray-800 font-medium">{consultant.counsellingTypes.join(' • ') || 'N/A'}</p>
          </div>
          
          {consultant.specialization && (
            <div className="border-l-2 border-[#015F4A] pl-2">
              <span className="text-xs font-medium text-gray-500 uppercase">Focus</span>
              <p className="text-xs text-gray-800 font-medium">{consultant.specialization}</p>
            </div>
          )}
          
          {consultant.location && (
            <div className="border-l-2 border-[#015F4A] pl-2">
              <span className="text-xs font-medium text-gray-500 uppercase">Location</span>
              <p className="text-xs text-gray-800 font-medium">{consultant.location}</p>
            </div>
          )}
        </div>

        {/* Book Session Button */}
        {/* <div className="mt-4">
          <button
            onClick={handleBookSession}
            className="w-full bg-[#015F4A] text-white font-medium py-2 rounded-lg hover:bg-[#013F3A] transition-colors duration-300 flex items-center justify-center"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Book a Session
          </button>
        </div> */}
      </div>
    </div>
  );
};

const ExpertCounsellorsComponent: React.FC = () => {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 4; // Show 4 counsellors per page

  useEffect(() => {
    const fetchCounsellors = async () => {
      try {
        setLoading(true);
        const counsellors = await AuthService.frontGetCounsellors();
        setConsultants(counsellors.filter((c) => !c.isBlocked));
      } catch (err: any) {
        console.error('Error fetching counsellors:', err);
        setError(err.message || 'Failed to fetch counsellors');
      } finally {
        setLoading(false);
      }
    };

    fetchCounsellors();
  }, []);

  // Mobile: show first 4, Tablet: show first 3, Desktop: show first 4
  const getDisplayedConsultants = () => {
    return consultants.slice(0, itemsPerPage);
  };

  const displayedConsultants = getDisplayedConsultants();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Professional Hero Section */}
      

      {/* Counsellors Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block w-8 h-8 border-4 border-t-[#015F4A] border-gray-200 rounded-full animate-spin mb-4" />
            <p className="text-gray-700 text-base">Loading counsellors...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <div className="text-red-500 text-3xl mb-3">⚠️</div>
              <p className="text-red-800 font-medium">{error}</p>
            </div>
          </div>
        )}

        {!loading && !error && consultants.length > 0 && (
          <>
            {/* Counsellors Grid - Responsive Layout */}
            {/* Mobile: Horizontal scroll, Tablet: 3 cards grid, Desktop: 4 cards grid */}
            <div className="mb-8">
              {/* Mobile View: Horizontal Scrollable */}
              <div className="sm:hidden">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                  <div className="flex gap-4 px-2">
                    {displayedConsultants.map((consultant: Consultant, index) => (
                      <div key={consultant.id} className="w-80 snap-center">
                        <CounsellorCard consultant={consultant} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet View: 3 cards grid */}
              <div className="hidden sm:grid md:hidden grid-cols-3 gap-6">
                {displayedConsultants.slice(0, 3).map((consultant: Consultant) => (
                  <CounsellorCard key={consultant.id} consultant={consultant} />
                ))}
              </div>

              {/* Desktop View: 4 cards grid */}
              <div className="hidden md:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedConsultants.map((consultant: Consultant) => (
                  <CounsellorCard key={consultant.id} consultant={consultant} />
                ))}
              </div>
            </div>

            {/* Show More Button */}
            {consultants.length > itemsPerPage && (
              <div className="flex justify-center mt-8">
                <Link
                  to="/experts"
                  className="px-6 py-3 bg-[#015F4A] text-white font-medium rounded-lg hover:bg-[#013F3A] transition-colors duration-300"
                >
                  Show More
                </Link>
              </div>
            )}
          </>
        )}

        {!loading && !error && consultants.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-md mx-auto">
              <div className="text-gray-400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Counsellors Available</h3>
              <p className="text-gray-600">Please check back later for available professionals.</p>
            </div>
          </div>
        )}
      </div>

      {/* Add custom CSS for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
    </div>
  );
};

export default ExpertCounsellorsComponent;