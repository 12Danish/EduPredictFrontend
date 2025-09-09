
import { TrendingUp } from "lucide-react";

// Hero Section Component
const HeroSection = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full p-4">
          <TrendingUp className="h-12 w-12 text-white" />
        </div>
      </div>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Predict Student Dropout Risk
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Upload your student data to identify at-risk students and receive
        actionable insights to improve retention rates and academic success.
      </p>
    </div>
  );
};

export default HeroSection;
