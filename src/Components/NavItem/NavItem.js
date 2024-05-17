import "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className="nav-item d-flex justify-content-center align-items-center">
      {props.children}
    </li>
  );
};

export default NavItem;
