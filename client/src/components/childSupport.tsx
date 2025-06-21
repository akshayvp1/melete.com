import React, { useState, useEffect } from 'react';
import { 
  Baby, 
  Heart, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle, 
  BookOpen,
  Smile,
  User
} from 'lucide-react';
import AuthService from '../services/AuthService';
import ChildImage from '../assets/child.webp'

// Import the Consultant type from your types file
import { Consultant } from '../types/types';

// Animation hook for scroll-triggered animations
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, threshold]);

  return [setElement, isVisible] as const;
};

const ChildSupportPage: React.FC = () => {
  const [headerRef, isHeaderVisible] = useIntersectionObserver(0.1);
  const [servicesRef, isServicesVisible] = useIntersectionObserver(0.1);
  const [approachRef, isApproachVisible] = useIntersectionObserver(0.1);
  const [teamRef, isTeamVisible] = useIntersectionObserver(0.1);
  
  // State for counsellors
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch counsellors function
  const fetchCounsellors = async () => {
    try {
      setLoading(true);
      const counsellors = await AuthService.frontGetCounsellors();
      setConsultants(counsellors.filter((c) => !c.isBlocked).slice(0, 3)); // Only show 3 counsellors
    } catch (err: any) {
      console.error('Error fetching counsellors:', err);
      setError(err.message || 'Failed to fetch counsellors');
    } finally {
      setLoading(false);
    }
  };

  // Fetch counsellors on component mount
  useEffect(() => {
    fetchCounsellors();
  }, []);

  const services = [
    {
      icon: Smile,
      title: 'Play Therapy',
      description: 'Using play as a natural medium for children to express feelings, process experiences, and develop coping skills in a safe, supportive environment.',
      features: ['Sand Play Therapy', 'Art & Creative Expression', 'Therapeutic Games', 'Storytelling Techniques']
    },
    {
      icon: Shield,
      title: 'Behavioral Support',
      description: 'Evidence-based interventions to help children develop positive behaviors, manage challenging emotions, and improve social interactions.',
      features: ['Behavior Modification', 'Positive Reinforcement', 'Social Skills Training', 'Anger Management']
    },
    {
      icon: Heart,
      title: 'Emotional Regulation',
      description: 'Teaching children healthy ways to understand, express, and manage their emotions through age-appropriate therapeutic techniques.',
      features: ['Mindfulness for Kids', 'Breathing Techniques', 'Emotion Identification', 'Coping Strategies']
    },
    {
      icon: Users,
      title: 'Social Skills Development',
      description: 'Helping children build confidence in social situations, develop friendships, and navigate peer relationships successfully.',
      features: ['Peer Interaction', 'Communication Skills', 'Conflict Resolution', 'Empathy Building']
    }
  ];

  const approaches = [
    {
      title: 'Child-Centered Approach',
      description: 'We believe every child is unique. Our therapy is tailored to each child\'s individual needs, interests, and developmental stage.',
      icon: Baby
    },
    {
      title: 'Family Involvement',
      description: 'We work closely with parents and caregivers to ensure therapeutic progress extends beyond our sessions into daily life.',
      icon: Users
    },
    {
      title: 'Evidence-Based Practice',
      description: 'Our interventions are grounded in research-proven methods including CBT, play therapy, and developmental approaches.',
      icon: BookOpen
    },
    {
      title: 'Safe Environment',
      description: 'We create a nurturing, judgment-free space where children feel secure to explore their emotions and experiences.',
      icon: Shield
    }
  ];

  const testimonials = [
    {
      text: 'The play therapy sessions have been transformative for our 6-year-old. She\'s learned to express her feelings in healthy ways and her anxiety has significantly decreased.',
      author: 'Parent of 6-year-old',
      rating: 5
    },
    {
      text: 'Dr. Johnson\'s approach with our son has been incredible. He\'s developed better social skills and his behavior at school has improved dramatically.',
      author: 'Parent of 8-year-old',
      rating: 5
    },
    {
      text: 'Professional, caring, and effective. Our daughter looks forward to her sessions and we\'ve seen remarkable progress in her emotional regulation.',
      author: 'Parent of 7-year-old',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
      {/* Hero Section */}
      <section 
        ref={headerRef}
        className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isHeaderVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#015F4A] p-4 rounded-2xl shadow-lg">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <span className="text-slate-600 font-medium">Professional Mental Health Care</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
                Child Mental Health
                <span className="block text-[#015F4A]">
                  Support Services
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                Specialized mental health care for children, focusing on emotional development, behavioral guidance, and creating a safe space for young minds to flourish and grow.
              </p>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${
              isHeaderVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative">
                <img
                  src={ChildImage}
                  alt="Child playing in therapy session"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/800x600/015F4A/ffffff?text=Child+Mental+Health+Services';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#015F4A]/20 via-transparent to-transparent rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isServicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Our Specialized
              <span className="block text-[#015F4A]">
                Child Therapy Services
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Evidence-based therapeutic approaches designed specifically for children's unique developmental needs and emotional growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-slate-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isServicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-[#015F4A] p-3 sm:p-4 rounded-xl shadow-md flex-shrink-0">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#015F4A] flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section 
        ref={approachRef}
        className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isApproachVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Our Therapeutic
              <span className="block text-[#015F4A]">
                Approach
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              We combine evidence-based practices with compassionate care to create the best possible outcomes for your child.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  isApproachVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200">
                  <div className="bg-[#015F4A] p-4 rounded-2xl shadow-lg inline-block mb-6">
                    <approach.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{approach.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section 
        ref={teamRef}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-6">
              Meet Our Expert
              <span className="block text-[#015F4A]">
                Child Therapists
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Our licensed professionals specialize in child psychology and are dedicated to helping your child thrive.
            </p>
          </div>

          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#015F4A]"></div>
              <p className="mt-4 text-slate-600">Loading our expert therapists...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">Error: {error}</p>
              <button 
                onClick={fetchCounsellors}
                className="px-6 py-2 bg-[#015F4A] text-white rounded-lg hover:bg-[#014136] transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {!loading && !error && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {consultants.map((member, index) => (
                <div
                  key={member.id}
                  className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group ${
                    isTeamVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Professional Header with Image */}
                  <div className="relative bg-gradient-to-br from-[#015F4A] to-[#014136] p-6 pb-16">
                    <div className="flex items-center justify-between mb-4">
                      {member.isVerified && (
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                          <CheckCircle className="w-3 h-3 text-white" />
                          <span className="text-xs text-white font-medium">Verified</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className={`w-3 h-3 ${i < Math.floor(member.rating) ? 'text-yellow-400' : 'text-white/30'}`}>
                              ★
                            </div>
                          ))}
                        </div>
                        <span className="text-white/80 text-xs ml-1">({member.sessions})</span>
                      </div>
                    </div>
                    
                    {/* Profile Image - Positioned to overlap */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full rounded-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=015F4A&color=ffffff&size=64`;
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-12 px-6 pb-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h3>
                      <p className="text-[#015F4A] font-semibold text-sm mb-1">{member.qualification}</p>
                      <p className="text-slate-600 text-sm">{member.specialization}</p>
                    </div>
                    
                    {/* Experience and Location */}
                    <div className="flex items-center justify-center gap-4 text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{member.experience}</span>
                      </div>
                      {member.location && (
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          <span>{member.location}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Languages */}
                    {member.languages && member.languages.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-700 mb-2">Languages:</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.languages.slice(0, 3).map((language, langIndex) => (
                            <span key={langIndex} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                              {language}
                            </span>
                          ))}
                          {member.languages.length > 3 && (
                            <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                              +{member.languages.length - 3}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Expertise Tags */}
                    {member.expertise && member.expertise.length > 0 && (
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-slate-700 mb-2">Specializations:</p>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-2 py-1 bg-[#015F4A]/10 text-[#015F4A] text-xs rounded-md font-medium">
                              {skill}
                            </span>
                          ))}
                          {member.expertise.length > 2 && (
                            <span className="px-2 py-1 bg-[#015F4A]/10 text-[#015F4A] text-xs rounded-md font-medium">
                              +{member.expertise.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    
                    {/* Action Buttons */}
                    <div className="flex gap-2 mt-6">
                      <button className="flex-1 bg-[#015F4A] text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-[#014136] transition-colors">
                        Book Session
                      </button>
                      <button className="px-4 py-2 border border-[#015F4A] text-[#015F4A] text-sm font-medium rounded-lg hover:bg-[#015F4A]/5 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ChildSupportPage;