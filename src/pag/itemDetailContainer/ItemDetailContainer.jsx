import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams(); //id dinamico

  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  //inf del producto
  //unidades en stock
  console.log(item);

  const onAdd = (quantity) => {
    console.log(quantity);
  };

  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
