import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu"; // Import LuMenu
import { RxCross2 } from "react-icons/rx"; // Import RxCross2

import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Menu
        right
        isOpen={isOpen}
        onStateChange={(state) => handleStateChange(state)}
        customBurgerIcon={
          !isOpen ? (
            <LuMenu className="hamburger-icon" />
          ) : null
        }
        customCrossIcon={
          isOpen ? (
            <RxCross2 className="cross-icon" />
          ) : null
        }
      >
        <ul className="menu-items">
          <li>
            <h5>
              <NavLink to="/products" onClick={closeMenu}>
                Products
              </NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/about" onClick={closeMenu}>
                About us
              </NavLink>
            </h5>
          </li>
          <li>
            <h5>
              <NavLink to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </h5>
          </li>
        </ul>
      </Menu>
    </div>
  );
};