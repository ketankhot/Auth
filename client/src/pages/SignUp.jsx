import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle the Submit here
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json " },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="shadow-2xl border border-gray-400 max-w-4xl rounded-xl mx-auto p-7 my-5 bg-no-repeat bg-cover">
      <h1 className="text-center text-black text-3xl font-semibold my-6">
        Sign Up
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 max-w-xl mx-auto"
      >
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-300 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-300 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-300 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-gray-500 drop-shadow-xl hover:opacity-95 text-xl text-white p-3 rounded-full uppercase"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
        <div>
          Have an Account?{" "}
          <span className="text-pink-900 underline pl-2">
            <Link to="/sign-in">Sign In</Link>
          </span>
        </div>
        <p className="text-red-800">{error && "Something went wrong!"}</p>
      </form>
    </div>
  );
};

export default SignUp;
