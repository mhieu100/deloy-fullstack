import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Article } from '../../types'
import { calculateReadingTime } from '../../utils/readingTime'

interface FeaturedPostsProps {
  articles: Article[]
}

const FeaturedPosts = ({ articles }: FeaturedPostsProps) => {
  if (articles.length === 0) return null

  // Take top 3 articles
  const featured = articles.slice(0, 3)

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
              <Star className="w-6 h-6 mr-2 text-yellow-500 fill-current" />
              Featured Posts
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Hand-picked articles you shouldn't miss.
            </p>
          </div>
          <Link
            to="/search?filter=featured"
            className="hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            View all <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                {article.imageUrl ? (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold opacity-50">Dev</span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full text-xs font-medium text-blue-600 dark:text-blue-400 shadow-sm">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-1">
                  {article.content.replace(/<[^>]*>/g, '')}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
                  <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                  <span>{calculateReadingTime(article.content)} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts
