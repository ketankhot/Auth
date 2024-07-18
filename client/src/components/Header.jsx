import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-slate-200 p-4">
      <div className="flex justify-between max-w-6xl items-center mx-auto">
        <Link to="/">
          <h1 className="font-bold text-2xl">Auth App</h1>
        </Link>

        <ul className="flex gap-5 font-medium text-xl">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/sign-in">
            <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
