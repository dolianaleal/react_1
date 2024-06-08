import { Counter } from "./components/counter/Counter";
import Footer from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pag/home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Counter />
      <Footer /> {/* Footer() */}
    </div>
  );
}

export default App;
