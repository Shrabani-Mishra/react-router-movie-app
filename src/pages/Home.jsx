import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signin", { replace: true });
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
            Unlimited <span className="text-yellow-400">Movies</span> <br />
            To Watch Anytime
          </h1>
          <p className="mt-4 max-w-xl text-slate-400">
            Explore thousands of popular movies, check ratings, posters and discover your next favorite film.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/movie" className="inline-block rounded-full bg-yellow-400 px-8 py-3 font-bold text-slate-950 hover:bg-white transition">
              🎬 Browse Movies
            </Link>
            {isLoggedIn && (
              <button onClick={handleLogout} className="inline-block rounded-full bg-red-500 px-8 py-3 font-bold text-white hover:bg-red-600 transition">
                Logout
              </button>
            )}
          </div>
        </div>
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1470&auto=format&fit=crop" alt="Movies banner" className="rounded-3xl border border-slate-800 shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Home;