import {
  Play,
  SkipForward,
  SkipBack,
  Volume2,
  Mic2,
  Download,
  Trophy,
  Music,
  Users,
  Video,
  Camera,
  Crown,
  Star,
  Plus,
} from 'lucide-react';

const PersonalizedPlaylist = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">AI-Curated Playlist</h2>
      <Music className="h-6 w-6 text-indigo-600" />
    </div>
    <div className="space-y-4">
      {[1, 2, 3].map((index) => (
        <div
          key={index}
          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
        >
          <div className="flex items-center space-x-3">
            <Play className="h-5 w-5 text-indigo-600" />
            <div>
              <h3 className="font-medium">Educational Song {index}</h3>
              <p className="text-sm text-gray-600">Subject: Mathematics</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Download className="h-4 w-4" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded-full">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const VirtualClassroom = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">Virtual Classroom</h2>
      <Users className="h-6 w-6 text-indigo-600" />
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <div
          key={index}
          className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center"
        >
          <Video className="h-8 w-8 text-gray-400" />
        </div>
      ))}
    </div>
    <div className="flex justify-center space-x-4">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
        Join Class
      </button>
      <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
        Schedule Session
      </button>
    </div>
  </div>
);

const ARExperience = () => (
  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg p-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xl font-bold">AR Learning Experience</h2>
      <Camera className="h-6 w-6" />
    </div>
    <p className="mb-4">
      Transform your learning environment with augmented reality
    </p>
    <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
      Launch AR Mode
    </button>
  </div>
);

const GamificationPanel = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-xl font-bold">Your Achievements</h2>
      <Crown className="h-6 w-6 text-yellow-500" />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <Trophy className="h-8 w-8 text-yellow-500 mb-2" />
        <h3 className="font-semibold">Level 12</h3>
        <p className="text-sm text-gray-600">Music Master</p>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <Star className="h-8 w-8 text-yellow-500 mb-2" />
        <h3 className="font-semibold">2,450 Points</h3>
        <p className="text-sm text-gray-600">Weekly Score</p>
      </div>
    </div>
  </div>
);

const EnhancedAnalytics = () => (
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-bold mb-6">Detailed Learning Analytics</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <h3 className="font-semibold">Weekly Progress</h3>
        <div className="h-64 bg-gray-50 rounded-lg p-4">
          <div className="h-full w-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 rounded"></div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-semibold">Learning Distribution</h3>
        <div className="h-64 bg-gray-50 rounded-lg p-4">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 to-green-500 opacity-10 rounded"></div>
        </div>
      </div>
    </div>
  </div>
);

const AudioPlayer = () => (
  <div className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 z-50">
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <SkipBack className="h-6 w-6" />
        </button>
        <button className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700">
          <Play className="h-6 w-6" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <SkipForward className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 mx-4">
        <div className="text-sm font-medium">Current Song Title</div>
        <div className="text-xs text-gray-500">Interactive Mode: Karaoke</div>
        <div className="mt-2 h-1 bg-gray-200 rounded">
          <div className="w-1/3 h-full bg-indigo-600 rounded"></div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Mic2 className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Volume2 className="h-5 w-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Download className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div>
      <div className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <PersonalizedPlaylist />
            <VirtualClassroom />
            <ARExperience />
          </div>
          <div className="space-y-6">
            <GamificationPanel />
            <EnhancedAnalytics />
          </div>
        </div>
      </div>

      <AudioPlayer />
    </div>
  );
};

export default Dashboard;
