import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLoaderData();

  // Fix runtime
  const totalMinutes = parseInt(movie.Runtime) || 0;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const formattedRuntime = totalMinutes ? `${hours}h ${minutes}m` : movie.Runtime;

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white md:p-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        
        {/* Poster */}
        <div>
          <img 
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400x600?text=No+Poster"} 
            alt={movie.Title} 
            className="w-full rounded-2xl shadow-2xl ring-1 ring-slate-800"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold">{movie.Title}</h1>
          <p className="mt-2 text-slate-400">
            {movie.Year} • {movie.Rated} • {formattedRuntime}
          </p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {movie.Genre?.split(",").map(g => (
              <span key={g} className="rounded-full bg-slate-800 px-3 py-1 text-sm">{g.trim()}</span>
            ))}
          </div>

          <div className="mt-6 space-y-3 text-sm leading-relaxed">
            <p><span className="font-semibold text-slate-300">Plot:</span> {movie.Plot}</p>
            <p><span className="font-semibold text-slate-300">Director:</span> {movie.Director}</p>
            <p><span className="font-semibold text-slate-300">Actors:</span> {movie.Actors}</p>
            <p><span className="font-semibold text-slate-300">Language:</span> {movie.Language}</p>
            <p><span className="font-semibold text-slate-300">IMDb Rating:</span> ⭐ {movie.imdbRating} / 10 ({movie.imdbVotes} votes)</p>
            <p><span className="font-semibold text-slate-300">BoxOffice:</span> {movie.BoxOffice}</p>
          </div>

          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" className="mt-8 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-950 hover:bg-white transition">
            View on IMDb
          </a>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails