import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: i * 0.1, duration: 0.7 },
  }),
  hover: {
    scale: 1.05,
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
    transition: { duration: 0.3 },
  },
};

// Map icon names to lucide-react components
const iconMap: { [key: string]: React.ComponentType<{ style: React.CSSProperties }> } = {
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

const Improve: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <motion.section
      className="py-24 text-center"
      style={{ backgroundColor: '#F9F9F9' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
          What You Can Improve With Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {therapyImprovements.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                className="relative p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden cursor-pointer"
                style={{
                  minHeight: '300px',
                  backgroundImage: `url(${item.bgImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover="hover"
                onClick={() => setActiveCard(activeCard === index ? null : index)}
              >
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    activeCard === index ? 'bg-[#015F4A] opacity-80' : 'bg-black opacity-40 group-hover:bg-[#015F4A] group-hover:opacity-80'
                  }`}
                ></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                  <div className="mb-5">{IconComponent ? <IconComponent style={{ color: '#31A382' }} /> : null}</div>
                  <h3 className="text-lg font-semibold mb-3 text-center">{item.title}</h3>
                  <AnimatePresence>
                    {activeCard === index ? (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center p-4 text-sm leading-relaxed text-center bg-[#015F4A] bg-opacity-90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div className="max-h-full overflow-y-auto scrollbar-thin scrollbar-thumb-[#31A382] scrollbar-track-transparent px-2">
                          {item.desc}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.p
                        className="text-sm leading-relaxed text-center max-w-xs transition-opacity duration-300"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {item.desc.substring(0, 50) + '...'}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Improve;