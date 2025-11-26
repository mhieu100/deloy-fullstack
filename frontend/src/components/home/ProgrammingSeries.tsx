import { BookOpen, ChevronRight, Layers } from 'lucide-react'
import { Link } from 'react-router-dom'

const series = [
  {
    id: 1,
    title: 'Java Spring Boot Mastery',
    description: 'Build enterprise-grade applications with Spring Boot 3.',
    count: 12,
    color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    icon: '☕',
  },
  {
    id: 2,
    title: 'React & TypeScript Patterns',
    description: 'Advanced patterns for scalable React applications.',
    count: 8,
    color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    icon: '⚛️',
  },
  {
    id: 3,
    title: 'DevOps Zero to Hero',
    description: 'CI/CD, Docker, Kubernetes, and Cloud Deployment.',
    count: 15,
    color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    icon: '🚀',
  },
  {
    id: 4,
    title: 'Data Structures & Algorithms',
    description: 'Ace your coding interviews with these essential topics.',
    count: 20,
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    icon: '🧮',
  },
]

const ProgrammingSeries = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
            <Layers className="w-8 h-8 mr-3 text-purple-600" />
            Learning Series
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Structured learning paths to help you master complex topics step by step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {series.map((item) => (
            <Link
              key={item.id}
              to={`/series/${item.id}`}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-4xl">{item.icon}</span>
                </div>
                <div className="ml-4 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.color}`}
                    >
                      <BookOpen className="w-3 h-3 mr-1" />
                      {item.count} articles
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgrammingSeries
