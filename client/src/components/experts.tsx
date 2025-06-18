// src/components/ExpertCounsellorsComponent.tsx
import React, { useState, useEffect } from 'react';
import { Star, Users, Clock, MapPin, MessageCircle } from 'lucide-react';
import AuthService from '../services/AuthService'; // Adjust path to your AuthService
import { Consultant } from '../types/types'; // Import the unified Consultant interface

interface CounsellorCardProps {
  consultant: Consultant;
}

const CounsellorCard: React.FC<CounsellorCardProps> = ({ consultant }) => {
  const handleBookSession = (): void => {
    const phoneNumber = '+918943175522'; // Hardcoded as per original
    const message = `Hello, I'm interested in booking a session with ${consultant.name}.\n\nDetails:\n- Qualification: ${consultant.qualification}\n- Expertise: ${consultant.expertise.join(', ')}\n- Languages: ${consultant.languages.join(', ')}\n- Experience: ${consultant.experience}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-200 overflow-hidden max-w-sm">
      <div className="p-4">
        <div className="flex items-start gap-3">
          <div className="relative flex-shrink-0">
            <img
              src={consultant.image}
              alt={`Profile of ${consultant.name}`}
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-600"
            />
            <div className="absolute -top-1 -right-1 bg-teal-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {consultant.experience}
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">{consultant.name}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{consultant.qualification}</p>
            <div className="flex items-center gap-3 text-sm mt-1">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                <span className="font-semibold">{consultant.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-1" />
                <span>{consultant.sessions}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4">
        <div className="mb-3">
          <div className="flex flex-wrap gap-2">
            {consultant.expertise.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-full border border-teal-200 truncate max-w-[100px]"
              >
                {skill}
              </span>
            ))}
            {consultant.expertise.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full border border-gray-200">
                +{consultant.expertise.length - 3}
              </span>
            )}
          </div>
        </div>
        <div className="space-y-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="font-medium w-20 flex-shrink-0">Languages:</span>
            <span className="truncate">{consultant.languages.join(', ') || 'N/A'}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium w-20 flex-shrink-0">Specialties:</span>
            <span className="truncate">{consultant.counsellingTypes.join(', ') || 'N/A'}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <span className="truncate">{consultant.specialization || 'N/A'}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <span className="truncate">{consultant.location || 'N/A'}</span>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={handleBookSession}
            className="flex-1 py-2 px-4 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-all duration-200 flex items-center justify-center"
            aria-label={`Book a session with ${consultant.name}`}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Book
          </button>
        </div>
      </div>
    </div>
  );
};

const ExpertCounsellorsComponent: React.FC = () => {
  const [consultants, setConsultants] = useState<Consultant[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const specialtyFilters: string[] = [
    'All',
    'Anxiety',
    'Depression',
    'PTSD',
    'Relationships',
    'Child Psychology',
    'Addiction',
  ];

  useEffect(() => {
    const fetchCounsellors = async () => {
      try {
        setLoading(true);
        const counsellors = await AuthService.getCounsellors();
        setConsultants(counsellors.filter((c) => !c.isBlocked));
      } catch (err: any) {
        console.error('Error fetching counsellors:', err);
        setError(err.message || 'Failed to fetch counsellors');
      } finally {
        setLoading(false);
      }
    };

    fetchCounsellors();
  }, []);

  const filteredConsultants = consultants.filter((consultant: Consultant) => {
    const matchesFilter =
      selectedFilter === 'All' ||
      consultant.expertise.some((exp: string) =>
        exp.toLowerCase().includes(selectedFilter.toLowerCase())
      );
    const matchesSearch =
      searchTerm === '' ||
      consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      consultant.expertise.some((exp: string) =>
        exp.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">
            Meet Our Expert Counsellors
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Connect with licensed mental health professionals dedicated to your wellness journey.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-6">
            {[
              { number: '50+', label: 'Expert Counsellors' },
              { number: '10K+', label: 'Sessions Completed' },
              { number: '4.8', label: 'Average Rating' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <div className="text-xl font-bold text-teal-600 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by name or expertise..."
                className="w-full pl-4 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {specialtyFilters.map((filter: string) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-teal-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        {loading && (
          <div className="text-center py-8">
            <div className="inline-block w-8 h-8 border-4 border-t-teal-600 border-gray-200 rounded-full animate-spin" />
            <p className="text-gray-600 mt-2">Loading counsellors...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-red-600 text-lg font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && filteredConsultants.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredConsultants.map((consultant: Consultant) => (
              <CounsellorCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
        )}

        {!loading && !error && filteredConsultants.length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-3">🧠</div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">No counsellors found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpertCounsellorsComponent;