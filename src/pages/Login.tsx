import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meta from '../components/Meta';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) throw new Error('Invalid credentials');

      const data = await res.json();
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('isLoggedIn', 'true');
      alert('Login successful!');
      navigate('/about');
    } catch (err) {
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <>
      <Meta title="Login" description="Sign in to access protected content." />
      <div className="min-h-screen flex items-center justify-center bg-pink-punch dark:bg-dark-bg px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl px-6 py-8 w-full max-w-sm"
          aria-label="Login Form"
        >
          <h2 className="text-2xl font-bold mb-6 font-serif  text-center text-pink-punch dark:text-white">Login</h2>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-punch"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-punch"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-wedge dark:bg-white text-black font-semibold py-2 rounded hover:bg-yellow-400 dark:hover:bg-gray-300 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
