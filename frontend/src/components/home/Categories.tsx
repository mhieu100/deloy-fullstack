import { Code2, Database, Globe, Layout, Server, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  { name: 'Frontend', icon: Layout, color: 'text-pink-500', bg: 'bg-pink-100 dark:bg-pink-900/20' },
  { name: 'Backend', icon: Server, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/20' },
  { name: 'DevOps', icon: Globe, color: 'text-green-500', bg: 'bg-green-100 dark:bg-green-900/20' },
  {
    name: 'Mobile',
    icon: Smartphone,
    color: 'text-purple-500',
    bg: 'bg-purple-100 dark:bg-purple-900/20',
  },
  {
    name: 'Database',
    icon: Database,
    color: 'text-yellow-500',
    bg: 'bg-yellow-100 dark:bg-yellow-900/20',
  },
  { name: 'Algorithms', icon: Code2, color: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/20' },
]

const Categories = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Explore Topics
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="flex flex-col items-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div
                className={`p-4 rounded-full ${category.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <category.icon className={`w-8 h-8 ${category.color}`} />
              </div>
              <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
