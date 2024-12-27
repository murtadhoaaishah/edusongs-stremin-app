import {
  BookOpen,
  Camera,
  ChevronLeft,
  ChevronRight,
  Heart,
  Home,
  LogOut,
  Music,
  PieChart,
  Settings,
  Trophy,
  Users,
  Video,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const SideNav = () => {
  const [sideNavExpanded, setSideNavExpanded] = useState(true);
  
  const toggleExpanded = () => {
    setSideNavExpanded(!sideNavExpanded);
  };

  useEffect(() => {
    localStorage.setItem('sideNavExpanded', JSON.stringify(sideNavExpanded));
  },[sideNavExpanded]);

  const menuItems = [
    { icon: Home, label: 'Dashboard', badge: null },
    { icon: Music, label: 'My Library', badge: '23' },
    { icon: BookOpen, label: 'Courses', badge: '4' },
    { icon: Video, label: 'Live Classes', badge: 'Live' },
    { icon: Users, label: 'Study Groups', badge: null },
    { icon: Camera, label: 'AR Learning', badge: 'New' },
    { icon: Trophy, label: 'Achievements', badge: null },
    { icon: PieChart, label: 'Analytics', badge: null },
    { icon: Heart, label: 'Favorites', badge: null },
  ];

  return (
    <div
      className={`h-screen  bg-white border-r border-gray-200 transition-all duration-300 z-50 
      ${sideNavExpanded ? 'w-64' : 'w-20'}`}
    >
      <div className="flex items-center justify-between px-4 h-16 border-b border-gray-200">
        {sideNavExpanded && (
          <div className="flex items-center space-x-2">
            <Music className="h-8 w-8 text-indigo-600" />
            <span className="font-bold text-xl">EduSongs</span>
          </div>
        )}
        <button
          onClick={toggleExpanded}
          className="px-2 hover:bg-gray-100 rounded-full"
        >
          {sideNavExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      <div className="py-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-gray-700"
          >
            <item.icon className="h-5 w-5" />
            {sideNavExpanded && (
              <div className="flex flex-1 items-center justify-between ml-3">
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`px-2 py-1 text-xs rounded-full 
                    ${
                      item.badge === 'Live'
                        ? 'bg-red-100 text-red-600'
                        : item.badge === 'New'
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 w-full border-t border-gray-200">
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-gray-700">
          <Settings className="h-5 w-5" />
          {sideNavExpanded && <span className="ml-3">Settings</span>}
        </button>
        <button className="w-full flex items-center px-4 py-3 hover:bg-gray-50 text-gray-700">
          <LogOut className="h-5 w-5" />
          {sideNavExpanded && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default SideNav;
