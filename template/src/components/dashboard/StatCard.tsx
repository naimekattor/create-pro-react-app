import { ReactNode } from 'react'
import clsx from 'clsx'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: ReactNode
  trend?: 'up' | 'down'
}

const StatCard = ({ title, value, change, icon, trend = 'up' }: StatCardProps) => {
  const isPositive = trend === 'up'

  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <div className="flex items-center mt-2">
            {isPositive ? (
              <TrendingUp className="text-green-500 mr-1" size={16} />
            ) : (
              <TrendingDown className="text-red-500 mr-1" size={16} />
            )}
            <span
              className={clsx(
                'text-sm font-medium',
                isPositive ? 'text-green-600' : 'text-red-600'
              )}
            >
              {change}
            </span>
            <span className="text-gray-500 text-sm ml-1">from last month</span>
          </div>
        </div>
        <div className="p-3 rounded-full bg-primary-50 text-primary-600">
          {icon}
        </div>
      </div>
    </div>
  )
}

export default StatCard