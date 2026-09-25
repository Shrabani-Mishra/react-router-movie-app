import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-10 bg-gray-900 text-white">

      <div className="container mx-auto px-6 py-10">

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

          {/* Movie App */}
          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              Movie App
            </h2>

            <p className="mt-3 text-gray-400">
              Discover your favorite movies and
              explore the world of entertainment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-gray-400 hover:text-blue-400"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movie"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Movies
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Account
            </h3>

            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/signin"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Sign In
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/signup"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Contact Us
            </h3>

            <p className="text-gray-400">
              Email:
            </p>

            <a
              href="mailto:yourname@gmail.com"
              className="text-gray-400 hover:text-blue-400"
            >
              yourname@gmail.com
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © 2026 Movie App. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};