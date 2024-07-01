import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/CredProvider';

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err);
    }
  };

  const routesLinks = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/services"> Services </NavLink>
      </li>

      <li className="mx-5">
        <details>
          <summary>Dashboard</summary>
          <ul className="p-2 md:w-64">
            <li>
              <NavLink to="/add-services">Add services</NavLink>
            </li>
            <li>
              <NavLink to="/manage-services">Manage services</NavLink>
            </li>
            <li>
              <NavLink to="/book-services">Booked Services</NavLink>
            </li>
            <li>
              <NavLink to="/services-to-do"> Services to do </NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {routesLinks}
            </ul>
          </div>
          <Link to="/" className=" text-xl">
            Blissfull_Celebrations
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{routesLinks}</ul>
        </div>

        <div className="navbar-end ">
          <div className="dropdown dropdown-end">
            {(user && (
              <div
              title={user?.displayName}
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            )) || (
              <Link className="text-base font-bold" to="/login">
                Login
              </Link>
            )}

            <ul
              tabIndex={0}
              className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              {user && (
                <li>
                  <button onClick={handleLogOut}> log out </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
