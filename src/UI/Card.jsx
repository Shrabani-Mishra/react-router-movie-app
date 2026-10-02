import { NavLink } from "react-router-dom";

export const Card = ({ movie }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-slate-800 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Poster */}
      <div className="relative overflow-hidden">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Poster"}
          alt={movie.Title}
          className="h-96 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Type Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase text-white backdrop-blur">
          {movie.Type}
        </span>
      </div>

      {/* Movie Details */}
      <div className="p-5">
        <h2 className="truncate text-xl font-bold text-white">
          {movie.Title}
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Release Year: {movie.Year}
        </p>

        <NavLink 
          to={`/movie/${movie.imdbID}`}
          className="mt-5 block w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-indigo-500"
        >
          Watch Now
        </NavLink>
       
      </div>

    </div>
  );
};