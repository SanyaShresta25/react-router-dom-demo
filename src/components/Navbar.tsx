
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, FileText, AlertCircle, LogIn } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/users', label: 'Users', icon: User },
    { path: '/posts', label: 'Posts', icon: FileText },
    { path: '/about', label: 'About', icon: AlertCircle },
    { path: '/contact', label: 'Contact', icon: FileText },
    { path: '/login', label: 'Login', icon: LogIn },
  ];

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">React Router App</h1>
        <div className="flex flex-wrap gap-2">
          {navItems.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex items-center gap-1 px-3 py-2 rounded text-sm ${
                location.pathname === path ? 'bg-gray-700' : 'hover:bg-gray-800'
              }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
