import { useState } from "react";

export const Counter = ({ restar, contador, sumar }) => {
  // estado es como una variable pero que recuerda su valor anterior

  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <ProductCard title="una" descripcion="test" price={contador} />
    </div>
  );
};
