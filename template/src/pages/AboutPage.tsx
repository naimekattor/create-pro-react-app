import { Users, Target, Globe, Heart } from 'lucide-react'

const AboutPage = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      description: '10+ years in React development',
    },
    {
      name: 'Jane Smith',
      role: 'Lead Designer',
      description: 'UI/UX specialist with React expertise',
    },
    {
      name: 'Alex Johnson',
      role: 'Full Stack Developer',
      description: 'TypeScript and React expert',
    },
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Pro React Starter
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to help developers build better React applications faster.
            Our starter kit includes everything you need to launch your next project.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                <Target size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600">
              To provide developers with the most comprehensive and professional React starter kit, 
              eliminating boilerplate setup and allowing you to focus on building amazing applications.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                <Globe size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600">
              To become the go-to solution for React developers worldwide, 
              continuously evolving with the ecosystem and setting new standards for developer experience.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center space-x-3 mb-12">
            <Users className="text-primary-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Heart className="text-primary-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on code quality and best practices.',
              },
              {
                title: 'Developer Experience',
                description: 'Everything we build is designed with developers in mind.',
              },
              {
                title: 'Continuous Improvement',
                description: 'We constantly update and improve our starter kit.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage