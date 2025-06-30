



// // import React, { useEffect, useState } from 'react';
// // import { motion, Variants } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';
// // import ConsultantCard from './ConsultantCard';
// // import { Consultant } from '../types/types';
// // import AuthService from '../services/AuthService';
// // import { Link } from 'react-router-dom';

// // // Animation variants
// // const sectionVariants: Variants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
// // };

// // const containerVariants: Variants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.2,
// //     },
// //   },
// // };

// // const cardVariants: Variants = {
// //   hidden: { opacity: 0, scale: 0.95 },
// //   visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
// // };

// // const buttonVariants: Variants = {
// //   hover: {
// //     scale: 1.05,
// //     boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
// //     transition: { duration: 0.3 },
// //   },
// //   tap: { scale: 0.95 },
// // };

// // // Skeleton loader component for better UX
// // const SkeletonCard: React.FC = () => (
// //   <div className="flex-shrink-0 w-80 md:w-1/3 snap-center">
// //     <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 animate-pulse">
// //       <div className="h-48 bg-gray-200" />
// //       <div className="p-6 space-y-4">
// //         <div className="h-6 bg-gray-200 rounded w-3/4" />
// //         <div className="h-4 bg-gray-200 rounded w-full" />
// //         <div className="h-4 bg-gray-200 rounded w-5/6" />
// //         <div className="h-10 bg-gray-200 rounded-full w-32" />
// //       </div>
// //     </div>
// //   </div>
// // );

// // const CounsellorList: React.FC = () => {
// //   const [consultants, setConsultants] = useState<Consultant[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchCounsellors = async () => {
// //       try {
// //         setLoading(true);
// //         const counsellors = await AuthService.getCounsellors();
// //         setConsultants(counsellors);
// //       } catch (err: unknown) {
// //         const errorMessage = err instanceof Error ? err.message : 'Failed to fetch counsellors';
// //         setError(errorMessage);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchCounsellors();
// //   }, []);

// //   if (loading) {
// //     return (
// //       <section className="py-20 bg-gray-100" aria-labelledby="counsellors-heading">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //           <h2
// //             id="counsellors-heading"
// //             className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#015F4A]"
// //           >
// //             Our Expert Counsellors
// //           </h2>
// //           <div className="flex flex-row overflow-x-auto md:overflow-x-visible gap-6 snap-x snap-mandatory pb-4">
// //             {[...Array(3)].map((_, index) => (
// //               <SkeletonCard key={index} />
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <section className="py-20 bg-gray-100" aria-labelledby="error-heading">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 id="error-heading" className="text-2xl font-semibold text-red-500 mb-4">
// //             Something Went Wrong
// //           </h2>
// //           <p className="text-gray-600 mb-6">{error}</p>
// //           <button
// //             className="px-6 py-2 rounded-full bg-[#31A382] text-white font-medium hover:bg-[#2F9B7A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:ring-offset-2"
// //             onClick={() => window.location.reload()}
// //             aria-label="Retry loading counsellors"
// //           >
// //             Try Again
// //           </button>
// //         </div>
// //       </section>
// //     );
// //   }

// //   if (consultants.length === 0) {
// //     return (
// //       <section className="py-20 bg-gray-100" aria-labelledby="empty-heading">
// //         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h2 id="empty-heading" className="text-2xl font-semibold text-gray-600 mb-4">
// //             No Counsellors Available
// //           </h2>
// //           <p className="text-gray-500 mb-6">Check back later for our expert counsellors.</p>
// //           <Link
// //             to="/services"
// //             className="inline-block px-6 py-2 rounded-full bg-[#31A382] text-white font-medium hover:bg-[#2F9B7A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:ring-offset-2"
// //             aria-label="Explore our services"
// //           >
// //             Explore Services
// //           </Link>
// //         </div>
// //       </section>
// //     );
// //   }

// //   const filteredConsultants = consultants.filter((c) => !c.isBlocked).slice(0, 3);

// //   return (
// //     <motion.section
// //       className="py-20 bg-gray-100"
// //       variants={sectionVariants}
// //       initial="hidden"
// //       animate="visible"
// //       aria-labelledby="counsellors-heading"
// //     >
// //       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
// //         <h2
// //           id="counsellors-heading"
// //           className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#015F4A]"
// //         >
// //           Our Expert Counsellors
// //         </h2>
// //         <div className="relative">
// //           <motion.div
// //             className="flex flex-row overflow-x-auto md:overflow-x-visible gap-6 snap-x snap-mandatory pb-4"
// //             variants={containerVariants}
// //             initial="hidden"
// //             animate="visible"
// //           >
// //             {filteredConsultants.map((consultant, index) => (
// //               <motion.div
// //                 key={consultant.id}
// //                 className="flex-shrink-0 w-80 md:w-1/3 snap-center"
// //                 variants={cardVariants}
// //                 transition={{ delay: index * 0.2 }}
// //               >
// //                 <ConsultantCard consultant={consultant} index={index} />
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //           {/* Scroll indicators for mobile */}
// //           <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-100 to-transparent pointer-events-none md:hidden" />
// //           <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-100 to-transparent pointer-events-none md:hidden" />
// //         </div>
// //         {consultants.length > 3 && (
// //           <div className="text-center mt-12">
// //             <motion.button
// //               className="px-8 py-3 rounded-full font-semibold bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#31A382] focus:ring-offset-2"
// //               variants={buttonVariants}
// //               whileHover="hover"
// //               whileTap="tap"
// //               onClick={() => navigate('/experts')}
// //               aria-label="View more expert counsellors"
// //             >
// //               Show More
// //             </motion.button>
// //           </div>
// //         )}
// //       </div>
// //     </motion.section>
// //   );
// // };

// // export default CounsellorList;




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
//         const counsellors = await AuthService.getCounsellors();
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
//             to="/services"
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

// export default CounsellorList;