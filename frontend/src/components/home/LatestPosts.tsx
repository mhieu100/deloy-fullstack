import { Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Article } from '../../types'
import { calculateReadingTime } from '../../utils/readingTime'

interface LatestPostsProps {
  articles: Article[]
}

const LatestPosts = ({ articles }: LatestPostsProps) => {
  // Skip the first 3 if they are featured, or just show all.
  // For simplicity, let's show the next 6 articles.
  const latest = articles.slice(0, 6)

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <Clock className="w-6 h-6 mr-2 text-blue-500" />
            Latest Articles
          </h2>
          <Link
            to="/articles"
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            View Archive
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latest.map((article) => (
            <article key={article.id} className="flex flex-col group">
              <Link to={`/article/${article.id}`} className="block overflow-hidden rounded-lg mb-4">
                {article.imageUrl ? (
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-56 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-400 dark:text-gray-600 text-4xl">Code</span>
                  </div>
                )}
              </Link>
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                  <span className="font-medium">Technology</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {calculateReadingTime(article.content)} min read
                  </span>
                </div>
                <Link to={`/article/${article.id}`} className="block">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
                  {article.content.replace(/<[^>]*>/g, '')}
                </p>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold">
                      {article.author?.name?.charAt(0) || 'A'}
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {article.author?.name || 'Anonymous'}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(article.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestPosts
