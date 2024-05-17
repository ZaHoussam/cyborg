// * Imports

import styled from "./Header.module.css";
import NavItem from "../../Components/NavItem/NavItem";
import logo from "../../assets/images/logo.png";
import haederProfile from "../../assets/images/profile-header.jpg";
// ! Functions
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
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
          <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styled.cyborgNav}`}>
            <NavItem>
              <a
                className={`nav-link ${styled.active} text-center`}
                aria-current="page"
                href="!#"
              >
                Home
              </a>
            </NavItem>
            <NavItem>
              <a className="nav-link text-center" aria-current="page" href="!#">
                Browse
              </a>
            </NavItem>
            <NavItem>
              <a className="nav-link text-center" aria-current="page" href="!#">
                Details
              </a>
            </NavItem>
            <NavItem>
              <a className="nav-link text-center" aria-current="page" href="!#">
                Streams
              </a>
            </NavItem>
            <NavItem>
              <a
                className={`nav-link text-center ${styled.cyborgProfileBtn} d-lg-flex align-items-center justify-content-between rounded-pill`}
                aria-current="page"
                href="!#"
              >
                Profile
                <img
                  src={haederProfile}
                  alt="header-profile"
                  className="rounded-circle d-lg-block d-none"
                />
              </a>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// ^ Exports
export default Header;
