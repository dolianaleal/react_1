import "./footer.css";
import { Outlet } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "greenyellow",
        }}
      >
        <ul>
          <li>instagram</li>
          <li>X</li>
          <li>Facebook</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;

// Footer() --> Javascript
{
  /* <Footer /> */
} // --> React
