// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { NavLink } from 'react-router-dom';
// // import { ChevronDown } from 'lucide-react';
// // import MeleteLogo from '../assets/logoWhite.png';
// // import MeleteLogo1 from '../assets/Melete-logo-2.svg';
// // import { NavItem } from '../types/types';

// // const navItems: NavItem[] = [
// //   // { name: 'Who Joined With Melete', items: ['Child', 'Parent', 'Pregnant', 'Adult', 'Old Age'] },
// //   // { name: 'Relaxation For', items: ['Anger Issues', 'Depression', 'Mood Swings', 'Stress', 'Anxiety'] },
// //    { name: 'Home', href:'/'},
// //     { name: 'Service', href:'/service'},
// //      { name: 'OurExperts', href:'/experts'},
// //   { name: 'About', href:'/about'},
// //   { name: 'Contact', href: '/contact' },
// // ];

// // const navVariants = {
// //   hidden: { opacity: 0, y: -60 },
// //   visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
// // };

// // const Navbar: React.FC = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
// //   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

// //   return (
// //     <motion.nav
// //       className="p-6 sticky top-0 z-50 shadow-lg"
// //       style={{ backgroundColor: '#015F4A', color: 'white' }}
// //       variants={navVariants}
// //       initial="hidden"
// //       animate="visible"
// //     >
// //       <div className="container mx-auto flex justify-between items-center">
// //         <motion.div className="flex items-center space-x-4" whileHover={{ scale: 1.1 }}>
// //           <NavLink to="/">
// //             <img
// //               src={MeleteLogo}
// //               alt="Melete Logo"
// //               className="h-14 w-auto"
// //               onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
// //                 e.currentTarget.src = MeleteLogo1;
// //               }}
// //             />
// //           </NavLink>
// //         </motion.div>
// //         <div className="md:hidden">
// //           <button
// //             className="focus:outline-none"
// //             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //             aria-label="Toggle mobile menu"
// //           >
// //             <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="2"
// //                 d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
// //               />
// //             </svg>
// //           </button>
// //         </div>
// //         <div className="hidden md:flex space-x-10 items-center">
// //           {navItems.map((menu, idx) => (
// //             <div key={idx} className="group relative">
// //               {menu.items ? (
// //                 <>
// //                   <span
// //                     className="cursor-pointer font-semibold hover:text-[#66BFA1] transition-colors duration-300 flex items-center"
// //                     style={{ color: 'white' }}
// //                   >
// //                     {menu.name}
// //                     <ChevronDown className="ml-1 w-4 h-4" />
// //                   </span>
// //                   <motion.div
// //                     className="absolute hidden group-hover:flex flex-col rounded-lg shadow-2xl p-5 mt-3 min-w-[180px]"
// //                     style={{ backgroundColor: '#0A4F43', color: 'white' }}
// //                     initial={{ opacity: 0, y: 15 }}
// //                     animate={{ opacity: 1, y: 0 }}
// //                     transition={{ duration: 0.4 }}
// //                   >
// //                     {menu.items.map((item) => (
// //                       <NavLink
// //                         key={item}
// //                         to={`/${item.toLowerCase().replace(' ', '-')}`}
// //                         className="py-2 px-4 text-base hover:bg-[#1F6F5F] rounded-md transition-all duration-300"
// //                         style={{ color: 'white' }}
// //                       >
// //                         {item}
// //                       </NavLink>
// //                     ))}
// //                   </motion.div>
// //                 </>
// //               ) : (
// //                 <NavLink
// //                   to={menu.href || '#'}
// //                   className={({ isActive }) =>
// //                     `font-semibold transition-colors duration-300 ${
// //                       isActive ? 'text-[#66BFA1]' : 'text-white hover:text-[#66BFA1]'
// //                     }`
// //                   }
// //                 >
// //                   {menu.name}
// //                 </NavLink>
// //               )}
// //             </div>
// //           ))}
// //           <motion.button
// //             className="px-6 py-3 rounded-full font-semibold shadow-md hidden md:block"
// //             style={{ backgroundColor: '#31A382', color: 'white' }}
// //             whileHover={{ scale: 1.1, backgroundColor: '#2F9B7A' }}
// //             whileTap={{ scale: 0.95 }}
// //           >
// //             Get Started
// //           </motion.button>
// //         </div>
// //       </div>
// //       <AnimatePresence>
// //         {isMobileMenuOpen && (
// //           <motion.div
// //             className="md:hidden fixed inset-0 bg-[#0A4F43] z-50 flex flex-col"
// //             initial={{ opacity: 0, x: '100%' }}
// //             animate={{ opacity: 1, x: 0 }}
// //             exit={{ opacity: 0, x: '100%' }}
// //             transition={{ duration: 0.3 }}
// //           >
// //             <div className="flex justify-between items-center p-6 border-b border-[#1F6F5F]">
// //               <NavLink to="/">
// //                 <img
// //                   src={MeleteLogo}
// //                   alt="Melete Logo"
// //                   className="h-12 w-auto"
// //                   onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
// //                     e.currentTarget.src = MeleteLogo1;
// //                   }}
// //                 />
// //               </NavLink>
// //               <button
// //                 className="focus:outline-none"
// //                 onClick={() => setIsMobileMenuOpen(false)}
// //                 aria-label="Close mobile menu"
// //               >
// //                 <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth="2"
// //                     d="M6 18L18 6M6 6l12 12"
// //                   />
// //                 </svg>
// //               </button>
// //             </div>
// //             <div className="flex-1 overflow-y-auto p-6">
// //               {navItems.map((menu, idx) => (
// //                 <div key={idx} className="mb-4">
// //                   {menu.items ? (
// //                     <div>
// //                       <button
// //                         className="w-full flex justify-between items-center font-semibold text-lg text-white hover:text-[#66BFA1] transition-colors duration-300 py-2"
// //                         onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
// //                       >
// //                         {menu.name}
// //                         <ChevronDown
// //                           className={`w-5 h-5 transition-transform duration-300 ${
// //                             openDropdown === idx ? 'rotate-180' : ''
// //                           }`}
// //                         />
// //                       </button>
// //                       <AnimatePresence>
// //                         {openDropdown === idx && (
// //                           <motion.div
// //                             className="flex flex-col bg-[#1F6F5F] rounded-lg mt-2 p-4"
// //                             initial={{ opacity: 0, height: 0 }}
// //                             animate={{ opacity: 1, height: 'auto' }}
// //                             exit={{ opacity: 0, height: 0 }}
// //                             transition={{ duration: 0.3 }}
// //                           >
// //                             {menu.items.map((item) => (
// //                               <NavLink
// //                                 key={item}
// //                                 to={`/${item.toLowerCase().replace(' ', '-')}`}
// //                                 className="py-2 text-base text-[#D1E8E2] hover:text-[#31A382] transition-colors duration-300 text-left"
// //                                 onClick={() => {
// //                                   setIsMobileMenuOpen(false);
// //                                   setOpenDropdown(null);
// //                                 }}
// //                               >
// //                                 {item}
// //                               </NavLink>
// //                             ))}
// //                           </motion.div>
// //                         )}
// //                       </AnimatePresence>
// //                     </div>
// //                   ) : (
// //                     <NavLink
// //                       to={menu.href || '#'}
// //                       className={({ isActive }) =>
// //                         `block font-semibold text-lg transition-colors duration-300 py-2 ${
// //                           isActive ? 'text-[#66BFA1]' : 'text-white hover:text-[#66BFA1]'
// //                         }`
// //                       }
// //                       onClick={() => {
// //                         setIsMobileMenuOpen(false);
// //                         setOpenDropdown(null);
// //                       }}
// //                     >
// //                       {menu.name}
// //                     </NavLink>
// //                   )}
// //                 </div>
// //               ))}
// //               <motion.button
// //                 className="w-full px-8 py-3 rounded-full font-semibold shadow-md mt-6"
// //                 style={{ backgroundColor: '#31A382', color: 'white' }}
// //                 whileHover={{ scale: 1.05, backgroundColor: '#2F9B7A' }}
// //                 whileTap={{ scale: 0.95 }}
// //                 onClick={() => {
// //                   setIsMobileMenuOpen(false);
// //                   setOpenDropdown(null);
// //                 }}
// //               >
// //                 Get Started
// //               </motion.button>
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </motion.nav>
// //   );
// // };

