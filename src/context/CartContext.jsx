import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //no se puede modif un status sino es a traves del setter
  const addToCart = (product) => {
    let existe = isInCart(product.id);
    if (existe) {
      let newArray = cart.map((elemento) => {
        //reminder: map siempre genera un arreglo
        if (elemento.id === product.id) {
          return {
            ...elemento,
            quantity: elemento.quantity + product.quantity,
          };
        } else {
          return elemento;
        }
      }); //devuelve array y siempre de la misma longitud
      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let producto = cart.find((producto) => product.id === id); // elemento - undefined
    return;
  };
  let data = { cart, addToCart, clearCart };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
