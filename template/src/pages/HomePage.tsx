import { ArrowRight, CheckCircle, Rocket, Shield, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const features = [
    {
      icon: <Rocket className="text-primary-600" size={24} />,
      title: 'Blazing Fast',
      description: 'Built with Vite for instant hot module replacement',
    },
    {
      icon: <Shield className="text-primary-600" size={24} />,
      title: 'Type Safe',
      description: 'Full TypeScript support for better developer experience',
    },
    {
      icon: <Zap className="text-primary-600" size={24} />,
      title: 'Production Ready',
      description: 'Includes all the tools you need for a professional project',
    },
  ]

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Amazing React Apps
            <span className="text-primary-600 block">In Minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            A professional React starter kit with everything you need. 
            Built with Vite, TypeScript, Tailwind CSS, and modern best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors text-lg font-semibold"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of developers who have accelerated their React development with our starter kit.
            </p>
            <div className="flex items-center justify-center space-x-4 mb-10">
              {[1, 2, 3, 4, 5].map((star) => (
                <CheckCircle key={star} className="text-green-500" size={24} />
              ))}
              <span className="text-gray-700 font-medium">4.9/5 Rating</span>
            </div>
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-black transition-colors text-lg font-semibold"
            >
              <Rocket size={20} />
              <span>Launch Your Project Now</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage