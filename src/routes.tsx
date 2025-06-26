
import type { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';

import Landing from './pages/Landing';
import About from './pages/About';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'users', element: <Users /> },
      { path: 'posts', element: <Posts /> },
      { path: 'contact', element: <Contact /> },
      { path: 'login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
];

export default routes;
