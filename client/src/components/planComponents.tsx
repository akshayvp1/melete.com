// import React from 'react';
// import { motion } from 'framer-motion';

// interface ServiceItem {
//   title: string;
//   sessions: string;
//   price: number;
//   items: string[];
// }

// const TherapyServicesCard: React.FC = () => {
//   const services: ServiceItem[] = [
//     {
//       title: "Complete Care",
//       sessions: "Single Session",
//       price: 499,
//       items: [
//         "Establishing rapport",
//         "Provide a safe, supportive and non-judgmental space to explore yourself",
//         "Felt heard and understood"
//       ]
//     },
//     {
//       title: "Essential Support",
//       sessions: "12 Sessions",
//       price: 3700,
//       items: [
//         "Establishing rapport",
//         "Dive deeper into underlying challenges",
//         "Setting goals",
//         "Establishing self-awareness",
//         "Realising coping mechanisms and exploring the coping skills",
//         "Make a plan for maintenance"
//       ]
//     },
//     {
//       title: "Problem-Focused Therapy",
//       sessions: "Flexible Sessions",
//       price: 5749,
//       items: [
//         "Establishing rapport",
//         "Identifying and analysing your problem",
//         "Goal setting according to your problem",
//         "Generating ideas to resolve obstacles to your problem",
//         "Finding the route to your solution"
//       ]
//     }
//   ];

//   const cardStyles = [
//     {
//       gradient: "from-[#3B4A6B] to-[#4A6B8C]",
//       button: "bg-[#3B4A6B] hover:bg-[#4A6B8C]",
//       accent: "bg-[#4A6B8C]"
//     },
//     {
//       gradient: "from-[#015F4A] to-[#027F61]",
//       button: "bg-[#015F4A] hover:bg-[#027F61]",
//       accent: "bg-[#027F61]"
//     },
//     {
//       gradient: "from-[#6B3B4A] to-[#8C4A6B]",
//       button: "bg-[#6B3B4A] hover:bg-[#8C4A6B]",
//       accent: "bg-[#8C4A6B]"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-10">
//           <motion.h1
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl font-bold text-gray-900 tracking-tight"
//           >
//             Our Therapy Services
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="mt-3 text-base text-gray-600"
//           >
//             Tailored solutions to support your mental health journey
//           </motion.p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50, scale: 0.95 }}
//               whileInView={{ opacity: 1, y: 0, scale: 1 }}
//               viewport={{ once: true, amount: 0.4 }}
//               transition={{ duration: 0.6, delay: index * 0.3, type: 'spring', stiffness: 100 }}
//               whileHover={{ scale: 1.03, rotate: 1, boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col w-full max-w-sm mx-auto"
//             >
//               {/* Header Section */}
//               <div className={`bg-gradient-to-br ${cardStyles[index].gradient} text-white p-6 text-center relative overflow-hidden`}>
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
//                 <div className="relative z-10">
//                   <h2 className="text-xl font-semibold mb-3 tracking-tight">{service.title}</h2>
//                   <div className="inline-block bg-white px-4 py-1.5 rounded-full shadow-sm">
//                     <p className="text-sm font-medium text-gray-900">{service.sessions}</p>
//                   </div>
//                   <div className="mt-3">
//                     <p className="text-2xl font-bold text-white">₹{service.price}</p>
//                     <p className="text-xs text-white opacity-80">{service.sessions === "Single Session" ? "Per session" : "Total package"}</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-6 flex-grow">
//                 <ul className="space-y-3">
//                   {service.items.map((item, itemIndex) => (
//                     <motion.li
//                       key={itemIndex}
//                       className="flex items-start group"
//                       whileHover={{ x: 5 }}
//                       transition={{ duration: 0.2 }}
//                     >
//                       <div className={`w-2.5 h-2.5 ${cardStyles[index].accent} rounded-full mt-1.5 mr-3 flex-shrink-0 group-hover:scale-150 transition-transform duration-200`}></div>
//                       <p className="text-gray-700 leading-relaxed font-medium text-xs group-hover:text-gray-900 transition-colors duration-200">
//                         {item}
//                       </p>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Action Section */}
//               <div className="p-6 pt-0 mt-auto">
//                 <motion.button
//                   whileHover={{ scale: 1.08, boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-full ${cardStyles[index].button} text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${cardStyles[index].button.split('-')[1]}`}
//                 >
//                   Connect Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TherapyServicesCard;

