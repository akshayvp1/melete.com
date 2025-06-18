






// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import {
//   Star,
//   Brain,
//   AlertTriangle,
//   Frown,
//   Bed,
//   Apple,
//   Dumbbell,
//   Award,
//   Clock,
//   Users,
//   Monitor,
//   Target,
//   Heart,
//   HeartHandshake,
// } from 'lucide-react';
// import SelfImage from '../assets/Self-Confidence.jpg';
// import StressImage from '../assets/stress.jpg';
// import AnxietyImage from '../assets/Anxiety.jpg';
// import DepressionImage from '../assets/Depression.jpg';
// import SleepImage from '../assets/Sleep-hygine.jpg';
// import UnhealthyImage from '../assets/Unhealthy-diet.jpg';
// import LackImage from '../assets/Lack-of-Physical-activity.jpg';
// import Substance from '../assets/Substance-abuse.jpg';
// import WorkImage from '../assets/Worklife-balance.jpg';
// import SocialImage from '../assets/Social-connection.jpg';
// import DigitalImage from '../assets/Digital-overloaded.jpg';
// import GoalImage from '../assets/Goal-direction.jpg';
// import EmotionalImage from '../assets/Emotional-need.jpg';
// import RelationshipImage from '../assets/Relationship.jpg';
// import { TherapyImprovement } from '../types/types';

// const therapyImprovements: TherapyImprovement[] = [
//   {
//     title: 'Self Confidence',
//     desc: 'Self-confidence means believing in yourself and your abilities. It’s about trusting your own decisions, knowing your strengths and weaknesses, and feeling in control of your life.',
//     icon: 'Star',
//     bgImage: SelfImage,
//   },
//   {
//     title: 'Stress',
//     desc: 'Psychological stress is the way our mind and body respond to pressure or challenges, whether they come from inside us or from the world around us. It happens when we feel off balance or overwhelmed.',
//     icon: 'Brain',
//     bgImage: StressImage,
//   },
//   {
//     title: 'Anxiety',
//     desc: 'Anxiety is a common emotion, and it can cause physical symptoms, such as shaking and sweating. When anxiety becomes persistent or excessive, a person may have an anxiety disorder.',
//     icon: 'AlertTriangle',
//     bgImage: AnxietyImage,
//   },
//   {
//     title: 'Depression',
//     desc: 'Depression is a common and serious mental disorder that negatively affects how you feel, think, act, and perceive the world.',
//     icon: 'Frown',
//     bgImage: DepressionImage,
//   },
//   {
//     title: 'Sleep Hygiene',
//     desc: 'Sleep hygiene means having good habits and routines that help you sleep well. It includes things like going to bed at the same time each night, keeping your bedroom quiet and comfortable, and avoiding screens or caffeine before bed.',
//     icon: 'Bed',
//     bgImage: SleepImage,
//   },
//   {
//     title: 'Unhealthy Diet',
//     desc: 'An unhealthy diet is when someone eats too many foods that are high in calories, sugar, unhealthy fats, and salt, but low in important nutrients like vitamins, minerals, and fiber.',
//     icon: 'Apple',
//     bgImage: UnhealthyImage,
//   },
//   {
//     title: 'Lack of Physical Activity',
//     desc: 'Lack of physical activity, or physical inactivity, refers to not engaging in enough moderate to vigorous exercise to support good health.',
//     icon: 'Dumbbell',
//     bgImage: LackImage,
//   },
//   {
//     title: 'Substance Abuse',
//     desc: 'The use of illegal drugs or the use of prescription or over-the-counter drugs or alcohol for purposes other than those for which they are meant to be used, or in excessive amounts.',
//     icon: 'Award',
//     bgImage: Substance,
//   },
//   {
//     title: 'Work Life Balance',
//     desc: 'Work-life balance means finding a healthy mix between your job and personal life. It’s about managing your time and energy so you can do your work, take care of your personal responsibilities, and still have time to rest and enjoy life.',
//     icon: 'Clock',
//     bgImage: WorkImage,
//   },
//   {
//     title: 'Social Connection',
//     desc: 'Social connection refers to the quality and quantity of relationships we have with others, encompassing a feeling of belonging and being cared for. It’s a fundamental human need, crucial for well-being and even physical health.',
//     icon: 'Users',
//     bgImage: SocialImage,
//   },
//   {
//     title: 'Digital Overload',
//     desc: 'Digital overload describes the feeling of being overwhelmed by the vast amount of digital information and interactions we encounter daily.',
//     icon: 'Monitor',
//     bgImage: DigitalImage,
//   },
//   {
//     title: 'Goal Direction',
//     desc: 'Goal direction means having a clear purpose and working toward it. It’s about planning your actions and making choices that help you reach a specific goal.',
//     icon: 'Target',
//     bgImage: GoalImage,
//   },
//   {
//     title: 'Emotional Need',
//     desc: 'Emotional needs are the feelings and support we need to feel happy and fulfilled. When these needs are met, we feel good about ourselves and our lives. If they’re not met, we might feel sad, frustrated, or lonely.',
//     icon: 'Heart',
//     bgImage: EmotionalImage,
//   },
//   {
//     title: 'Relationship',
//     desc: 'Relationships play a crucial role in human well-being and personal growth, making them an essential part of our lives.',
//     icon: 'HeartHandshake',
//     bgImage: RelationshipImage,
//   },
// ];

