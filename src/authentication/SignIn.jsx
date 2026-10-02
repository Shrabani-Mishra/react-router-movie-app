import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const foundUser = users.find(
    (u) => u.email === form.email && u.password === form.password
  );

  if (foundUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", foundUser.email);
    localStorage.setItem("userName", foundUser.name);
    navigate("/", { replace: true });
  } else {
    alert("Invalid email or password! Please Sign Up first.");
  }
};

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl">
        
        <h1 className="text-3xl font-bold text-center">
          Welcome Back <span className="text-yellow-400">👋</span>
        </h1>
        <p className="mt-2 text-center text-slate-400">Sign in to continue to MovieFlix</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-yellow-400"
              required
            />
          </div>

          <div>
            <label className="text-sm text-slate-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-yellow-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-400 py-3 font-bold text-slate-950 hover:bg-white transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};