import StudentRow from './StudentRow'

const ResultsTable = ({ data }) => {
  console.log(data)
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 mb-8 overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="text-xl font-semibold text-slate-900">Student Risk Assessment</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Student ID</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Age</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Admission Grade</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Previous Qualification</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">1st Sem (Approved)</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">1st Sem Grade</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">2nd Sem (Approved)</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">2nd Sem Grade</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Tuition Up to Date</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Dropout Probability</th>
              <th className="text-left py-3 px-4 font-semibold text-slate-700">Risk</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student) => (
              <StudentRow 
                key={student["Student Roll Number"]} 
                student={student} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResultsTable