import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HamburgerIcon.css";

function HamburgerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="hamburger-container">
      <div className="menu-icon" onClick={handleClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        <ul className="nav-menu">
          <li className="nav-item" onClick={handleMenuItemClick}>
            <a href="/support">Support</a>
          </li>
          <li className="nav-item" onClick={handleMenuItemClick}>
            <a href="/products">Products</a>
          </li>
          <li className="nav-item" onClick={handleMenuItemClick}>
            <a href="/solutions">Solutions</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HamburgerIcon;