// const sectionVariants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 50, rotate: -5 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     rotate: 0,
//     transition: { delay: i * 0.1, duration: 0.7 },
//   }),
//   hover: {
//     scale: 1.05,
//     boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
//     transition: { duration: 0.3 },
//   },
// };

// // Map icon names to lucide-react components
// const iconMap: { [key: string]: React.ComponentType<{ style: React.CSSProperties }> } = {
//   Star,
//   Brain,
//   AlertTriangle,
//   Frown,
//   Bed,
//   Apple,
//   Dumbbell,
//   Award,
//   Clock,
//   Users,
//   Monitor,
//   Target,
//   Heart,
//   HeartHandshake,
// };

// const TherapyImprovementsSection: React.FC = () => {
//   const [activeCard, setActiveCard] = useState<number | null>(null);
//   const navigate = useNavigate();
//   const displayedItems = therapyImprovements.slice(0, 4); // Show only the first 4 items

//   return (
//     <motion.section
//       className="py-24 text-center"
//       style={{ backgroundColor: '#F9F9F9' }}
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//     >
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
//           What You Can Improve With Us
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {displayedItems.map((item, index) => {
//             const IconComponent = iconMap[item.icon];
//             return (
//               <motion.div
//                 key={item.title}
//                 className="relative p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
//                 style={{
//                   minHeight: '300px',
//                   backgroundImage: `url(${item.bgImage})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                 }}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={index}
//                 whileHover="hover"
//                 onClick={() => setActiveCard(activeCard === index ? null : index)}
//               >
//                 <div
//                   className={`absolute inset-0 transition-all duration-300 ${
//                     activeCard === index ? 'bg-[#015F4A] opacity-80' : 'bg-black opacity-40 group-hover:bg-[#015F4A] group-hover:opacity-80'
//                   }`}
//                 ></div>
//                 <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
//                   <div className="mb-5">{IconComponent ? <IconComponent style={{ color: '#31A382' }} /> : null}</div>
//                   <h3 className="text-lg font-semibold mb-3 text-center">{item.title}</h3>
//                   <AnimatePresence>
//                     {activeCard === index ? (
//                       <motion.div
//                         className="absolute inset-0 flex items-center justify-center p-4 text-sm leading-relaxed text-center bg-[#015F4A] bg-opacity-90"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: 20 }}
//                         transition={{ duration: 0.4 }}
//                       >
//                         <div className="max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#31A382] scrollbar-track-transparent px-2">
//                           {item.desc}
//                         </div>
//                       </motion.div>
//                     ) : (
//                       <motion.p
//                         className="text-sm leading-relaxed text-center max-w-xs transition-opacity duration-300"
//                         initial={{ opacity: 1 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                       >
//                         {item.desc.substring(0, 50) + '...'}
//                       </motion.p>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//         <motion.button
//           className="mt-12 px-8 py-3 rounded-full bg-teal-600 text-white font-semibold text-base shadow-md hover:bg-teal-500 transition-all duration-300"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => navigate('/improve')}
//         >
//           Show More
//         </motion.button>
//       </div>
//     </motion.section>
//   );
// };

// export default TherapyImprovementsSection;





// import React, { useState } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import {
//   Star,
//   Brain,
//   AlertTriangle,
//   Frown,
//   Bed,
//   Apple,
//   Dumbbell,
//   Award,
//   Clock,
//   Users,
//   Monitor,
//   Target,
//   Heart,
//   HeartHandshake,
// } from 'lucide-react';
// import SelfImage from '../assets/Self-Confidence.jpg';
// import StressImage from '../assets/stress.jpg';
// import AnxietyImage from '../assets/Anxiety.jpg';
// import DepressionImage from '../assets/Depression.jpg';
// import SleepImage from '../assets/Sleep-hygine.jpg';
// import UnhealthyImage from '../assets/Unhealthy-diet.jpg';
// import LackImage from '../assets/Lack-of-Physical-activity.jpg';
// import Substance from '../assets/Substance-abuse.jpg';
// import WorkImage from '../assets/Worklife-balance.jpg';
// import SocialImage from '../assets/Social-connection.jpg';
// import DigitalImage from '../assets/Digital-overloaded.jpg';
// import GoalImage from '../assets/Goal-direction.jpg';
// import EmotionalImage from '../assets/Emotional-need.jpg';
// import RelationshipImage from '../assets/Relationship.jpg';
// import { TherapyImprovement } from '../types/types';

// // Animation variants
// const sectionVariants: Variants = {
//   hidden: { opacity: 0, y: 60 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
// };

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 50, rotate: -5 },
//   visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7 } },
//   hover: {
//     scale: 1.05,
//     boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
//     transition: { duration: 0.3 },
//   },
// };

// const buttonVariants: Variants = {
//   hover: { scale: 1.05, transition: { duration: 0.3 } },
//   tap: { scale: 0.95 },
// };

// // Icon map for lucide-react
// const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
//   Star,
//   Brain,
//   AlertTriangle,
//   Frown,
//   Bed,
//   Apple,
//   Dumbbell,
//   Award,
//   Clock,
//   Users,
//   Monitor,
//   Target,
//   Heart,
//   HeartHandshake,
// };

// // Skeleton loader for cards
// const SkeletonCard: React.FC = () => (
//   <div className="flex-shrink-0 w-80 md:w-1/4 snap-center">
//     <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 animate-pulse">
//       <div className="h-48 bg-gray-200" />
//       <div className="p-6 space-y-4">
//         <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
//         <div className="h-4 bg-gray-200 rounded w-full" />
//         <div className="h-4 bg-gray-200 rounded w-5/6" />
//       </div>
//     </div>
//   </div>
// );

// const TherapyImprovementsSection: React.FC = () => {
//   const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
//   const navigate = useNavigate();

//   const therapyImprovements: TherapyImprovement[] = [
//     {
//       title: 'Self Confidence',
//       desc: 'Self-confidence means believing in yourself and your abilities. It’s about trusting your own decisions, knowing your strengths and weaknesses, and feeling in control of your life.',
//       icon: 'Star',
//       bgImage: SelfImage,
//     },
//     {
//       title: 'Stress',
//       desc: 'Psychological stress is the way our mind and body respond to pressure or challenges, whether they come from inside us or from the world around us. It happens when we feel off balance or overwhelmed.',
//       icon: 'Brain',
//       bgImage: StressImage,
//     },
//     {
//       title: 'Anxiety',
//       desc: 'Anxiety is a common emotion, and it can cause physical symptoms, such as shaking and sweating. When anxiety becomes persistent or excessive, a person may have an anxiety disorder.',
//       icon: 'AlertTriangle',
//       bgImage: AnxietyImage,
//     },
//     {
//       title: 'Depression',
//       desc: 'Depression is a common and serious mental disorder that negatively affects how you feel, think, act, and perceive the world.',
//       icon: 'Frown',
//       bgImage: DepressionImage,
//     },
//     {
//       title: 'Sleep Hygiene',
//       desc: 'Sleep hygiene means having good habits and routines that help you sleep well. It includes things like going to bed at the same time each night, keeping your bedroom quiet and comfortable, and avoiding screens or caffeine before bed.',
//       icon: 'Bed',
//       bgImage: SleepImage,
//     },
//     {
//       title: 'Unhealthy Diet',
//       desc: 'An unhealthy diet is when someone eats too many foods that are high in calories, sugar, unhealthy fats, and salt, but low in important nutrients like vitamins, minerals, and fiber.',
//       icon: 'Apple',
//       bgImage: UnhealthyImage,
//     },
//     {
//       title: 'Lack of Physical Activity',
//       desc: 'Lack of physical activity, or physical inactivity, refers to not engaging in enough moderate to vigorous exercise to support good health.',
//       icon: 'Dumbbell',
//       bgImage: LackImage,
//     },
//     {
//       title: 'Substance Abuse',
//       desc: 'The use of illegal drugs or the use of prescription or over-the-counter drugs or alcohol for purposes other than those for which they are meant to be used, or in excessive amounts.',
//       icon: 'Award',
//       bgImage: Substance,
//     },
//     {
//       title: 'Work Life Balance',
//       desc: 'Work-life balance means finding a healthy mix between your job and personal life. It’s about managing your time and energy so you can do your work, take care of your personal responsibilities, and still have time to rest and enjoy life.',
//       icon: 'Clock',
//       bgImage: WorkImage,
//     },
//     {
//       title: 'Social Connection',
//       desc: 'Social connection refers to the quality and quantity of relationships we have with others, encompassing a feeling of belonging and being cared for. It’s a fundamental human need, crucial for well-being and even physical health.',
//       icon: 'Users',
//       bgImage: SocialImage,
//     },
//     {
//       title: 'Digital Overload',
//       desc: 'Digital overload describes the feeling of being overwhelmed by the vast amount of digital information and interactions we encounter daily.',
//       icon: 'Monitor',
//       bgImage: DigitalImage,
//     },
//     {
//       title: 'Goal Direction',
//       desc: 'Goal direction means having a clear purpose and working toward it. It’s about planning your actions and making choices that help you reach a specific goal.',
//       icon: 'Target',
//       bgImage: GoalImage,
//     },
//     {
//       title: 'Emotional Need',
//       desc: 'Emotional needs are the feelings and support we need to feel happy and fulfilled. When these needs are met, we feel good about ourselves and our lives. If they’re not met, we might feel sad, frustrated, or lonely.',
//       icon: 'Heart',
//       bgImage: EmotionalImage,
//     },
//     {
//       title: 'Relationship',
//       desc: 'Relationships play a crucial role in human well-being and personal growth, making them an essential part of our lives.',
//       icon: 'HeartHandshake',
//       bgImage: RelationshipImage,
//     },
//   ];

//   const handleImageLoad = (imageSrc: string) => {
//     setLoadedImages((prev) => new Set(prev).add(imageSrc));
//   };

//   return (
//     <motion.section
//       className="py-20 bg-[#F9F9F9]"
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       aria-labelledby="improvements-heading"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <h2
//           id="improvements-heading"
//           className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#015F4A]"
//         >
//           What You Can Improve With Us
//         </h2>
//         <div className="relative">
//           <motion.div
//             className="flex flex-row overflow-x-auto md:overflow-x-visible gap-6 snap-x snap-mandatory pb-4"
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {therapyImprovements.map((item, index) => {
//               const IconComponent = iconMap[item.icon];
//               const isImageLoaded = loadedImages.has(item.bgImage);

//               return (
//                 <motion.div
//                   key={item.title}
//                   className="flex-shrink-0 w-80 md:w-1/4 snap-center"
//                   variants={cardVariants}
//                   custom={index}
//                   whileHover="hover"
//                   role="button"
//                   tabIndex={0}
//                   onClick={() => navigate('/improve')}
//                   onKeyDown={(e) => e.key === 'Enter' && navigate('/improve')}
//                   aria-label={`Learn more about improving ${item.title}`}
//                 >
//                   {isImageLoaded ? (
//                     <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 group relative">
//                       <div
//                         className="h-48 w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
//                         style={{ backgroundImage: `url(${item.bgImage})` }}
//                       />
//                       <div className="p-6 text-center">
//                         {IconComponent && (
//                           <IconComponent className="w-8 h-8 text-[#31A382] mx-auto mb-4" aria-hidden="true" />
//                         )}
//                         <h3 className="text-lg font-semibold text-[#015F4A] mb-3">{item.title}</h3>
//                         <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
//                           {item.desc}
//                         </p>
//                       </div>
//                       <div className="absolute inset-0 bg-[#015F4A] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
//                         <span className="text-white font-medium">Learn More</span>
//                       </div>
//                     </div>
//                   ) : (
//                     <SkeletonCard />
//                   )}
//                   <img
//                     src={item.bgImage}
//                     alt=""
//                     className="hidden"
//                     onLoad={() => handleImageLoad(item.bgImage)}
//                     onError={() => handleImageLoad(item.bgImage)} // Fallback to skeleton if image fails
//                   />
//                 </motion.div>
//               );
//             })}
//           </motion.div>
//           {/* Scroll indicators for mobile */}
//           <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F9F9] to-transparent pointer-events-none md:hidden" />
//           <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F9F9F9] to-transparent pointer-events-none md:hidden" />
//         </div>
//         <motion.button
//           className="mt-12 px-8 py-3 rounded-full bg-teal-600 text-white font-semibold text-base shadow-md hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
//           variants={buttonVariants}
//           whileHover="hover"
//           whileTap="tap"
//           onClick={() => navigate('/improve')}
//           aria-label="View all therapy improvements"
//         >
//           Show More
//         </motion.button>
//       </div>
//     </motion.section>
//   );
// };

// export default TherapyImprovementsSection;




import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  Star,
  Brain,
  AlertTriangle,
  Frown,
  Bed,
  Apple,
  Dumbbell,
  Award,
  Clock,
  Users,
  Monitor,
  Target,
  Heart,
  HeartHandshake,
} from 'lucide-react';
import SelfImage from '../assets/Self-Confidence.webp';
import StressImage from '../assets/stress.webp';
import AnxietyImage from '../assets/Anxiety.webp';
import DepressionImage from '../assets/Depression.webp';
import SleepImage from '../assets/Sleep-hygine.webp';
import UnhealthyImage from '../assets/Unhealthy-diet.webp';
import LackImage from '../assets/Lack-of-Physical-activity.webp';
import Substance from '../assets/Substance-abuse.webp';
import WorkImage from '../assets/Worklife-balance.webp';
import SocialImage from '../assets/Social-connection.webp';
import DigitalImage from '../assets/Digital-overloaded.webp';
import GoalImage from '../assets/Goal-direction.webp';
import EmotionalImage from '../assets/Emotional-need.webp';
import RelationshipImage from '../assets/Relationship.webp';
import { TherapyImprovement } from '../types/types';

// Animation variants
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7 } },
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  },
};

