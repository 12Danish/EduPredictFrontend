import React from 'react'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-600 opacity-80 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Rotating wheel */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2 opacity-70" style={{animationDirection: 'reverse', animationDuration: '0.8s'}}></div>
        </div>
        
        {/* Loading message */}
        <div className="text-white">
          <h2 className="text-xl font-semibold mb-2">Analyzing Data</h2>
          <div className="flex items-center justify-center space-x-1">
         
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading