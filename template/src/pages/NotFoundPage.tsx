import { Link } from 'react-router-dom'
import { Home, Search, AlertCircle } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 text-red-600 mb-6">
          <AlertCircle size={40} />
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8 text-lg">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-6">
            <Search size={20} />
            <span>Here are some helpful links instead:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              <Home size={20} />
              <span>Home Page</span>
            </Link>
            <Link
              to="/dashboard"
              className="flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              <span>Go to Dashboard</span>
            </Link>
          </div>

          <Link
            to="/contact"
            className="inline-block text-primary-600 hover:text-primary-700 font-medium mt-4"
          >
            Need help? Contact Support →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage