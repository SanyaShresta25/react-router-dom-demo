import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, User, FileText, AlertCircle, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">React Router App</h1>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

    
        <div className="hidden md:flex gap-4">
          {navItems.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex items-center gap-2 px-3 py-2 rounded text-sm ${
                location.pathname === path ? 'bg-gray-700' : 'hover:bg-gray-800'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-2 bg-black">
          {navItems.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              onClick={() => {
                navigate(path);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-3 py-2 rounded text-sm text-left ${
                location.pathname === path ? 'bg-gray-700' : 'hover:bg-gray-800'
              }`}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