// import React from 'react';
// import { motion } from 'framer-motion';

// interface ServiceItem {
//   title: string;
//   sessions: string;
//   price: number;
//   items: string[];
// }

// const TherapyServicesCard: React.FC = () => {
//   const services: ServiceItem[] = [
//     {
//       title: "Complete Care",
//       sessions: "Single Session",
//       price: 499,
//       items: [
//         "Establishing rapport",
//         "Provide a safe, supportive and non-judgmental space to explore yourself",
//         "Felt heard and understood"
//       ]
//     },
//     {
//       title: "Essential Support",
//       sessions: "12 Sessions",
//       price: 3700,
//       items: [
//         "Establishing rapport",
//         "Dive deeper into underlying challenges",
//         "Setting goals",
//         "Establishing self-awareness",
//         "Realising coping mechanisms and exploring the coping skills",
//         "Make a plan for maintenance"
//       ]
//     },
//     {
//       title: "Problem-Focused Therapy",
//       sessions: "8 Sessions",
//       price: 5749,
//       items: [
//         "Establishing rapport",
//         "Identifying and analysing your problem",
//         "Goal setting according to your problem",
//         "Generating ideas to resolve obstacles to your problem",
//         "Finding the route to your solution"
//       ]
//     }
//   ];

//   const cardStyles = [
//     {
//       gradient: "from-[#3B4A6B] to-[#4A6B8C]",
//       button: "bg-[#3B4A6B] hover:bg-[#4A6B8C]",
//       accent: "bg-[#4A6B8C]",
//       shadow: "shadow-[#3B4A6B]/20"
//     },
//     {
//       gradient: "from-[#015F4A] to-[#027F61]",
//       button: "bg-[#015F4A] hover:bg-[#027F61]",
//       accent: "bg-[#027F61]",
//       shadow: "shadow-[#015F4A]/20"
//     },
//     {
//       gradient: "from-[#6B3B4A] to-[#8C4A6B]",
//       button: "bg-[#6B3B4A] hover:bg-[#8C4A6B]",
//       accent: "bg-[#8C4A6B]",
//       shadow: "shadow-[#6B3B4A]/20"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.4,
//         delayChildren: 0.2
//       }
//     }
//   };

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 100,
//       scale: 0.8,
//       rotateX: 45
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       rotateX: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//         duration: 0.8
//       }
//     }
//   };

