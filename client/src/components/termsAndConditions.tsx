// import React from 'react';

// const TermsConditionsPage: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Header */}
//       <div className="border-b border-gray-100">
//         <div className="max-w-4xl mx-auto px-6 py-16 text-center">
//           <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
//           <p className="text-lg text-gray-600">
//             Please read these terms carefully before using MELETE
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-6 py-12">
//         {/* Introduction */}
//         <div className="mb-12">
//           <p className="text-gray-800 mb-4 leading-relaxed text-lg">
//             Please read these Terms and Conditions carefully before using the MELETE mobile application ("Application", "Service") 
//             operated by MELETE WELLNESS SOLUTIONS PRIVATE LIMITED ("Company", "We", "Us", or "Our").
//           </p>
//           <p className="text-gray-800 leading-relaxed text-lg">
//             By downloading or using the Application, you agree to abide by these Terms and Conditions. If you do not agree to these Terms, please refrain from using the Service.
//           </p>
//         </div>

//         {/* Section 1 */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>1. Interpretation and Definitions</h2>
//           </div>
//           <div className="space-y-6">
//             <p className="text-gray-800 text-lg font-semibold">Definitions</p>
//             <p className="text-gray-800 text-lg">For these Terms:</p>
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <ul className="space-y-3">
//                 {[
//                   "Application refers to MELETE, the mental health mobile application.",
//                   "Account means an individual user account created to access the Application's services.",
//                   "Company refers to MELETE WELLNESS SOLUTIONS PRIVATE LIMITED, registered in India.",
//                   "Service refers to the Application and all services made available through it.",
//                   "Content means any text, audio, video, graphics, or other material posted or made available through the Application.",
//                   "You refers to the individual accessing the Application or using the Service, or any legal entity on whose behalf the Service is used."
//                 ].map((item, index) => (
//                   <li key={index} className="text-gray-700 text-lg">• {item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Section 2 */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>2. Acknowledgment</h2>
//           </div>
//           <div className="space-y-6">
//             <p className="text-gray-800 text-lg">
//               These Terms constitute an agreement between You and the Company regarding your use of the Service. You affirm that you are at least 18 years of age or using the app under parental supervision.
//             </p>
//             <p className="text-gray-800 text-lg">
//               Your access to and use of the Service is also conditioned on your acceptance of and compliance with our Privacy Policy. Please review our Privacy Policy for details on data handling and your rights.
//             </p>
//           </div>
//         </div>

//         {/* Section 3 */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>3. User Accounts</h2>
//           </div>
//           <div className="space-y-6">
//             <p className="text-gray-800 text-lg">
//               To access certain features, you must register an account by providing accurate and complete information. You are responsible for safeguarding your password and for all activities under your account.
//             </p>
//             <p className="text-gray-800 text-lg">You agree not to:</p>
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <ul className="space-y-3">
//                 {[
//                   "Impersonate any person or entity",
//                   "Share your credentials",
//                   "Use offensive, obscene, or misleading usernames"
//                 ].map((item, index) => (
//                   <li key={index} className="text-gray-700 text-lg">• {item}</li>
//                 ))}
//               </ul>
//             </div>
//             <p className="text-gray-800 text-lg">
//               Notify Us immediately of any unauthorized account use.
//             </p>
//           </div>
//         </div>

