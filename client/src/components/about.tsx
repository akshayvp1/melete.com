// import React from "react";
// import {
//   Heart,
//   Shield,
//   Users,
//   Award,
//   BookOpen,
//   Music,
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
// } from "lucide-react";
// import Micon from '../assets/Micon.png'

// const AboutPage = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       {/* Hero Section */}
//       <header className="relative bg-gradient-to-br from-[#015F4A] via-[#015F4A] to-[#015F4A] text-white py-20">
//         <div className="container mx-auto px-6 relative z-10">
//           <div className="flex flex-col lg:flex-row items-center justify-between">
//             <div className="lg:w-1/2 mb-12 lg:mb-0">
//               <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
//                 <Star className="w-4 h-4 mr-2" />
//                 KSUM Recognized Platform
//               </div>
//               <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//                 About <span className="text-[#66BFA1]">MELETE</span>
//               </h1>
//               <p className="text-xl lg:text-2xl mb-8 text-gray-100 leading-relaxed">
//                 Revolutionizing mental health support through accessible,
//                 evidence-based, and professional care for everyone
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <button className="group bg-[#31A382] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#2F9B7A] transition-all duration-300 flex items-center justify-center shadow-lg">
//                   Download App
//                   <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//                 <button className="group border-2 border-white/80 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#015F4A] transition-all duration-300">
//                   Learn More
//                 </button>
//               </div>
//             </div>

//             {/* Professional Mobile Mockup */}
//             <div className="lg:w-1/2 flex justify-center">
//               <div className="relative">
//                 {/* Phone Frame */}
//                 <div className="w-72 h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
//                   <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-[2.5rem] overflow-hidden relative">
//                     {/* Screen Content */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#015F4A]/5 to-[#31A382]/10">
//                       {/* Status Bar */}
//                       <div className="flex justify-between items-center px-6 pt-4 pb-2 text-gray-800">
//                         <div className="text-sm font-semibold">9:41</div>
//                         <div className="flex space-x-1">
//                           <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
//                           <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
//                           <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
//                         </div>
//                       </div>

//                       {/* App Header */}
//                       <div className="px-6 py-4">
//                         <div className="flex items-center justify-between mb-6">
//                           <div>
//                             <h3 className="text-2xl font-bold text-[#015F4A]">
//                               MELETE
//                             </h3>
//                             <p className="text-gray-600 text-sm">
//                               Mental Health Platform
//                             </p>
//                           </div>
//                           <div className="w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center">
//                             <img
//                               src={Micon} // Replace with your actual image path
//                               alt="Logo"
//                               className="w-6 h-6" // Adjust width and height as needed
//                             />
//                           </div>
//                         </div>

