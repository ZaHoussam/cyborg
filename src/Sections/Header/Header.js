// * Imports

import styled from "./Header.module.css";
import NavItem from "../../Components/NavItem/NavItem";
import logo from "../../assets/images/logo.png";
// ! Functions
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark py-4">
      <div className="container">
        <a className="navbar-brand" href="!#">
          <img src={logo} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-end"
          id="navbarSupportedContent"
        >
          <NavItem />
        </div>
      </div>
    </nav>
  );
};

// ^ Exports
export default Header;
