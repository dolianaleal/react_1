import { useState } from "react";
import { Counter } from "./Counter";

const counterContainer = () => {
  const [contador, setContador] = useState(1); // [undefined, function]

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Minimo");
    }
  };

  return <Counter contador={contador} sumar={sumar} restar={restar} />;
};

export default counterContainer;
