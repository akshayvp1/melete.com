






// import React from "react";
// import {
//   Heart,
//   Shield,
//   Users,
//   Award,
//   BookOpen,
//   CheckSquare,
//   Calendar,
//   User,
//   Building2,
//   GraduationCap,
//   Headphones,
//   ArrowRight,
//   Star,
//   Zap,
//   Brain,
//   Activity,
//   Clock,
//   MessageCircle,
//   Phone,
//   Video,
//   Download,
//   Play,
//   Smartphone,
//   Globe,
//   Lock,
//   Target,
//   Eye,
//   Stethoscope,
//   Leaf,
//   Lightbulb,
//   UserCheck,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";

// // Placeholder images (replace with actual URLs in production)
// import dep from '../assets/Depression.webp';
// import day from '../assets/day.webp';
// import student from '../assets/student.webp';
// import music from '../assets/music.webp';
// import tracker from '../assets/mood-tracker.webp';
// import breathing from '../assets/breathing.webp';
// import todolist from '../assets/todo.webp';
// import booking from '../assets/booking.webp';
// import diary from '../assets/diary.webp';
// import goal from '../assets/goal.webp';
// import relaxation from '../assets/relaxation-tech.webp';
// import activity from '../assets/activities.webp';
// import habit from '../assets/habit.webp';
// import mobileApp from '../assets/habit.webp'

// const AboutPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* SEO Meta Tags */}
//       <head>
//         <title>About MELETE - Professional Mental Health Platform</title>
//         <meta name="description" content="Discover MELETE, a certified mental health platform offering professional therapy, evidence-based resources, and secure digital support for your mental wellness journey." />
//         <meta name="keywords" content="mental health platform, online therapy, professional mental health support, licensed therapists, mental wellness, evidence-based care, MELETE" />
//         <meta name="robots" content="index, follow" />
//         <meta name="author" content="MELETE" />
//         <meta property="og:title" content="About MELETE - Professional Mental Health Platform" />
//         <meta property="og:description" content="MELETE provides accessible, professional mental health care through a secure digital platform, connecting you with licensed therapists and evidence-based resources." />
//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://www.meletewellness.com/about" />
//         <meta property="og:image" content="/assets/melete-og-image.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="About MELETE - Professional Mental Health Platform" />
//         <meta name="twitter:description" content="Join MELETE for professional mental health support with licensed therapists and secure, evidence-based digital tools." />
//         <meta name="twitter:image" content="/assets/melete-og-image.jpg" />
//         <link rel="canonical" href="https://www.meletewellness.com/about" />
//       </head>

//       {/* Schema Markup for Organization */}
//       <script type="application/ld+json">
//         {JSON.stringify({
//           "@context": "https://schema.org",
//           "@type": "Organization",
//           "name": "MELETE",
//           "url": "https://www.meletewellness.com",
//           "logo": "/assets/melete-logo.png",
//           "description": "MELETE is a certified mental health platform providing professional therapy and evidence-based resources through a secure digital platform.",
//           "contactPoint": {
//             "@type": "ContactPoint",
//             "contactType": "Customer Support",
//             "email": "connect@meletewellness.com",
//             "url": "https://www.meletewellness.com/contact"
//           },
//           "sameAs": [
//             "https://twitter.com/meletehealth",
//             "https://www.facebook.com/meletehealth",
//             "https://www.linkedin.com/company/meletehealth"
//           ]
//         })}
//       </script>

