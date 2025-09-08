import { BookOpen } from "lucide-react";

// Header Component
const Header = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 rounded-lg p-2">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              EduPredict Analytics
            </h1>
            <p className="text-sm text-gray-600">
              Student Success Prediction Platform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
