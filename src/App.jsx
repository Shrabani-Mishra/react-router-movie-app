import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import  Home  from "./pages/Home";
import { About } from "./pages/About";
import { Movie } from "./pages/Movie";
import { Contact, contactAction } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { getMoviesData } from "./api/GetAPIData";
import MovieDetails from "./UI/MovieDetails";
import { getMovieDetails } from "./api/GetMovieDetails";
import { SignIn } from "./authentication/SignIn";
import { SignUp } from "./authentication/SignUp";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/signin" replace />;
};

const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? <Navigate to="/" replace /> : children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "movie", element: <Movie />, loader: getMoviesData },
      { path: "movie/:movieID", element: <MovieDetails />, loader: getMovieDetails },
{ path: "contact", element: <Contact />, action: contactAction },
    ],
  },
  { path: "/signin", element: <PublicRoute><SignIn /></PublicRoute> },
  { path: "/signup", element: <PublicRoute><SignUp /></PublicRoute> },
]);

const App = () => <RouterProvider router={router} />;
export default App;