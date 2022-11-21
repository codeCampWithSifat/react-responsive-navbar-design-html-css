import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSplitCross } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="nav_container">
      <div className="nav_logo">
        <h2>Sifat</h2>
      </div>

      <ul className={menu ? "nav_menu active" :"nav_menu"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
      <div className="hamburger_menu" onClick={() => setMenu(!menu)}>
        {menu ? <GiSplitCross /> : <GiHamburgerMenu size={30} />}
      </div>
    </div>
  );
};

export default Navbar;
