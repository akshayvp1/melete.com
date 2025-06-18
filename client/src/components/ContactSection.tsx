import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { FormData, FormErrors } from '../types/types';

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } },
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setFormErrors({});
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-24 text-center"
      style={{ backgroundColor: '#F9F9F9' }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12" style={{ color: '#015F4A' }}>
          Get in Touch
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#666' }}>
          Have a question or need support? Reach out to us, and we’ll get back to you as soon as possible.
        </p>
        <motion.form
          className="max-w-lg mx-auto p-8 rounded-2xl shadow-lg bg-white border border-[#F0F0F0]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-left text-sm font-semibold mb-2"
              style={{ color: '#015F4A' }}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
              style={{ borderColor: '#D1E8E2' }}
              placeholder="Your Name"
            />
            {formErrors.name && <p className="text-red-500 text-sm mt-1 text-left">{formErrors.name}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-left text-sm font-semibold mb-2"
              style={{ color: '#015F4A' }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
              style={{ borderColor: '#D1E8E2' }}
              placeholder="Your Email"
            />
            {formErrors.email && <p className="text-red-500 text-sm mt-1 text-left">{formErrors.email}</p>}
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-left text-sm font-semibold mb-2"
              style={{ color: '#015F4A' }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#31A382] transition-all duration-300"
              style={{ borderColor: '#D1E8E2', minHeight: '120px' }}
              placeholder="Your Message"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-1 text-left">{formErrors.message}</p>
            )}
          </div>
          <motion.button
            type="submit"
            className="w-full px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 bg-[#31A382] text-white hover:bg-[#2F9B7A] transition-colors duration-300"
            whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Submit</span>
            <Send size={18} />
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactSection;