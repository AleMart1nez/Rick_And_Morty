import React, { useState } from "react";
import styled from "../Form/Form.module.css";
import { TextField, Button } from "@mui/material";
import bootstrap_logo from "../../bootstrap_user.svg";
export function validate(inputs) {

  let errors = {};

  //   if (!inputs.name.includes('@')) {
  //       errors.name = 'Debe ser un correo electrónico';
  //    }
  if (inputs.password === "") errors.password = "Debes ingresar un passoword";

  return errors;
}



const Form = (props) => {
  const { login, error } = props;

  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );

    login(userData);

    setTimeout(() => {
      setErrors({
        name: "",
        password: "",
      });
    }, 3000);
  };

  return (
    <div className={styled.container}>
      <form>
        {error && <p className={styled.error}>{error}</p>}
        <h2>Hola!</h2>
        <h2>Iniciá Sesión</h2>
        <img className= {styled.imagen} src={bootstrap_logo} alt="Random_Icon"/>
        <div className={styled.inputBox}>
          <TextField
            focused sx={{input: { color: "whitesmoke",}}} 
            color= "secondary"
            label="Usuario"
            variant="filled"
            type="text"
            value={userData.name}
            name="username"
            onChange={handleChange}
          />

          {errors.name && <p className={styled.error}>{errors.name}</p>}
          <h6 className={styled.message}>Usuario : admin</h6>
        </div>

        <div className={styled.inputBox}>
          <TextField
            focused sx={{input: { color: "whitesmoke",}}}
            color= "secondary"
            type="password"
            variant="filled"
            name="password"
            label="Contraseña"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && <p className={styled.error}>{errors.password}</p>}
          <h6 className={styled.message}>Contraseña : 1234</h6>
        </div>
        <div className={styled.inputBox}>
          <Button
            onClick={handleSubmit}
            className={styled.button}
            color = "primary"
            variant= "contained"
            type="submit"
          >
            Login
          </Button>{" "}
        </div>
      </form>
    </div>
  );
};

export default Form;