//                         {/* Professional Stats */}
//                         <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
//                           <div className="flex justify-between items-center">
//                             <div className="text-center">
//                               <div className="text-lg font-bold text-[#015F4A]">
//                                 24/7
//                               </div>
//                               <div className="text-xs text-gray-600">
//                                 Available
//                               </div>
//                             </div>
//                             <div className="text-center">
//                               <div className="text-lg font-bold text-[#31A382]">
//                                 100+
//                               </div>
//                               <div className="text-xs text-gray-600">
//                                 Experts
//                               </div>
//                             </div>
//                             <div className="text-center">
//                               <div className="text-lg font-bold text-[#015F4A]">
//                                 Secure
//                               </div>
//                               <div className="text-xs text-gray-600">
//                                 Platform
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Feature Cards */}
//                         <div className="space-y-3">
//                           <div className="bg-gradient-to-r from-[#015F4A] to-[#0A4F43] rounded-xl p-3 text-white">
//                             <div className="flex items-center">
//                               <Headphones className="w-5 h-5 mr-3" />
//                               <div>
//                                 <div className="font-semibold text-sm">
//                                   Professional Consultation
//                                 </div>
//                                 <div className="text-xs opacity-80">
//                                   Connect with Experts
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="bg-white rounded-xl p-3 border border-gray-200">
//                             <div className="flex items-center">
//                               <Activity className="w-5 h-5 mr-3 text-[#31A382]" />
//                               <div>
//                                 <div className="font-semibold text-sm text-gray-800">
//                                   Progress Tracking
//                                 </div>
//                                 <div className="text-xs text-gray-600">
//                                   Monitor Your Journey
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="bg-white rounded-xl p-3 border border-gray-200">
//                             <div className="flex items-center">
//                               <Shield className="w-5 h-5 mr-3 text-[#31A382]" />
//                               <div>
//                                 <div className="font-semibold text-sm text-gray-800">
//                                   Secure & Private
//                                 </div>
//                                 <div className="text-xs text-gray-600">
//                                   Complete Confidentiality
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Introduction Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="max-w-5xl mx-auto">
//             <div className="text-center mb-16">
//               <div className="inline-flex items-center px-6 py-3 bg-[#015F4A]/10 rounded-full text-[#015F4A] font-semibold mb-6">
//                 <Award className="w-5 h-5 mr-2" />
//                 Who We Are
//               </div>
//               <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900 leading-tight">
//                 Transforming Mental Healthcare{" "}
//                 <br className="hidden lg:block" />
//                 <span className="text-[#015F4A]">Through Innovation</span>
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
//                 MELETE is a{" "}
//                 <strong>KSUM (Kerala Start-ups Mission) recognized</strong>{" "}
//                 mental health platform revolutionizing access to professional
//                 emotional support through a secure, evidence-based digital
//                 platform. We provide 24/7 expert consultations, comprehensive
//                 wellness programs, and tailored solutions for students,
//                 professionals, institutions, and organizations—making mental
//                 well-being accessible, professional, and effective.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               <div className="group bg-gradient-to-br from-[#015F4A] to-[#015F4A] p-10 rounded-2xl text-white hover:scale-105 transition-all duration-300 shadow-xl">
//                 <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
//                   <Award className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
//                 <p className="text-gray-100 leading-relaxed text-lg">
//                   To create a world where professional mental health support is
//                   universally accessible, evidence-based, and delivered with the
//                   highest standards of care and confidentiality.
//                 </p>
//               </div>

//               <div className="group bg-white p-10 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl border border-gray-200">
//                 <div className="w-16 h-16 bg-[#015F4A] rounded-2xl flex items-center justify-center mb-6">
//                   <Users className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-[#015F4A]">
//                   Our Mission
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed text-lg">
//                   To democratize access to professional mental health care
//                   through our secure, user-centric platform. We empower
//                   individuals and organizations to prioritize mental wellness by
//                   connecting them with certified professionals and
//                   evidence-based resources.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* What We Offer Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
//               Professional{" "}
//               <span className="text-[#015F4A]">Mental Health Solutions</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Comprehensive programs and services designed for individuals and
//               organizations
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//             {[
//               {
//                 icon: GraduationCap,
//                 title: "Educational Institutions",
//                 description:
//                   "Comprehensive mental health programs with specialized consulting services and annual support packages for academic communities",
//                 badge: "Institutional Packages",
//                 color: "from-blue-500 to-blue-600",
//               },
//               {
//                 icon: Building2,
//                 title: "Corporate Organizations",
//                 description:
//                   "Employee wellness programs and organizational mental health solutions with comprehensive support frameworks",
//                 badge: "Enterprise Solutions",
//                 color: "from-purple-500 to-purple-600",
//               },
//               {
//                 icon: Users,
//                 title: "Healthcare Providers",
//                 description:
//                   "Platform integration for healthcare institutions seeking to expand their mental health service offerings",
//                 badge: "Healthcare Integration",
//                 color: "from-[#015F4A] to-[#0A4F43]",
//               },
//               {
//                 icon: User,
//                 title: "Individual Care",
//                 description:
//                   "Direct access to certified mental health professionals through our secure, confidential platform",
//                 badge: "Personal Consultation",
//                 color: "from-[#31A382] to-[#2F9B7A]",
//               },
//             ].map((service, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#015F4A]/20 hover:-translate-y-2"
//               >
//                 <div
//                   className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
//                 >
//                   <service.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-gray-900">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>
//                 <div className="inline-flex items-center px-4 py-2 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-semibold">
//                   {service.badge}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Professional Support Highlight */}
//           <div className="relative bg-gradient-to-r from-[#015F4A] to-[#0A4F43] rounded-3xl p-12 text-white text-center mb-16 overflow-hidden">
//             <div className="relative z-10">
//               <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <Headphones size={40} />
//               </div>
//               <h3 className="text-3xl font-bold mb-6">
//                 24/7 Professional Mental Health Support
//               </h3>
//               <p className="text-xl text-gray-100 max-w-2xl mx-auto">
//                 Connect with our network of certified mental health
//                 professionals anytime through our secure platform. Professional
//                 care is always within reach.
//               </p>
//             </div>
//           </div>

