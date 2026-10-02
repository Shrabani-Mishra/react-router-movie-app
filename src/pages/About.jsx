export const About = () => {
  return (
    <section className="min-h-screen bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800"
            alt="Cinema"
            className="rounded-3xl border border-slate-800 shadow-2xl"
          />
        </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold">
            About <span className="text-yellow-400">MovieFlix</span>
          </h1>
          <p className="mt-4 text-slate-400 leading-relaxed">
            MovieFlix is a modern movie discovery platform built with React. 
            We use the OMDb API to bring you thousands of movies with posters, ratings, and details.
          </p>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Our goal is simple - help you find your next favorite movie quickly and beautifully.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
              <h3 className="text-2xl font-bold">React + Router</h3>
              <p className="text-sm text-slate-400 mt-1">Built with modern stack</p>
            </div>
            <div className="rounded-xl bg-slate-900 p-5 border border-slate-800">
              <h3 className="text-2xl font-bold">Fast & Responsive</h3>
              <p className="text-sm text-slate-400 mt-1">Works on all devices</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};