import React, { useState } from 'react';
import AuthService from '../../service/AuthService'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserForm = (props) => {

  const authService = new AuthService()

  const [newUser, createNewUser] = useState({
    email: '',
    password: ''
  })

  const [error, updateError] = useState({
    errorMessage: "",
  });

  const { email, password } = newUser

  const { errorMessage } = error;

  const handleInputChange = (e) => {
    createNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();

    authService
      .signUp(newUser)
      .then(() => props.history.push("/"))
      .catch((err) =>
        updateError({
          errorMessage: err.response.data.message,
        })
      );
  };

    return (
      <Container as="main">
        <Row>
          <Col md={{ offset: 3, span: 6 }}>
            <Form onSubmit={handleFormSubmit}>
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
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
}
 
export default UserForm;