//         {/* Section 4 */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>4. Services Provided</h2>
//           </div>
//           <div className="space-y-6">
//             <p className="text-gray-800 text-lg">Through MELETE, you can:</p>
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <ul className="space-y-3">
//                 {[
//                   "Access online counselling, yoga, mindfulness resources, guided meditation, and wellness programs",
//                   "Book sessions with certified mental health professionals and yoga trainers",
//                   "Receive mental wellness content and notifications",
//                   "Participate in custom wellness programs"
//                 ].map((item, index) => (
//                   <li key={index} className="text-gray-700 text-lg">• {item}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
//               <p className="text-red-800 font-medium text-lg">
//                 <strong>Important:</strong> This Application is not intended for emergency medical services. In case of a crisis, contact your local emergency number.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Section 5 */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>5. Content and Usage Restrictions</h2>
//           </div>
//           <div className="space-y-6">
//             <p className="text-gray-800 text-lg">You agree not to:</p>
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <ul className="space-y-3">
//                 {[
//                   "Post unlawful, abusive, defamatory, or discriminatory content",
//                   "Upload content containing viruses or malware",
//                   "Violate intellectual property rights",
//                   "Use the Service for unauthorized commercial purposes",
//                   "Misrepresent or impersonate others"
//                 ].map((item, index) => (
//                   <li key={index} className="text-gray-700 text-lg">• {item}</li>
//                 ))}
//               </ul>
//             </div>
//             <p className="text-gray-800 text-lg">
//               We reserve the right to remove any content deemed inappropriate.
//             </p>
//           </div>
//         </div>

//         {/* Section 6 */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>6. Privacy and Data Handling</h2>
//           </div>
//           <div className="space-y-6">
//             <p className="text-gray-800 text-lg">
//               By using the Application, you consent to the collection and use of personal and sensitive data as per our Privacy Policy. This may include:
//             </p>
//             <div className="bg-gray-50 p-6 rounded-lg">
//               <ul className="space-y-3">
//                 {[
//                   "Name, age, contact details, and booking history",
//                   "Device, usage, and location data (when permitted)"
//                 ].map((item, index) => (
//                   <li key={index} className="text-gray-700 text-lg">• {item}</li>
//                 ))}
//               </ul>
//             </div>
//             <p className="text-gray-800 text-lg">
//               For full details, please refer to our Privacy Policy.
//             </p>
//           </div>
//         </div>

//         {/* Sections 7-10 */}
//         {[
//           {
//             number: 7,
//             title: "Intellectual Property",
//             content: "The Service, content, and all intellectual property rights remain the property of the Company. No part of the Service may be copied, reproduced, or redistributed without our prior written consent."
//           },
//           {
//             number: 8,
//             title: "Third-Party Services",
//             content: "The Application may contain links to third-party websites or services. We have no control over their content, privacy policies, or practices and assume no responsibility for them."
//           },
//           {
//             number: 9,
//             title: "Limitation of Liability",
//             content: "To the fullest extent permitted by law:"
//           },
//           {
//             number: 10,
//             title: "Termination",
//             content: "We reserve the right to suspend or terminate your account without notice if you breach these Terms. Upon termination, your right to use the Service ceases immediately."
//           }
//         ].map((section) => (
//           <div key={section.number} className="mb-12">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>{section.number}. {section.title}</h2>
//             </div>
//             <div className="space-y-6">
//               <p className="text-gray-800 text-lg">{section.content}</p>
//               {section.number === 9 && (
//                 <div className="bg-gray-50 p-6 rounded-lg">
//                   <ul className="space-y-3">
//                     {[
//                       "The Application is provided \"as is\" without warranties",
//                       "The Company will not be liable for indirect, incidental, or consequential damages",
//                       "Our liability is limited to the amount you paid for the Service, whichever is lower"
//                     ].map((item, index) => (
//                       <li key={index} className="text-gray-700 text-lg">• {item}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* Sections 11-14 */}
//         {[
//           {
//             number: 11,
//             title: "Changes to These Terms",
//             content: "We may amend these Terms periodically. Continued use of the Application after changes implies acceptance of the updated Terms."
//           },
//           {
//             number: 12,
//             title: "Governing Law",
//             content: "These Terms are governed by the laws of INDIA, without regard to its conflict of law principles."
//           },
//           {
//             number: 13,
//             title: "Dispute Resolution",
//             content: "For any concerns or disputes, you agree to first contact us for informal resolution. Failing which, the dispute shall be subject to the jurisdiction of Calicut."
//           }
//         ].map((section) => (
//           <div key={section.number} className="mb-12">
//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>{section.number}. {section.title}</h2>
//             </div>
//             <p className="text-gray-800 text-lg">{section.content}</p>
//           </div>
//         ))}

//         {/* Contact Section - Mobile Optimized */}
//         <div className="mb-12">
//           <div className="mb-6">
//             <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b-2" style={{ borderColor: '#015F4A' }}>14. Contact Us</h2>
//           </div>
//           <div className="space-y-6">
//             <p className="text-gray-800 text-lg">
//               For any questions or concerns about these Terms:
//             </p>
//             <div className="bg-gray-50 p-6 sm:p-8 rounded-lg">
//               <div className="space-y-6">
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Company:</span>
//                   <span className="text-gray-700 text-lg break-words">Melete Wellness Solutions Private Limited</span>
//                 </div>
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Email:</span>
//                   <span className="text-gray-700 text-lg break-all">meletewellnesssolutions@gmail.com</span>
//                 </div>
//                 <div className="flex flex-col sm:flex-row sm:items-center">
//                   <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Phone:</span>
//                   <span className="text-gray-700 text-lg">+91 8943175522</span>
//                 </div>
//                 <div className="flex flex-col sm:flex-row sm:items-start">
//                   <span className="font-semibold text-gray-900 text-lg mb-2 sm:mb-0 sm:min-w-[100px]">Address:</span>
//                   <span className="text-gray-700 text-lg break-words">2nd Floor, VK Tower, Mankavu, Calicut-673007</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="text-center pt-8 border-t border-gray-200">
//           <p className="text-gray-600 text-base">
//             Last updated: {new Date().toLocaleDateString('en-US', { 
//               year: 'numeric', 
//               month: 'long', 
//               day: 'numeric' 
//             })}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TermsConditionsPage;

import React from 'react';

