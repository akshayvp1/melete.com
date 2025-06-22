import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy and data security are our top priorities
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            MELETE ("we", "us", "our") is committed to protecting the privacy and security of our users' personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mental 
            wellness services through our website and/or mobile application (collectively, the "Platform").
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            By accessing or using our Platform, you agree to the terms of this Privacy Policy.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>1. Information We Collect</h2>
          </div>
          <div className="space-y-8">
            <p className="text-gray-800 text-lg">
              We may collect and process the following types of information:
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1.1 Personal Information</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Name", "Email address", "Phone number", "Date of birth", 
                      "Gender (optional)", "Health-related data voluntarily provided by you", "Emergency contact information (optional)"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700 text-lg">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1.2 Sensitive Personal Data</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 text-lg">
                    Information relating to your mental and emotional health status, as shared through assessments, 
                    consultations, or chat support on our Platform.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1.3 Usage and Device Information</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "IP address", "Device type and operating system", "Browser type", 
                      "Location data (if permitted)", "Log data (Such as pages visited, session duration, features used)"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700 text-lg">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>2. How We Use Your Information</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">
              We use the collected information for the following purposes:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "To provide, manage, and improve our mental wellness services",
                  "To personalize your user experience",
                  "To schedule and conduct consultations, therapy sessions, and assessments",
                  "To send you notifications, updates, or service-related messages",
                  "To respond to your inquiries and support requests",
                  "To comply with legal and regulatory obligations"
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border-l-4 p-6 rounded-r-lg" style={{ borderColor: '#015F4A' }}>
              <p className="text-gray-800 font-medium text-lg">
                We do not use your personal data for any advertising, profiling, or automated decision-making purposes.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>3. Disclosure of Information</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">
              We do not sell, rent, or trade your personal information. However, we may share your information in the following circumstances:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "With licensed mental health professionals for providing therapy or consultation services you have requested",
                  "With third-party service providers who assist in hosting, analytics, communication, or other operational services, under strict data protection agreements",
                  "When required by law or in response to valid legal requests by public authorities",
                  "To protect our legal rights, safety, or property or that of others"
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sections 4-6 */}
        {[
          {
            number: 4,
            title: "Data Security",
            content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:",
            items: ["SSL encryption", "Access controls and authentication mechanisms", "Secure data storage and transmission protocols"]
          },
          {
            number: 5,
            title: "Data Retention",
            content: "We retain your personal information for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable laws and regulations.",
            items: []
          },
          {
            number: 6,
            title: "Your Rights",
            content: "Depending on your jurisdiction, you may have the following rights regarding your personal data:",
            items: ["Right to access", "Right to rectify inaccurate information", "Right to erase your data", "Right to restrict or object to processing", "Right to data portability", "Right to withdraw consent at any time"],
            footer: "To exercise these rights, you can contact us at the details provided below."
          }
        ].map((section) => (
          <div key={section.number} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>{section.number}. {section.title}</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-800 text-lg">{section.content}</p>
              {section.items.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2">
                    {section.items.map((item, index) => (
                      <li key={index} className="text-gray-700 text-lg">• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {section.footer && (
                <p className="text-gray-700 text-base italic">{section.footer}</p>
              )}
            </div>
          </div>
        ))}

        {/* Sections 7-10 */}
        {[
          {
            number: 7,
            title: "Cookies and Tracking Technologies",
            content: "We may use cookies and similar technologies to enhance your experience on our Platform. You can choose to disable cookies through your browser settings; however, some features of the Platform may not function properly without them."
          },
          {
            number: 8,
            title: "Third-Party Links",
            content: "Our Platform may contain links to third-party websites or services. We are not responsible for the privacy practices of such external platforms and encourage you to review their respective privacy policies."
          },
          {
            number: 9,
            title: "Children's Privacy",
            content: "Our services are intended for users aged 18 and above. We do not knowingly collect personal information from individuals under 18 years of age. If we become aware of such information, we will take steps to delete it promptly."
          },
          {
            number: 10,
            title: "Changes to this Privacy Policy",
            content: "We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised \"Effective Date\". Continued use of our services after such updates signifies your acceptance of the revised policy."
          }
        ].map((section) => (
          <div key={section.number} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>{section.number}. {section.title}</h2>
            </div>
            <p className="text-gray-800 text-lg">{section.content}</p>
          </div>
        ))}

        {/* Contact Section - Mobile Optimized */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>11. Contact Us</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">
              If you have any questions, concerns, or complaints regarding this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Company:</span>
                  <span className="text-gray-700 text-lg break-words">Melete Wellness Solutions Private Limited</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Email:</span>
                  <span className="text-gray-700 text-lg break-all">meletewellnesssolutions@gmail.com</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Phone:</span>
                  <span className="text-gray-700 text-lg">+91 8943175522</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Address:</span>
                  <span className="text-gray-700 text-lg break-words">2nd Floor, VK Tower, Mankavu, Calicut-673007</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-base">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;