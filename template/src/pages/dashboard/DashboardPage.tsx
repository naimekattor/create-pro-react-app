import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react'
import StatCard from '../../components/dashboard/StatCard'

const DashboardPage = () => {
  const stats = [
    { 
      title: 'Total Revenue', 
      value: '$45,231', 
      change: '+20.1%', 
      icon: <DollarSign size={24} />,
      trend: 'up' as const
    },
    { 
      title: 'Active Users', 
      value: '2,340', 
      change: '+18.1%', 
      icon: <Users size={24} />,
      trend: 'up' as const
    },
    { 
      title: 'Total Sales', 
      value: '1,234', 
      change: '+19%', 
      icon: <Activity size={24} />,
      trend: 'up' as const
    },
    { 
      title: 'Growth', 
      value: '+12.5%', 
      change: '+2.1%', 
      icon: <TrendingUp size={24} />,
      trend: 'up' as const
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">Last updated: Today, 10:30 AM</div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart Component Here</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {['Project Launch', 'Team Meeting', 'New User Signup', 'System Update'].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                <div>
                  <p className="font-medium">{activity}</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Add User', 'Create Report', 'Settings', 'View Analytics'].map((action, index) => (
            <button
              key={index}
              className="p-4 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-colors text-center"
            >
              <p className="font-medium text-gray-900">{action}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage