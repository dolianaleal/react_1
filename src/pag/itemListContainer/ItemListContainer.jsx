import ItemList from "./ItemList";
import { products } from "../../products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

const ItemListContainer = () => {
  // una peticion que me traiga los productos del backend
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (product) => products.category === name
      );
      if (x) {
        setTimeout(() => {
          resolve(name ? arrayFiltered : products);
        }, 1000);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });

    // manejar la promesa
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [name]);

  if (items.length === 0) {
    return <PacmanLoader />; //revisar siempre que props recibe una lib -------revisar skeleton
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
