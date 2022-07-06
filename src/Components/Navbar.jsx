import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  const closeMenu = () => {
    setOpenNav(false);
  };

  return (
    <>
      <nav className="navbar">
        <div onClick={handleClick} className="nav-icon">
          {openNav ? <FiX /> : <FiMenu />}
        </div>
        <ul className={openNav ? "nav-links active" : "nav-links"}>
          <li className="nav-item">
            <Link to="./Women" className="nav-link" onClick={closeMenu}>
              Women
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./Men" className="nav-link" onClick={closeMenu}>
              Men
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./Kids" className="nav-link" onClick={closeMenu}>
              Kids
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./Babies" className="nav-link" onClick={closeMenu}>
              Babies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./Casual" className="nav-link" onClick={closeMenu}>
              Casual
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
