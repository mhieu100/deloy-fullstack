import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, PenSquare, ShieldCheck } from 'lucide-react';

const Navbar = () => {
    const { isAuthenticated, logout, isAdmin } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-gray-800">
                            BlogApp
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                            <>
                                <Link to="/create-article" className="flex items-center text-gray-600 hover:text-gray-900">
                                    <PenSquare className="w-5 h-5 mr-1" />
                                    Write
                                </Link>
                                <Link to="/my-articles" className="text-gray-600 hover:text-gray-900">
                                    My Articles
                                </Link>
                                {isAdmin && (
                                    <>
                                        <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-900">
                                            <ShieldCheck className="w-5 h-5 mr-1" />
                                            Review
                                        </Link>
                                        <Link to="/admin/articles" className="text-gray-600 hover:text-gray-900">
                                            All Articles
                                        </Link>
                                    </>
                                )}
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-red-600 hover:text-red-700"
                                >
                                    <LogOut className="w-5 h-5 mr-1" />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
                                <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
