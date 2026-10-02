import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();
  
  // purono users gulo nao
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  
  // same email ache kina check
  if (users.find(u => u.email === form.email)) {
    alert("User already exists! Please Sign In");
    return;
  }

  users.push(form); // {name, email, password} save
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("userEmail", form.email);

  navigate("/", { replace: true });
};

  return (
    <section className="min-h-screen bg-slate-950 flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-center">
          Create Account <span className="text-yellow-400">🎬</span>
        </h1>
        <p className="mt-2 text-center text-slate-400">Join MovieFlix today</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label className="text-sm text-slate-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none focus:border-yellow-400"
              required
            />
          </div>
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

          <button type="submit" className="w-full rounded-xl bg-yellow-400 py-3 font-bold text-slate-950 hover:bg-white transition">
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-yellow-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};