//   const headerVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 120,
//         damping: 15,
//         duration: 0.6
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (index: number) => ({
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: index * 0.1,
//         duration: 0.4,
//         ease: "easeOut"
//       }
//     })
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-4 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-100/30 to-blue-100/30 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <motion.div
//           variants={headerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             className="inline-block mb-4"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <span className="bg-gradient-to-r from-[#015F4A] to-[#027F61] bg-clip-text text-transparent font-semibold text-sm tracking-wider uppercase">
//               Professional Mental Health
//             </span>
//           </motion.div>

//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Our Therapy Services
//           </motion.h1>

//           <motion.p
//             className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Tailored solutions to support your mental health journey with evidence-based approaches
//           </motion.p>
//         </motion.div>

//         {/* Cards Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.1 }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={cardVariants}
//               whileHover={{
//                 scale: 1.05,
//                 y: -10,
//                 rotateY: 5,
//                 boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
//               }}
//               whileTap={{ scale: 0.98 }}
//               className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col group cursor-pointer ${cardStyles[index].shadow}`}
//               style={{
//                 transformStyle: 'preserve-3d',
//                 perspective: '1000px'
//               }}
//             >
//               {/* Header Section */}
//               <div className={`bg-gradient-to-br ${cardStyles[index].gradient} text-white p-8 text-center relative overflow-hidden`}>
//                 {/* Decorative background elements */}
//                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
//                 <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

//                 <div className="relative z-10">
//                   <motion.h2
//                     className="text-2xl font-bold mb-4 tracking-tight"
//                     initial={{ opacity: 0, y: -10 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.3 + index * 0.2 }}
//                   >
//                     {service.title}
//                   </motion.h2>

//                   <motion.div
//                     className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full shadow-sm border border-white/30"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.4 + index * 0.2, type: "spring", stiffness: 200 }}
//                   >
//                     <p className="text-sm font-semibold text-white">{service.sessions}</p>
//                   </motion.div>

//                   <motion.div
//                     className="mt-4"
//                     initial={{ opacity: 0, scale: 0.5 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.5 + index * 0.2, type: "spring", stiffness: 150 }}
//                   >
//                     <p className="text-3xl font-bold text-white mb-1">₹{service.price.toLocaleString()}</p>
//                     <p className="text-sm text-white/80 font-medium">
//                       {service.sessions === "Single Session" ? "Per session" : "Total package"}
//                     </p>
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-8 flex-grow">
//                 <ul className="space-y-4">
//                   {service.items.map((item, itemIndex) => (
//                     <motion.li
//                       key={itemIndex}
//                       custom={itemIndex}
//                       variants={itemVariants}
//                       initial="hidden"
//                       whileInView="visible"
//                       viewport={{ once: true }}
//                       className="flex items-start group/item"
//                       whileHover={{ x: 8 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <motion.div
//                         className={`w-3 h-3 ${cardStyles[index].accent} rounded-full mt-2 mr-4 flex-shrink-0`}
//                         whileHover={{ scale: 1.5, rotate: 180 }}
//                         transition={{ type: "spring", stiffness: 300 }}
//                       />
//                       <p className="text-gray-700 leading-relaxed font-medium text-sm group-hover/item:text-gray-900 transition-colors duration-300">
//                         {item}
//                       </p>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Action Section */}
//               <div className="p-8 pt-0 mt-auto">
//                 <motion.button
//                   whileHover={{
//                     scale: 1.02,
//                     boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`w-full ${cardStyles[index].button} text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-opacity-50 relative overflow-hidden group/btn`}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
//                   />
//                   <span className="relative z-10 flex items-center justify-center gap-2">
//                     Connect Now
//                     <motion.svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       whileHover={{ x: 3 }}
//                       transition={{ type: "spring", stiffness: 400 }}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                     </motion.svg>
//                   </span>
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Trust indicators */}
//         <motion.div
//           className="text-center mt-20"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           <div className="flex justify-center items-center gap-8 flex-wrap">
//             <div className="flex items-center gap-3 text-gray-600">
//               <div className="w-3 h-3 bg-[#015F4A] rounded-full animate-pulse"></div>
//               <span className="font-semibold text-sm">Licensed Therapists</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <div className="w-3 h-3 bg-[#3B4A6B] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//               <span className="font-semibold text-sm">Confidential Sessions</span>
//             </div>
//             <div className="flex items-center gap-3 text-gray-600">
//               <div className="w-3 h-3 bg-[#6B3B4A] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
//               <span className="font-semibold text-sm">Flexible Scheduling</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default TherapyServicesCard;

import React from "react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  sessions: string;
  price: number;
  items: string[];
}

