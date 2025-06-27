import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { theme } = useTheme(); // Ensure access to theme

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="pt-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
