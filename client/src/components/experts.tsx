// // src/components/ExpertCounsellorsComponent.tsx
// import React, { useState, useEffect } from 'react';
// import { Star, Users, Clock, MapPin, MessageCircle, Award, Heart, Shield, CheckCircle, GraduationCap } from 'lucide-react';
// import AuthService from '../services/AuthService'; // Adjust path to your AuthService
// import { Consultant } from '../types/types'; // Import the unified Consultant interface

// interface CounsellorCardProps {
//   consultant: Consultant;
// }

// const CounsellorCard: React.FC<CounsellorCardProps> = ({ consultant }) => {
//   const handleBookSession = (): void => {
//     const phoneNumber = '+918943175522'; // Hardcoded as per original
//     const message = `Hello, I'm interested in booking a session with ${consultant.name}.\n\nDetails:\n- Qualification: ${consultant.qualification}\n- Expertise: ${consultant.expertise.join(', ')}\n- Languages: ${consultant.languages.join(', ')}\n- Experience: ${consultant.experience}`;
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
          
//           {/* Experience Badge */}
//           <div className="inline-flex items-center bg-[#015F4A]/5 border border-[#015F4A]/20 rounded-full px-3 py-1 mb-2">
//             <Award className="w-3 h-3 text-[#015F4A] mr-1" />
//             <span className="text-[#015F4A] font-medium text-xs">{consultant.experience}</span>
//           </div>
          
//           {/* Rating */}
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
//             {consultant.expertise.slice(0, 3).map((skill, index) => (
//               <span
//                 key={index}
//                 className="px-2 py-1 bg-[#015F4A]/5 text-[#015F4A] text-xs font-medium rounded border border-[#015F4A]/20"
//               >
//                 {skill}
//               </span>
//             ))}
//             {consultant.expertise.length > 3 && (
//               <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded border border-gray-200">
//                 +Years{consultant.expertise.length - 3}
//               </span>
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
//       </div>
//     </div>
//   );
// };

// const ExpertCounsellorsComponent: React.FC = () => {
//   const [consultants, setConsultants] = useState<Consultant[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const itemsPerPage = 8; // Show 8 counsellors per page

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

//   // Pagination calculations
//   const totalPages = Math.ceil(consultants.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentConsultants = consultants.slice(startIndex, endIndex);

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Compact Professional Hero Section */}
//       <div className="bg-white">
//         <div className="max-w-7xl mx-auto px-4 py-12">
//           <div className="text-center">
//             <div className="inline-flex items-center bg-[#015F4A]/5 border border-[#015F4A]/20 rounded-full px-4 py-2 mb-6">
//               <Shield className="w-4 h-4 text-[#015F4A] mr-2" />
//               <span className="text-[#015F4A] font-medium text-sm">Licensed Mental Health Professionals</span>
//             </div>
            
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               Expert
//               <span className="text-[#015F4A]"> Counsellors</span>
//             </h1>
            
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
//               Connect with board-certified mental health professionals who provide evidence-based counselling 
//               and personalized treatment plans.
//             </p>

//             {/* Compact Professional Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
//               {[
//                 { 
//                   number: '25+', 
//                   label: 'Licensed Professionals',
//                   icon: Award 
//                 },
//                 { 
//                   number: '24/7', 
//                   label: 'Professional Support',
//                   icon: Shield 
//                 },
//               ].map((stat, index) => (
//                 <div key={index} className="bg-white border border-[#015F4A]/10 rounded-lg p-4 text-center">
//                   <div className="inline-flex items-center justify-center w-10 h-10 bg-[#015F4A]/10 rounded-full mb-3">
//                     <stat.icon className="w-5 h-5 text-[#015F4A]" />
//                   </div>
//                   <div className="text-2xl font-bold text-[#015F4A] mb-1">
//                     {stat.number}
//                   </div>
//                   <div className="text-gray-900 font-medium text-sm">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

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
//             {/* Results Info */}
//             <div className="mb-6 text-center">
//               <p className="text-gray-600">
//                 Showing {startIndex + 1}-{Math.min(endIndex, consultants.length)} of {consultants.length} counsellors
//               </p>
//             </div>

