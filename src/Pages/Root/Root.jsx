import { Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';


const Root = () => {
  return (
    <div className='merriweather'>
    <div className='max-w-6xl mx-auto'>
    <Navbar />
    </div>

      <Outlet />
    </div>
  );
};

export default Root;