const buttonVariants: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

// Icon map for lucide-react
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Star,
  Brain,
  AlertTriangle,
  Frown,
  Bed,
  Apple,
  Dumbbell,
  Award,
  Clock,
  Users,
  Monitor,
  Target,
  Heart,
  HeartHandshake,
};

// Skeleton loader for cards
const SkeletonCard: React.FC = () => (
  <div className="flex-shrink-0 w-80 md:w-1/4 snap-center">
    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 animate-pulse">
      <div className="h-48 bg-gray-200" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
      </div>
    </div>
  </div>
);

const TherapyImprovementsSection: React.FC = () => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const therapyImprovements: TherapyImprovement[] = [
    {
      title: 'Self Confidence',
      desc: 'Self-confidence means believing in yourself and your abilities. It’s about trusting your own decisions, knowing your strengths and weaknesses, and feeling in control of your life.',
      icon: 'Star',
      bgImage: SelfImage,
    },
    {
      title: 'Stress',
      desc: 'Psychological stress is the way our mind and body respond to pressure or challenges, whether they come from inside us or from the world around us. It happens when we feel off balance or overwhelmed.',
      icon: 'Brain',
      bgImage: StressImage,
    },
    {
      title: 'Anxiety',
      desc: 'Anxiety is a common emotion, and it can cause physical symptoms, such as shaking and sweating. When anxiety becomes persistent or excessive, a person may have an anxiety disorder.',
      icon: 'AlertTriangle',
      bgImage: AnxietyImage,
    },
    {
      title: 'Depression',
      desc: 'Depression is a common and serious mental disorder that negatively affects how you feel, think, act, and perceive the world.',
      icon: 'Frown',
      bgImage: DepressionImage,
    },
    {
      title: 'Sleep Hygiene',
      desc: 'Sleep hygiene means having good habits and routines that help you sleep well. It includes things like going to bed at the same time each night, keeping your bedroom quiet and comfortable, and avoiding screens or caffeine before bed.',
      icon: 'Bed',
      bgImage: SleepImage,
    },
    {
      title: 'Unhealthy Diet',
      desc: 'An unhealthy diet is when someone eats too many foods that are high in calories, sugar, unhealthy fats, and salt, but low in important nutrients like vitamins, minerals, and fiber.',
      icon: 'Apple',
      bgImage: UnhealthyImage,
    },
    {
      title: 'Lack of Physical Activity',
      desc: 'Lack of physical activity, or physical inactivity, refers to not engaging in enough moderate to vigorous exercise to support good health.',
      icon: 'Dumbbell',
      bgImage: LackImage,
    },
    {
      title: 'Substance Abuse',
      desc: 'The use of illegal drugs or the use of prescription or over-the-counter drugs or alcohol for purposes other than those for which they are meant to be used, or in excessive amounts.',
      icon: 'Award',
      bgImage: Substance,
    },
    {
      title: 'Work Life Balance',
      desc: 'Work-life balance means finding a healthy mix between your job and personal life. It’s about managing your time and energy so you can do your work, take care of your personal responsibilities, and still have time to rest and enjoy life.',
      icon: 'Clock',
      bgImage: WorkImage,
    },
    {
      title: 'Social Connection',
      desc: 'Social connection refers to the quality and quantity of relationships we have with others, encompassing a feeling of belonging and being cared for. It’s a fundamental human need, crucial for well-being and even physical health.',
      icon: 'Users',
      bgImage: SocialImage,
    },
    {
      title: 'Digital Overload',
      desc: 'Digital overload describes the feeling of being overwhelmed by the vast amount of digital information and interactions we encounter daily.',
      icon: 'Monitor',
      bgImage: DigitalImage,
    },
    {
      title: 'Goal Direction',
      desc: 'Goal direction means having a clear purpose and working toward it. It’s about planning your actions and making choices that help you reach a specific goal.',
      icon: 'Target',
      bgImage: GoalImage,
    },
    {
      title: 'Emotional Need',
      desc: 'Emotional needs are the feelings and support we need to feel happy and fulfilled. When these needs are met, we feel good about ourselves and our lives. If they’re not met, we might feel sad, frustrated, or lonely.',
      icon: 'Heart',
      bgImage: EmotionalImage,
    },
    {
      title: 'Relationship',
      desc: 'Relationships play a crucial role in human well-being and personal growth, making them an essential part of our lives.',
      icon: 'HeartHandshake',
      bgImage: RelationshipImage,
    },
  ];

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages((prev) => new Set(prev).add(imageSrc));
  };

  return (
    <motion.section
      className="py-16 bg-[#F9F9F9]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-labelledby="improvements-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="improvements-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#015F4A]"
        >
          What You Can Improve With Us
        </h2>
        <div className="relative">
          <motion.div
            className="flex flex-row overflow-x-auto md:overflow-x-visible gap-6 snap-x snap-mandatory pb-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {therapyImprovements.map((item, index) => {
              const IconComponent = iconMap[item.icon];
              const isImageLoaded = loadedImages.has(item.bgImage);

              return (
                <motion.div
                  key={item.title}
                  className="flex-shrink-0 w-80 md:w-1/4 snap-center"
                  variants={cardVariants}
                  custom={index}
                  whileHover="hover"
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate('/improve')}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/improve')}
                  aria-label={`Learn more about improving ${item.title}`}
                >
                  {isImageLoaded ? (
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden h-96 group relative">
                      <div
                        className="h-48 w-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${item.bgImage})` }}
                      />
                      <div className="p-6 text-center">
                        {IconComponent && (
                          <IconComponent className="w-8 h-8 text-[#31A382] mx-auto mb-4" aria-hidden="true" />
                        )}
                        <h3 className="text-lg font-semibold text-[#015F4A] mb-3">{item.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {item.desc}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-[#015F4A] bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="text-white font-medium">Learn More</span>
                      </div>
                    </div>
                  ) : (
                    <SkeletonCard />
                  )}
                  <img
                    src={item.bgImage}
                    alt=""
                    className="hidden"
                    onLoad={() => handleImageLoad(item.bgImage)}
                    onError={() => handleImageLoad(item.bgImage)} // Fallback to skeleton if image fails
                  />
                </motion.div>
              );
            })}
          </motion.div>
          {/* Scroll indicators for mobile */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F9F9] to-transparent pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F9F9F9] to-transparent pointer-events-none md:hidden" />
        </div>
        <div className="text-center mt-8">
          <motion.button
            className="px-8 py-3 rounded-full bg-teal-600 text-white font-medium text-base shadow-md hover:bg-teal-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate('/improve')}
            aria-label="View all therapy improvements"
          >
            Show More
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default TherapyImprovementsSection;