





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
//     <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex-shrink-0 w-full sm:w-auto">
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

//   // Mobile: show first 4, Tablet: show first 3, Desktop: show first 4
//   const getDisplayedConsultants = () => {
//     return consultants.slice(0, itemsPerPage);
//   };

//   const displayedConsultants = getDisplayedConsultants();

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
//             {/* Counsellors Grid - Responsive Layout */}
//             {/* Mobile: Horizontal scroll, Tablet: 3 cards grid, Desktop: 4 cards grid */}
//             <div className="mb-8">
//               {/* Mobile View: Horizontal Scrollable */}
//               <div className="sm:hidden">
//                 <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
//                   <div className="flex gap-4 px-2">
//                     {displayedConsultants.map((consultant: Consultant, index) => (
//                       <div key={consultant.id} className="w-80 snap-center">
//                         <CounsellorCard consultant={consultant} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Tablet View: 3 cards grid */}
//               <div className="hidden sm:grid md:hidden grid-cols-3 gap-6">
//                 {displayedConsultants.slice(0, 3).map((consultant: Consultant) => (
//                   <CounsellorCard key={consultant.id} consultant={consultant} />
//                 ))}
//               </div>

//               {/* Desktop View: 4 cards grid */}
//               <div className="hidden md:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {displayedConsultants.map((consultant: Consultant) => (
//                   <CounsellorCard key={consultant.id} consultant={consultant} />
//                 ))}
//               </div>
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

//       {/* Add custom CSS for hiding scrollbar */}
//       <style dangerouslySetInnerHTML={{
//         __html: `
//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//         `
//       }} />
//     </div>
//   );
// };

// export default ExpertCounsellorsComponent;




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
//     <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex-shrink-0 w-full sm:w-auto h-[610px] flex flex-col">
//       {/* Compact Professional Header */}
//       <div className="relative bg-white p-5 border-b border-gray-50 flex-shrink-0">
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
//       <div className="p-4 flex-1 flex flex-col">
//         {/* Specializations */}
//         <div className="mb-4 flex-shrink-0">
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
//         <div className="space-y-2 flex-1">
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

//   // Mobile: show first 4, Tablet: show first 3, Desktop: show first 4
//   const getDisplayedConsultants = () => {
//     return consultants.slice(0, itemsPerPage);
//   };

//   const displayedConsultants = getDisplayedConsultants();

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
//             {/* Counsellors Grid - Responsive Layout */}
//             {/* Mobile: Horizontal scroll, Tablet: 3 cards grid, Desktop: 4 cards grid */}
//             <div className="mb-8">
//               {/* Mobile View: Horizontal Scrollable */}
//               <div className="sm:hidden">
//                 <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
//                   <div className="flex gap-4 px-2">
//                     {displayedConsultants.map((consultant: Consultant, index) => (
//                       <div key={consultant.id} className="w-80 snap-center">
//                         <CounsellorCard consultant={consultant} />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Tablet View: 3 cards grid */}
//               <div className="hidden sm:grid md:hidden grid-cols-3 gap-6">
//                 {displayedConsultants.slice(0, 3).map((consultant: Consultant) => (
//                   <CounsellorCard key={consultant.id} consultant={consultant} />
//                 ))}
//               </div>

//               {/* Desktop View: 4 cards grid */}
//               <div className="hidden md:grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {displayedConsultants.map((consultant: Consultant) => (
//                   <CounsellorCard key={consultant.id} consultant={consultant} />
//                 ))}
//               </div>
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

//       {/* Add custom CSS for hiding scrollbar */}
//       <style dangerouslySetInnerHTML={{
//         __html: `
//           .scrollbar-hide {
//             -ms-overflow-style: none;
//             scrollbar-width: none;
//           }
//           .scrollbar-hide::-webkit-scrollbar {
//             display: none;
//           }
//         `
//       }} />
//     </div>
//   );
// };

// export default ExpertCounsellorsComponent;



