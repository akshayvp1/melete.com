import React, { useState, useEffect } from 'react';
import { 
  Users, 
  Heart, 
  Shield, 
  MessageCircle, 
  Clock, 
  CheckCircle, 
  BookOpen,
  Home,
  User,
  Star,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import AuthService from '../services/AuthService';
import ParentImage from '../assets/parent.webp'
// Import the Consultant type from your types file
// Remove the local interface definition to avoid conflicts
import { Consultant } from '../types/types'; // Adjust path as needed

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

const ParentSupportPage: React.FC = () => {
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
      setError(null);
      const counsellors = await AuthService.frontGetCounsellors();
      
      // Filter and map to ensure compatibility
      const filteredCounsellors = counsellors
        .filter((c) => !c.isBlocked)
        .slice(0, 3)
        .map((consultant) => ({
          ...consultant,
          // Ensure createdAt is always a string
          createdAt: consultant.createdAt || new Date().toISOString(),
          // Ensure other optional fields have defaults if needed
          isVerified: consultant.isVerified ?? false
        }));
      
      setConsultants(filteredCounsellors);
    } catch (err: any) {
      console.error('Error fetching counsellors:', err);
      setError(err.message || 'Failed to fetch counsellors');
      // Fallback to empty array on error
      setConsultants([]);
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
      icon: Users,
      title: 'Parenting Skills',
      description: 'Develop effective parenting strategies tailored to your family\'s unique needs, focusing on positive discipline, emotional connection, and healthy boundaries.',
      features: ['Positive Discipline Techniques', 'Age-Appropriate Expectations', 'Boundary Setting', 'Emotional Intelligence Development']
    },
    {
      icon: Home,
      title: 'Family Counseling',
      description: 'Strengthen family bonds through improved communication, conflict resolution, and creating a harmonious home environment for all family members.',
      features: ['Family Dynamics Assessment', 'Conflict Resolution', 'Family Meeting Facilitation', 'Relationship Building']
    },
    {
      icon: Shield,
      title: 'Stress Management',
      description: 'Learn practical strategies to manage parenting stress, maintain work-life balance, and prioritize your mental health while caring for your family.',
      features: ['Stress Reduction Techniques', 'Time Management', 'Self-Care Strategies', 'Mindfulness Practices']
    },
    {
      icon: MessageCircle,
      title: 'Communication Training',
      description: 'Master effective communication techniques to connect with your children, resolve conflicts peacefully, and build trust within your family.',
      features: ['Active Listening Skills', 'Assertive Communication', 'Empathy Building', 'Difficult Conversations']
    }
  ];

  const approaches = [
    {
      title: 'Strength-Based Approach',
      description: 'We focus on your existing strengths as a parent and build upon them, recognizing that every family has unique resources and capabilities.',
      icon: Star
    },
    {
      title: 'Collaborative Partnership',
      description: 'We work together as partners in your parenting journey, providing guidance while respecting your family values and parenting style.',
      icon: Users
    },
    {
      title: 'Evidence-Based Methods',
      description: 'Our interventions are grounded in research-proven approaches including family systems therapy, positive parenting, and cognitive-behavioral techniques.',
      icon: BookOpen
    },
    {
      title: 'Holistic Support',
      description: 'We address the whole family system, considering individual needs, family dynamics, and environmental factors that impact parenting.',
      icon: Heart
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        ref={headerRef}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isHeaderVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#015F4A] p-4 rounded-2xl shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <span className="text-[#015F4A] font-medium">Professional Family Support</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-[#015F4A] mb-6">
                Parent Support
                <span className="block text-[#015F4A]">
                  & Guidance Services
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive guidance for parents navigating parenting challenges, family dynamics, and building stronger relationships with their children through evidence-based support and practical strategies.
              </p>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-300 ${
              isHeaderVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative">
                <img
                  src={ParentImage}
                  alt="Parent and child having a supportive conversation"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/800x600/015F4A/ffffff?text=Parent+Support+Services';
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
        className="py-16 lg:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isServicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#015F4A] mb-6">
              Our Comprehensive
              <span className="block text-[#015F4A]">
                Parent Support Services
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based support and practicalstructor strategies designed to help parents build stronger, healthier relationships with their children.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isServicesVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                  <div className="bg-[#015F4A] p-3 sm:p-4 rounded-xl shadow-md flex-shrink-0">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#015F4A] mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#015F4A] flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
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
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isApproachVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#015F4A] mb-6">
              Our Supportive
              <span className="block text-[#015F4A]">
                Approach
              </span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              We combine compassionate understanding with practical strategies to empower parents and strengthen family relationships.
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
                <div className="bg-gray-50 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200">
                  <div className="bg-[#015F4A] p-4 rounded-2xl shadow-lg inline-block mb-6">
                    <approach.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#015F4A] mb-4">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
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
                    Meet Our Specialized
                    <span className="block text-[#015F4A]">
                      Senior Care Therapists
                    </span>
                  </h2>
                  <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
                    Our licensed professionals specialize in geriatric mental health and are dedicated to supporting seniors with dignity and expertise.
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
                      className="px-6 py-2 bg-[#015F4A] text-white rounded-lg hover:bg-[#014136] transition-all duration-300"
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
                        <div className="relative bg-[#015F4A] p-6 pb-16">
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
                                <Home className="w-3 h-3" />
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

export default ParentSupportPage;