import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav
      role="navigation"
      aria-label="Main Menu"
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
      className="menu"
    >
      <ul>
        <li>
          <Link itemProp="url" to="">
            Homepage
          </Link>
        </li>
        <li>
          <Link itemProp="url" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link itemProp="url" to="/login">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
