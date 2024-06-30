import { useState } from "react";
import { Navbar } from "./components/navbar/Navbar";
import ItemListContainer from "./pag/itemListContainer/ItemListContainer";
import LoginContainer from "./pag/login/LoginContainer";

function App() {
  const [estaMontado, setEstaMontado] = useState(false);

  const montarDesmontar = () => {
    setEstaMontado(!estaMontado);
  };

  console.log(estaMontado);

  return (
    <>
      <Navbar />

      <LoginContainer />

      {estaMontado ? <ItemListContainer greeting={"Test"} /> : null}

      <button onClick={montarDesmontar}>montar / desmontar</button>
    </>
  );
}

export default App;
