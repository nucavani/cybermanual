import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./HamburgerIcon.css";

function HamburgerIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-container">
      <div className="menu-icon" onClick={handleClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/support">Support</a>
            </li>
            <li className="nav-item">
              <a href="/products">Products</a>
            </li>
            <li className="nav-item">
              <a href="/solutions">Solutions</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HamburgerIcon;
