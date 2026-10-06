import { Link } from "react-router-dom";

function NavLink({ navItem, path, onClick }) {
  return (
    <Link to={path} className="nav-link" onClick={onClick}>
      {navItem}
    </Link>
  );
}

export default NavLink;