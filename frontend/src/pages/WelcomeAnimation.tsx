import React, { useEffect, useState } from 'react';
import { Leaf, Wheat, Droplets, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`
      fixed inset-0 z-50 bg-gradient-to-br from-green-400 via-green-500 to-green-600 
      flex items-center justify-center transition-opacity duration-500
      ${isVisible ? 'opacity-100' : 'opacity-0'}
    `}>
      {/* Language Switcher */}
      <div className="absolute top-4 right-4 z-20">
        <LanguageSwitcher />
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 animate-float">
          <Wheat className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-20 right-20 animate-float-delayed">
          <Droplets className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-20 left-20 animate-float-slow">
          <Sun className="w-14 h-14 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-float">
          <Leaf className="w-18 h-18 text-white" />
        </div>
      </div>

      {/* Main Content */}
      <div className="text-center z-10">
        {/* Logo Animation */}
        <div className="mb-8 animate-scale-in">
          <div className="relative mx-auto w-24 h-24 mb-6">
            <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl animate-pulse-slow"></div>
            <div className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-2xl">
              <Leaf className="w-12 h-12 text-green-600 animate-bounce-gentle" />
            </div>
            {/* Floating particles around logo */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-300 rounded-full animate-ping delay-300"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 animate-slide-in-left">
            {t('Welcome to')}
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 animate-slide-in-right">
            <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
              Vilaipayir
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-green-100 font-medium animate-fade-in-delayed">
            {t('Farm Management System')}
          </p>
        </div>

        {/* Loading Animation */}
        <div className="mt-12 animate-fade-in-delayed-2">
          <div className="flex justify-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce delay-200"></div>
          </div>
          <p className="text-green-100 text-sm font-medium">
            {t('Preparing your dashboard...')}
          </p>
        </div>
      </div>

      {/* Bottom Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32 text-green-700 opacity-30" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="currentColor" className="animate-wave" />
        </svg>
      </div>
    </div>
  );
};

export default WelcomeScreen;