const About = () => (
  <div className="min-h-screen bg-gray-100 px-4 py-10 flex items-center justify-center">
    <div className="w-full max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black text-center sm:text-left">
        About
      </h1>
      <div className="bg-white rounded-xl shadow-md p-6 sm:p-8">
        <p className="mb-4 text-sm sm:text-base md:text-lg text-black leading-relaxed">
          This is a React Router demonstration app built with modern web technologies.
          It showcases routing, API integration, and responsive design.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
          Features include user browsing, post searching, dynamic routing, and 404 handling.
        </p>
      </div>
    </div>
  </div>
);

export default About;
