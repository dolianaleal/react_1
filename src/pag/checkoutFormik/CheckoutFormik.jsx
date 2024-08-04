import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";

const CheckoutFormik = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: { nombre: "", email: "", password: "", confirmar: "" },
    onSubmit: (data) => {
      console.log(data);
    },
  });
  console.log(values);
  return (
    <form
      onSubmit={(handleSubmit, handleChange, values)}
      style={{
        margin: "50 px",
        display: "flex",
        flexDirection: "column",
        width: "50 px",
        gap: "20 px",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        label="nombre"
        name="nombre"
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        type="text"
        label="email"
        name="email"
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        type="text"
        label="password"
        name="password"
        onChange={handleChange}
      />
      <TextField
        variant="outlined"
        type="text"
        label="confirmar"
        name="confirmar"
        onChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutFormik;
