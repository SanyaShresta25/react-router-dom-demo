import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const token = localStorage.getItem('authToken');
  return token ? <Navigate to="/about" replace /> : <Outlet />;
};

export default PublicRoute;
