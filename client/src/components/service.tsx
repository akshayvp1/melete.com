





import React from 'react';
import { Heart, Users, Brain, Clock, Award, CheckCircle, Sparkles,Building, GraduationCap, Briefcase, Star, Leaf, BookOpen, Headphones, Activity, Calendar, TrendingUp, Target, Lightbulb, CheckSquare } from 'lucide-react';
import serviceImage from '../assets/service.jpg'
import melteIcon from '../assets/Micon.png'
import college from "../assets/colleges.webp";
import institution from "../assets/institution.webp";
import company from '../assets/company.webp'
import day from '../assets/day.webp'
import student from '../assets/student.webp'
import music from '../assets/music.webp'
import tracker from '../assets/mood-tracker.webp'
import breathing from '../assets/breathing.webp'
import todolist from '../assets/todo.webp'
import booking from '../assets/booking.webp'
import diary from '../assets/diary.webp'
import goal from '../assets/goal.webp'
import relaxation from '../assets/relaxation-tech.webp'
import activity from '../assets/activities.webp'
import habit from '../assets/habit.webp'

const MeleteServices = () => {
  

  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Expert Consultations",
      description: "Connect with certified mental health professionals 24/7"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness Programs", 
      description: "Guided yoga, meditation, and personalized wellness plans"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Workshops & Training",
      description: "Awareness workshops and skill-building sessions"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock emotional care and crisis intervention"
    }
  ];

  // Images for categories
  const categoryImages = {
    students: college,
    professionals: company, 
    institutions: institution
  };

  // Service feature images
  

  const heroImage =serviceImage

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean and Professional */}
      <div className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center">
                            <img
                              src={melteIcon} // Replace with your actual image path
                              alt="Logo"
                              className="w-10 h-10" // Adjust width and height as needed
                            />
                          </div>
