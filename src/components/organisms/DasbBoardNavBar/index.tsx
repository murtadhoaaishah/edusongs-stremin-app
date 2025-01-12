import { Search, Bell } from "lucide-react";

const TopBar = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200">
      <div className="h-full flex items-center justify-between px-6">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search songs, courses, or topics..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
            <img
              src="/api/placeholder/32/32"
              alt="User avatar"
              className="h-8 w-8 rounded-full"
            />
            <span className="font-medium">John Doe</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