// // export default Navbar;



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { NavLink } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';
// import MeleteLogo from '../assets/logoWhite.png';
// import MeleteLogo1 from '../assets/Melete-logo-2.svg';
// import { NavItem } from '../types/types';

// const navItems: NavItem[] = [
//   // { name: 'Who Joined With Melete', items: ['Child', 'Parent', 'Pregnant', 'Adult', 'Old Age'] },
//   // { name: 'Relaxation For', items: ['Anger Issues', 'Depression', 'Mood Swings', 'Stress', 'Anxiety'] },
//   { name: 'Home', href: '/' },
//   { name: 'Service', href: '/service' },
//   { name: 'Our Experts', href: '/experts' },
//   { name: 'About', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// const navVariants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const mobileMenuVariants = {
//   hidden: { opacity: 0, y: '-100%' },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
//   exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
// };

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   return (
//     <>
//       <motion.nav
//         className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-900 to-teal-800 shadow-lg"
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.div
//             className="flex items-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
//               <img
//                 src={MeleteLogo}
//                 alt="Melete Logo"
//                 className="h-12 w-auto transition-transform duration-300"
//                 onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
//                   e.currentTarget.src = MeleteLogo1;
//                 }}
//               />
//             </NavLink>
//           </motion.div>

//           <div className="md:hidden">
//             <button
//               className="focus:outline-none text-white"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle mobile menu"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((menu, idx) => (
//               <div key={idx} className="group relative">
//                 {menu.items ? (
//                   <>
//                     <button
//                       className="flex items-center text-white font-semibold text-base hover:text-teal-300 transition-colors duration-300"
//                       onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
//                     >
//                       {menu.name}
//                       <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
//                     </button>
//                     <motion.div
//                       className="absolute hidden group-hover:block flex-col bg-teal-800/95 backdrop-blur-md rounded-lg shadow-xl p-4 mt-2 min-w-[180px]"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3, ease: 'easeOut' }}
//                     >
//                       {menu.items.map((item) => (
//                         <NavLink
//                           key={item}
//                           to={`/${item.toLowerCase().replace(' ', '-')}`}
//                           className="py-2 px-4 text-sm text-teal-100 hover:bg-teal-700 hover:text-white rounded-md transition-all duration-300"
//                           onClick={() => setOpenDropdown(null)}
//                         >
//                           {item}
//                         </NavLink>
//                       ))}
//                     </motion.div>
//                   </>
//                 ) : (
//                   <NavLink
//                     to={menu.href || '#'}
//                     className={({ isActive }) =>
//                       `text-base font-semibold transition-colors duration-300 ${
//                         isActive ? 'text-teal-300 border-b-2 border-teal-300' : 'text-white hover:text-teal-300'
//                       }`
//                     }
//                   >
//                     {menu.name}
//                   </NavLink>
//                 )}
//               </div>
//             ))}
//             <motion.button
//               className="px-6 py-2 rounded-full bg-teal-600 text-white font-semibold text-base shadow-md hover:bg-teal-500 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black/50 z-30 md:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             />
//             <motion.div
//               className="md:hidden fixed left-0 right-0 top-16 bg-teal-900/95 backdrop-blur-md z-40 flex flex-col min-h-[calc(100vh-4rem)]"
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <div className="flex-1 overflow-y-auto p-6 space-y-3">
//                 {navItems.map((menu, idx) => (
//                   <div key={idx} className="mb-2">
//                     {menu.items ? (
//                       <div>
//                         <button
//                           className="w-full flex justify-between items-center text-white font-semibold text-lg hover:text-teal-300 transition-colors duration-300 py-2"
//                           onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
//                         >
//                           {menu.name}
//                           <ChevronDown
//                             className={`w-5 h-5 transition-transform duration-300 ${
//                               openDropdown === idx ? 'rotate-180' : ''
//                             }`}
//                           />
//                         </button>
//                         <AnimatePresence>
//                           {openDropdown === idx && (
//                             <motion.div
//                               className="flex flex-col bg-teal-800/95 backdrop-blur-md rounded-lg mt-2 p-4"
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: 'auto' }}
//                               exit={{ opacity: 0, height: 0 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               {menu.items.map((item) => (
//                                 <NavLink
//                                   key={item}
//                                   to={`/${item.toLowerCase().replace(' ', '-')}`}
//                                   className="py-2 text-base text-teal-100 hover:text-teal-300 transition-colors duration-300"
//                                   onClick={() => {
//                                     setIsMobileMenuOpen(false);
//                                     setOpenDropdown(null);
//                                   }}
//                                 >
//                                   {item}
//                                 </NavLink>
//                               ))}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <NavLink
//                         to={menu.href || '#'}
//                         className={({ isActive }) =>
//                           `block text-lg font-semibold transition-colors duration-300 py-2 ${
//                             isActive ? 'text-teal-300 border-l-4 border-teal-300 pl-2' : 'text-white hover:text-teal-300'
//                           }`
//                         }
//                         onClick={() => {
//                           setIsMobileMenuOpen(false);
//                           setOpenDropdown(null);
//                         }}
//                       >
//                         {menu.name}
//                       </NavLink>
//                     )}
//                   </div>
//                 ))}
//                 <motion.button
//                   className="w-full px-8 py-3 rounded-full bg-teal-600 text-white font-semibold text-base shadow-md hover:bg-teal-500 transition-all duration-300"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setIsMobileMenuOpen(false);
//                     setOpenDropdown(null);
//                   }}
//                 >
//                   Get Started
//                 </motion.button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;




// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { NavLink } from 'react-router-dom';
// import { ChevronDown } from 'lucide-react';
// import MeleteLogo from '../assets/logoWhite.png';
// import MeleteLogo1 from '../assets/Melete-logo-2.svg';
// import { NavItem } from '../types/types';

// const navItems: NavItem[] = [
//   { name: 'Home', href: '/' },
//   { name: 'Service', href: '/service' },
//   { name: 'Our Experts', href: '/experts' },
//   { name: 'About', href: '/about' },
//   { name: 'Contact', href: '/contact' },
//   { name: 'Improve With Us', href: '/improve' }, // Added new navigation item
// ];

// const navVariants = {
//   hidden: { opacity: 0, y: -50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const mobileMenuVariants = {
//   hidden: { opacity: 0, y: '-100%' },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
//   exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
// };

// const Navbar: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   return (
//     <>
//       <motion.nav
//         className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-teal-900 to-teal-800 shadow-lg"
//         variants={navVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//           <motion.div
//             className="flex items-center"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//           >
//             <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
//               <img
//                 src={MeleteLogo}
//                 alt="Melete Logo"
//                 className="h-12 w-auto transition-transform duration-300"
//                 onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
//                   e.currentTarget.src = MeleteLogo1;
//                 }}
//               />
//             </NavLink>
//           </motion.div>

