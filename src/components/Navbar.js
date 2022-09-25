import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbarr">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <MdFingerprint className="navbar-icon" />
              EXPLORE
            </Link>
            <div className="menu-icon" onClick={() => setClick(!click)}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/budget" className="nav-links">
                  Budget
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-links">
                  Products
                </Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="bttn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to="/sign-up" className="bttn-link">
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
