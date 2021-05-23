import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import "./login.css";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    alertMessage: "",
    isLoggedIn: false,
  });

  const refUsername = "hruday@gmail.com";
  const refPassword = "hruday123";

  const history = useHistory();

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setState({ ...state, [e.target.name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (refUsername === state.email && refPassword === state.password) {
      history.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <section className="container__class">
      <Form className="form__class">
        Username: <br />
        <input
          type="email"
          placeholder="email@abc.com"
          value={state.email}
          name="email"
          onChange={handleChange}
        />
        <br />
        Password: <br />
        <input
          type="password"
          placeholder="Password"
          value={state.password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <Button clasName="btn" type="submit" onClick={handleClick}>
          Login
        </Button>
      </Form>
      {state.alertMessage && <h3> {state.alertMessage} </h3>}
    </section>
  );
};

export default LoginForm;