//             {/* Counsellors Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
//               {currentConsultants.map((consultant: Consultant) => (
//                 <CounsellorCard key={consultant.id} consultant={consultant} />
//               ))}
//             </div>

//             {/* Pagination */}
//             {totalPages > 1 && (
//               <div className="flex justify-center items-center space-x-2 mt-8">
//                 {/* Previous Button */}
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className={`px-4 py-2 rounded-lg border font-medium transition-all ${
//                     currentPage === 1
//                       ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
//                       : 'bg-white text-gray-700 border-gray-300 hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A]'
//                   }`}
//                 >
//                   Previous
//                 </button>

//                 {/* Page Numbers */}
//                 {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
//                   // Show first page, last page, current page, and pages around current page
//                   if (
//                     page === 1 ||
//                     page === totalPages ||
//                     (page >= currentPage - 1 && page <= currentPage + 1)
//                   ) {
//                     return (
//                       <button
//                         key={page}
//                         onClick={() => handlePageChange(page)}
//                         className={`px-4 py-2 rounded-lg border font-medium transition-all ${
//                           currentPage === page
//                             ? 'bg-[#015F4A] text-white border-[#015F4A]'
//                             : 'bg-white text-gray-700 border-gray-300 hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A]'
//                         }`}
//                       >
//                         {page}
//                       </button>
//                     );
//                   } else if (
//                     (page === currentPage - 2 && currentPage > 3) ||
//                     (page === currentPage + 2 && currentPage < totalPages - 2)
//                   ) {
//                     return (
//                       <span key={page} className="px-2 text-gray-400">
//                         ...
//                       </span>
//                     );
//                   }
//                   return null;
//                 })}

//                 {/* Next Button */}
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className={`px-4 py-2 rounded-lg border font-medium transition-all ${
//                     currentPage === totalPages
//                       ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
//                       : 'bg-white text-gray-700 border-gray-300 hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A]'
//                   }`}
//                 >
//                   Next
//                 </button>
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
    <div className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden">
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8; // Show 8 counsellors per page

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

  // Pagination calculations
  const totalPages = Math.ceil(consultants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentConsultants = consultants.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Professional Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <div className="inline-flex items-center bg-[#015F4A]/5 border border-[#015F4A]/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-[#015F4A] mr-2" />
              <span className="text-[#015F4A] font-medium text-sm">Licensed Mental Health Professionals</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert
              <span className="text-[#015F4A]"> Counsellors</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Connect with board-certified mental health professionals who provide evidence-based counselling 
              and personalized treatment plans.
            </p>

            {/* Compact Professional Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
              {[
                { 
                  number: '25+', 
                  label: 'Licensed Professionals',
                  icon: Award 
                },
                { 
                  number: '24/7', 
                  label: 'Professional Support',
                  icon: Shield 
                },
              ].map((stat, index) => (
                <div key={index} className="bg-white border border-[#015F4A]/10 rounded-lg p-4 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#015F4A]/10 rounded-full mb-3">
                    <stat.icon className="w-5 h-5 text-[#015F4A]" />
                  </div>
                  <div className="text-2xl font-bold text-[#015F4A] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-900 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

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
            {/* Results Info */}
            <div className="mb-6 text-center">
              <p className="text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, consultants.length)} of {consultants.length} counsellors
              </p>
            </div>

            {/* Counsellors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {currentConsultants.map((consultant: Consultant) => (
                <CounsellorCard key={consultant.id} consultant={consultant} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-8">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                    currentPage === 1
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A]'
                  }`}
                >
                  Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current page
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                          currentPage === page
                            ? 'bg-[#015F4A] text-white border-[#015F4A]'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A]'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    (page === currentPage - 2 && currentPage > 3) ||
                    (page === currentPage + 2 && currentPage < totalPages - 2)
                  ) {
                    return (
                      <span key={page} className="px-2 text-gray-400">
                        ...
                      </span>
                    );
                  }
                  return null;
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg border font-medium transition-all ${
                    currentPage === totalPages
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A]'
                  }`}
                >
                  Next
                </button>
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
    </div>
  );
};

export default ExpertCounsellorsComponent;