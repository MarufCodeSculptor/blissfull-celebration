import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
  return (
    <div className="merriweather">
      <div className="max-w-6xl mx-auto">
        <Navbar />
      </div>
      <div className='min-h-[calc(100vh-67px)] flex items-center justify-center'>
        <Outlet />
      </div>

      <div>
        {/* footer */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
