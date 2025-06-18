// import React from 'react';
// import { motion } from 'framer-motion';

// // Animation variants for the card
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
//   hover: {
//     scale: 1.02,
//     boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
//     transition: { duration: 0.3 },
//   },
// };

// // Animation variants for the badge
// const badgeVariants = {
//   initial: { scale: 1 },
//   animate: {
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 2,
//       ease: 'easeInOut',
//       repeat: Infinity,
//       repeatType: 'loop' as const,
//     },
//   },
//   hover: {
//     scale: 1.1,
//     boxShadow: '0 8px 20px rgba(59, 130, 246, 0.4)',
//     transition: { duration: 0.25 },
//   },
// };

// interface Certificate {
//   recipientName: string;
//   certificateTitle: string;
//   issueDate: string;
//   issuer: string;
//   certificateImage?: string;
//   certificateUrl?: string;
// }

// interface CertificateCardProps {
//   certificate: Certificate;
// }

// const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
//   const defaultImage = 'https://via.placeholder.com/300x200?text=Certificate'; // Fallback image
//   const defaultUrl = '#'; // Fallback URL for certificate download/view

//   const handleViewCertificate = () => {
//     if (certificate.certificateUrl) {
//       window.open(certificate.certificateUrl, '_blank', 'noopener,noreferrer');
//     }
//   };

//   return (
//     <motion.div
//       className="relative flex flex-col p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 max-w-md mx-auto"
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       whileHover="hover"
//       role="article"
//       aria-labelledby="certificate-title"
//     >
//       {/* Certificate Image */}
//       <motion.img
//         src={certificate.certificateImage || defaultImage}
//         alt={`${certificate.certificateTitle} certificate for ${certificate.recipientName}`}
//         className="w-full h-48 rounded-lg object-cover mb-4 border border-gray-200"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, ease: 'easeOut' }}
//         onError={(e) => (e.currentTarget.src = defaultImage)}
//       />

//       {/* Certificate Title */}
//       <h3
//         id="certificate-title"
//         className="text-2xl font-semibold text-gray-800 text-center mb-3"
//       >
//         {certificate.certificateTitle || 'Certificate of Achievement'}
//       </h3>

//       {/* Recipient Name */}
//       <p className="text-gray-600 text-center mb-2">
//         Awarded to <span className="font-medium text-gray-800">{certificate.recipientName || 'Recipient Name'}</span>
//       </p>

//       {/* Issue Date */}
//       <p className="text-gray-600 text-center mb-2">
//         Issued on <span className="font-medium">{certificate.issueDate || 'Not specified'}</span>
//       </p>

//       {/* Issuer */}
//       <p className="text-gray-600 text-center mb-5">
//         By <span className="font-medium">{certificate.issuer || 'Melete'}</span>
//       </p>

//       {/* View/Download Button */}
//       <motion.button
//         className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 mx-auto"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         onClick={handleViewCertificate}
//         disabled={!certificate.certificateUrl}
//         aria-label={`View or download ${certificate.certificateTitle} certificate`}
//       >
//         {certificate.certificateUrl ? 'View Certificate' : 'Certificate Unavailable'}
//       </motion.button>

//       {/* Melete Badge */}
//       <motion.div
//         className="absolute top-3 right-3 flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
//         variants={badgeVariants}
//         initial="initial"
//         animate="animate"
//         whileHover="hover"
//         aria-label="Melete Verified Certificate"
//       >
//         <svg
//           className="w-4 h-4 mr-1"
//           fill="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//         >
//           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//         </svg>
//         Melete
//       </motion.div>
//     </motion.div>
//   );
// };

// export default CertificateCard;