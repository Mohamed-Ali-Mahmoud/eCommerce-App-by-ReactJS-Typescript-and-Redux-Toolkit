import Ecart from "@eCommerce/Ecart";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center mt-4">
        <div className="font-bold text-xl">
          Our{" "}
          <span className="bg-cyan-400 p-2 rounded-lg text-white">Ecom</span>
        </div>
        <Ecart />
      </header>
      <nav className="flex space-x-4 bg-black text-gray-200 justify-between p-4 mt-4">
        <ul className="flex space-x-2 ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/aboutus">About</NavLink>
          </li>
        </ul>
        <ul className="flex space-x-2">
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
