
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react"

const StatisticsCards = ({ totalStudents, highRiskCount, lowRiskCount }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center">
          <div className="bg-blue-100 rounded-full p-3 mr-4">
            <TrendingUp className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{totalStudents}</p>
            <p className="text-slate-600">Total Students</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center">
          <div className="bg-red-100 rounded-full p-3 mr-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{highRiskCount}</p>
            <p className="text-slate-600">High Risk</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <div className="flex items-center">
          <div className="bg-green-100 rounded-full p-3 mr-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-900">{lowRiskCount}</p>
            <p className="text-slate-600">Low Risk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatisticsCards
