const StudentRow = ({ student }) => {
  return (
    <tr 
      className={`border-b border-slate-100 ${
        student.Risk === 1 
          ? 'bg-red-50 hover:bg-red-100' 
          : 'bg-green-50 hover:bg-green-100'
      } transition-colors`}
    >
      <td className="py-3 px-4 font-medium text-slate-900">
        {student["Student Roll Number"]}
      </td>
      <td className="py-3 px-4 text-slate-700">
        {student["Age at enrollment"]}
      </td>
      <td className="py-3 px-4 text-slate-700">
        {(student["Admission grade"] * 100).toFixed(1)}%
      </td>
      <td className="py-3 px-4 text-slate-700">
        {(student["Previous qualification (grade)"] * 100).toFixed(1)}%
      </td>
      <td className="py-3 px-4 text-slate-700">
        {student["Curricular units 1st sem (approved)"]}
      </td>
      <td className="py-3 px-4 text-slate-700">
        {(student["Curricular units 1st sem (grade)"] * 100).toFixed(1)}%
      </td>
      <td className="py-3 px-4 text-slate-700">
        {student["Curricular units 2nd sem (approved)"]}
      </td>
      <td className="py-3 px-4 text-slate-700">
        {(student["Curricular units 2nd sem (grade)"] * 100).toFixed(1)}%
      </td>
      <td className="py-3 px-4 text-slate-700">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          student["Tuition fees up to date"] === 1
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {student["Tuition fees up to date"] === 1 ? 'Yes' : 'No'}
        </span>
      </td>
      <td className="py-3 px-4 text-slate-700">
        <span className={`font-medium ${
          student["Dropout_Probability"] > 0.7 
            ? 'text-red-600' 
            : student["Dropout_Probability"] > 0.4 
              ? 'text-yellow-600' 
              : 'text-green-600'
        }`}>
          {(student["Dropout_Probability"] * 100).toFixed(2)}%
        </span>
      </td>
      <td className="py-3 px-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          student.Risk === 1
            ? 'bg-red-100 text-red-800'
            : 'bg-green-100 text-green-800'
        }`}>
          {student.Risk === 1 ? 'High Risk' : 'Low Risk'}
        </span>
      </td>
    </tr>
  )
}

export default StudentRow