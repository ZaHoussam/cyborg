import styled from "./NavItem.module.css";
import routes from "../../Routes/routes";
import { NavLink, useLocation } from "react-router-dom";
import haederProfile from "../../assets/images/profile-header.jpg";

const NavItem = () => {
  const location = useLocation();

  const styleActive = ({ isActive }) => {
    return {
      color: isActive
        ? location.pathname !== "/profile"
          ? "var(--color-primary)"
          : "var(--color-light)"
        : undefined,
      backgroundColor:
        location.pathname === "/profile"
          ? isActive
            ? "var(--color-primary)"
            : undefined
          : undefined,
    };
  };
  return (
    <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styled.cyborgNav}`}>
      {routes.map((route) => (
        <li
          className="nav-item d-flex justify-content-center align-items-center me-3"
          key={route.name}
        >
          {route.name !== "profile" ? (
            <NavLink
              to={route.path}
              className={`nav-link text-center text-capitalize`}
              style={styleActive}
              aria-current="page"
            >
              {route.name}
            </NavLink>
          ) : (
            <NavLink
              to={route.path}
              className={`nav-link text-center text-capitalize ${styled.cyborgProfileBtn} d-lg-flex align-items-center justify-content-around rounded-pill`}
              aria-current="page"
              style={styleActive}
            >
              {route.name}
              <img
                src={haederProfile}
                alt="header-profile"
                className="rounded-circle d-lg-block d-none"
              />
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItem;
