import React, { useState } from 'react';
import AuthService from '../../../service/AuthService'

import './Login.css'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = (props) => {

  const authService = new AuthService();
  
  const [user, updateUser] = useState({
    email: '',
    password: ''
  })

  const { email, password } = user

  const [error, updateError] = useState({
    errorMessage: "",
  });

  const { errorMessage } = error


  const loginFormSubmit = (e) => {
      e.preventDefault();

      authService
        .login(user)
        .then((response) => {
          updateUser(response.data);
          props.history.push("/");
        })
        .catch((err) =>
          updateError({
            errorMessage: err.response.data.message,
          })
        );
  };
  
    const handleInputChange = (e) => {
      updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    }
  

    return (
      <div className="login-container">
        <Container as="main">
          <Row>
            <Col md={{ offset: 3, span: 6 }}>
              <h1>Iniciar sesión</h1>
              <Form onSubmit={loginFormSubmit}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="Correo electrónico"
                  />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    onChange={handleInputChange}
                    value={password}
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                  />
                </Form.Group>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                <Button variant="dark" type="submit">
                  Iniciar sesión
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default Login;