//           <div className="md:hidden">
//             <button
//               className="focus:outline-none text-white"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle mobile menu"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="hidden md:flex items-center space-x-6">
//             {navItems.map((menu, idx) => (
//               <div key={idx} className="group relative">
//                 {menu.items ? (
//                   <>
//                     <button
//                       className="flex items-center text-white font-semibold text-base hover:text-teal-300 transition-colors duration-300"
//                       onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
//                     >
//                       {menu.name}
//                       <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
//                     </button>
//                     <motion.div
//                       className="absolute hidden group-hover:block flex-col bg-teal-800/95 backdrop-blur-md rounded-lg shadow-xl p-4 mt-2 min-w-[180px]"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.3, ease: 'easeOut' }}
//                     >
//                       {menu.items.map((item) => (
//                         <NavLink
//                           key={item}
//                           to={`/${item.toLowerCase().replace(' ', '-')}`}
//                           className="py-2 px-4 text-sm text-teal-100 hover:bg-teal-700 hover:text-white rounded-md transition-all duration-300"
//                           onClick={() => setOpenDropdown(null)}
//                         >
//                           {item}
//                         </NavLink>
//                       ))}
//                     </motion.div>
//                   </>
//                 ) : (
//                   <NavLink
//                     to={menu.href || '#'}
//                     className={({ isActive }) =>
//                       `text-base font-semibold transition-colors duration-300 ${
//                         isActive ? 'text-teal-300 border-b-2 border-teal-300' : 'text-white hover:text-teal-300'
//                       }`
//                     }
//                   >
//                     {menu.name}
//                   </NavLink>
//                 )}
//               </div>
//             ))}
//             <motion.button
//               className="px-6 py-2 rounded-full bg-teal-600 text-white font-semibold text-base shadow-vm hover:bg-teal-500 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get Started
//             </motion.button>
//           </div>
//         </div>
//       </motion.nav>

