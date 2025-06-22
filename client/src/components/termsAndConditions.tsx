import React from 'react';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using MELETE
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <p className="text-gray-800 mb-4 leading-relaxed text-lg">
            Please read these Terms and Conditions carefully before using the MELETE mobile application ("Application", "Service") 
            operated by MELETE WELLNESS SOLUTIONS PRIVATE LIMITED ("Company", "We", "Us", or "Our").
          </p>
          <p className="text-gray-800 leading-relaxed text-lg">
            By downloading or using the Application, you agree to abide by these Terms and Conditions. If you do not agree to these Terms, please refrain from using the Service.
          </p>
        </div>

        {/* Section 1 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>1. Interpretation and Definitions</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg font-semibold">Definitions</p>
            <p className="text-gray-800 text-lg">For these Terms:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Application refers to MELETE, the mental health mobile application.",
                  "Account means an individual user account created to access the Application's services.",
                  "Company refers to MELETE WELLNESS SOLUTIONS PRIVATE LIMITED, registered in India.",
                  "Service refers to the Application and all services made available through it.",
                  "Content means any text, audio, video, graphics, or other material posted or made available through the Application.",
                  "You refers to the individual accessing the Application or using the Service, or any legal entity on whose behalf the Service is used."
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>2. Acknowledgment</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">
              These Terms constitute an agreement between You and the Company regarding your use of the Service. You affirm that you are at least 18 years of age or using the app under parental supervision.
            </p>
            <p className="text-gray-800 text-lg">
              Your access to and use of the Service is also conditioned on your acceptance of and compliance with our Privacy Policy. Please review our Privacy Policy for details on data handling and your rights.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>3. User Accounts</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">
              To access certain features, you must register an account by providing accurate and complete information. You are responsible for safeguarding your password and for all activities under your account.
            </p>
            <p className="text-gray-800 text-lg">You agree not to:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Impersonate any person or entity",
                  "Share your credentials",
                  "Use offensive, obscene, or misleading usernames"
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-800 text-lg">
              Notify Us immediately of any unauthorized account use.
            </p>
          </div>
        </div>

        {/* Section 4 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>4. Services Provided</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">Through MELETE, you can:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Access online counselling, yoga, mindfulness resources, guided meditation, and wellness programs",
                  "Book sessions with certified mental health professionals and yoga trainers",
                  "Receive mental wellness content and notifications",
                  "Participate in custom wellness programs"
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
              <p className="text-red-800 font-medium text-lg">
                <strong>Important:</strong> This Application is not intended for emergency medical services. In case of a crisis, contact your local emergency number.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>5. Content and Usage Restrictions</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">You agree not to:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Post unlawful, abusive, defamatory, or discriminatory content",
                  "Upload content containing viruses or malware",
                  "Violate intellectual property rights",
                  "Use the Service for unauthorized commercial purposes",
                  "Misrepresent or impersonate others"
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-800 text-lg">
              We reserve the right to remove any content deemed inappropriate.
            </p>
          </div>
        </div>

        {/* Section 6 */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>6. Privacy and Data Handling</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">
              By using the Application, you consent to the collection and use of personal and sensitive data as per our Privacy Policy. This may include:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-3">
                {[
                  "Name, age, contact details, and booking history",
                  "Device, usage, and location data (when permitted)"
                ].map((item, index) => (
                  <li key={index} className="text-gray-700 text-lg">• {item}</li>
                ))}
              </ul>
            </div>
            <p className="text-gray-800 text-lg">
              For full details, please refer to our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Sections 7-10 */}
        {[
          {
            number: 7,
            title: "Intellectual Property",
            content: "The Service, content, and all intellectual property rights remain the property of the Company. No part of the Service may be copied, reproduced, or redistributed without our prior written consent."
          },
          {
            number: 8,
            title: "Third-Party Services",
            content: "The Application may contain links to third-party websites or services. We have no control over their content, privacy policies, or practices and assume no responsibility for them."
          },
          {
            number: 9,
            title: "Limitation of Liability",
            content: "To the fullest extent permitted by law:"
          },
          {
            number: 10,
            title: "Termination",
            content: "We reserve the right to suspend or terminate your account without notice if you breach these Terms. Upon termination, your right to use the Service ceases immediately."
          }
        ].map((section) => (
          <div key={section.number} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>{section.number}. {section.title}</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-800 text-lg">{section.content}</p>
              {section.number === 9 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-3">
                    {[
                      "The Application is provided \"as is\" without warranties",
                      "The Company will not be liable for indirect, incidental, or consequential damages",
                      "Our liability is limited to the amount you paid for the Service, whichever is lower"
                    ].map((item, index) => (
                      <li key={index} className="text-gray-700 text-lg">• {item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Sections 11-14 */}
        {[
          {
            number: 11,
            title: "Changes to These Terms",
            content: "We may amend these Terms periodically. Continued use of the Application after changes implies acceptance of the updated Terms."
          },
          {
            number: 12,
            title: "Governing Law",
            content: "These Terms are governed by the laws of INDIA, without regard to its conflict of law principles."
          },
          {
            number: 13,
            title: "Dispute Resolution",
            content: "For any concerns or disputes, you agree to first contact us for informal resolution. Failing which, the dispute shall be subject to the jurisdiction of Calicut."
          }
        ].map((section) => (
          <div key={section.number} className="mb-12">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>{section.number}. {section.title}</h2>
            </div>
            <p className="text-gray-800 text-lg">{section.content}</p>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>14. Contact Us</h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-800 text-lg">
              For any questions or concerns about these Terms:
            </p>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900 text-lg">Company:</span>
                    <span className="ml-3 text-gray-700 text-lg">Melete Wellness Solutions Private Limited</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-lg">Email:</span>
                    <span className="ml-3 text-gray-700 text-lg">meletewellnesssolutions@gmail.com</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900 text-lg">Phone:</span>
                    <span className="ml-3 text-gray-700 text-lg">+91 8943175522</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 text-lg">Address:</span>
                    <span className="ml-3 text-gray-700 text-lg">2nd Floor, VK Tower, Mankavu, Calicut-673007</span>
                  </div>
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

export default TermsConditionsPage;