import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, FileText, AlertCircle, LogIn, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/users', label: 'Users', icon: User },
    { path: '/posts', label: 'Posts', icon: FileText },
    { path: '/about', label: 'About', icon: AlertCircle },
    { path: '/contact', label: 'Contact', icon: FileText },
    { path: '/login', label: 'Login', icon: LogIn },
  ];

  return (
    <nav className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
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
  );
};

export default Navbar;
