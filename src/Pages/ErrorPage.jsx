import { useNavigate } from "react-router-dom"
import { AlertTriangle, Home, FileText } from "lucide-react"
import BackToHomeButton from "../Components/HomeButton"
const ErrorPage = ({ result }) => {
  const navigate = useNavigate()


  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Error Icon and Header */}
        <div className="text-center mb-8">
          <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-red-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
            Processing Error
          </h1>
          <p className="text-slate-600 text-lg">
            We encountered an issue while analyzing your data
          </p>
        </div>

        {/* Error Details Card */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8 mb-8">
          {/* Error Code */}
          <div className="mb-6">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Error Code
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <code className="text-red-700 font-mono text-lg">
                {result?.status || 'DATA_PROCESSING_ERROR'}
              </code>
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Error Message
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-slate-700 text-base leading-relaxed">
                {result?.data.error || 'The uploaded file format is not supported or contains invalid data structure. Please ensure your file follows the required format specifications.'}
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  How to Fix This
                </h3>
                <p className="text-blue-800 mb-4 leading-relaxed">
                  Please retry by following the format instructions and using the sample file as a reference. 
                  Make sure your data includes all required columns and follows the specified data types.
                </p>
                <ul className="text-blue-700 space-y-1 text-sm">
                  <li>• Check that all required columns are present</li>
                  <li>• Verify data types match the expected format</li>
                  <li>• Remove any special characters or formatting</li>
                  <li>• Ensure the file is saved in the correct format (CSV, Excel, etc.)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center">
         <BackToHomeButton/>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage