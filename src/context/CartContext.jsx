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
    let existe = cart.some((product) => product.id === id); // elemento - undefined
    return existe;
  };

  const deleteProduct = (id) => {
    //encontrar el prod, verificar, eliminar
    //remindeeeeeeeeeeeeeer >>>> react: para eliminar un array, siempre utilizar el metodo FILTER
    //el metodo filter, devuelve un array, verifica que
    let newArr = cart.filter((elemento) => elemento.id !== id); // retornar un booleano [{}]
    setCart(newArr);
  };

  let data = { cart, addToCart, clearCart, deleteProduct }; //las funciones deben pasar por el value

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
