import { useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-100 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
          Welcome to React Router Demo
        </h1>
        <p className="text-lg sm:text-xl mb-10 sm:mb-12 text-neutral-500">
          Explore posts with modern routing
        </p>
        <div className="w-full max-w-md mx-auto">
          <div
            onClick={() => navigate('/posts')}
            className="p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group bg-stone-200"
          >
            <div className="text-center">
              <FileText className="mx-auto mb-4 text-black group-hover:scale-110 transition-transform" size={40} />
              <h2 className="text-xl sm:text-2xl font-semibold mb-1 text-black">Read Posts</h2>
              <p className="text-sm sm:text-base text-neutral-500">
                Discover interesting posts and articles
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