//           {/* Services Overview */}
//           <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-xl border border-gray-200">
//             <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
//               Comprehensive Care Ecosystem
//             </h3>
//             <p className="text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto">
//               MELETE provides professional consultations with licensed
//               therapists, evidence-based wellness programs, secure communication
//               tools, and personalized treatment plans. Our platform includes
//               professional development workshops, credentialed provider
//               networks, and comprehensive care coordination—all integrated
//               seamlessly within a single, secure environment.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Platform Features Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
//               Advanced <span className="text-[#015F4A]">Platform Features</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Professional-grade tools and features designed to support
//               comprehensive mental wellness
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: CheckSquare,
//                 title: "Progress Tracking & Goal Management",
//                 description:
//                   "Comprehensive tracking system for monitoring therapeutic progress, treatment goals, and wellness milestones with professional oversight and reporting.",
//               },
//               {
//                 icon: BookOpen,
//                 title: "Secure Documentation & Records",
//                 description:
//                   "Secure digital documentation system for maintaining confidential records, treatment notes, and progress tracking with full security protocols.",
//               },
//               {
//                 icon: Music,
//                 title: "Evidence-Based Wellness Resources",
//                 description:
//                   "Curated library of therapeutic resources including guided interventions, mindfulness protocols, and evidence-based relaxation techniques.",
//               },
//               {
//                 icon: Calendar,
//                 title: "Professional Scheduling System",
//                 description:
//                   "Integrated appointment management with automated reminders, professional calendar integration, and seamless coordination between clients and providers.",
//               },
//               {
//                 icon: Users,
//                 title: "Licensed Professional Network",
//                 description:
//                   "Direct access to our network of licensed mental health professionals through secure video conferencing, messaging, and voice communication.",
//               },
//               {
//                 icon: Shield,
//                 title: "Enterprise-Grade Security",
//                 description:
//                   "Advanced encryption and comprehensive data protection ensuring complete confidentiality and regulatory adherence.",
//               },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-[#015F4A]/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
//               >
//                 <div className="w-14 h-14 bg-[#015F4A]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#015F4A] group-hover:scale-110 transition-all duration-300">
//                   <feature.icon
//                     className="text-[#015F4A] group-hover:text-white transition-colors duration-300"
//                     size={28}
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold mb-4 text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Certification Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6 text-gray-900">
//               Certified & <span className="text-[#015F4A]">Recognized</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-4xl mx-auto">
//               MELETE is officially recognized and certified by leading
//               government initiatives and startup ecosystems, validating our
//               commitment to excellence, innovation, and regulatory compliance in
//               mental healthcare technology.
//             </p>
//           </div>

//           <div className="flex flex-wrap justify-center items-center gap-16">
//             {/* KSUM Certification */}
//             <div className="group text-center max-w-sm">
//               <div className="relative">
//                 <div className="w-56 h-56 bg-gradient-to-br from-[#015F4A] via-[#0A4F43] to-[#0D5A4D] rounded-2xl mb-8 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105 mx-auto relative overflow-hidden">
//                   <div className="text-center text-white relative z-10">
//                     <div className="mb-6">
//                       <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
//                         <Award className="w-12 h-12 text-white" />
//                       </div>
//                     </div>
//                     <div className="text-lg font-bold leading-tight">
//                       <div className="text-2xl mb-1">KERALA</div>
//                       <div className="text-xl mb-1">STARTUP</div>
//                       <div className="text-xl">MISSION</div>
//                     </div>
//                   </div>

//                   <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#31A382] rounded-full flex items-center justify-center">
//                     <Star className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//               </div>
//               <h3 className="font-bold text-2xl text-gray-900 mb-3">
//                 Kerala Startup Mission
//               </h3>
//               <p className="text-[#015F4A] font-semibold text-lg mb-4">
//                 KSUM Recognized • 2023
//               </p>
//               <div className="px-6 py-3 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-semibold inline-block">
//                 Government Certified Platform
//               </div>
//             </div>