//       {/* 1. Hero Section - Clean and Professional */}
//       <header className="relative bg-white py-20" role="banner">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="text-center max-w-6xl mx-auto">
//             <div className="inline-flex items-center px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium mb-8 text-[#015F4A]">
//               <Stethoscope className="w-5 h-5 mr-2" aria-hidden="true" />
//               Certified Mental Health Platform
//             </div>
//             <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight text-gray-900">
//               Welcome to <span className="font-bold text-[#015F4A]">MELETE</span>
//             </h1>
//             <p className="text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
//               Your Trusted Professional Mental Wellness Platform
//             </p>
//             <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto">
//               Experience accessible, evidence-based mental health care through our secure digital platform. Connect with licensed therapists and access tailored therapeutic resources for your well-being.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <a href="/get-started" className="group bg-[#015F4A] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#014539] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
//                 Begin Your Mental Health Journey
//                 <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
//               </a>
//               <a href="/learn-more" className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
//                 Explore Our Services
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-20 left-10 w-24 h-24 bg-[#015F4A]/5 rounded-full blur-xl" aria-hidden="true"></div>
//         <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#015F4A]/3 rounded-full blur-2xl" aria-hidden="true"></div>
//       </header>

//       {/* 2. Mission and Vision */}
//       <section className="py-20 bg-gray-50" aria-labelledby="mission-vision-heading">
//         <div className="container mx-auto px-6">
//           <div className="max-w-7xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center px-4 py-2 bg-[#015F4A]/10 rounded-full text-[#015F4A] font-medium mb-6">
//                 <Target className="w-4 h-4 mr-2" aria-hidden="true" />
//                 Our Foundation
//               </div>
//               <h2 id="mission-vision-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
//                 Our Mission & <span className="font-semibold text-[#015F4A]">Vision</span>
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
//                 Transforming mental health care with professional expertise and innovative digital solutions.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               <article className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-[#015F4A]/20 transition-all duration-300 shadow-sm hover:shadow-lg">
//                 <div className="w-16 h-16 bg-[#015F4A]/10 rounded-xl flex items-center justify-center mb-6">
//                   <Target className="w-8 h-8 text-[#015F4A]" aria-hidden="true" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
//                 <p className="text-gray-600 leading-relaxed mb-6">
//                   MELETE is dedicated to providing accessible, professional mental health care through a secure digital platform, connecting individuals with licensed therapists and evidence-based resources.
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Professional Therapy</span>
//                   <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Evidence-Based</span>
//                   <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Accessible Care</span>
//                 </div>
//               </article>
//               <article className="bg-[#015F4A] p-10 rounded-2xl text-white shadow-lg">
//                 <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
//                   <Eye className="w-8 h-8 text-white" aria-hidden="true" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
//                 <p className="text-white/90 leading-relaxed mb-6">
//                   We envision a world where professional mental health support is universally accessible, delivered with therapeutic excellence, and recognized as essential to every individual's well-being.
//                 </p>
//                 <div className="flex flex-wrap gap-2">
//                   <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Global Access</span>
//                   <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Clinical Excellence</span>
//                   <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Mental Wellness</span>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3. Why Choose MELETE */}
//       <section className="py-20 bg-white" aria-labelledby="why-melete-heading">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 id="why-melete-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
//               Why Choose <span className="font-semibold text-[#015F4A]">MELETE</span>?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Discover a secure, professional mental health platform combining innovative technology with licensed therapists for effective, accessible support.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: Award,
//                 title: "Certified Mental Health Platform",
//                 description: "A professionally certified platform ensuring compliance with healthcare standards for quality mental health care."
//               },
//               {
//                 icon: UserCheck,
//                 title: "Licensed Therapists",
//                 description: "Connect with verified mental health professionals offering specialized expertise and compassionate care."
//               },
//               {
//                 icon: Shield,
//                 title: "Healthcare-Grade Security",
//                 description: "Your data is protected with advanced encryption, ensuring complete confidentiality and privacy."
//               },
//               {
//                 icon: Globe,
//                 title: "Comprehensive Mental Health Services",
//                 description: "Support for individuals, schools, healthcare providers, and corporate wellness programs."
//               },
//               {
//                 icon: Brain,
//                 title: "Evidence-Based Therapy",
//                 description: "Access scientifically validated therapeutic methods for effective mental health support."
//               },
//               {
//                 icon: Heart,
//                 title: "Compassionate Mental Health Care",
//                 description: "Empathy-driven support tailored to your unique mental health needs and goals."
//               }
//             ].map((reason, index) => (
//               <article key={index} className="group bg-gray-50 rounded-xl p-8 border border-gray-100 hover:bg-white hover:border-[#015F4A]/20 transition-all duration-300 hover:shadow-lg">
//                 <div className="w-14 h-14 bg-[#015F4A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#015F4A] group-hover:scale-105 transition-all duration-300">
//                   <reason.icon className="text-[#015F4A] group-hover:text-white transition-colors duration-300" size={24} aria-hidden="true" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-3 text-gray-900">{reason.title}</h3>
//                 <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* 4. Our Specialties Section */}
//       <section className="py-20 bg-gray-50" aria-labelledby="specialties-heading">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 id="specialties-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
//               Our Mental Health <span className="font-semibold text-[#015F4A]">Specialties</span>
//             </h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Explore our expert services tailored to diverse mental health needs, delivered with professional excellence.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 icon: Clock,
//                 title: "24/7 Mental Health Support",
//                 description: "Access professional mental health support anytime with our round-the-clock services.",
//                 image: day,
//                 alt: "24/7 mental health support illustration"
//               },
//               {
//                 icon: GraduationCap,
//                 title: "Student Mental Health Support",
//                 description: "Tailored resources to support students’ academic success and emotional well-being.",
//                 image: student,
//                 alt: "Student mental health support image"
//               },
//               {
//                 icon: Leaf,
//                 title: "Relaxation Techniques",
//                 description: "Guided relaxation methods to reduce stress and enhance mental wellness.",
//                 image: relaxation,
//                 alt: "Relaxation techniques illustration"
//               },
//               {
//                 icon: CheckSquare,
//                 title: "Mental Health To-Do List",
//                 description: "Organize tasks to improve mental clarity and manage daily responsibilities.",
//                 image: todolist,
//                 alt: "Mental health to-do list image"
//               },
//               {
//                 icon: BookOpen,
//                 title: "Therapeutic Diary",
//                 description: "A private journaling space to reflect and process emotions for mental health.",
//                 image: diary,
//                 alt: "Therapeutic diary illustration"
//               },
//               {
//                 icon: Headphones,
//                 title: "Relaxation Music Therapy",
//                 description: "Curated playlists to promote relaxation and support mental well-being.",
//                 image: music,
//                 alt: "Relaxation music therapy image"
//               },
//               {
//                 icon: Activity,
//                 title: "Breathing Exercises",
//                 description: "Controlled breathing techniques to reduce anxiety and improve focus.",
//                 image: breathing,
//                 alt: "Breathing exercises illustration"
//               },
//               {
//                 icon: Calendar,
//                 title: "Instant Therapy Booking",
//                 description: "Schedule therapy sessions instantly with real-time availability.",
//                 image: booking,
//                 alt: "Instant therapy booking image"
//               },
//               {
//                 icon: TrendingUp,
//                 title: "Mood Tracker",
//                 description: "Monitor mood patterns to gain insights into your mental health journey.",
//                 image: tracker,
//                 alt: "Mood tracker illustration"
//               },
//               {
//                 icon: Activity,
//                 title: "Mental Health Activities",
//                 description: "Engaging activities to boost mood and foster a positive mindset.",
//                 image: activity,
//                 alt: "Mental health activities image"
//               },
//               {
//                 icon: Target,
//                 title: "Mental Health Goal Setting",
//                 description: "Set and track personal goals to support your mental wellness journey.",
//                 image: goal,
//                 alt: "Mental health goal setting illustration"
//               },
//               {
//                 icon: Lightbulb,
//                 title: "Healthy Habit Building",
//                 description: "Develop sustainable habits to promote long-term mental health.",
//                 image: habit,
//                 alt: "Healthy habit building image"
//               }
//             ].map((specialty, index) => (
//               <article key={index} className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#015F4A]/20 transition-all duration-300 hover:shadow-md">
//                 <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
//                   <img src={specialty.image} alt={specialty.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
//                 </div>
//                 <div className="w-12 h-12 bg-[#015F4A]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#015F4A] group-hover:scale-105 transition-all duration-300">
//                   <specialty.icon className="text-[#015F4A] group-hover:text-white transition-colors duration-300" size={20} aria-hidden="true" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2 text-gray-900">{specialty.title}</h3>
//                 <p className="text-gray-600 text-sm leading-relaxed">{specialty.description}</p>
//               </article>
//             ))}
//           </div>
//           <article className="bg-white rounded-2xl p-10 border border-[#015F4A]/10">
//             <div className="max-w-4xl mx-auto text-center">
//               <div className="w-16 h-16 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Sparkles className="w-8 h-8 text-[#015F4A]" aria-hidden="true" />
//               </div>
//               <h3 className="text-3xl font-semibold mb-4 text-gray-900">Professional Mental Health Excellence</h3>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 MELETE combines innovative technology with licensed therapists to deliver comprehensive, evidence-based mental health care, accessible anytime, anywhere.
//               </p>
//             </div>
//           </article>
//         </div>
//       </section>

//       {/* 5. Help Section */}
//       <section className="py-20 bg-white" aria-labelledby="help-heading">
//         <div className="container mx-auto px-6">
//           <div className="max-w-5xl mx-auto text-center">
//             <div className="mb-12">
//               <div className="w-20 h-20 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-8">
//                 <Heart className="w-10 h-10 text-[#015F4A]" aria-hidden="true" />
//               </div>
//               <h2 id="help-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
//                 You're Not Alone in Your <span className="font-semibold text-[#015F4A]">Mental Health Journey</span>
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed mb-8">
//                 Seeking professional mental health support is a courageous step. MELETE is here to guide you.
//               </p>
//             </div>
//             <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 mb-10">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//                 <article className="text-center">
//                   <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Users className="w-7 h-7 text-[#015F4A]" aria-hidden="true" />
//                   </div>
//                   <h4 className="font-semibold text-lg text-gray-900 mb-2">Mental Health Community</h4>
//                   <p className="text-gray-600">Connect with a supportive community to enhance your mental wellness journey.</p>
//                 </article>
//                 <article className="text-center">
//                   <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Shield className="w-7 h-7 text-[#015F4A]" aria-hidden="true" />
//                   </div>
//                   <h4 className="font-semibold text-lg text-gray-900 mb-2">Confidential Therapy</h4>
//                   <p className="text-gray-600">Your privacy is safeguarded with healthcare-grade security protocols.</p>
//                 </article>
//                 <article className="text-center">
//                   <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Award className="w-7 h-7 text-[#015F4A]" aria-hidden="true" />
//                   </div>
//                   <h4 className="font-semibold text-lg text-gray-900 mb-2">Expert Mental Health Care</h4>
//                   <p className="text-gray-600">Access licensed therapists for professional, compassionate support.</p>
//                 </article>
//               </div>
//               <div className="text-center">
//                 <p className="text-lg text-gray-700 mb-8 leading-relaxed">
//                   Whether managing stress, anxiety, or seeking personal growth, our expert therapists are here to support your mental health needs.
//                 </p>
//                 <a href="/get-started" className="group bg-[#015F4A] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#014539] transition-all duration-300 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl">
//                   Start Your Therapy Journey
//                   <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 6. App Download Section */}
//       <section className="py-20 bg-gray-50" aria-labelledby="app-download-heading">
//         <div className="container mx-auto px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <div className="inline-flex items-center px-4 py-2 bg-[#015F4A]/10 rounded-full text-[#015F4A] font-medium mb-8">
//                   <Smartphone className="w-4 h-4 mr-2" aria-hidden="true" />
//                   Download the MELETE App
//                 </div>
//                 <h2 id="app-download-heading" className="text-4xl lg:text-5xl font-light mb-6 leading-tight text-gray-900">
//                   Mental Health Support <br />
//                   <span className="font-semibold text-[#015F4A]">Anytime, Anywhere</span>
//                 </h2>
//                 <p className="text-xl text-gray-600 mb-10 leading-relaxed">
//                   Download the MELETE app to connect with licensed therapists, track your mental health progress, and access evidence-based resources on the go.
//                 </p>
//                 <div className="space-y-4 mb-10">
//                   {[
//                     "24/7 access to professional therapists",
//                     "Secure video, voice, and chat therapy sessions",
//                     "Track your mental health progress with insights",
//                     "Access a library of therapeutic resources",
//                     "Healthcare-grade privacy and security"
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center">
//                       <CheckSquare className="w-5 h-5 text-[#015F4A] mr-4 flex-shrink-0" aria-hidden="true" />
//                       <span className="text-gray-600">{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
//                     <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//                       <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
//                     </svg>
//                     <div className="text-left">
//                       <div className="text-xs text-gray-300">GET IT ON</div>
//                       <div className="text-sm font-semibold">Google Play</div>
//                     </div>
//                   </a>
//                   <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer" className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
//                     <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
//                       <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
//                     </svg>
//                     <div className="text-left">
//                       <div className="text-xs text-gray-300">Download on the</div>
//                       <div className="text-sm font-semibold">App Store</div>
//                     </div>
//                   </a>
//                 </div>
//               </div>
//               <div className="flex justify-center lg:justify-end">
//                 <img src={mobileApp} alt="MELETE mobile app interface" className="w-auto h-96 object-contain" loading="lazy" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;







import React from "react";
import {
  Heart,
  Shield,
  Users,
  Award,
  BookOpen,
  CheckSquare,
  Calendar,
  User,
  Building2,
  GraduationCap,
  Headphones,
  ArrowRight,
  Star,
  Zap,
  Brain,
  Activity,
  Clock,
  MessageCircle,
  Phone,
  Video,
  Download,
  Play,
  Smartphone,
  Globe,
  Lock,
  Target,
  Eye,
  Stethoscope,
  Leaf,
  Lightbulb,
  UserCheck,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// Placeholder images (replace with actual URLs in production)
import dep from '../assets/Depression.webp';
import day from '../assets/day.webp';
import student from '../assets/student.webp';
import music from '../assets/music.webp';
import tracker from '../assets/mood-tracker.webp';
import breathing from '../assets/breathing.webp';
import todolist from '../assets/todo.webp';
import booking from '../assets/booking.webp';
import diary from '../assets/diary.webp';
import goal from '../assets/goal.webp';
import relaxation from '../assets/relaxation-tech.webp';
import activity from '../assets/activities.webp';
import habit from '../assets/habit.webp';
import mobileApp from '../assets/habit.webp'
import application from '../assets/meleteapp.jpg'

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* SEO Meta Tags */}
      <head>
        <title>About MELETE - Professional Mental Health Platform</title>
        <meta name="description" content="Discover MELETE, a certified mental health platform offering professional therapy, evidence-based resources, and secure digital support for your mental wellness journey." />
        <meta name="keywords" content="mental health platform, online therapy, professional mental health support, licensed therapists, mental wellness, evidence-based care, MELETE" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MELETE" />
        <meta property="og:title" content="About MELETE - Professional Mental Health Platform" />
        <meta property="og:description" content="MELETE provides accessible, professional mental health care through a secure digital platform, connecting you with licensed therapists and evidence-based resources." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.meletewellness.com/about" />
        <meta property="og:image" content="/assets/melete-og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About MELETE - Professional Mental Health Platform" />
        <meta name="twitter:description" content="Join MELETE for professional mental health support with licensed therapists and secure, evidence-based digital tools." />
        <meta name="twitter:image" content="/assets/melete-og-image.jpg" />
        <link rel="canonical" href="https://www.meletewellness.com/about" />
      </head>

      {/* Schema Markup for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "MELETE",
          "url": "https://www.meletewellness.com",
          "logo": "/assets/melete-logo.png",
          "description": "MELETE is a certified mental health platform providing professional therapy and evidence-based resources through a secure digital platform.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "email": "connect@meletewellness.com",
            "url": "https://www.meletewellness.com/contact"
          },
          "sameAs": [
            "https://twitter.com/meletehealth",
            "https://www.facebook.com/meletehealth",
            "https://www.linkedin.com/company/meletehealth"
          ]
        })}
      </script>

      {/* 1. Hero Section - Clean and Professional */}
      <header className="relative bg-white py-20" role="banner">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium mb-8 text-[#015F4A]">
              <Stethoscope className="w-5 h-5 mr-2" aria-hidden="true" />
              Certified Mental Health Platform
            </div>
            <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight text-gray-900">
              Welcome to <span className="font-bold text-[#015F4A]">MELETE</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Your Trusted Professional Mental Wellness Platform
            </p>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto">
              Experience accessible, evidence-based mental health care through our secure digital platform. Connect with licensed therapists and access tailored therapeutic resources for your well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/get-started" className="group bg-[#015F4A] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#014539] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                Begin Your Mental Health Journey
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
              <a href="/learn-more" className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#015F4A]/5 rounded-full blur-xl" aria-hidden="true"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#015F4A]/3 rounded-full blur-2xl" aria-hidden="true"></div>
      </header>

      {/* 2. Mission and Vision */}
      <section className="py-20 bg-gray-50" aria-labelledby="mission-vision-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#015F4A]/10 rounded-full text-[#015F4A] font-medium mb-6">
                <Target className="w-4 h-4 mr-2" aria-hidden="true" />
                Our Foundation
              </div>
              <h2 id="mission-vision-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
                Our Mission & <span className="font-semibold text-[#015F4A]">Vision</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Transforming mental health care with professional expertise and innovative digital solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <article className="bg-[#015F4A] p-10 rounded-2xl text-white shadow-lg">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                We envision a world where professional mental health support is universally accessible, delivered with therapeutic excellence, and recognized as essential to every individual's well-being.                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Global Access</span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Clinical Excellence</span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Mental Wellness</span>
                </div>
              </article>
              <article className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-[#015F4A]/20 transition-all duration-300 shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 bg-[#015F4A]/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#015F4A]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  MELETE is dedicated to providing accessible, professional mental health care through a secure digital platform, connecting individuals with licensed therapists and evidence-based resources.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Professional Therapy</span>
                  <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Evidence-Based</span>
                  <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Accessible Care</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose MELETE */}
      <section className="py-20 bg-white" aria-labelledby="why-melete-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 id="why-melete-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
              Why Choose <span className="font-semibold text-[#015F4A]">MELETE</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover a secure, professional mental health platform combining innovative technology with licensed therapists for effective, accessible support.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Certified Mental Health Platform",
                description: "A professionally certified platform ensuring compliance with healthcare standards for quality mental health care."
              },
              {
                icon: UserCheck,
                title: "Licensed Therapists",
                description: "Connect with verified mental health professionals offering specialized expertise and compassionate care."
              },
              {
                icon: Shield,
                title: "Healthcare-Grade Security",
                description: "Your data is protected with advanced encryption, ensuring complete confidentiality and privacy."
              },
              {
                icon: Globe,
                title: "Comprehensive Mental Health Services",
                description: "Support for individuals, schools, healthcare providers, and corporate wellness programs."
              },
              {
                icon: Brain,
                title: "Evidence-Based Therapy",
                description: "Access scientifically validated therapeutic methods for effective mental health support."
              },
              {
                icon: Heart,
                title: "Compassionate Mental Health Care",
                description: "Empathy-driven support tailored to your unique mental health needs and goals."
              }
            ].map((reason, index) => (
              <article key={index} className="group bg-gray-50 rounded-xl p-8 border border-gray-100 hover:bg-white hover:border-[#015F4A]/20 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-[#015F4A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#015F4A] group-hover:scale-105 transition-all duration-300">
                  <reason.icon className="text-[#015F4A] group-hover:text-white transition-colors duration-300" size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Specialties Section */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img src={specialty.image} alt={specialty.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
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

      {/* 5. Help Section */}
      <section className="py-20 bg-white" aria-labelledby="help-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-20 h-20 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-[#015F4A]" aria-hidden="true" />
              </div>
              <h2 id="help-heading" className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
                You're Not Alone in Your <span className="font-semibold text-[#015F4A]">Mental Health Journey</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Seeking professional mental health support is a courageous step. MELETE is here to guide you.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <article className="text-center">
                  <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-[#015F4A]" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Mental Health Community</h4>
                  <p className="text-gray-600">Connect with a supportive community to enhance your mental wellness journey.</p>
                </article>
                <article className="text-center">
                  <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-[#015F4A]" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Confidential Therapy</h4>
                  <p className="text-gray-600">Your privacy is safeguarded with healthcare-grade security protocols.</p>
                </article>
                <article className="text-center">
                  <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-[#015F4A]" aria-hidden="true" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Expert Mental Health Care</h4>
                  <p className="text-gray-600">Access licensed therapists for professional, compassionate support.</p>
                </article>
              </div>
              <div className="text-center">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether managing stress, anxiety, or seeking personal growth, our expert therapists are here to support your mental health needs.
                </p>
                <a href="/get-started" className="group bg-[#015F4A] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#014539] transition-all duration-300 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl">
                  Start Your Therapy Journey
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. App Download Section */}
      <section className="py-20 bg-gray-50" aria-labelledby="app-download-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#015F4A]/10 rounded-full text-[#015F4A] font-medium mb-8">
                  <Smartphone className="w-4 h-4 mr-2" aria-hidden="true" />
                  Download the MELETE App
                </div>
                <h2 id="app-download-heading" className="text-4xl lg:text-5xl font-light mb-6 leading-tight text-gray-900">
                  Mental Health Support <br />
                  <span className="font-semibold text-[#015F4A]">Anytime, Anywhere</span>
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Download the MELETE app to connect with licensed therapists, track your mental health progress, and access evidence-based resources on the go.
                </p>
                <div className="space-y-4 mb-10">
                  {[
                    "24/7 access to professional therapists",
                    "Secure video, voice, and chat therapy sessions",
                    "Track your mental health progress with insights",
                    "Access a library of therapeutic resources",
                    "Healthcare-grade privacy and security"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckSquare className="w-5 h-5 text-[#015F4A] mr-4 flex-shrink-0" aria-hidden="true" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                  <a href="https://www.apple.com/app-store" target="_blank" rel="noopener noreferrer" className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                </div>
              </div>
              {/* <div className="flex justify-center lg:justify-end">
                <img src={mobileApp} alt="MELETE mobile app interface" className="w-auto h-96 object-contain" loading="lazy" />
              </div> */}

              <div className="flex justify-center lg:justify-end">
  <div className="relative w-[250px] h-[500px] rounded-[2.5rem] bg-black border-[14px] border-gray-900 shadow-xl overflow-hidden">
    {/* Top notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-lg z-20" />

    {/* Mobile App Screenshot */}
    <img
      src={application}
      alt="MELETE mobile app interface"
      className="w-full h-full object-cover rounded-[2rem]"
      loading="lazy"
    />
  </div>
</div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;