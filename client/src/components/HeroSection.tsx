

import React from 'react';
import { motion } from 'framer-motion';
import MeleteLogo1 from '../assets/Melete-logo-2.svg';
import MeleteLogo from '../assets/Melete-logo.svg';
import BackgroundImage from '../assets/bg2.jpg'; 
{/* <a href="http://www.freepik.com">Designed by Freepik</a> */}
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const HeroSection: React.FC = () => {
  return (
    <motion.section
      className="py-28 text-center relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Text shadow styles for better readability */}
      <style>{`
        .text-shadow-strong {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        }
        .logo-shadow {
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5));
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <motion.img
          src={MeleteLogo1}
          alt="Melete Logo"
          className="mx-auto mb-6 h-20 w-auto logo-shadow"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            e.currentTarget.src = MeleteLogo;
          }}
        />
        <motion.blockquote
          className="text-4xl md:text-6xl font-serif italic mb-8 max-w-4xl mx-auto text-white text-shadow-strong"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          "Knowing yourself is the beginning of all wisdom."
        </motion.blockquote>
        <motion.p
          className="text-xl font-medium mb-10 text-white text-shadow-strong"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          — Aristotle
        </motion.p>
        <motion.button
          className="px-8 py-3 rounded-full font-semibold shadow-xl bg-white text-[#015F4A] hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-white"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: '0 10px 25px rgba(255,255,255,0.3)',
            y: -2
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Get Started
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;





// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Brain, Heart, Users, Clock } from 'lucide-react';

// const services = [
//   {
//     icon: <Brain className="w-8 h-8" />,
//     title: "Expert Consultations",
//     description: "Connect with certified mental health professionals 24/7"
//   },
//   {
//     icon: <Heart className="w-8 h-8" />,
//     title: "Wellness Programs",
//     description: "Guided yoga, meditation, and personalized wellness plans"
//   },
//   {
//     icon: <Users className="w-8 h-8" />,
//     title: "Workshops & Training",
//     description: "Awareness workshops and skill-building sessions"
//   },
//   {
//     icon: <Clock className="w-8 h-8" />,
//     title: "24/7 Support",
//     description: "Round-the-clock emotional care and crisis intervention"
//   }
// ];

// const AboutSection: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl font-bold text-[#015F4A] mb-6">Our Vision & Mission</h2>
//             <div className="space-y-6">
//               <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#015F4A]">
//                 <h3 className="text-xl font-semibold text-[#015F4A] mb-3">Our Vision</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   To create a world where mental health support is accessible, affordable, and stigma-free—available anytime, anywhere.
//                 </p>
//               </div>
//               <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#015F4A]">
//                 <h3 className="text-xl font-semibold text-[#015F4A] mb-3">Our Mission</h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   To simplify access to mental health care through a secure, user-friendly platform. We empower individuals to prioritize well-being, connect with expert professionals, and promote a culture of awareness and acceptance.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             {services.map((service, index) => (
//               <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                 <div className="text-[#015F4A] mb-3 flex justify-center">
//                   {service.icon}
//                 </div>
//                 <h4 className="font-semibold text-[#015F4A] mb-2">{service.title}</h4> 
//                 <p className="text-sm text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="text-center mt-12">
//           <button
//             className="px-8 py-3 rounded-full bg-teal-600 text-white font-semibold text-base shadow-md hover:bg-teal-500 transition-all duration-300"
//             onClick={() => navigate('/about')}
//           >
//             Show More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Heart, Users, Brain, Clock, Award } from 'lucide-react';
// import serviceImage from '../assets/service.jpg';
// import melteIcon from '../assets/Micon.png';

// const HomeOverview = () => {
//   const services = [
//     {
//       icon: <Brain className="w-6 h-6" />,
//       title: "Expert Consultations",
//       description: "Connect with certified mental health professionals 24/7"
//     },
//     {
//       icon: <Heart className="w-6 h-6" />,
//       title: "Wellness Programs",
//       description: "Guided yoga, meditation, and wellness plans"
//     },
//     {
//       icon: <Users className="w-6 h-6" />,
//       title: "Workshops & Training",
//       description: "Awareness and skill-building sessions"
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "24/7 Support",
//       description: "Round-the-clock emotional care"
//     }
//   ];

//   return (
//     <div className="py-12 bg-white">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-br from-[#015F4A] to-[#014a3a] text-white py-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <div className="flex items-center mb-4">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
//                   <img src={melteIcon} alt="Logo" className="w-5 h-5" />
//                 </div>
//                 <h1 className="text-4xl font-bold">MELETE</h1>
//               </div>
//               <p className="text-lg mb-6 leading-relaxed">
//                 KSUM-recognized platform offering 24/7 mental health support through a secure, user-friendly app.
//               </p>
//               <div className="flex flex-wrap gap-4 text-sm">
//                 <div className="flex items-center">
//                   <Award className="w-4 h-4 mr-1" />
//                   <span>KSUM Recognized</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Clock className="w-4 h-4 mr-1" />
//                   <span>24/7 Available</span>
//                 </div>
//               </div>
//               <Link
//                 to="/services"
//                 className="mt-6 inline-block bg-white text-[#015F4A] py-2 px-6 rounded-lg font-semibold hover:bg-[#015F4A] hover:text-white transition-colors"
//               >
//                 Show More
//               </Link>
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src={serviceImage}
//                 alt="Mental Health Support"
//                 className="rounded-xl shadow-lg w-full max-w-sm h-64 object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Services Overview */}
//       <div className="py-12 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-[#015F4A] text-center mb-8">What We Offer</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {services.map((service, index) => (
//               <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
//                 <div className="text-[#015F4A] mb-2 flex justify-center">{service.icon}</div>
//                 <h4 className="font-semibold text-[#015F4A] text-sm mb-1">{service.title}</h4>
//                 <p className="text-xs text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <Link
//               to="/services"
//               className="inline-block bg-[#015F4A] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#014a3a] transition-colors"
//             >
//               Explore All Services
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomeOverview;






