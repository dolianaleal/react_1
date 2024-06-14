import "./navbar.css";
import { FaShoppingCart } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h1>EC</h1>

      <ul style={{ display: "flex", gap: "20px" }}>
        <li style={{ listStyle: "none" }}>All</li>
        <li style={{ listStyle: "none" }}>Urb</li>
        <li style={{ listStyle: "none" }}>Dep</li>
      </ul>

      <FaShoppingCart />
    </div>
  );
};
