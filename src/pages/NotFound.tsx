import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center px-4 py-10">
      <div className="text-center">
        <div className="text-6xl sm:text-8xl md:text-9xl font-bold text-gray-300 dark:text-gray-600 mb-4">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors text-sm sm:text-base"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
