import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = (x) => {
  const { cart } = useContext(CartContext);
  console.log(x);

  return (
    <Link to="/cart">
      <Badge badgeContent={cart.length} color="primary" showZero={true}>
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
