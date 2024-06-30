import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import ItemListContainer from "./pag/itemListContainer/ItemListContainer";

function App() {
  const [estaMontado, setEstaMontado] = useState(false);

  const montarDesmontar = () => {
    setEstaMontado(!estaMontado);
  };

  console.log(estaMontado);

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"Test"} />
      <button onClick={montarDesmontar}>montar / desmontar</button>
    </>
  );
}

export default App;
