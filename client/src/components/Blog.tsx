import React from 'react';
import { motion } from 'framer-motion';
import WorkImage from '../assets/Worklife-balance.webp';
import SocialImage from '../assets/Social-connection.webp';
import DigitalImage from '../assets/Digital-overloaded.webp';

// Sample blog post data (replace with API fetch in production)
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Ways to Boost Your Mental Wellness',
    excerpt:
      'Discover practical tips to improve your mental health, from mindfulness practices to daily habits that foster positivity.',
    image: `${WorkImage}`,
    slug: 'boost-mental-wellness',
  },
  {
    id: 2,
    title: 'The Power of Gratitude in Everyday Life',
    excerpt:
      'Learn how practicing gratitude can transform your perspective and enhance your emotional well-being.',
    image: `${DigitalImage}`,
    slug: 'power-of-gratitude',
  },
  {
    id: 3,
    title: 'Overcoming Stress with Simple Techniques',
    excerpt:
      'Explore effective strategies to manage stress and create a calmer, more balanced life.',
    image: `${SocialImage}`,
    slug: 'overcome-stress',
  },
];

const Blog: React.FC = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4 },
    }),
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="w-full bg-white rounded-xl shadow-md overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: '#015F4A' }}
              >
                {post.title}
              </h3>
              <p
                className="text-sm text-[#666] mb-4 line-clamp-3"
                style={{ color: '#666' }}
              >
                {post.excerpt}
              </p>
              <a
                href={`/blog/${post.slug}`}
                className="inline-block py-2 px-4 bg-[#31A382] text-white font-medium rounded-lg hover:bg-[#2F9B7A] transition-all duration-200 text-sm"
                aria-label={`Read more about ${post.title}`}
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;