import { useState } from 'react'
import { Save, Bell, Shield, Globe, Palette, Database } from 'lucide-react'
import { useToast } from '../../components/ui/toast/Toaster'

const SettingsPage = () => {
  const { toast } = useToast()
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    twoFactorAuth: false,
    language: 'en',
    theme: 'light',
  })

  const handleSave = () => {
    toast.success('Settings saved successfully!')
  }

  const handleToggle = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: typeof prev[key] === 'boolean' ? !prev[key] : prev[key]
    }))
  }

  const settingsSections = [
    {
      icon: <Bell className="text-primary-600" size={24} />,
      title: 'Notifications',
      settings: [
        {
          label: 'Email Notifications',
          description: 'Receive email updates about your account',
          value: settings.emailNotifications,
          onChange: () => handleToggle('emailNotifications'),
        },
        {
          label: 'Push Notifications',
          description: 'Receive push notifications in your browser',
          value: settings.pushNotifications,
          onChange: () => handleToggle('pushNotifications'),
        },
        {
          label: 'Weekly Reports',
          description: 'Get weekly summary reports via email',
          value: settings.weeklyReports,
          onChange: () => handleToggle('weeklyReports'),
        },
      ],
    },
    {
      icon: <Shield className="text-primary-600" size={24} />,
      title: 'Security',
      settings: [
        {
          label: 'Two-Factor Authentication',
          description: 'Add an extra layer of security to your account',
          value: settings.twoFactorAuth,
          onChange: () => handleToggle('twoFactorAuth'),
        },
      ],
    },
    {
      icon: <Globe className="text-primary-600" size={24} />,
      title: 'Preferences',
      settings: [
        {
          label: 'Language',
          description: 'Select your preferred language',
          value: settings.language,
          onChange: (value: string) => setSettings(prev => ({ ...prev, language: value })),
          type: 'select' as const,
          options: [
            { value: 'en', label: 'English' },
            { value: 'es', label: 'Spanish' },
            { value: 'fr', label: 'French' },
          ],
        },
        {
          label: 'Theme',
          description: 'Choose your preferred theme',
          value: settings.theme,
          onChange: (value: string) => setSettings(prev => ({ ...prev, theme: value })),
          type: 'select' as const,
          options: [
            { value: 'light', label: 'Light' },
            { value: 'dark', label: 'Dark' },
            { value: 'system', label: 'System' },
          ],
        },
      ],
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>
        <button
          onClick={handleSave}
          className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Save size={20} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Settings Sections */}
        <div className="lg:col-span-2 space-y-6">
          {settingsSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center space-x-3 mb-6">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-6">
                {section.settings.map((setting, settingIndex) => (
                  <div key={settingIndex} className="flex items-center justify-between py-4 border-b last:border-0">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{setting.label}</p>
                      <p className="text-gray-600 text-sm mt-1">{setting.description}</p>
                    </div>
                    
                    {setting.type === 'select' ? (
                      <select
                        value={setting.value as string}
                        onChange={(e) => setting.onChange(e.target.value)}
                        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      >
                        {setting.options?.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <button
                        onClick={setting.onChange}
                        className={`w-12 h-6 rounded-full transition-colors ${
                          setting.value ? 'bg-primary-600' : 'bg-gray-300'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                            setting.value ? 'translate-x-7' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="space-y-3">
              {[
                { icon: <Palette size={20} />, label: 'Appearance', href: '#' },
                { icon: <Database size={20} />, label: 'Data & Privacy', href: '#' },
                { icon: <Bell size={20} />, label: 'Notification Settings', href: '#' },
                { icon: <Shield size={20} />, label: 'Security', href: '#' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {link.icon}
                  <span className="text-gray-700">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Account Summary */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Account Status</span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Member Since</span>
                <span className="font-medium">Jan 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Login</span>
                <span className="font-medium">2 hours ago</span>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-xl shadow p-6 border border-red-200">
            <h3 className="text-lg font-semibold text-red-700 mb-4">Danger Zone</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border border-red-300 text-red-700 hover:bg-red-50 transition-colors">
                Deactivate Account
              </button>
              <button className="w-full text-left p-3 rounded-lg border border-red-300 text-red-700 hover:bg-red-50 transition-colors">
                Delete Account
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              These actions are irreversible. Please proceed with caution.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage