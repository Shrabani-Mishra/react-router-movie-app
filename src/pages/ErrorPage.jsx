import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center">

        <h1 className="text-7xl font-bold text-blue-500">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* <a
          href="/"
          className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
        >
          Go Home
        </a> */}
        <NavLink to="/"
         className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600">Go Back to Home Page</NavLink>

      </div>
    );
  }

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-red-500">
        Something Went Wrong
      </h1>

      <p className="mt-3 text-gray-500">
        Please try again later.
      </p>

      <a
        href="/"
        className="mt-6 rounded-lg bg-blue-500 px-6 py-3 text-white hover:bg-blue-600"
      >
        Go Home
      </a>
    </div>
  );
};