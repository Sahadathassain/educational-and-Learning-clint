import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setIsMenuOpen(false);
      })
      .catch((error) => console.log(error));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold
    transition-all duration-200
    ${
      isActive
        ? "bg-white text-[#1E3A8A] shadow-sm"
        : "text-white/85 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1E3A8A]/95 text-white backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">

          {/* ================= LOGO ================= */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm transition-transform duration-200 group-hover:scale-105">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_P5oCkEo80h-NCtlhFoMkGMJYxS_g9vcXw&usqp=CAU"
                alt="Educational and Learning"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-bold leading-tight tracking-tight text-white">
                Educational & Learning
              </h1>

              <p className="mt-0.5 text-[11px] font-medium tracking-wide text-white/60">
                Learn • Explore • Grow
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden items-center gap-1 md:flex">

            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>

            <NavLink to="/alltoys" className={navLinkClass}>
              All Toys
            </NavLink>

            {/* Only show private links when logged in */}
            {user && (
              <>
                <NavLink to="/addtoys" className={navLinkClass}>
                  Add Toys
                </NavLink>

                <NavLink to="/mytoys" className={navLinkClass}>
                  My Toys
                </NavLink>
              </>
            )}

            {/* ================= USER AREA ================= */}
            <div className="ml-3 flex items-center gap-2 border-l border-white/15 pl-3">

              {user ? (
                <>
                  {/* Profile */}
                  <div
                    className="group flex items-center gap-2 rounded-xl px-2 py-1.5 transition hover:bg-white/10"
                    title={user.displayName || "User"}
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="h-9 w-9 rounded-full border-2 border-white/30 object-cover"
                      />
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[#1E3A8A]">
                        {user.displayName
                          ? user.displayName.charAt(0).toUpperCase()
                          : "U"}
                      </div>
                    )}

                    <div className="hidden max-w-[120px] lg:block">
                      <p className="truncate text-xs font-semibold text-white">
                        {user.displayName || "User"}
                      </p>

                      <p className="text-[10px] text-white/50">
                        Account
                      </p>
                    </div>
                  </div>

                  {/* Logout */}
                  <button
                    onClick={handleLogOut}
                    type="button"
                    className="rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold text-white/85 transition hover:border-[#F97316] hover:bg-[#F97316] hover:text-white"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#1E3A8A] shadow-sm transition hover:bg-[#F8FAFC] hover:shadow-md"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition hover:bg-white/15 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isMenuOpen
              ? "max-h-[700px] pb-5 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="space-y-1 border-t border-white/10 pt-4">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={navLinkClass}
            >
              Blog
            </NavLink>

            <NavLink
              to="/alltoys"
              onClick={closeMenu}
              className={navLinkClass}
            >
              All Toys
            </NavLink>

            {/* Private links */}
            {user && (
              <>
                <NavLink
                  to="/addtoys"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  Add Toys
                </NavLink>

                <NavLink
                  to="/mytoys"
                  onClick={closeMenu}
                  className={navLinkClass}
                >
                  My Toys
                </NavLink>
              </>
            )}

            {/* ================= MOBILE USER ================= */}
            <div className="mt-4 border-t border-white/10 pt-4">

              {user ? (
                <div className="space-y-3">

                  <div className="flex items-center gap-3 rounded-xl bg-white/10 p-3">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="h-11 w-11 rounded-full border-2 border-white/20 object-cover"
                      />
                    ) : (
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-bold text-[#1E3A8A]">
                        {user.displayName
                          ? user.displayName.charAt(0).toUpperCase()
                          : "U"}
                      </div>
                    )}

                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">
                        {user.displayName || "User"}
                      </p>

                      <p className="text-xs text-white/50">
                        Account
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleLogOut}
                    type="button"
                    className="w-full rounded-xl border border-white/15 px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:border-[#F97316] hover:bg-[#F97316] hover:text-white"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-[#1E3A8A] transition hover:bg-[#F8FAFC]"
                >
                  Login
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;