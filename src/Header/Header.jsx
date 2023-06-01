import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import PrivateRoute from "../Routes/PrivateRoutes";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-sky-500 text-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="inline-flex items-center">
          <img className="rounded-3xl h-10 mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_P5oCkEo80h-NCtlhFoMkGMJYxS_g9vcXw&usqp=CAU" alt="" />
          <Link to="/" className="text-white text-2xl font-bold">
            Educational and Learning
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-white focus:outline-none focus:text-white"
            aria-label="toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:block sm:flex sm:items-center sm:w-auto`}
      >
        <div className="px-2 pt-2 pb-4 sm:flex sm:ml-13">
          <NavLink
            to="/"
            exact={true.toString()}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            activeClassName="bg-gray-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            exact={true.toString()}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            activeClassName="bg-gray-700"
          >
            Blog
          </NavLink>
          <PrivateRoute>
            <NavLink
              to="/addToys"
              exact={true.toString()}
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
              activeClassName="bg-gray-700"
            >
              Add Toys
            </NavLink>
          </PrivateRoute>
          <PrivateRoute>
            <NavLink
              to="/mytoys"
              exact={true.toString()}
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
              activeClassName="bg-gray-700"
            >
              My Toys
            </NavLink>
          </PrivateRoute>
          <NavLink
            to="/alltoys"
            exact={true.toString()}
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            activeClassName="bg-gray-700"
          >
            All Toys
          </NavLink>
          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-8 w-8 rounded-full ml-2"
              title={user.displayName || ""}
            />
          ) : null}
          {user ? (
            <button
              onClick={handleLogOut}
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              exact={true.toString()}
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
              activeClassName="bg-gray-700"
            >
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
