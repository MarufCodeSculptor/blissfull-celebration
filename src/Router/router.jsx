import { createBrowserRouter } from 'react-router-dom';
import Root from '../Pages/Root/Root';
import NotFound from '../Pages/NotFound/NotFound';
import Addservices from '../Pages/Private/Addservices/Addservices';
import ManageServices from '../Pages/Private/ManageServices/ManageServices';
import BookedServices from '../Pages/Private/BookedServices/BookedServices';
import Home from '../Pages/Home/Home';
import ServicesToDo from '../Pages/Private/ServicesToDo/ServicesToDo';
import AllServices from '../Pages/All-Services/AllServices';
import Login from '../Pages/Authentication/Login';
import Register from '../Pages/Authentication/Register';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element:<Login/>,
      },
      {
        path: '/register',
        element:<Register/>,
      },
      {
        path: '/services',
        element: <AllServices/>,
      },
      // private routes =>
      {
        path: '/add-services',
        element: <Addservices></Addservices>,
      },
      {
        path: '/manage-services',
        element: <ManageServices></ManageServices>,
      },
      {
        path: '/book-services',
        element: <BookedServices></BookedServices>,
      },
      {
        path: '/services-to-do',
        element: <ServicesToDo></ServicesToDo>,
      },
    ],
  },
]);

export default router;
