import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Home,
  User,
  FileText,
  AlertCircle,
  LogIn,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showConfirmLogout, setShowConfirmLogout] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('authToken'));
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setShowConfirmLogout(false);
    navigate('/');
  };

  const navItems = isLoggedIn
    ? [
        { path: '/users', label: 'Users', icon: User },
        { path: '/posts', label: 'Posts', icon: FileText },
        { path: '/about', label: 'About', icon: AlertCircle },
        { path: '/contact', label: 'Contact', icon: FileText },
      ]
    : [{ path: '/', label: 'Home', icon: Home }];

  return (
    <>
      <nav className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 relative z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">React Router App</h1>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="hidden md:flex items-center gap-1 px-3 py-2 text-sm rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              <span className="hidden sm:inline">{theme === 'light' ? 'Dark' : 'Light'} Mode</span>
            </button>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isLoggedIn && (
            <div className="hidden md:flex gap-4">
              {navItems.map(({ path, label, icon: Icon }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors ${
                    location.pathname === path
                      ? 'bg-gray-300 dark:bg-gray-700'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon size={16} />
                  {label}
                </button>
              ))}
            </div>
          )}

          <div className="hidden md:flex gap-2">
            {!isLoggedIn ? (
              <button
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-800"
              >
                <LogIn size={16} />
                Login
              </button>
            ) : (
              <button
                onClick={() => setShowConfirmLogout(true)}
                className="flex items-center gap-2 px-3 py-2 rounded text-sm transition-colors hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400"
              >
                <LogOut size={16} />
                Logout
              </button>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col px-4 pb-4 space-y-2 bg-white dark:bg-black text-black dark:text-white transition-colors">
            {navItems.map(({ path, label, icon: Icon }) => (
              <button
                key={path}
                onClick={() => {
                  navigate(path);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-2 px-3 py-2 rounded text-sm text-left transition-colors ${
                  location.pathname === path
                    ? 'bg-gray-300 dark:bg-gray-700'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}

            {!isLoggedIn ? (
              <button
                onClick={() => {
                  navigate('/login');
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              >
                <LogIn size={16} />
                Login
              </button>
            ) : (
              <button
                onClick={() => {
                  setShowConfirmLogout(true);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition"
              >
                <LogOut size={16} />
                Logout
              </button>
            )}

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
          </div>
        )}
      </nav>

      {/* Logout Confirmation Modal */}
      {showConfirmLogout && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-sm w-full shadow-xl text-center">
            <div className="flex justify-center mb-4">
              <AlertCircle className="text-red-500 dark:text-red-400" size={48} />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Are you sure you want to log out?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">You’ll be redirected to the homepage.</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirmLogout(false)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 text-sm"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
