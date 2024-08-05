import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutFormik = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: { nombre: "", email: "", password: "", confirmar: "" },
    onSubmit: (data) => {
      console.log("Se envia");
      console.log(data);
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("este campo es obligatorio")
        .min(5, "minimo 5"),
      email: Yup.string().email().required("este campo es obligatorio"),
      password: Yup.string()
        .required("este campo es obligatorio")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/),
      confirmar: Yup.string()
        .required("este campo es obligatorio")
        .oneOf([Yup.ref("password")]),
    }),

    validateOnChange: false,
  });
  //console.log(values);
  console.log(errors);
  console.log(errors.nombre);
  return (
    <form
      onSubmit={handleSubmit}
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
        error={errors.nombre ? true : false}
        helperText={errors.nombre}
      />
      <TextField
        variant="outlined"
        type="text"
        label="email"
        name="email"
        onChange={handleChange}
        error={errors.email ? true : false}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        type="text"
        label="password"
        name="password"
        onChange={handleChange}
        error={errors.password ? true : false}
        helperText={errors.password}
      />

      <TextField
        variant="outlined"
        type="text"
        label="confirmar"
        name="confirmar"
        onChange={handleChange}
        error={errors.confirmar ? true : false}
        helperText={errors.confirmar}
      />

      {values.nombre === "Delivery" && (
        <TextField
          variant="outlined"
          type="text"
          label="Direccion"
          onChange={handleChange}
          name="confirmar"
        />
      )}

      <Button type="submit" variant="contained">
        Registrar
      </Button>
    </form>
  );
};

export default CheckoutFormik;
