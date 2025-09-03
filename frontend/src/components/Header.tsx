import React, { useState, useEffect } from 'react';
import { Menu, Bell, Search, User, Settings, Cloud, Sun, CloudRain, Snowflake, Wind, Droplets } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  onMenuClick: () => void;
}

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  location: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 24,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    location: 'Farm Location'
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Simulate weather updates (in real app, this would fetch from weather API)
  useEffect(() => {
    const weatherTimer = setInterval(() => {
      setWeather(prev => ({
        ...prev,
        temperature: prev.temperature + (Math.random() - 0.5) * 2,
        humidity: Math.max(30, Math.min(90, prev.humidity + (Math.random() - 0.5) * 10)),
        windSpeed: Math.max(0, prev.windSpeed + (Math.random() - 0.5) * 5)
      }));
    }, 30000); // Update every 30 seconds

    return () => clearInterval(weatherTimer);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return Sun;
      case 'rainy':
      case 'rain':
        return CloudRain;
      case 'snowy':
      case 'snow':
        return Snowflake;
      default:
        return Cloud;
    }
  };

  const WeatherIcon = getWeatherIcon(weather.condition);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
          
          {/* Live Weather Section */}
          <div className="flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-green-50 px-4 py-2 rounded-xl border border-blue-100">
            {/* Weather Info */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <WeatherIcon className="w-4 h-4 text-blue-600" />
                </div>
                <div className="hidden sm:block">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">
                      {Math.round(weather.temperature)}°C
                    </span>
                    <span className="text-sm text-gray-600">
                      {weather.condition}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Droplets className="w-3 h-3" />
                      <span>{Math.round(weather.humidity)}%</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Wind className="w-3 h-3" />
                      <span>{Math.round(weather.windSpeed)} km/h</span>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-8 bg-gray-300"></div>
              
              {/* Time & Date */}
              <div className="hidden md:block text-right">
                <div className="text-lg font-bold text-gray-900">
                  {formatTime(currentTime)}
                </div>
                <div className="text-xs text-gray-500">
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings className="w-5 h-5 text-gray-600" />
          </button>
          
          <LanguageSwitcher />
          <div className="flex items-center space-x-3 pl-3 border-l border-gray-200">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-gray-900">John Farmer</p>
              <p className="text-xs text-gray-500">Farm Manager</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;