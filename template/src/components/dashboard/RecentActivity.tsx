import React from 'react'
import { CheckCircle, UserPlus, ShoppingCart, Download, Upload } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'

interface Activity {
  id: number
  user: string
  action: string
  icon: React.ReactNode
  time: Date
}

const RecentActivity = () => {
  const activities: Activity[] = [
    {
      id: 1,
      user: 'John Doe',
      action: 'completed project setup',
      icon: <CheckCircle className="text-green-500" size={16} />,
      time: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'joined the team',
      icon: <UserPlus className="text-blue-500" size={16} />,
      time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    },
    {
      id: 3,
      user: 'Alex Johnson',
      action: 'made a purchase',
      icon: <ShoppingCart className="text-purple-500" size={16} />,
      time: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
    },
    {
      id: 4,
      user: 'Sarah Williams',
      action: 'downloaded the report',
      icon: <Download className="text-orange-500" size={16} />,
      time: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    },
    {
      id: 5,
      user: 'Michael Brown',
      action: 'uploaded new assets',
      icon: <Upload className="text-indigo-500" size={16} />,
      time: new Date(Date.now() - 1000 * 60 * 60 * 26), // 1 day, 2 hours ago
    },
  ]

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
      <div className="p-4 border-b border-slate-100 bg-slate-50">
        <h2 className="text-lg font-semibold text-slate-800">Recent Activity</h2>
      </div>
      <ul className="divide-y divide-slate-100">
        {activities.map((activity) => (
          <li key={activity.id} className="p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-start space-x-3">
              <div className="mt-1 bg-slate-100 p-2 rounded-full">
                {activity.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900">
                  <span className="font-bold">{activity.user}</span> {activity.action}
                </p>
                <p className="text-xs text-slate-500">
                  {formatDistanceToNow(activity.time, { addSuffix: true })}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecentActivity