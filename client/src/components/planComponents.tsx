



import React from 'react';
import { Check, Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface PricingPlan {
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  popular?: boolean;
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

// Custom hook for swipe functionality
const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

const SubscriptionPlans: React.FC = () => {
  const [sectionRef, isSectionVisible] = useIntersectionObserver(0.1);
  const [currentPlan, setCurrentPlan] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const plans: PricingPlan[] = [
    {
      name: "Basic Plan",
      subtitle: "Essential Support",
      description: "24/7 Mental Health Support for instant emotional care",
      features: ["24/7 Mental Health Support", "Instant emotional care", "Expert consultations"]
    },
    {
      name: "Standard Plan", 
      subtitle: "Complete Care",
      description: "Enhanced support with workshops and community tools",
      features: [
        "24/7 Experts Support",
        "Monthly Online Workshops", 
        "2 In-person Workshops per Semester",
        "Community connection tools"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      subtitle: "Premium Wellness",
      description: "Comprehensive care with personalized wellness plans",
      features: [
        "24/7 Mental Health Support",
        "Monthly In-Person Workshops",
        "Personalized wellness plans", 
        "Priority expert access"
      ]
    }
  ];

  const nextPlan = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPlan((prev) => (prev + 1) % plans.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevPlan = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentPlan((prev) => (prev - 1 + plans.length) % plans.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const swipeHandlers = useSwipe(nextPlan, prevPlan);

  const handleMoreInfo = () => {
    window.location.href = '/service';
  };

  const goToPlan = (index: number) => {
    if (isTransitioning || index === currentPlan) return;
    setIsTransitioning(true);
    setCurrentPlan(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-8 md:py-16 bg-gradient-to-br from-white via-emerald-50 to-teal-50 min-h-screen"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div 
          className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 
            id="pricing-heading" 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4 md:mb-6"
          >
            Choose Your
            <span className="block text-[#015F4A]">
              Wellness Journey
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
            Select the perfect plan to support your mental health and wellness goals with our comprehensive range of services.
          </p>
        </div>

        {/* Mobile Swipe Container */}
        <div className="block md:hidden relative">
          <div 
            className="overflow-hidden"
            {...swipeHandlers}
          >
            <div 
              className={`flex transition-transform duration-300 ease-in-out ${
                isTransitioning ? 'pointer-events-none' : ''
              }`}
              style={{ transform: `translateX(-${currentPlan * 100}%)` }}
            >
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className="w-full flex-shrink-0 px-4"
                >
                  <article
                    className={`relative bg-white rounded-2xl shadow-lg border-2 mx-auto max-w-sm ${
                      plan.popular 
                        ? 'border-[#015F4A] ring-4 ring-[#015F4A]/20' 
                        : 'border-slate-200'
                    } ${
                      isSectionVisible 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-12 opacity-0'
                    }`}
                    aria-labelledby={`plan-${index}-title`}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-[#015F4A] text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                          {/* <Star className="w-4 h-4 mr-1 fill-current" />
                          Most Popular */}
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Plan Header */}
                      <div className="text-center mb-6">
                        <h3 
                          id={`plan-${index}-title`}
                          className="text-xl font-bold text-slate-800 mb-2"
                        >
                          {plan.name}
                        </h3>
                        <p className="text-base font-medium text-[#015F4A] mb-3">
                          {plan.subtitle}
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {plan.description}
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-6" aria-label={`${plan.name} features`}>
                        {plan.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-start"
                          >
                            <div className="flex-shrink-0 w-5 h-5 bg-[#015F4A] rounded-full flex items-center justify-center mr-3 mt-0.5">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-slate-700 leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* More Info Button */}
                      <button
                        type="button"
                        onClick={handleMoreInfo}
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg flex items-center justify-center text-sm ${
                          plan.popular
                            ? 'bg-[#015F4A] text-white hover:bg-[#014136] focus:ring-[#015F4A]'
                            : 'bg-transparent border-2 border-[#015F4A] text-[#015F4A] hover:bg-[#015F4A] hover:text-white focus:ring-[#015F4A]'
                        }`}
                        aria-label={`Learn more about ${plan.name}`}
                      >
                        <span className="mr-2">Learn More</span>
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
            onClick={prevPlan}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-200 hover:bg-white transition-all duration-200 disabled:opacity-50 z-10"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-5 h-5 text-[#015F4A]" />
          </button>
          
          <button
            onClick={nextPlan}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg border border-slate-200 hover:bg-white transition-all duration-200 disabled:opacity-50 z-10"
            aria-label="Next plan"
          >
            <ChevronRight className="w-5 h-5 text-[#015F4A]" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {plans.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPlan(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPlan
                    ? 'bg-[#015F4A] scale-110'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to plan ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe Instruction */}
          <p className="text-center text-sm text-slate-500 mt-4">
            Swipe left or right to view other plans
          </p>
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                plan.popular 
                  ? 'border-[#015F4A] ring-4 ring-[#015F4A]/20' 
                  : 'border-slate-200 hover:border-[#015F4A]'
              } ${
                isSectionVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: isSectionVisible ? `${index * 200}ms` : '0ms' 
              }}
              aria-labelledby={`plan-${index}-title`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#015F4A] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 
                    id={`plan-${index}-title`}
                    className="text-2xl font-bold text-slate-800 mb-2"
                  >
                    {plan.name}
                  </h3>
                  <p className="text-lg font-medium text-[#015F4A] mb-4">
                    {plan.subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8" aria-label={`${plan.name} features`}>
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-[#015F4A] rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-slate-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* More Info Button */}
                <button
                  type="button"
                  onClick={handleMoreInfo}
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-[#015F4A] text-white hover:bg-[#014136] focus:ring-[#015F4A]'
                      : 'bg-transparent border-2 border-[#015F4A] text-[#015F4A] hover:bg-[#015F4A] hover:text-white focus:ring-[#015F4A]'
                  }`}
                  aria-label={`Learn more about ${plan.name}`}
                >
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div 
          className={`text-center transform transition-all duration-1000 delay-700 mt-8 md:mt-0 ${
            isSectionVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-slate-600 mb-6 text-sm md:text-base">
              Our wellness experts are here to help you find the perfect plan for your mental health journey.
            </p>
            <button
              type="button"
              onClick={handleMoreInfo}
              className="px-6 md:px-8 py-3 bg-[#015F4A] text-white font-semibold rounded-lg hover:bg-[#014136] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#015F4A] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm md:text-base"
            >
              Get Expert Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;