//             {/* Startup India Certification */}
//             <div className="group text-center max-w-sm">
//               <div className="relative">
//                 <div className="w-56 h-56 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl mb-8 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-105 mx-auto relative overflow-hidden">
//                   <div className="text-center text-white relative z-10">
//                     <div className="mb-6">
//                       <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
//                         <Star className="w-12 h-12 text-white" />
//                       </div>
//                     </div>
//                     <div className="text-lg font-bold leading-tight">
//                       <div className="text-2xl mb-1">STARTUP</div>
//                       <div className="text-xl mb-1">INDIA</div>
//                       <div className="text-lg">CERTIFIED</div>
//                     </div>
//                   </div>

//                   <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
//                     <Zap className="w-6 h-6 text-white" />
//                   </div>
//                 </div>
//               </div>
//               <h3 className="font-bold text-2xl text-gray-900 mb-3">
//                 Startup India
//               </h3>
//               <p className="text-[#015F4A] font-semibold text-lg mb-4">
//                 Government Certified • 2023
//               </p>
//               <div className="px-6 py-3 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold inline-block">
//                 National Recognition
//               </div>
//             </div>
//           </div>

//           {/* Certification Benefits */}
//           <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-10 shadow-lg border border-gray-200">
//             <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
//               Certification Standards & Compliance
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Shield className="w-8 h-8 text-[#015F4A]" />
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900 mb-2">
//                   Regulatory Compliance
//                 </h4>
//                 <p className="text-gray-600">
//                   Government validation of our platform's security, privacy, and
//                   healthcare standards
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Award className="w-8 h-8 text-[#015F4A]" />
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900 mb-2">
//                   Quality Assurance
//                 </h4>
//                 <p className="text-gray-600">
//                   Meets stringent criteria for healthcare technology innovation
//                   and service delivery
//                 </p>
//               </div>
//               <div className="text-center">
//                 <div className="w-16 h-16 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Users className="w-8 h-8 text-[#015F4A]" />
//                 </div>
//                 <h4 className="font-bold text-lg text-gray-900 mb-2">
//                   Professional Standards
//                 </h4>
//                 <p className="text-gray-600">
//                   Recognized for maintaining highest standards of professional
//                   mental healthcare delivery
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-6 text-gray-900">
//               Our <span className="text-[#015F4A]">Professional Standards</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               The core principles that guide our professional practice and
//               service delivery
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: Heart,
//                 title: "Clinical Excellence",
//                 description:
//                   "Maintaining the highest standards of clinical practice, evidence-based treatment, and professional therapeutic relationships",
//               },
//               {
//                 icon: Shield,
//                 title: "Confidentiality",
//                 description:
//                   "Absolute commitment to client privacy, data security, and maintaining professional boundaries in all interactions",
//               },
//               {
//                 icon: Award,
//                 title: "Professional Integrity",
//                 description:
//                   "Upholding ethical standards, continuous professional development, and accountability in all service delivery",
//               },
//               {
//                 icon: Users,
//                 title: "Universal Access",
//                 description:
//                   "Ensuring professional mental health services are accessible to all individuals regardless of location or circumstances",
//               },
//             ].map((value, index) => (
//               <div
//                 key={index}
//                 className="group text-center hover:-translate-y-2 transition-all duration-300"
//               >
//                 <div className="w-20 h-20 bg-gradient-to-br from-[#015F4A] to-[#0A4F43] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
//                   <value.icon className="text-white" size={32} />
//                 </div>
//                 <h3 className="font-bold text-xl text-gray-900 mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600 leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
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
import dep from '../assets/Depression.webp'
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