const TermsConditionsPage: React.FC = () => {
  return (
    <div style={{
      padding: '20px 16px',
      fontFamily: 'sans-serif',
      lineHeight: '1.6',
      textAlign: 'left',
      fontSize: '16px'
    }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px' }}>Terms and Conditions</h1>
      <p style={{ marginBottom: '30px' }}>
        Please read these terms carefully before using MELETE
      </p>

      <section>
        <p>
          • Please read these Terms and Conditions carefully before using the MELETE mobile application ("Application", "Service") operated by MELETE WELLNESS SOLUTIONS PRIVATE LIMITED ("Company", "We", "Us", or "Our").
        </p>
        <p>
          • By downloading or using the Application, you agree to abide by these Terms and Conditions. If you do not agree to these Terms, please refrain from using the Service.
        </p>
      </section>

      <p><strong>• 1. Interpretation and Definitions</strong></p>
      <p><strong>Definitions</strong></p>
      <ul>
        <li>Application refers to MELETE, the mental health mobile application.</li>
        <li>Account means an individual user account created to access the Application's services.</li>
        <li>Company refers to MELETE WELLNESS SOLUTIONS PRIVATE LIMITED, registered in India.</li>
        <li>Service refers to the Application and all services made available through it.</li>
        <li>Content means any text, audio, video, graphics, or other material posted or made available through the Application.</li>
        <li>You refers to the individual accessing the Application or using the Service, or any legal entity on whose behalf the Service is used.</li>
      </ul>

      <p><strong>• 2. Acknowledgment</strong></p>
      <ul>
        <li>These Terms constitute an agreement between You and the Company regarding your use of the Service.</li>
        <li>You affirm that you are at least 18 years of age or using the app under parental supervision.</li>
        <li>Your access and use of the Service is also conditioned on your acceptance of and compliance with our Privacy Policy.</li>
      </ul>

      <p><strong>• 3. User Accounts</strong></p>
      <ul>
        <li>To access certain features, you must register an account with accurate and complete information.</li>
        <li>You are responsible for safeguarding your password and all activities under your account.</li>
        <li>You agree not to:
          <ul>
            <li>Impersonate any person or entity</li>
            <li>Share your credentials</li>
            <li>Use offensive, obscene, or misleading usernames</li>
          </ul>
        </li>
        <li>Notify us immediately of any unauthorized account use.</li>
      </ul>

      <p><strong>• 4. Services Provided</strong></p>
      <ul>
        <li>Access online counselling, yoga, mindfulness resources, guided meditation, and wellness programs</li>
        <li>Book sessions with certified mental health professionals and yoga trainers</li>
        <li>Receive mental wellness content and notifications</li>
        <li>Participate in custom wellness programs</li>
      </ul>
      <p style={{ color: 'red' }}>
        <strong>Important:</strong> This Application is not intended for emergency medical services. In case of a crisis, contact your local emergency number.
      </p>

      <p><strong>• 5. Content and Usage Restrictions</strong></p>
      <ul>
        <li>You agree not to:
          <ul>
            <li>Post unlawful, abusive, defamatory, or discriminatory content</li>
            <li>Upload content containing viruses or malware</li>
            <li>Violate intellectual property rights</li>
            <li>Use the Service for unauthorized commercial purposes</li>
            <li>Misrepresent or impersonate others</li>
          </ul>
        </li>
        <li>We reserve the right to remove any content deemed inappropriate.</li>
      </ul>

      <p><strong>• 6. Privacy and Data Handling</strong></p>
      <ul>
        <li>By using the Application, you consent to the collection and use of data per our Privacy Policy.</li>
        <li>This may include:
          <ul>
            <li>Name, age, contact details, and booking history</li>
            <li>Device, usage, and location data (when permitted)</li>
          </ul>
        </li>
      </ul>

      <p><strong>• 7. Intellectual Property</strong></p>
      <p>The Service, content, and all intellectual property rights remain the property of the Company.No part of the Service may be copied, reproduced, or redistributed without our prior written consent.</p>

      <p><strong>• 8. Third-Party Services</strong></p>
      <p>The Application may contain links to third-party websites or services. We have no control over their content, privacy policies, or practices and assume no responsibility for them.</p>

      <p><strong>• 9. Limitation of Liability</strong></p>
      <ul>
        <li>The Application is provided "as is" without warranties.</li>
        <li>The Company will not be liable for indirect, incidental, or consequential damages.</li>
        <li>Liability is limited to the amount paid for the Service, whichever is lower.</li>
      </ul>

      <p><strong>• 10. Termination</strong></p>
      <p>We reserve the right to suspend or terminate your account without notice if you breach these Terms.Upon termination, your right to use the Service ceases immediately.</p>

      <p><strong>• 11. Changes to These Terms</strong></p>
      <p>We may amend these Terms periodically. Continued use of the Application after changes implies acceptance of the updated Terms.</p>

      <p><strong>• 12. Governing Law</strong></p>
      <p>These Terms are governed by the laws of INDIA.</p>

      <p><strong>• 13. Dispute Resolution</strong></p>
      <p>For any concerns or disputes, you agree to first contact us for informal resolution. Failing which, the dispute shall be subject to the jurisdiction of Calicut.</p>

      <p><strong>• 14. Contact Us</strong></p>
      <ul>
        <li><strong>Company:</strong> Melete Wellness Solutions Private Limited</li>
        <li><strong>Email:</strong> meletewellnesssolutions@gmail.com</li>
        <li><strong>Phone:</strong> +91 8943175522</li>
        <li><strong>Address:</strong> 2nd Floor, VK Tower, Mankavu, Calicut-673007</li>
      </ul>

      <footer style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px', fontSize: '14px', color: '#666' }}>
        Last updated: {new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </footer>
    </div>
  );
};

export default TermsConditionsPage;
