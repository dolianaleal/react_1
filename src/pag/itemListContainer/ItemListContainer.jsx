import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting, a, b, c, d }) => {
  const [numero, setNumero] = useState(1);
  const [misProductos, setMisProductos] = useState([]);
  const [nombre, setNombre] = useState("UserTest");

  useEffect(() => {
    console.log("me ejecute");
    const productos = [
      {
        name: "Laptop",
        price: 1200,
        category: "Electronics",
      },
      {
        name: "Coffee Maker",
        price: 80,
        category: "Home Appliances",
      },
      {
        name: "Running Shoes",
        price: 100,
        category: "Footwear",
      },
    ];

    setMisProductos(productos);
  }, [nombre]); //array de dependencias

  console.log(misProductos);

  const sumar = () => {
    setNumero(numero + 1);
  };

  const cambiarNombre = () => {
    setNombre("UsetTest02");
  };

  return (
    <ItemList
      greeting={greeting}
      sumar={sumar}
      cambiarNombre={cambiarNombre}
      numero={numero}
    />
  );
};

export default ItemListContainer;
