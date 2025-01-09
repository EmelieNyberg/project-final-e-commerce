// Navbar.jsx

import { Link, NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import './Navbar.css';

import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <h1>JollyKid</h1>
      </Link>
      <ul className="nav-links">
        <li><NavLink to="/products" activeClassName="active">Products</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About us</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
      <ul className="costumer-links">
        <li><NavLink to="/login" activeClassName="active"><BsFillPersonFill /></NavLink></li>
        <li><NavLink to="/shoppingcart" activeClassName="active"><PiShoppingCartSimpleBold /></NavLink></li>
      </ul>
      <HamburgerMenu />
    </nav>
  );
};


