import { Users, TrendingUp, AlertTriangle } from "lucide-react";

// Feature Card Component
const FeatureCard = ({
  icon: Icon,
  iconColor,
  bgColor,
  title,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center">
      <div
        className={`${bgColor} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4`}
      >
        <Icon className={`h-6 w-6 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Features Grid Component
const FeaturesGrid = () => {
  const features = [
    {
      icon: Users,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Student Analysis",
      description:
        "Comprehensive analysis of student performance patterns and risk factors",
    },
    {
      icon: AlertTriangle,
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "Early Warning",
      description:
        "Identify at-risk students before they consider dropping out",
    },
    {
      icon: TrendingUp,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
      title: "Actionable Insights",
      description: "Receive personalized recommendations for each student",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          iconColor={feature.iconColor}
          bgColor={feature.bgColor}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;
