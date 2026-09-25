import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Movie App
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6">

            <li>
              <NavLink
                to="/"
                className={({isActive})=>isActive?"font-bold text-blue-400":"hover:text-yellow-400"}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                 className={({isActive})=>isActive?"font-bold text-blue-400":"hover:text-yellow-400"}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/movie"
                 className={({isActive})=>isActive?"font-bold text-blue-400":"hover:text-yellow-400"}
              >
                Movie
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({isActive})=>isActive?"font-bold text-blue-400":"hover:text-yellow-400"}
              >
                Contact
              </NavLink>
            </li>

            {/* Sign In */}
            <li>
              <NavLink
                to="/signin"
                className="rounded-lg border border-gray-500 px-4 py-2 hover:bg-gray-700"
              >
                Sign In
              </NavLink>
            </li>

            {/* Sign Up */}
            <li>
              <NavLink
                to="/signup"
                className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600"
              >
                Sign Up
              </NavLink>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};