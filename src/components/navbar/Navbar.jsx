import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img
        src="https://res.cloudinary.com/digkbsljg/image/upload/v1719784833/img1_yh1pqe.webp"
        alt=""
        style={{
          width: "100px",
          height: "100px",
          objectFit: "cover",
        }}
      />

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
