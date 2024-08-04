import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams(); //id dinamico

  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    //inf del producto
    //unidades en stock

    let objetoFinal = { ...item, quantity: quantity };
    addToCart(objetoFinal);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
