import { Navbar } from "./components/navbar/Navbar";
import ItemListContainer from "./pag/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Test"} />
    </div>
  );
}

export default App;