//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black/50 z-30 md:hidden"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setIsMobileMenuOpen(false)}
//             />
//             <motion.div
//               className="md:hidden fixed left-0 right-0 top-16 bg-teal-900/95 backdrop-blur-md z-40 flex flex-col min-h-[calc(100vh-4rem)]"
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <div className="flex-1 overflow-y-auto p-6 space-y-3">
//                 {navItems.map((menu, idx) => (
//                   <div key={idx} className="mb-2">
//                     {menu.items ? (
//                       <div>
//                         <button
//                           className="w-full flex justify-between items-center text-white font-semibold text-lg hover:text-teal-300 transition-colors duration-300 py-2"
//                           onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
//                         >
//                           {menu.name}
//                           <ChevronDown
//                             className={`w-5 h-5 transition-transform duration-300 ${
//                               openDropdown === idx ? 'rotate-180' : ''
//                             }`}
//                           />
//                         </button>
//                         <AnimatePresence>
//                           {openDropdown === idx && (
//                             <motion.div
//                               className="flex flex-col bg-teal-800/95 backdrop-blur-md rounded-lg mt-2 p-4"
//                               initial={{ opacity: 0, height: 0 }}
//                               animate={{ opacity: 1, height: 'auto' }}
//                               exit={{ opacity: 0, height: 0 }}
//                               transition={{ duration: 0.3 }}
//                             >
//                               {menu.items.map((item) => (
//                                 <NavLink
//                                   key={item}
//                                   to={`/${item.toLowerCase().replace(' ', '-')}`}
//                                   className="py-2 text-base text-teal-100 hover:text-teal-300 transition-colors duration-300"
//                                   onClick={() => {
//                                     setIsMobileMenuOpen(false);
//                                     setOpenDropdown(null);
//                                   }}
//                                 >
//                                   {item}
//                                 </NavLink>
//                               ))}
//                             </motion.div>
//                           )}
//                         </AnimatePresence>
//                       </div>
//                     ) : (
//                       <NavLink
//                         to={menu.href || '#'}
//                         className={({ isActive }) =>
//                           `block text-lg font-semibold transition-colors duration-300 py-2 ${
//                             isActive ? 'text-teal-300 border-l-4 border-teal-300 pl-2' : 'text-white hover:text-teal-300'
//                           }`
//                         }
//                         onClick={() => {
//                           setIsMobileMenuOpen(false);
//                           setOpenDropdown(null);
//                         }}
//                       >
//                         {menu.name}
//                       </NavLink>
//                     )}
//                   </div>
//                 ))}
//                 <motion.button
//                   className="w-full px-8 py-3 rounded-full bg-teal-600 text-white font-semibold text-base shadow-md hover:bg-teal-500 transition-all duration-300"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setIsMobileMenuOpen(false);
//                     setOpenDropdown(null);
//                   }}
//                 >
//                   Get Started
//                 </motion.button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import MeleteLogo from '../assets/logoWhite.png';
import MeleteLogo1 from '../assets/Melete-logo-2.svg';
import { NavItem } from '../types/types';

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Service', href: '/service' },
  { name: 'Our Experts', href: '/experts' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Improve With Us', href: '/improve' }, // Added new navigation item
];

const navVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: '-100%' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.3, ease: 'easeInOut' } },
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 shadow-lg"
        style={{ backgroundColor: '#F9F9F9' }}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src={MeleteLogo1}
                alt="Melete Logo"
                className="h-12 w-auto transition-transform duration-300"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  e.currentTarget.src = MeleteLogo;
                }}
              />
            </NavLink>
          </motion.div>

          <div className="md:hidden">
            <button
              className="focus:outline-none text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((menu, idx) => (
              <div key={idx} className="group relative">
                {menu.items ? (
                  <>
                    <button
                      className="flex items-center text-gray-800 font-semibold text-base hover:text-gray-600 transition-colors duration-300"
                      onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                    >
                      {menu.name}
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    <motion.div
                      className="absolute hidden group-hover:block flex-col shadow-xl p-4 mt-2 min-w-[180px] rounded-lg"
                      style={{ backgroundColor: '#F9F9F9' }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                      {menu.items.map((item) => (
                        <NavLink
                          key={item}
                          to={`/${item.toLowerCase().replace(' ', '-')}`}
                          className="py-2 px-4 text-sm text-gray-700 hover:bg-gray-200 hover:text-gray-900 rounded-md transition-all duration-300"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item}
                        </NavLink>
                      ))}
                    </motion.div>
                  </>
                ) : (
                  <NavLink
                    to={menu.href || '#'}
                    className={({ isActive }) =>
                      `text-base font-semibold transition-colors duration-300 ${
                        isActive ? 'text-gray-600 border-b-2 border-gray-600' : 'text-gray-800 hover:text-gray-600'
                      }`
                    }
                  >
                    {menu.name}
                  </NavLink>
                )}
              </div>
            ))}
            <motion.button
              className="px-6 py-2 rounded-full font-semibold text-base shadow-md hover:opacity-90 transition-all duration-300 text-white"
              style={{ backgroundColor: '#015F4A' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="md:hidden fixed left-0 right-0 top-16 backdrop-blur-md z-40 flex flex-col min-h-[calc(100vh-4rem)]"
              style={{ backgroundColor: '#F9F9F9' }}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex-1 overflow-y-auto p-6 space-y-3">
                {navItems.map((menu, idx) => (
                  <div key={idx} className="mb-2">
                    {menu.items ? (
                      <div>
                        <button
                          className="w-full flex justify-between items-center text-gray-800 font-semibold text-lg hover:text-gray-600 transition-colors duration-300 py-2"
                          onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                        >
                          {menu.name}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${
                              openDropdown === idx ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openDropdown === idx && (
                            <motion.div
                              className="flex flex-col backdrop-blur-md rounded-lg mt-2 p-4"
                              style={{ backgroundColor: '#F0F0F0' }}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {menu.items.map((item) => (
                                <NavLink
                                  key={item}
                                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                                  className="py-2 text-base text-gray-700 hover:text-gray-900 transition-colors duration-300"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setOpenDropdown(null);
                                  }}
                                >
                                  {item}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <NavLink
                        to={menu.href || '#'}
                        className={({ isActive }) =>
                          `block text-lg font-semibold transition-colors duration-300 py-2 ${
                            isActive ? 'text-gray-600 border-l-4 border-gray-600 pl-2' : 'text-gray-800 hover:text-gray-600'
                          }`
                        }
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {menu.name}
                      </NavLink>
                    )}
                  </div>
                ))}
                <motion.button
                  className="w-full px-8 py-3 rounded-full font-semibold text-base shadow-md hover:opacity-90 transition-all duration-300 text-white"
                  style={{ backgroundColor: '#015F4A' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setOpenDropdown(null);
                  }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;