import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, Users, Clock, MapPin, MessageCircle, Award, Heart, Shield, CheckCircle, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden w-full">
      {/* Compact Professional Header */}
      <div className="relative bg-white p-4 border-b border-gray-50">
        {/* Verification Badge */}
        <div className="absolute top-2 right-2 flex items-center bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
          <CheckCircle className="w-3 h-3 mr-1" />
          Verified
        </div>
        
        <div className="text-center">
          {/* Professional Profile Image - Smaller for tablet */}
          <div className="relative inline-block mb-3">
            <img
              src={consultant.image}
              alt={`${consultant.name}`}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-white shadow-lg ring-2 ring-[#015F4A]/10"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#015F4A] w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
          </div>
          
          {/* Name and Title */}
          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight">{consultant.name}</h3>
          <p className="text-[#015F4A] font-medium text-xs mb-2">{consultant.qualification}</p>
          
          {/* Experience Badge - Only show if experience is greater than 0 */}
          {consultant.experience !== undefined && consultant.experience > 0 && (
            <div className="inline-flex items-center bg-[#015F4A]/5 border border-[#015F4A]/20 rounded-full px-2 py-1 mb-2">
              <Award className="w-3 h-3 text-[#015F4A] mr-1" />
              <span className="text-[#015F4A] font-medium text-xs">{consultant.experience}+ years</span>
            </div>
          )}
        </div>
      </div>

      {/* Compact Professional Details */}
      <div className="p-3 sm:p-4">
        {/* Specializations */}
        <div className="mb-3">
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

        {/* Professional Information - More compact */}
        <div className="space-y-2">
          <div className="border-l-2 border-[#015F4A] pl-2">
            <span className="text-xs font-medium text-gray-500 uppercase">Languages</span>
            <p className="text-xs text-gray-800 font-medium leading-tight">{consultant.languages.join(' • ') || 'N/A'}</p>
          </div>
          
          <div className="border-l-2 border-[#015F4A] pl-2">
            <span className="text-xs font-medium text-gray-500 uppercase">Approaches</span>
            <p className="text-xs text-gray-800 font-medium leading-tight">{consultant.counsellingTypes.join(' • ') || 'N/A'}</p>
          </div>
          
          {consultant.specialization && (
            <div className="border-l-2 border-[#015F4A] pl-2">
              <span className="text-xs font-medium text-gray-500 uppercase">Focus</span>
              <p className="text-xs text-gray-800 font-medium leading-tight">{consultant.specialization}</p>
            </div>
          )}
          
          {consultant.location && (
            <div className="border-l-2 border-[#015F4A] pl-2">
              <span className="text-xs font-medium text-gray-500 uppercase">Location</span>
              <p className="text-xs text-gray-800 font-medium leading-tight">{consultant.location}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ExpertCounsellorsComponent: React.FC = () => {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef<{ startX: number; isDragging: boolean }>({
    startX: 0,
    isDragging: false
  });
  
  const itemsPerPage = 4; // Show 4 counsellors per page
  const tabletItemsPerView = 3; // Show 3 items per view on tablet

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

  // Calculate total slides for tablet view
  const totalSlides = Math.ceil(consultants.length / tabletItemsPerView);

  // Handle slide navigation
  const goToSlide = useCallback((slideIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.isDragging = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchRef.current.isDragging) return;
    // Prevent default to avoid scrolling while swiping
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchRef.current.isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const deltaX = touchRef.current.startX - endX;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        // Swiped left - next slide
        nextSlide();
      } else {
        // Swiped right - previous slide
        prevSlide();
      }
    }
    
    touchRef.current.isDragging = false;
  };

  // Get current slide consultants for tablet
  const getCurrentSlideConsultants = () => {
    const startIndex = currentSlide * tabletItemsPerView;
    return consultants.slice(startIndex, startIndex + tabletItemsPerView);
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
            <div className="mb-8">
              {/* Mobile View: Horizontal Scrollable */}
              <div className="sm:hidden">
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                  <div className="flex gap-4 px-2">
                    {displayedConsultants.map((consultant: Consultant, index) => (
                      <div key={consultant.id} className="w-80 snap-center flex-shrink-0">
                        <CounsellorCard consultant={consultant} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tablet Horizontal View: Swipeable slider */}
              <div className="hidden sm:block md:hidden">
                <div className="relative">
                  {/* Navigation Arrows */}
                  {totalSlides > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        disabled={currentSlide === 0 || isTransitioning}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        style={{ marginLeft: '-20px' }}
                      >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                      </button>
                      
                      <button
                        onClick={nextSlide}
                        disabled={currentSlide === totalSlides - 1 || isTransitioning}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                        style={{ marginRight: '-20px' }}
                      >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                      </button>
                    </>
                  )}
                  
                  {/* Slider Container */}
                  <div 
                    className="overflow-hidden rounded-lg"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div 
                      ref={sliderRef}
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{ 
                        transform: `translateX(-${currentSlide * 100}%)`,
                        width: `${totalSlides * 100}%`
                      }}
                    >
                      {Array.from({ length: totalSlides }).map((_, slideIndex) => {
                        const slideConsultants = consultants.slice(
                          slideIndex * tabletItemsPerView,
                          (slideIndex + 1) * tabletItemsPerView
                        );
                        
                        return (
                          <div 
                            key={slideIndex} 
                            className="flex gap-4 px-4"
                            style={{ width: `${100 / totalSlides}%` }}
                          >
                            {slideConsultants.map((consultant: Consultant) => (
                              <div key={consultant.id} className="flex-1 min-w-0">
                                <CounsellorCard consultant={consultant} />
                              </div>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Slide Indicators */}
                  {totalSlides > 1 && (
                    <div className="flex justify-center mt-4 space-x-2">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          disabled={isTransitioning}
                          className={`w-2 h-2 rounded-full transition-all duration-200 ${
                            index === currentSlide 
                              ? 'bg-[#015F4A] w-6' 
                              : 'bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Desktop View: 4 cards grid - centered */}
              <div className="hidden md:block">
                <div className="flex justify-center">
                  <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl">
                    {displayedConsultants.map((consultant: Consultant) => (
                      <div key={consultant.id} className="w-full">
                        <CounsellorCard consultant={consultant} />
                      </div>
                    ))}
                  </div>
                </div>
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