// src/pages/dashboard/DashboardPage.tsx
import { Activity, Users, DollarSign, TrendingUp } from 'lucide-react'
import StatCard from '../../components/dashboard/StatCard'
import RecentActivity from '../../components/dashboard/RecentActivity'
import ChartComponent from '../../components/dashboard/ChartComponent'

const DashboardPage = () => {
  const stats = [
    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', icon: <DollarSign /> },
    { title: 'Active Users', value: '2,340', change: '+18.1%', icon: <Users /> },
    { title: 'Total Sales', value: '1,234', change: '+19%', icon: <Activity /> },
    { title: 'Growth', value: '+12.5%', change: '+2.1%', icon: <TrendingUp /> },
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Revenue Overview</h2>
          <ChartComponent />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <RecentActivity />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage