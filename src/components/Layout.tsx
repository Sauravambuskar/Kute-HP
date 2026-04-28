import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import AppointmentModal from './AppointmentModal';
import { AppointmentProvider } from '../context/AppointmentContext';

const Layout = () => {
  return (
    <AppointmentProvider>
      <div className="app-container">
        <Navbar />
        <main style={{ minHeight: '80vh' }} className="main-content-area">
          <Outlet />
        </main>
        <Footer />
        <AppointmentModal />
      </div>
    </AppointmentProvider>
  );
};

export default Layout;
