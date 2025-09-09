
import { Home } from "lucide-react"
import { useNavigate } from "react-router-dom"

const BackToHomeButton = () => {
  const navigate = useNavigate()
  
  return (
    <div className="text-center">
      <button
        onClick={() => navigate('/')}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <Home className="h-5 w-5" />
        <span>Return to Home</span>
      </button>
    </div>
  )
}

export default BackToHomeButton
