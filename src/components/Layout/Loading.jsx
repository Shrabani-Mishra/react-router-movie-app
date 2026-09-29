const Loading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-slate-950">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-700 border-t-indigo-500"></div>

        <h2 className="mt-4 text-xl font-semibold text-white">
          Loading Movies...
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Please wait while we fetch the movies.
        </p>
      </div>
    </div>
  );
};

export default Loading;