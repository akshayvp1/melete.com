

// export default SupportGroups;

// import React from 'react';
// import { User, Users, Heart, Baby, UserCheck, ArrowRight } from 'lucide-react';

// // Interface for support group items
// interface SupportGroup {
//   id: string;
//   title: string;
//   description: string;
//   image: string;
//   icon: React.ComponentType<{ className?: string }>;
//   features: string[];
// }

// // Animation hook for scroll-triggered animations
// const useIntersectionObserver = (threshold = 0.1) => {
//   const [isVisible, setIsVisible] = React.useState(false);
//   const [element, setElement] = React.useState<HTMLElement | null>(null);

//   React.useEffect(() => {
//     if (!element) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(element);
//         }
//       },
//       { threshold }
//     );

//     observer.observe(element);

//     return () => observer.disconnect();
//   }, [element, threshold]);

//   return [setElement, isVisible] as const;
// };

// const SupportGroups: React.FC = () => {
//   const [sectionRef, isSectionVisible] = useIntersectionObserver(0.1);

//   const groups: SupportGroup[] = [
//     {
//       id: 'children',
//       title: 'Children & Adolescents',
//       description: 'Specialized therapeutic programs designed to help children and teenagers navigate emotional challenges, academic stress, and developmental milestones with confidence.',
//       image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop&crop=center',
//       icon: Baby,
//       features: ['Behavioral Therapy', 'Academic Support', 'Family Counseling', 'Social Skills Development']
//     },
//     {
//       id: 'adults',
//       title: 'Adults',
//       description: 'Comprehensive mental health services tailored for working professionals, addressing stress management, career transitions, and relationship challenges.',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces',
//       icon: User,
//       features: ['Stress Management', 'Career Counseling', 'Anxiety Treatment', 'Life Coaching']
//     },
//     {
//       id: 'parents',
//       title: 'Parents & Families',
//       description: 'Expert guidance for parents navigating the complexities of family dynamics, parenting challenges, and creating healthy communication patterns.',
//       image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=400&h=300&fit=crop&crop=faces',
//       icon: Users,
//       features: ['Parenting Strategies', 'Family Therapy', 'Communication Skills', 'Conflict Resolution']
//     },
//     {
//       id: 'maternal',
//       title: 'Maternal Health',
//       description: 'Specialized support for expecting and new mothers, addressing prenatal anxiety, postpartum depression, and the emotional journey of motherhood.',
//       image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=300&fit=crop&crop=faces',
//       icon: Heart,
//       features: ['Prenatal Support', 'Postpartum Care', 'Anxiety Management', 'Support Groups']
//     },
//     {
//       id: 'seniors',
//       title: 'Senior Adults',
//       description: 'Dedicated mental health services for older adults, focusing on maintaining cognitive health, managing life transitions, and addressing age-related concerns.',
//       image: 'https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=400&h=300&fit=crop&crop=faces',
//       icon: UserCheck,
//       features: ['Cognitive Support', 'Grief Counseling', 'Social Connection', 'Wellness Programs']
//     }
//   ];

//   const handleServiceClick = (groupId: string) => {
//     // Navigate to service page
//     window.location.href = '/service';
//   };

//   return (
//     <section 
//       ref={sectionRef}
//       className="py-16 bg-gradient-to-br from-white via-emerald-50 to-teal-50"
//       aria-labelledby="support-groups-heading"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div 
//           className={`text-center mb-12 transform transition-all duration-1000 ${
//             isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}
//         >
//           <h2 
//             id="support-groups-heading" 
//             className="text-4xl md:text-5xl font-bold text-slate-800 mb-6"
//           >
//             Comprehensive Mental Health
//             <span className="block text-[#015F4A]">
//               Support Services
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//             Our evidence-based approach provides personalized mental health solutions for every stage of life, 
//             delivered by licensed professionals with expertise in diverse therapeutic modalities.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {groups.map((group, index) => (
//             <article
//               key={group.id}
//               className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-slate-200 hover:border-[#015F4A] relative ${
//                 isSectionVisible 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-12 opacity-0'
//               }`}
//               style={{ 
//                 transitionDelay: isSectionVisible ? `${index * 150}ms` : '0ms' 
//               }}
//               aria-labelledby={`group-${group.id}-title`}
//               onClick={() => handleServiceClick(group.id)}
//             >
//               {/* Image Section */}
//               <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-[#015F4A]/10">
//                 <img
//                   src={group.image}
//                   alt={`${group.title} support services`}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   loading="lazy"
//                   onError={(e) => {
//                     const target = e.target as HTMLImageElement;
//                     target.src = `https://via.placeholder.com/400x300/0f766e/ffffff?text=${encodeURIComponent(group.title)}`;
//                   }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#015F4A]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
//                 {/* Icon Overlay */}
//                 <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
//                   <group.icon className="w-6 h-6 text-[#015F4A]" aria-hidden="true" />
//                 </div>

//                 {/* Arrow Button Overlay */}
//                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
//                   <button
//                     type="button"
//                     className="w-10 h-10 bg-[#015F4A] text-white rounded-full hover:bg-[#014136] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95"
//                     aria-label={`View ${group.title} services`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleServiceClick(group.id);
//                     }}
//                   >
//                     <ArrowRight className="w-5 h-5 mx-auto transition-transform duration-200" />
//                   </button>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-6">
//                 <h3 
//                   id={`group-${group.id}-title`}
//                   className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#015F4A] transition-colors duration-300"
//                 >
//                   {group.title}
//                 </h3>
                
//                 <p className="text-slate-600 text-sm leading-relaxed mb-4">
//                   {group.description}
//                 </p>

//                 {/* Features List */}
//                 <div className="space-y-2" aria-label={`Services for ${group.title}`}>
//                   {group.features.slice(0, 3).map((feature, featureIndex) => (
//                     <div 
//                       key={featureIndex}
//                       className="flex items-center text-xs text-slate-500"
//                     >
//                       <div className="w-1.5 h-1.5 bg-[#015F4A] rounded-full mr-2 flex-shrink-0" />
//                       {feature}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//         {/* Call to Action Section */}
//         <div 
//           className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${
//             isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
//           }`}
//         >
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-8 max-w-3xl mx-auto">
//             <h3 className="text-2xl font-bold text-slate-800 mb-4">
//               Ready to Begin Your Mental Health Journey?
//             </h3>
//             <p className="text-slate-600 mb-6">
//               Our team of licensed professionals is here to provide personalized care tailored to your unique needs.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <button
//                 type="button"
//                 className="px-8 py-3 bg-[#015F4A] text-white font-semibold rounded-lg hover:bg-[#014136] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#015F4A] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 Download App
//               </button>
//               <button
//                 type="button"
//                 className="px-8 py-3 bg-transparent border-2 border-[#015F4A] text-[#015F4A] font-semibold rounded-lg hover:bg-[#015F4A] hover:text-white hover:border-[#015F4A] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#015F4A] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//               >
//                 View All Services
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SupportGroups;






