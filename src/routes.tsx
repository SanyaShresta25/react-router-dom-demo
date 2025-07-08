import type { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import PublicOnlyRoute from './components/PublicRoute'; 

import Landing from './pages/Landing';
import About from './pages/About';
import Users from './pages/Users';
import Posts from './pages/Posts';
import PostDetails from './pages/PostDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PublicOnlyRoute />, 
        children: [
          { index: true, element: <Landing /> },
          { path: 'login', element: <Login /> },
        ],
      },

      {
        element: <ProtectedRoute />,
        children: [
          { path: 'users', element: <Users /> },
          { path: 'posts', element: <Posts /> },
          { path: 'posts/:id', element: <PostDetails /> },
          { path: 'contact', element: <Contact /> },
          { path: 'about', element: <About /> },
        ],
      },

      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
