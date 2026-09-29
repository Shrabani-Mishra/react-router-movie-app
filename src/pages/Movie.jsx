import { useLoaderData } from "react-router-dom";
import { Card } from "../UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      
      {/* Page Heading */}
      <div className="mx-auto mb-10 max-w-7xl">
        <h1 className="text-4xl font-bold tracking-tight">
          🎬 Popular Movies
        </h1>

        <p className="mt-2 text-slate-400">
          Explore popular movies and discover your next favorite.
        </p>
      </div>

      {/* Movie Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {moviesData.Search.map((curMovie) => (
          <Card
            key={curMovie.imdbID}
            movie={curMovie}
          />
        ))}
      </div>

    </section>
  );
};