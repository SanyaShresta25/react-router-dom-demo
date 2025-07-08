
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import Meta from '../components/Meta';
import WhiteCurvedFrame from '../components/WhiteCurvedFrame';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Meta
        title="Home"
        description="Welcome to the React Router Demo App. Explore posts and modern routing techniques."
      />

      <div className="relative min-h-screen bg-light-bg dark:bg-gray-900 overflow-hidden">
       
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-indigo-200 blur-3xl opacity-40 z-0" />

      
        <WhiteCurvedFrame />

        
        <div className="relative z-30 flex items-center justify-center px-4 min-h-screen">
          <div className="w-full max-w-4xl text-center py-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif text-violet-syrup dark:text-lemon-drop mb-4">
              Welcome to React Router Demo
            </h1>
            <p className="text-lg sm:text-xl mb-10 font-serif text-pink-punch dark:text-gray-300">
              Get started by logging in to explore the app features.
            </p>

            <div
              onClick={() => navigate('/login')}
              className="p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group bg-card dark:bg-gray-800 max-w-md mx-auto"
            >
              <LogIn
                className="mx-auto mb-4 text-black dark:text-white group-hover:scale-110 transition-transform"
                size={40}
              />
              <h2 className="text-xl sm:text-2xl font-serif font-semibold mb-1 text-black dark:text-white">
                Get Started
              </h2>
              <p className="text-sm sm:text-base font-serif  text-neutral-800 dark:text-gray-300">
                Log in to explore users, posts, and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
