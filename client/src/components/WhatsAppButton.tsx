// import React, { useState } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import { sendWhatsAppMessage } from '../utils/whatsappService';

// const WhatsAppButton: React.FC = () => {
//   const [error, setError] = useState<string | null>(null);
//   const businessPhoneNumber = import.meta.env.VITE_BUSINESS_PHONE_ID;

//   const handleWhatsAppClick = async () => {
//     try {
//       setError(null);
//       const options = [
//         "1️⃣ Book a Consultant",
//         "2️⃣ Submit a Complaint",
//         "3️⃣ Customer Care Services"
//       ].join("\n");

//       // Try the WhatsApp Business API first
//       await sendWhatsAppMessage(
//         businessPhoneNumber,
//         "customer_support_options",
//         [options]
//       );
//     } catch (error: any) {
//       console.error('WhatsApp API Error:', error);
//       setError(error.message);

//       // Fallback to direct WhatsApp link
//       const whatsappUrl = `https://wa.me/${businessPhoneNumber}?text=${encodeURIComponent(
//         "Hello! Please choose from the following options:\n\n" + 
//         "1️⃣ Book a Consultant\n" +
//         "2️⃣ Submit a Complaint\n" +
//         "3️⃣ Customer Care Services"
//       )}`;
//       window.open(whatsappUrl, '_blank');
//     }
//   };

//   return (
//     <>
//       <motion.button
//         onClick={handleWhatsAppClick}
//         className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         <FaWhatsapp size={24} />
//       </motion.button>

//       <AnimatePresence>
//         {error && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 20 }}
//             className="fixed bottom-24 right-6 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md shadow-lg max-w-sm"
//           >
//             {error}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default WhatsAppButton;
