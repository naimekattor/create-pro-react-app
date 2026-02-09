import { BarChart3, TrendingUp, Users, Eye, Download } from 'lucide-react'

const AnalyticsPage = () => {
  const metrics = [
    { label: 'Total Visits', value: '12,458', change: '+12%' },
    { label: 'Unique Visitors', value: '8,942', change: '+8%' },
    { label: 'Bounce Rate', value: '32%', change: '-5%' },
    { label: 'Avg. Session', value: '4m 32s', change: '+15%' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600">Track and analyze your application performance</p>
        </div>
        <button className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          <Download size={20} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary-50">
                {index === 0 && <BarChart3 className="text-primary-600" size={20} />}
                {index === 1 && <Users className="text-primary-600" size={20} />}
                {index === 2 && <TrendingUp className="text-primary-600" size={20} />}
                {index === 3 && <Eye className="text-primary-600" size={20} />}
              </div>
              <span className={`text-sm font-medium ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {metric.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            <p className="text-gray-600 text-sm mt-1">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Traffic Overview</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Traffic Chart Here</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">User Demographics</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Demographics Chart Here</p>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-white rounded-xl shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Activity Log</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-900">Page</th>
                <th className="text-left p-4 font-semibold text-gray-900">Visits</th>
                <th className="text-left p-4 font-semibold text-gray-900">Unique Visitors</th>
                <th className="text-left p-4 font-semibold text-gray-900">Bounce Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                { page: '/dashboard', visits: '1,234', unique: '987', bounce: '25%' },
                { page: '/home', visits: '2,345', unique: '1,876', bounce: '32%' },
                { page: '/about', visits: '987', unique: '756', bounce: '18%' },
                { page: '/contact', visits: '1,543', unique: '1,234', bounce: '22%' },
              ].map((row, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-4 font-medium">{row.page}</td>
                  <td className="p-4">{row.visits}</td>
                  <td className="p-4">{row.unique}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {row.bounce}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AnalyticsPage