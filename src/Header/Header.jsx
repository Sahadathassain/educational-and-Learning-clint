
import { useContext,  useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

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
  
 
//   const logOut = () => {
//     // Implement your logout functionality here
//   };
  

  return (
    <header className="bg-sky-500 text-black sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div className="inline-flex">
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
            {/* Add your menu toggle icon or text here */}
          </button>
        </div>
      </div>
      <nav
        className={`${isMenuOpen ? "block" : "hidden"} sm:flex sm:items-center sm:w-auto`}
      >
        <div className="px-2 pt-2 ml-13 pb-4 sm:flex">
          <NavLink
            to="/"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            Home
          </NavLink>

          <NavLink
            to="/blogs"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            Blog
          </NavLink>
          <NavLink
            to="/blogs"
            exact="true"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
          >
            all toys
          </NavLink>
          {user && user.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="h-8 w-8 rounded-full ml-2"
              title={user.displayName || ""}
            />
          ) : (
            <></>
          )}
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
              exact="true"
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-700 sm:mt-0 sm:ml-2"
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
