import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Aca va el carrito</h1>

      <Button onClick={clearCart}> Limpiar Carrito </Button>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra </Button>
      </Link>
    </div>
  );
};

export default Cart;