const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section - Clean and Professional */}
      <header className="relative bg-white py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium mb-8 text-[#015F4A]">
              <Stethoscope className="w-5 h-5 mr-2" />
              Certified Mental Health Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight text-gray-900">
              Welcome to <span className="font-bold text-[#015F4A]">MELETE</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Professional Mental Wellness Platform
            </p>
            
            <p className="text-lg text-gray-500 mb-12 leading-relaxed max-w-3xl mx-auto">
              Experience evidence-based mental healthcare through our secure digital platform. 
              Connect with licensed professionals and access comprehensive therapeutic resources designed for your wellbeing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-[#015F4A] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#014539] transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl">
                Begin Your Journey
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#015F4A]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#015F4A]/3 rounded-full blur-2xl"></div>
      </header>

      {/* 2. Mission and Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-[#015F4A]/10 rounded-full text-[#015F4A] font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Foundation
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
                Mission & <span className="font-semibold text-[#015F4A]">Vision</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Committed to transforming mental healthcare through professional excellence and innovative technology.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="bg-white p-10 rounded-2xl border border-gray-100 hover:border-[#015F4A]/20 transition-all duration-300 shadow-sm hover:shadow-lg">
                <div className="w-16 h-16 bg-[#015F4A]/10 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-[#015F4A]" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  To provide accessible, professional mental health care through our secure digital platform. 
                  We connect individuals with certified professionals and evidence-based therapeutic resources, 
                  making quality mental healthcare available to everyone, everywhere.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Professional Care</span>
                  <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Evidence-Based</span>
                  <span className="px-3 py-1 bg-[#015F4A]/10 text-[#015F4A] rounded-full text-sm font-medium">Accessible</span>
                </div>
              </div>

              {/* Vision */}
              <div className="bg-[#015F4A] p-10 rounded-2xl text-white shadow-lg">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  To create a world where professional mental health support is universally accessible and 
                  delivered with the highest standards of clinical excellence. We envision a future where 
                  mental wellness is prioritized and quality care reaches every individual who needs it.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Universal Access</span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Clinical Excellence</span>
                  <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium">Global Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Choose MELETE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
              Why Choose <span className="font-semibold text-[#015F4A]">MELETE?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with professional mental healthcare expertise to deliver 
              secure, accessible, and effective support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Certified Platform",
                description: "Professionally certified platform ensuring regulatory compliance and quality healthcare standards."
              },
              {
                icon: UserCheck,
                title: "Licensed Professionals",
                description: "Access to verified mental health experts with specialized training and proven expertise."
              },
              {
                icon: Shield,
                title: "Medical-Grade Security",
                description: "Comprehensive data protection ensuring complete confidentiality."
              },
              {
                icon: Globe,
                title: "Comprehensive Service",
                description: "Serving individuals, healthcare providers, educational institutions, and corporate wellness programs."
              },
              {
                icon: Brain,
                title: "Evidence-Based Care",
                description: "Scientifically-backed therapeutic approaches and clinically validated treatment methodologies."
              },
              {
                icon: Heart,
                title: "Compassionate Care",
                description: "Human-centered approach with empathy and understanding at the core of every interaction."
              }
            ].map((reason, index) => (
              <div key={index} className="group bg-gray-50 rounded-xl p-8 border border-gray-100 hover:bg-white hover:border-[#015F4A]/20 transition-all duration-300 hover:shadow-lg">
                <div className="w-14 h-14 bg-[#015F4A]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#015F4A] group-hover:scale-105 transition-all duration-300">
                  <reason.icon className="text-[#015F4A] group-hover:text-white transition-colors duration-300" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Specialties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
              Our <span className="font-semibold text-[#015F4A]">Specialties</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert areas designed to meet diverse mental health needs with professional excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Clock,
                title: "24/7 Mental Health Support",
                description: "Round-the-clock professional mental health support available whenever needed.",
                image: day
              },
              {
                icon: GraduationCap,
                title: "Student Support",
                description: "Tailored mental health resources and guidance to support students' academic and personal growth.",
                image: student
              },
              {
                icon: Leaf,
                title: "Relaxation Techniques",
                description: "Guided techniques to reduce stress and promote relaxation for mental well-being.",
                image: relaxation
              },
              {
                icon: CheckSquare,
                title: "To-Do List",
                description: "Organize tasks and manage daily responsibilities to enhance mental clarity.",
                image: todolist
              },
              {
                icon: BookOpen,
                title: "Diary",
                description: "Personal journaling space to reflect and process emotions effectively.",
                image: diary
              },
              {
                icon: Headphones,
                title: "Mental Health Related Music",
                description: "Curated music playlists designed to support mental health and relaxation.",
                image: music
              },
              {
                icon: Activity,
                title: "Breathing Exercises",
                description: "Structured exercises to improve focus and reduce anxiety through controlled breathing.",
                image: breathing
              },
              {
                icon: Calendar,
                title: "Immediate Booking",
                description: "Instant appointment scheduling with real-time availability and confirmations.",
                image: booking
              },
              {
                icon: TrendingUp,
                title: "Mood Tracker",
                description: "Track and analyze mood patterns to support mental health awareness.",
                image: tracker
              },
              {
                icon: Activity,
                title: "Activities",
                description: "Engaging activities to boost mood and encourage a positive mindset.",
                image: activity
              },
              {
                icon: Target,
                title: "Goal Settings",
                description: "Set and monitor personal mental health goals for continuous improvement.",
                image:goal
              },
              {
                icon: Lightbulb,
                title: "Habits",
                description: "Build and maintain healthy habits to support long-term mental wellness.",
                image: habit
              }
            ].map((specialty, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 border border-gray-100 hover:border-[#015F4A]/20 transition-all duration-300 hover:shadow-md">
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img src={specialty.image} alt={specialty.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="w-12 h-12 bg-[#015F4A]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#015F4A] group-hover:scale-105 transition-all duration-300">
                  <specialty.icon className="text-[#015F4A] group-hover:text-white transition-colors duration-300" size={20} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{specialty.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{specialty.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Specialty Highlight */}
          <div className="bg-white rounded-2xl p-10 border border-[#015F4A]/10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-[#015F4A]" />
              </div>
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">Professional Excellence, Always</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform combines innovative technology with licensed mental health professionals to provide 
                comprehensive, evidence-based care that's available whenever and wherever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Help Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-12">
              <div className="w-20 h-20 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Heart className="w-10 h-10 text-[#015F4A]" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-light mb-6 text-gray-900">
                You're Not Alone in This <span className="font-semibold text-[#015F4A]">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Seeking help is a sign of strength. Professional mental health support is just one step away.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 mb-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-[#015F4A]" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Community Support</h4>
                  <p className="text-gray-600">Join us as we prepare to support your mental health journey.</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-[#015F4A]" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Complete Confidentiality</h4>
                  <p className="text-gray-600">Your privacy is protected with healthcare-grade security protocols.</p>
                </div>
                <div className="text-center">
                  <div className="w-14 h-14 bg-[#015F4A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-[#015F4A]" />
                  </div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Expert Care</h4>
                  <p className="text-gray-600">Licensed therapists and counselors ready to provide professional support.</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Whether you're managing stress, anxiety, depression, or simply need professional guidance, 
                  our expert team is here to support you every step of the way.
                </p>
                <button className="group bg-[#015F4A] text-white px-10 py-4 rounded-xl font-medium hover:bg-[#014539] transition-all duration-300 flex items-center justify-center mx-auto shadow-lg hover:shadow-xl">
                  Start Your Journey Today
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. App Download Section - Clean Design */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* App Information */}
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-[#015F4A]/10 rounded-full text-[#015F4A] font-medium mb-8">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download MELETE App
                </div>
                <h2 className="text-4xl lg:text-5xl font-light mb-6 leading-tight text-gray-900">
                  Mental Health Support <br />
                  <span className="font-semibold text-[#015F4A]">Always Available</span>
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Access professional mental health support anytime, anywhere. Connect with licensed therapists, 
                  track your progress, and prioritize your wellness journey.
                </p>

                {/* App Features */}
                <div className="space-y-4 mb-10">
                  {[
                    "24/7 access to licensed mental health professionals",
                    "Secure video, voice, and messaging consultations",
                    "Personal progress tracking and wellness insights",
                    "Comprehensive therapeutic resource library",
                    "Healthcare-grade security and privacy protection"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckSquare className="w-5 h-5 text-[#015F4A] mr-4 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">GET IT ON</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </button>
                  <button className="group bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-gray-300">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Image Display */}
              <div className="flex justify-center lg:justify-end">
                {/* Replace with your mobile image URL */}
                <img src="" alt="MELETE Mobile App" className="w-auto h-96 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;