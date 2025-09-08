import { AlertTriangle } from "lucide-react";
// Privacy Notice Component
const PrivacyNotice = () => {
  return (
    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-start space-x-3">
        <div className="bg-blue-100 rounded-full p-1 mt-0.5">
          <AlertTriangle className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <h5 className="font-semibold text-blue-900">
            Privacy & Security
          </h5>
          <p className="text-sm text-blue-800 mt-1">
            Your data is processed securely and never stored permanently.
            All analysis is performed locally and results are only visible
            to you.
          </p>
        </div>
      </div>
    </div>
  );
};


export default PrivacyNotice