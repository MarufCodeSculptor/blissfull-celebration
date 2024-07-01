import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
  return (
    <div className="merriweather">
      <div className="max-w-6xl mx-auto">
        <Navbar />
      </div>

      <Outlet />

      <div>
        {/* footer */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
