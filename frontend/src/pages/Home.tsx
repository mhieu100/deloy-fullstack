import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import type { Article } from '../types';

const Home = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await api.get('/articles/public');
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };
        fetchArticles();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <Link 
                        key={article.id} 
                        to={`/article/${article.id}`}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        {article.imageUrl && (
                            <img 
                                src={article.imageUrl} 
                                alt={article.title} 
                                className="w-full h-48 object-cover"
                            />
                        )}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold mb-2 hover:text-blue-600">{article.title}</h2>
                            <p className="text-gray-600 mb-4 line-clamp-3">{article.content}</p>
                            <div className="flex justify-between items-center text-sm text-gray-500">
                                <span>By {article.author?.name || 'Unknown'}</span>
                                <span>{new Date(article.createdAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
