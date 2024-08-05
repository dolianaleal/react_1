import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import { Button } from "@mui/material";

const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");

    let consulta = productsCollection;
    if (name) {
      consulta = query(productsCollection, where("category", "==", name));
    } //prop filtrar, condicion, a donde apunta

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      //console.log({...res.docs[0].data(), id: res.docs[0].id})
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
    });
  }, [name]);

  if (items.length === 0) {
    return <PacmanLoader />; //revisar siempre que props recibe una lib -------revisar skeleton
  }

  //const addProducts = () => {
  // let productsCollection = collection(db, "products");
  //  products.forEach((elemento) => {
  //addDoc(productsCollection, elemento);
  // });
  // };

  return (
    <div>
      {/*  <Button onClick={addProducts}>Agregar productos</Button>*/}
      <ItemList items={items} />;
    </div>
  );
};

export default ItemListContainer;
