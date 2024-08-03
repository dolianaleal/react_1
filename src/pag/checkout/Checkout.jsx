import { useState } from "react";

//un estado para manejar inputs
const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  {
    /* const [obj, setObj] = useState(""); */
  }

  const [arrayCheckbox, setArrayCheckbox] = useState([]);
  console.log(arrayCheckbox);

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(user);
  };

  //evento onChange ---reminder
  const capturarData = (event) => {
    //let { name, value } = event.target;
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const handleRadio = (e) => {
    console.log(e.target.value);
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setArrayCheckbox([...arrayCheckbox, value]);
    } else {
      let newArr = arrayCheckbox.filter((el) => el !== value);
      setArrayCheckbox(newArr);
    }
  };

  return (
    <div>
      <h1>Aca va el Form</h1>
      <form onSubmit={envioDeFormulario}>
        {/*INPUTS*/}
        <input
          type="text"
          placeholder="Ingresa tu Nombre"
          onChange={capturarData}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingresa tu Email"
          name="email"
          onChange={capturarData}
        />
        <input
          type="text"
          placeholder="Ingresa tu Telefono"
          name="telefono"
          onChange={capturarData}
        />

        <label>test1</label>
        <input
          type="radio"
          name="entidad"
          value="casatestpelota"
          onChange={handleRadio}
        />
        {/*RADIO B*/}
        <label>test2</label>
        <input
          type="radio"
          name="entidad"
          value="casatestpelota"
          onChange={handleRadio}
        />
        {/*SELECT*/}
        <select onChange={handleSelect}>
          <option label="uno" value={"one"} />
          <option label="two" value={"two"} />
          {/*<option label="two" value={3} />*/}
        </select>
        {/* CHECKBOX */}
        {/* RADIO Buttons  */}
        <label>rojo</label>
        <input type="checkbox" value={"rojo"} onChange={handleCheckbox} />
        <label>azul</label>
        <input type="checkbox" value={"azul"} onChange={handleCheckbox} />
        <label>verde</label>
        <input type="checkbox" value={"verde"} onChange={handleCheckbox} />
        <label>amarillo</label>
        <input type="checkbox" value={"amarillo"} onChange={handleCheckbox} />

        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;

//cada vez que que una funcion exista dentro de un event,
//por defecto, a la funcion le llega el event, en este caso el
//evento del form
