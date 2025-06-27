import { Mail, Linkedin, Globe, Code, Link } from 'lucide-react';

const Contact = () => (
  <div className="min-h-screen bg-gray-100 dark:bg-black px-4 py-10 flex items-center justify-center">
    <div className="w-full max-w-4xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white text-center sm:text-left">
        Contact
      </h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8 space-y-4 text-gray-800 dark:text-gray-200">
        <p className="text-sm sm:text-base md:text-lg">
          Feel free to connect with me through the platforms below:
        </p>
        <div className="space-y-3">
          <a
            href="mailto:shrestasanya@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <Mail size={20} /> shrestasanya@gmail.com
          </a>
          <a
            href="https://sanyashresta.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <Globe size={20} /> sanyashresta.netlify.app
          </a>
          <a
            href="https://github.com/SanyaShresta25"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <Code size={20} /> github.com/SanyaShresta25
          </a>
          <a
            href="https://leetcode.com/u/SanyaShresta/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <Link size={20} /> leetcode.com/u/SanyaShresta
          </a>
          <a
            href="https://www.linkedin.com/in/sanya-shresta-jathanna/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <Linkedin size={20} /> linkedin.com/in/sanya-shresta-jathanna
          </a>
          <a
            href="https://x.com/sanya_shresta"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:underline text-sm sm:text-base"
          >
            <Link size={20} /> x.com/sanya_shresta
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
