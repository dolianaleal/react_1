import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h1>EC</h1>

      <ul style={{ display: "flex", gap: "20px" }}>
        <li style={{ listStyle: "none" }}>All</li>
        <li style={{ listStyle: "none" }}>Merch</li>
        <li style={{ listStyle: "none" }}>Cont</li>
      </ul>

      <CartWidget />
    </div>
  );
};