import React from 'react';
import { User, Users, Heart, Baby, UserCheck, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

// Interface for support group items
interface SupportGroup {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  color: string;
}

// Animation hook for scroll-triggered animations
const useIntersectionObserver = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [element, setElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {
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

const SupportGroups: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver(0.1);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isTouch, setIsTouch] = React.useState(false);

  const groups: SupportGroup[] = [
    {
      id: 'children',
      title: 'Children & Adolescents',
      description: 'Specialized therapeutic programs for children and teenagers navigating emotional challenges and developmental milestones.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop&crop=center',
      icon: Baby,
      features: ['Behavioral Therapy', 'Academic Support', 'Family Counseling', 'Social Skills Development'],
      color: 'from-pink-500 to-rose-400'
    },
    {
      id: 'adults',
      title: 'Adults',
      description: 'Comprehensive mental health services for working professionals addressing stress, career transitions, and relationships.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=faces',
      icon: User,
      features: ['Stress Management', 'Career Counseling', 'Anxiety Treatment', 'Life Coaching'],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 'parents',
      title: 'Parents & Families',
      description: 'Expert guidance for parents navigating family dynamics, parenting challenges, and healthy communication.',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&h=400&fit=crop&crop=faces',
      icon: Users,
      features: ['Parenting Strategies', 'Family Therapy', 'Communication Skills', 'Conflict Resolution'],
      color: 'from-emerald-500 to-teal-400'
    },
    {
      id: 'maternal',
      title: 'Maternal Health',
      description: 'Specialized support for expecting and new mothers, addressing prenatal anxiety and postpartum care.',
      image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop&crop=faces',
      icon: Heart,
      features: ['Prenatal Support', 'Postpartum Care', 'Anxiety Management', 'Support Groups'],
      color: 'from-purple-500 to-violet-400'
    },
    {
      id: 'seniors',
      title: 'Senior Adults',
      description: 'Dedicated mental health services for older adults, focusing on cognitive health and life transitions.',
      image: 'https://images.unsplash.com/photo-1544717301-9cdcb1f5940f?w=600&h=400&fit=crop&crop=faces',
      icon: UserCheck,
      features: ['Cognitive Support', 'Grief Counseling', 'Social Connection', 'Wellness Programs'],
      color: 'from-amber-500 to-orange-400'
    }
  ];

  const handleServiceClick = (groupId: string) => {
    window.location.href = '/service';
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groups.length) % groups.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  React.useEffect(() => {
    const checkTouch = () => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();
  }, []);

  // Auto-slide functionality
  React.useEffect(() => {
    if (isTouch) return; // Disable auto-slide on touch devices
    
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isTouch]);

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden"
      aria-labelledby="support-groups-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className={`text-center mb-8 lg:mb-12 transform transition-all duration-1000 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 
            id="support-groups-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 lg:mb-6"
          >
            Mental Health Support
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#015F4A] to-emerald-600">
              For Every Life Stage
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Professional, evidence-based mental health services tailored to your unique needs and life circumstances.
          </p>
        </div>

        {/* Mobile Carousel View */}
        <div className="block lg:hidden mb-8">
          <div className="relative">
            {/* Main Card */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {groups.map((group, index) => (
                  <div
                    key={group.id}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <article
                      className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 mx-auto max-w-sm"
                      onClick={() => handleServiceClick(group.id)}
                    >
                      {/* Image Section with Gradient Overlay */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={group.image}
                          alt={`${group.title} support services`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/600x400/0f766e/ffffff?text=${encodeURIComponent(group.title)}`;
                          }}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${group.color} mix-blend-multiply opacity-20`} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        
                        {/* Icon */}
                        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                          <group.icon className="w-7 h-7 text-slate-700" />
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-xl font-bold mb-1 drop-shadow-lg">
                            {group.title}
                          </h3>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {group.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 gap-2 mb-6">
                          {group.features.slice(0, 4).map((feature, featureIndex) => (
                            <div 
                              key={featureIndex}
                              className="flex items-center text-sm text-slate-600 bg-slate-50 rounded-lg px-3 py-2"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-[#015F4A] to-emerald-500 rounded-full mr-3 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Action Button */}
                        <button
                          type="button"
                          className="w-full bg-gradient-to-r from-[#015F4A] to-emerald-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-[#014136] hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleServiceClick(group.id);
                          }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-700 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 z-10"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm text-slate-700 p-3 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200 z-10"
              aria-label="Next service"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {groups.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-[#015F4A] shadow-lg' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to ${groups[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {groups.map((group, index) => (
            <article
              key={group.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer border border-slate-200 hover:border-[#015F4A] ${
                isSectionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? `${index * 150}ms` : '0ms' 
              }}
              onClick={() => handleServiceClick(group.id)}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-50 to-[#015F4A]/10">
                <img
                  src={group.image}
                  alt={`${group.title} support services`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300/0f766e/ffffff?text=${encodeURIComponent(group.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#015F4A]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <group.icon className="w-6 h-6 text-[#015F4A]" />
                </div>

                {/* Arrow Button Overlay */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <button
                    type="button"
                    className="w-10 h-10 bg-[#015F4A] text-white rounded-full hover:bg-[#014136] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleServiceClick(group.id);
                    }}
                  >
                    <ArrowRight className="w-5 h-5 mx-auto" />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-[#015F4A] transition-colors duration-300">
                  {group.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {group.description}
                </p>

                {/* Features List */}
                <div className="space-y-2">
                  {group.features.slice(0, 3).map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-xs text-slate-500"
                    >
                      <div className="w-1.5 h-1.5 bg-[#015F4A] rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Section */}
        <div 
          className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-slate-200 p-6 lg:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 mb-3 lg:mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-slate-600 mb-6 text-sm lg:text-base">
              Professional mental health support tailored to your unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center">
              <button
                type="button"
                className="px-6 lg:px-8 py-3 bg-gradient-to-r from-[#015F4A] to-emerald-600 text-white font-semibold rounded-xl hover:from-[#014136] hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Download App
              </button>
              <button
                type="button"
                className="px-6 lg:px-8 py-3 bg-transparent border-2 border-[#015F4A] text-[#015F4A] font-semibold rounded-xl hover:bg-[#015F4A] hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportGroups;