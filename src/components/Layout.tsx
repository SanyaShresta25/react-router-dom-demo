import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => (
  <>
    <Navbar />
    <main className="pt-4">
      <Outlet />
    </main>
  </>
);

export default Layout;