const TherapyServicesCard: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Essential Support",
      sessions: "Single Session",
      price: 499,
      items: [
        "Establishing rapport",
        "Provide a safe, supportive and non-judgmental space to explore yourself",
        "Felt heard and understood",
      ],
    },
    {
      title: "Complete Care",
      sessions: "8 Sessions",
      price: 3700,
      items: [
        "Establishing rapport",
        "Dive deeper into underlying challenges",
        "Setting goals",
        "Establishing self-awareness",
        "Realising coping mechanisms and exploring the coping skills",
        "Make a plan for maintenance",
      ],
    },
    {
      title: "Problem-Focused Therapy",
      sessions: "12 Sessions",
      price: 5749,
      items: [
        "Establishing rapport",
        "Identifying and analysing your problem",
        "Goal setting according to your problem",
        "Generating ideas to resolve obstacles to your problem",
        "Finding the route to your solution",
      ],
    },
  ];

  const cardStyles = [
    {
      gradient: "from-[#015F4A] to-[#014A3B]",
      button: "bg-[#015F4A] hover:bg-[#014A3B]",
      accent: "bg-[#015F4A]",
      shadow: "shadow-[#015F4A]/25",
    },
    {
      gradient: "from-[#027F61] to-[#015F4A]",
      button: "bg-[#027F61] hover:bg-[#015F4A]",
      accent: "bg-[#027F61]",
      shadow: "shadow-[#027F61]/25",
    },
    {
      gradient: "from-[#014A3B] to-[#013B2F]",
      button: "bg-[#014A3B] hover:bg-[#013B2F]",
      accent: "bg-[#014A3B]",
      shadow: "shadow-[#014A3B]/25",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
      rotateX: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.08,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-[#015F4A]/5 py-12 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-[#015F4A]/10 to-[#027F61]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-[#015F4A]/8 to-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#015F4A]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="bg-gradient-to-r from-[#015F4A] to-[#027F61] bg-clip-text text-transparent font-semibold text-sm tracking-wider uppercase">
              Professional Mental Health
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-[#015F4A] bg-clip-text text-transparent tracking-tight mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Therapy Services
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Tailored solutions to support your mental health journey with
            evidence-based approaches
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                rotateY: 3,
                boxShadow: "0 20px 40px rgba(1, 95, 74, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-400 border border-[#015F4A]/10 hover:border-[#015F4A]/30 overflow-hidden flex flex-col group cursor-pointer ${cardStyles[index].shadow}`}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Header Section */}
              <div
                className={`bg-gradient-to-br ${cardStyles[index].gradient} text-white p-6 text-center relative overflow-hidden`}
              >
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                <div className="relative z-10">
                  <motion.h2
                    className="text-xl font-bold mb-3 tracking-tight"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.15 }}
                  >
                    {service.title}
                  </motion.h2>

                  <motion.div
                    className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-white/30"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <p className="text-xs font-semibold text-white">
                      {service.sessions}
                    </p>
                  </motion.div>

                  <motion.div
                    className="mt-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + index * 0.15,
                      type: "spring",
                      stiffness: 150,
                    }}
                  >
                    <p className="text-2xl font-bold text-white mb-1">
                      ₹{service.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-white/80 font-medium">
                      {service.sessions === "Single Session"
                        ? "For a session"
                        : "Total package"}
                    </p>
                  </motion.div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-grow">
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      custom={itemIndex}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-start group/item"
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-2.5 h-2.5 ${cardStyles[index].accent} rounded-full mt-1.5 mr-3 flex-shrink-0`}
                        whileHover={{ scale: 1.4, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <p className="text-gray-700 leading-relaxed font-medium text-sm group-hover/item:text-gray-900 transition-colors duration-300">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action Section */}
              <div className="p-6 pt-0 mt-auto">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 6px 20px rgba(1, 95, 74, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    const message = `Hi! I'm interested in the *${
                      service.title
                    }* therapy service.

*Service Details:*
• Package: ${service.sessions}
• Price: ₹${service.price.toLocaleString()}
• Includes: ${service.items.join(", ")}
I would like to know more about this plan.`;

                    const encodedMessage = encodeURIComponent(message);
                    const whatsappUrl = `https://wa.me/918943175522?text=${encodedMessage}`;
                    window.open(whatsappUrl, "_blank");
                  }}
                  className={`w-full ${cardStyles[index].button} text-white font-bold py-3 px-5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-3 focus:ring-[#015F4A]/30 focus:ring-opacity-50 relative overflow-hidden group/btn cursor-pointer`}
                >
                  <motion.div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-sm">
                    Connect Now
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-2.5 h-2.5 bg-[#015F4A] rounded-full animate-pulse"></div>
              <span className="font-semibold text-sm">Licensed Therapists</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div
                className="w-2.5 h-2.5 bg-[#015F4A] rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <span className="font-semibold text-sm">
                Confidential Sessions
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <div
                className="w-2.5 h-2.5 bg-[#015F4A] rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <span className="font-semibold text-sm">Flexible Scheduling</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TherapyServicesCard;
