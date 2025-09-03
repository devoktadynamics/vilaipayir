import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Home, 
  Wheat, 
  MapPin, 
  PiggyBank, 
  Package, 
  Calendar, 
  BarChart3, 
  Cloud, 
  Users, 
  Settings,
  ChevronRight,
  X,
  Leaf,
  Activity,
  Shield,
  HelpCircle
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  
  const getActiveItem = () => {
    const path = location.pathname;
    if (path === '/') return 'dashboard';
    return path.substring(1); // Remove leading slash
  };

  const activeItem = getActiveItem();

  const menuSections = [
    {
      title: t('Overview'),
      items: [
        { id: 'dashboard', label: t('Dashboard'), icon: Home, badge: null, path: '/' },
        { id: 'analytics', label: t('Analytics'), icon: Activity, badge: null, path: '/analytics' },
      ]
    },
    {
      title: t('Farm Management'),
      items: [
        { id: 'crops', label: t('Crop Management'), icon: Wheat, badge: '15', path: '/crops' },
        { id: 'fields', label: t('Field Management'), icon: MapPin, badge: null, path: '/fields' },
        { id: 'livestock', label: t('Livestock'), icon: Users, badge: '8', path: '/livestock' },
        { id: 'inventory', label: t('Inventory'), icon: Package, badge: null, path: '/inventory' },
      ]
    },
    {
      title: t('Operations'),
      items: [
        { id: 'schedule', label: t('Schedule'), icon: Calendar, badge: '3', path: '/schedule' },
        { id: 'weather', label: t('Weather'), icon: Cloud, badge: null, path: '/weather' },
        { id: 'finances', label: t('Finances'), icon: PiggyBank, badge: null, path: '/finances' },
        { id: 'reports', label: t('Reports'), icon: BarChart3, badge: null, path: '/reports' },
      ]
    }
  ];

  const bottomItems = [
    { id: 'settings', label: t('Settings'), icon: Settings, path: '/settings' },
    { id: 'help', label: t('Help & Support'), icon: HelpCircle, path: '/help' },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose(); // Close sidebar on mobile after navigation
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-all duration-300 ease-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        border-r border-gray-100
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Vilaipayir</h1>
                <p className="text-xs text-gray-500 font-medium">{t('Farm Management')}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors lg:hidden"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-8">
              {menuSections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavigation(item.path)}
                          className={`
                            group w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all duration-300 relative overflow-hidden
                            ${activeItem === item.id 
                              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 transform scale-[1.02]' 
                              : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-green-50 hover:text-gray-900 hover:shadow-sm'
                            }
                          `}
                        >
                          {/* Active state background glow */}
                          {activeItem === item.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-600/20 rounded-xl blur-sm"></div>
                          )}
                          
                          <div className="flex items-center space-x-3 relative z-10">
                            <div className={`
                              p-2.5 rounded-lg transition-all duration-300 transform
                              ${activeItem === item.id 
                                ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm scale-110' 
                                : 'bg-gray-100 text-gray-500 group-hover:bg-white group-hover:shadow-md group-hover:scale-105'
                              }
                            `}>
                              <item.icon className="w-4 h-4" />
                            </div>
                            <span className={`
                              font-medium text-sm transition-all duration-300
                              ${activeItem === item.id ? 'font-semibold' : ''}
                            `}>
                              {item.label}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2 relative z-10">
                            {item.badge && (
                              <span className={`
                                px-2.5 py-1 text-xs font-bold rounded-full transition-all duration-300 transform
                                ${activeItem === item.id 
                                  ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm scale-110' 
                                  : 'bg-gray-200 text-gray-600 group-hover:bg-green-100 group-hover:text-green-700 group-hover:scale-105'
                                }
                              `}>
                                {item.badge}
                              </span>
                            )}
                            {activeItem === item.id && (
                              <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-white animate-pulse" />
                                <div className="w-1 h-1 bg-white rounded-full ml-1 animate-ping"></div>
                              </div>
                            )}
                          </div>
                          
                          {/* Active state left border */}
                          {activeItem === item.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full shadow-lg"></div>
                          )}
                          
                          {/* Hover effect shimmer */}
                          <div className={`
                            absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            bg-gradient-to-r from-transparent via-white/5 to-transparent
                            transform -skew-x-12 -translate-x-full group-hover:translate-x-full
                            ${activeItem !== item.id ? 'group-hover:animate-pulse' : ''}
                          `}></div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
          
          {/* Bottom Section */}
          <div className="p-4 border-t border-gray-100">
            <div className="space-y-1 mb-4">
              {bottomItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.path)}
                  className={`
                    group w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-300 relative overflow-hidden
                    ${activeItem === item.id 
                      ? 'bg-gradient-to-r from-gray-600 to-gray-700 text-white shadow-lg transform scale-[1.02]' 
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:text-gray-900 hover:shadow-sm'
                    }
                  `}
                >
                  <div className={`
                    p-1.5 rounded-md transition-all duration-300 transform
                    ${activeItem === item.id 
                      ? 'bg-white/20 text-white shadow-md scale-110' 
                      : 'bg-gray-100 text-gray-500 group-hover:bg-white group-hover:shadow-md group-hover:scale-105'
                    }
                  `}>
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className={`
                    font-medium text-sm transition-all duration-300
                    ${activeItem === item.id ? 'font-semibold' : ''}
                  `}>
                    {item.label}
                  </span>
                  
                  {/* Hover effect shimmer */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    bg-gradient-to-r from-transparent via-white/5 to-transparent
                    transform -skew-x-12 -translate-x-full group-hover:translate-x-full
                    ${activeItem !== item.id ? 'group-hover:animate-pulse' : ''}
                  `}></div>
                </button>
              ))}
            </div>
            
            {/* Farm Status Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-2 right-2">
                  <Leaf className="w-8 h-8 text-green-600 animate-spin" style={{ animationDuration: '20s' }} />
                </div>
                <div className="absolute bottom-2 left-2">
                  <Wheat className="w-6 h-6 text-green-600 animate-bounce" style={{ animationDelay: '1s' }} />
                </div>
              </div>
              
              <div className="flex items-center space-x-3 mb-3 relative z-10">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Farm Status</p>
                  <p className="text-xs text-green-600 font-medium flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                    All Systems Active
                  </p>
                </div>
              </div>
              <div className="space-y-2 relative z-10">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Health Score</span>
                  <span className="font-semibold text-green-700">98%</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full shadow-sm transition-all duration-1000 ease-out relative"
                    style={{ width: '98%' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;