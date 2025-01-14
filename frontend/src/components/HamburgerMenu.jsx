import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai"; // Import hamburger icon
import { RxCross2 } from "react-icons/rx"; // Import cross icon
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
            <AiOutlineMenu className="hamburger-icon" />
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