import React, { useState, useEffect } from "react";
import PoetryService from "../../../service/PoetryService";

import "./Profile.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = (props) => {
  const poetryService = new PoetryService();

  const [poetry, updatePoetry] = useState({
    title: "",
    body: "",
    tags: "",
  });

  console.log(props);

  console.log(props.history.location.state);

  
  useEffect(() => {
    if (props.history.location.state) {
      const {
        titletomodify,
        bodytomodify,
        tagstomodify,
      } = props.history.location.state;

      updatePoetry({
        title: titletomodify,
        body: bodytomodify,
        tags: tagstomodify,
      });
    }
  }, [props.history.location.state]);
    
    

  const { title, body, tags } = poetry;

  // const [error, updateError] = useState({
  //   errorMessage: "",
  // });

  // const { errorMessage } = error;

  const handleInputChange = (e) => {
    updatePoetry({
      ...poetry,
      [e.target.name]: e.target.value,
    });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    poetryService
      .createPoetry(poetry)
      .then(() => props.history.push("/poesias"))
      .catch((err) => console.log(err));
  };

  //VER ESTO BIEN

  const editPoetry = (e) => {

    e.preventDefault()

    const { idtomodify } = props.history.location.state;

    poetryService
      .updateOnePoetry(idtomodify, poetry)
      .then(() => props.history.push("/poesias"))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {props.loggedInUser ? (
        <div className="profile-container">
          {props.loggedInUser &&
          props.history.location.pathname === "/perfil" ? (
            <Container as="main">
              <Row>
                <Col md={{ offset: 3, span: 6 }}>
                  <h1>Crear nuevo poema</h1>
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>Título</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        value={title}
                        name="title"
                        type="textl"
                        placeholder="Título"
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Cuerpo del poema</Form.Label>
                      <Form.Control
                        as="textarea"
                        onChange={handleInputChange}
                        value={body}
                        name="body"
                        type="textarea"
                        placeholder="Poema"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Temática</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleInputChange}
                        value={tags}
                        name="tags"
                        type="text"
                      >
                        <option>Seleccione temática del poema</option>
                        <option>Amor</option>
                        <option>Naturaleza</option>
                        <option>Religión</option>
                        <option>Familia/Amistad</option>
                        <option>Nostalgia</option>
                        <option>Otros</option>
                      </Form.Control>
                    </Form.Group>
                    <Button variant="dark" type="submit">
                      Enviar
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          ) : (
            <Container as="main">
              <Row>
                <Col md={{ offset: 3, span: 6 }}>
                  <h1>Editar poema</h1>
                  <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formGroupEmail">
                      <Form.Label>Título</Form.Label>
                      <Form.Control
                        onChange={handleInputChange}
                        value={title}
                        name="title"
                        type="textl"
                        placeholder="Título"
                      />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                      <Form.Label>Cuerpo del poema</Form.Label>
                      <Form.Control
                        as="textarea"
                        onChange={handleInputChange}
                        value={body}
                        name="body"
                        type="textarea"
                        placeholder="Poema"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Temática</Form.Label>
                      <Form.Control
                        as="select"
                        onChange={handleInputChange}
                        value={tags}
                        name="tags"
                        type="text"
                      >
                        <option>Seleccione temática del poema</option>
                        <option>Amor</option>
                        <option>Naturaleza</option>
                        <option>Religión</option>
                        <option>Familia/Amistad</option>
                        <option>Nostalgia</option>
                        <option>Otros</option>
                      </Form.Control>
                    </Form.Group>
                    <Button variant="dark" onClick={editPoetry}>
                      Editar
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          )}
        </div>
      ) : (
          <div className="profile-container">
            <Container as="main">
               <h1>Acceso restringido</h1>
            </Container>
            </div>
      )}
    </div>
  );
};

export default Profile;