<h1 className="text-5xl font-inter font-normal text-[#1ca184]">MELETE</h1>
              </div>
              <p className="text-xl mb-8 leading-relaxed text-gray-700">
                A recognized mental health platform revolutionizing access to emotional support through 
                a secure, user-friendly app connecting you to 24/7 professional mental health care.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                  <Award className="w-5 h-5 mr-2 text-[#015F4A]" />
                  <span className="text-gray-700">Certified Platform</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                  <Clock className="w-5 h-5 mr-2 text-[#015F4A]" />
                  <span className="text-gray-700">24/7 Available</span>
                </div>
                <div className="flex items-center bg-gray-50 px-4 py-2 rounded-full">
                  <Users className="w-5 h-5 mr-2 text-[#015F4A]" />
                  <span className="text-gray-700">Expert Professionals</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={heroImage} 
                alt="Mental Health Support" 
                className="rounded-2xl shadow-xl w-full max-w-md h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#015F4A] mb-6">Our Vision & Mission</h2>
              <div className="space-y-6">
                <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#015F4A]">
                  <h3 className="text-xl font-semibold text-[#015F4A] mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To create a world where mental health support is accessible, affordable, and stigma-free—available anytime, anywhere.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-[#015F4A]">
                  <h3 className="text-xl font-semibold text-[#015F4A] mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To simplify access to mental health care through a secure, user-friendly platform. We empower individuals to prioritize well-being, connect with expert professionals, and promote a culture of awareness and acceptance.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#015F4A] mb-3 flex justify-center">
                    {service.icon}
                  </div>
                  <h4 className="font-semibold text-[#015F4A] mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Complete Services Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="specialties-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="specialties-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
              Our Mental Health <span className="font-semibold text-[#015F4A]">Specialties</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our expert services tailored to diverse mental health needs, delivered with professional excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Clock,
                title: "24/7 Mental Health Support",
                description: "Access professional mental health support anytime with our round-the-clock services.",
                image: day,
                alt: "24/7 mental health support illustration"
              },
              {
                icon: GraduationCap,
                title: "Student Mental Health Support",
                description: "Tailored resources to support students' academic success and emotional well-being.",
                image: student,
                alt: "Student mental health support image"
              },
              {
                icon: Leaf,
                title: "Relaxation Techniques",
                description: "Guided relaxation methods to reduce stress and enhance mental wellness.",
                image: relaxation,
                alt: "Relaxation techniques illustration"
              },
              {
                icon: CheckSquare,
                title: "Mental Health To-Do List",
                description: "Organize tasks to improve mental clarity and manage daily responsibilities.",
                image: todolist,
                alt: "Mental health to-do list image"
              },
              {
                icon: BookOpen,
                title: "Therapeutic Diary",
                description: "A private journaling space to reflect and process emotions for mental health.",
                image: diary,
                alt: "Therapeutic diary illustration"
              },
              {
                icon: Headphones,
                title: "Relaxation Music Therapy",
                description: "Curated playlists to promote relaxation and support mental well-being.",
                image: music,
                alt: "Relaxation music therapy image"
              },
              {
                icon: Activity,
                title: "Breathing Exercises",
                description: "Controlled breathing techniques to reduce anxiety and improve focus.",
                image: breathing,
                alt: "Breathing exercises illustration"
              },
              {
                icon: Calendar,
                title: "Instant Therapy Booking",
                description: "Schedule therapy sessions instantly with real-time availability.",
                image: booking,
                alt: "Instant therapy booking image"
              },
              {
                icon: TrendingUp,
                title: "Mood Tracker",
                description: "Monitor mood patterns to gain insights into your mental health journey.",
                image: tracker,
                alt: "Mood tracker illustration"
              },
              {
                icon: Activity,
                title: "Mental Health Activities",
                description: "Engaging activities to boost mood and foster a positive mindset.",
                image: activity,
                alt: "Mental health activities image"
              },
              {
                icon: Target,
                title: "Mental Health Goal Setting",
                description: "Set and track personal goals to support your mental wellness journey.",
                image: goal,
                alt: "Mental health goal setting illustration"
              },
              {
                icon: Lightbulb,
                title: "Healthy Habit Building",
                description: "Develop sustainable habits to promote long-term mental health.",
                image: habit,
                alt: "Healthy habit building image"
              }
            ].map((specialty, index) => (
              <article key={index} className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#015F4A]/20 transition-all duration-300 hover:shadow-md">
                <div className="w-full aspect-[4/3] mb-4 overflow-hidden rounded-lg">
                  <img src={specialty.image} alt={specialty.alt} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="w-12 h-12 bg-[#015F4A]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#015F4A] group-hover:scale-105 transition-all duration-300">
                  <specialty.icon className="text-[#015F4A] group-hover:text-white transition-colors duration-300" size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{specialty.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{specialty.description}</p>
              </article>
            ))}
          </div>
          <article className="bg-white rounded-2xl p-10 border border-[#015F4A]/10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#015F4A]" aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">Professional Mental Health Excellence</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                MELETE combines innovative technology with licensed therapists to deliver comprehensive, evidence-based mental health care, accessible anytime, anywhere.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* What We Offer Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#015F4A] mb-6">What We Offer</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              MELETE provides comprehensive mental health solutions including expert consultations, 
              soothing relaxation music, and personalized wellness plans.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={categoryImages.students} 
                  alt="Students" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-[#015F4A] mr-3" />
                  <h3 className="text-xl font-bold text-[#015F4A]">For Students</h3>
                </div>
                <p className="text-gray-700">Academic stress management, peer support, and affordable mental health care tailored for student life.</p>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={categoryImages.professionals} 
                  alt="Professionals" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="w-8 h-8 text-[#015F4A] mr-3" />
                  <h3 className="text-xl font-bold text-[#015F4A]">For Professionals</h3>
                </div>
                <p className="text-gray-700">Workplace stress solutions, work-life balance support, and career-related mental health guidance.</p>
              </div>
            </div>

            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={categoryImages.institutions} 
                  alt="Institutions" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 text-[#015F4A] mr-3" />
                  <h3 className="text-xl font-bold text-[#015F4A]">For Institutions</h3>
                </div>
                <p className="text-gray-700">Comprehensive mental health programs for organizations, schools, and corporate wellness initiatives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans Section */}
      {/* <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#015F4A] mb-4">Choose Your Wellness Plan</h2>
            <p className="text-xl text-gray-700">
              Smart options for Students, Corporates & Institutions designed to support every stage of your mental health journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 ${plan.popular ? 'ring-2 ring-[#015F4A] scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-[#015F4A] text-white text-center py-2 text-sm font-semibold flex items-center justify-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`p-6 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-[#015F4A] mb-2">{plan.name}</h3>
                    <p className="text-lg font-semibold text-gray-700 mb-2">{plan.subtitle}</p>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-[#015F4A] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded text-sm">
                      <span className="font-medium text-gray-700">Students</span>
                      <span className="font-bold text-[#015F4A]">Contact us</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded text-sm">
                      <span className="font-medium text-gray-700">Corporate</span>
                      <span className="font-bold text-[#015F4A]">Contact us</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded text-sm">
                      <span className="font-medium text-gray-700">Institutions</span>
                      <span className="font-bold text-[#015F4A]">Contact us</span>
                    </div>
                  </div>

                  <button className={`w-full py-2.5 px-4 rounded-lg font-semibold transition-colors text-sm ${
                    plan.popular 
                      ? 'bg-[#015F4A] text-white hover:bg-[#014a3a]' 
                      : 'border-2 border-[#015F4A] text-[#015F4A] hover:bg-[#015F4A] hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MeleteServices;