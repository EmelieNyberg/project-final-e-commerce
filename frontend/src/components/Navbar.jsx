// Navbar.jsx

import { Link, NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="brand">
        <h1>JollyKid</h1>
      </Link>
      <ul>
        <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/login" activeClassName="active"><BsFillPersonFill /></NavLink></li>
        <li><NavLink to="/shoppingcart" activeClassName="active"><PiShoppingCartSimpleBold /></NavLink></li>
      </ul>
    </nav>
  );
};

