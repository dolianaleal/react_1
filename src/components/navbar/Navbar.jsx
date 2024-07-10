import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link style={{ color: "black" }} to="/">
            EC
          </Link>
          <ul className="categories">
            <Link to="/">All</Link>
            <Link to="/category/Furniture">Furniture</Link>
            <Link to="/category/Electronics">Electronics</Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
