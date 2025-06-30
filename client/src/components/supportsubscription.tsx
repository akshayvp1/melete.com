import React from "react";
import {
  Phone,
  Download,
  MessageCircle,
  X,
  Headphones,
  Globe
} from "lucide-react";

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

interface MentalHealthCTAProps {
  isSubscribed?: boolean;
  onToggleSubscription?: () => void;
  showDemo?: boolean;
}

const MentalHealthCTA: React.FC<MentalHealthCTAProps> = ({ 
  isSubscribed = true, 
  onToggleSubscription,
  showDemo = false 
}) => {
  const [showSupportModal, setShowSupportModal] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [concern, setConcern] = React.useState('');
  const [isConnecting, setIsConnecting] = React.useState(false);

  const languages: Language[] = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' }
  ];

  const handleSupportClick = () => {
    if (!isSubscribed) {
      alert('24/7 Mental Health Support is available only for subscribed users. Please subscribe to access this premium feature.');
      return;
    }
    setShowSupportModal(true);
  };

  const handleConnect = async () => {
    if (!selectedLanguage || !concern.trim()) {
      alert('Please select a language and describe your concern');
      return;
    }

    setIsConnecting(true);
    
    // Simulate connection process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsConnecting(false);
    setShowSupportModal(false);
    setConcern('');
    setSelectedLanguage('');
    
    const selectedLang = languages.find(l => l.code === selectedLanguage);
    alert(`Connecting you to our 24/7 support team in ${selectedLang?.name}...`);
  };

  const handleDownloadApp = () => {
    // Simulate app download
    alert('Redirecting to app store for download...');
  };

  return (
    <>
      <div className="mt-16">
        <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-6 lg:p-8 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            
            {/* Left Section - Title and Description */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Headphones className="w-6 h-6 text-[#015F4A] mr-2" />
                <h3 className="text-xl lg:text-2xl font-bold text-slate-800">
                  Ready to Begin Your Mental Health Journey?
                </h3>
              </div>
              
              <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-xl lg:max-w-none">
                Get professional mental health support anytime, anywhere. Connect with our certified counselors or download our mobile app.
              </p>

              {/* Features List */}
              <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-slate-600">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#015F4A] rounded-full mr-2" />
                  Certified Professionals
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#015F4A] rounded-full mr-2" />
                  Multilingual Support
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-[#015F4A] rounded-full mr-2" />
                  Confidential & Secure
                </div>
              </div>
            </div>

            {/* Right Section - Action Buttons */}
            <div className="flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
                {/* 24/7 Support Card */}
                <div className="bg-gradient-to-br from-[#015F4A] to-emerald-600 rounded-xl p-4 text-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg min-w-[200px]">
                  <div className="flex items-center justify-center mb-3">
                    <Phone className="w-5 h-5 mr-2" />
                    <div className="text-center">
                      <h4 className="text-lg font-bold">24/7 Support</h4>
                      <p className="text-emerald-100 text-xs">Available anytime</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleSupportClick}
                    className="w-full bg-white text-[#015F4A] font-semibold py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Connect Now
                  </button>
                </div>

                {/* Download App Card */}
                <div className="bg-white border-2 border-[#015F4A] rounded-xl p-4 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg min-w-[200px]">
                  <div className="flex items-center justify-center mb-3">
                    <Download className="w-5 h-5 text-[#015F4A] mr-2" />
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-slate-800">Download App</h4>
                      <p className="text-slate-600 text-xs">Mobile convenience</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleDownloadApp}
                    className="w-full bg-[#015F4A] text-white font-semibold py-2.5 px-4 rounded-lg hover:bg-[#014136] transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Toggle - For testing purposes */}
          {showDemo && onToggleSubscription && (
            <div className="mt-6 pt-4 border-t border-slate-200 text-center">
              <button
                type="button"
                onClick={onToggleSubscription}
                className="text-xs text-slate-500 hover:text-slate-700 transition-colors"
              >
                Demo: {isSubscribed ? 'Switch to Non-Subscriber' : 'Switch to Subscriber'} View
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 24/7 Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div className="flex items-center">
                <Headphones className="w-6 h-6 text-[#015F4A] mr-3" />
                <h3 className="text-xl font-bold text-slate-800">24/7 Support</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSupportModal(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors p-2 hover:bg-slate-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Language Selection */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Select Language
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setSelectedLanguage(lang.code)}
                      className={`p-3 rounded-xl border-2 transition-all duration-200 text-left ${
                        selectedLanguage === lang.code
                          ? 'border-[#015F4A] bg-[#015F4A]/5 text-[#015F4A]'
                          : 'border-slate-200 hover:border-slate-300 text-slate-600'
                      }`}
                    >
                      <div className="font-medium text-sm">{lang.name}</div>
                      <div className="text-xs opacity-75">{lang.nativeName}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Concern Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-800 mb-3 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Describe Your Concern
                </label>
                <textarea
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  placeholder="Please briefly describe what you'd like to discuss with our counselor..."
                  className="w-full p-4 border-2 border-slate-200 rounded-xl focus:border-[#015F4A] focus:outline-none transition-colors duration-200 resize-none"
                  rows={4}
                />
              </div>

              {/* Connect Button */}
              <button
                type="button"
                onClick={handleConnect}
                disabled={!selectedLanguage || !concern.trim() || isConnecting}
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-3 ${
                  !selectedLanguage || !concern.trim()
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : isConnecting
                    ? 'bg-[#015F4A]/70 text-white cursor-wait'
                    : 'bg-gradient-to-r from-[#015F4A] to-emerald-600 text-white hover:from-[#014136] hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                }`}
              >
                {isConnecting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Phone className="w-5 h-5" />
                    Connect to Counselor
                  </>
                )}
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-slate-500 text-center">
                By connecting, you agree to our terms of service. All conversations are confidential and secure.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MentalHealthCTA;