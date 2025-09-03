import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  ArrowLeft, 
  Wheat, 
  MapPin, 
  Search,
  Leaf,
  TreePine,
  Flower
} from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: 'Dashboard', icon: Home, path: '/' },
    { label: 'Crop Management', icon: Wheat, path: '/crops' },
    { label: 'Field Management', icon: MapPin, path: '/fields' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Farm Scene */}
        <div className="relative mb-12">
          <div className="flex justify-center items-end space-x-4 mb-8">
            {/* Animated plants */}
            <div className="animate-bounce delay-100">
              <Wheat className="w-16 h-16 text-green-500" />
            </div>
            <div className="animate-bounce delay-200">
              <TreePine className="w-20 h-20 text-green-600" />
            </div>
            <div className="animate-bounce delay-300">
              <Flower className="w-14 h-14 text-pink-500" />
            </div>
            <div className="animate-bounce delay-150">
              <Leaf className="w-18 h-18 text-green-400" />
            </div>
          </div>
          
          {/* 404 Text */}
          <div className="relative">
            <h1 className="text-9xl font-bold text-gray-200 select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                404
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-gray-900">
              Oops! This field seems to be empty
            </h2>
            <p className="text-lg text-gray-600 max-w-md mx-auto">
              The page you're looking for might have been harvested, moved to a different field, or doesn't exist.
            </p>
          </div>

          {/* Search suggestion */}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Or visit these popular sections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => navigate(link.path)}
                className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-green-50 hover:border-green-200 border border-gray-200 rounded-xl transition-all duration-200 group"
              >
                <div className="p-2 bg-white group-hover:bg-green-100 rounded-lg transition-colors">
                  <link.icon className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-green-700">
                  {link.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-500">
            <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
              <Leaf className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm">Vilaipayir Farm Management System</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;