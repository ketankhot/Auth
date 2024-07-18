import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76qcl9lpQbx-chr6YCinrqO6mmIkuF5ewwg&s')]  max-w-4xl rounded-xl mx-auto p-7 my-5 bg-no-repeat bg-cover">
      <h1 className="text-center text-black text-3xl font-semibold my-6">
        Sign Up
      </h1>
      <form className="flex flex-col gap-3 max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-300 p-3 text-black text-xl rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-300 p-3 text-xl rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-300 p-3 text-xl rounded-lg"
        />
        <button className="bg-gray-500 hover:opacity-95 text-xl text-white p-3 rounded-full uppercase">
          Sign Up
        </button>
        <div className="text-white">
          Have an Account?{" "}
          <span className="text-pink-900 underline">
            <Link to="/sign-in">Sign In</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
