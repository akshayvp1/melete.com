import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';

interface FormData {
  name?: string;
  email: string;
  password: string;
}

interface LoginCardProps {
  onSubmit?: (formData: FormData, isSignUp: boolean) => void;
  className?: string;
}

const LoginCard: React.FC<LoginCardProps> = ({ onSubmit, className = '' }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData, isSignUp);
    }
    console.log('Form submitted:', formData);
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className={`flex justify-center items-center min-h-screen p-4 ${className}`}>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Panel */}
          <div 
            className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center items-center text-white relative overflow-hidden"
            style={{ backgroundColor: '#015F4A' }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-full"></div>
              <div className="absolute bottom-16 right-8 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full"></div>
            </div>
            
            <div className="z-10 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#015F4A' }}>M</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">Melete</h1>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                {isSignUp ? 'Join Us Today!' : 'Welcome Back!'}
              </h2>
              <p className="text-base lg:text-lg opacity-90 mb-8 max-w-xs lg:max-w-md">
                {isSignUp 
                  ? 'Create your account and start your journey with us'
                  : 'Sign in to continue to your account and explore amazing features'
                }
              </p>
              
              <button
                onClick={toggleMode}
                className="px-6 lg:px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white transition-colors duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#015F4A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                {isSignUp ? 'SIGN IN' : 'SIGN UP'}
              </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="max-w-md mx-auto w-full">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-2" style={{ color: '#015F4A' }}>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </h2>
                <p className="text-gray-600 text-sm lg:text-base">
                  {isSignUp 
                    ? 'Fill in your details to get started'
                    : 'Enter your credentials to access your account'
                  }
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="flex gap-3 mb-6">
                <button className="flex-1 flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-600 font-bold text-lg">f</span>
                </button>
                <button className="flex-1 flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-red-500 font-bold text-lg">G+</span>
                </button>
                <button className="flex-1 flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-blue-700 font-bold text-lg">in</span>
                </button>
              </div>

              <div className="text-center text-gray-500 mb-6 text-sm">
                or use your email for {isSignUp ? 'registration' : 'sign in'}
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                {isSignUp && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name || ''}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                      onFocus={(e) => e.target.style.borderColor = '#015F4A'}
                      onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                      required
                    />
                  </div>
                )}

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                    onFocus={(e) => e.target.style.borderColor = '#015F4A'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-2 transition-colors"
                    onFocus={(e) => e.target.style.borderColor = '#015F4A'}
                    onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {!isSignUp && (
                  <div className="text-right">
                    <a href="#" className="text-sm hover:underline" style={{ color: '#015F4A' }}>
                      Forgot Password?
                    </a>
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{ backgroundColor: '#015F4A' }}
                >
                  {isSignUp ? 'SIGN UP' : 'SIGN IN'}
                </button>
              </div>

              {/* Mobile Toggle for small screens */}
              <div className="lg:hidden text-center mt-6">
                <p className="text-gray-600 text-sm">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                  <button
                    onClick={toggleMode}
                    className="ml-2 font-semibold hover:underline"
                    style={{ color: '#015F4A' }}
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;