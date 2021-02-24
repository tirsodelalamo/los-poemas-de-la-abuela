import React from "react";
import "./Home.css";

import Amor from "../../../public/tematicas/amor.png";
import Familia from "../../../public/tematicas/familia.png";
import Naturaleza from "../../../public/tematicas/naturaleza.png";
import Religion from "../../../public/tematicas/religion.png";
import Otros from "../../../public/tematicas/otros.png";
import Libro from "../../../public/home/book.jpg";

import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <>
      <div className="first-section-container">
        <Row className="first-section">
          <Col className="first-col">
            <h1>LOS POEMAS DE LA ABUELA</h1>
            <h2>Dionisia Ariza</h2>
            <Button href="/poesias" className="card-btn">
              Ver poemas
            </Button>
          </Col>
          <Col className="second-col">
            <img src={Libro} alt="Libro de poesía" />
          </Col>
        </Row>
      </div>

      <section className="second-section-container">
        <Row
          className="second-section"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <Col>
            <h3>
              'Los poemas de la abuela' surge de la necesidad de recoger todos
              los poemas escritos por Dionisia Ariza, apasionada de la poesía,
              respetando en todo momento la forma en que los mismos fueron
              escritos.
              <br></br>
              <br></br>
              En un primer momento se pensó en un formato más tradicional, pero
              finalmente se optó por otro más actual, de forma que pueda ser
              visto en cualquier lugar y momento.
              <br></br>
              <br></br>
              Te animo a que eches un vistazo a unos cuantos poemas, ¡seguro que
              te encantarán!
            </h3>
          </Col>
        </Row>
      </section>

      <Container className="third-section-container">
        <Row>
          <Col className="title-container">
            <h3
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Poemas de diferentes temas que podrás consultar cómodamente a
              través del índice
            </h3>
          </Col>
        </Row>
        <Row className="themes justify-content-md-center">
          <Col
            xs={12}
            md={4}
            lg={2}
            className="single-theme"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
          >
            <h4>AMOR</h4>
            <img className="icon-theme" src={Amor} alt="Amor" />
          </Col>
          <Col
            xs={12}
            md={4}
            lg={2}
            className="single-theme"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <h4>NATURALEZA</h4>
            <img className="icon-theme" src={Naturaleza} alt="Naturaleza" />
          </Col>
          <Col
            xs={12}
            md={4}
            lg={2}
            className="single-theme"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
          >
            <h4>RELIGIÓN</h4>
            <img className="icon-theme" src={Religion} alt="Religion" />
          </Col>
          <Col
            xs={12}
            md={4}
            lg={2}
            className="single-theme"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0"
          >
            <h4>FAMILIA</h4>
            <img className="icon-theme" src={Familia} alt="Familia" />
          </Col>
          <Col
            xs={12}
            md={4}
            lg={2}
            className="single-theme"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="700"
            data-aos-offset="0"
          >
            <h4>OTROS</h4>
            <img className="icon-theme" src={Otros} alt="Otros" />
          </Col>
        </Row>
        <Row className="button-container">
          <Button href="/indice" className="card-btn">
            Ir al índice
          </Button>
        </Row>
      </Container>
    </>
  );
};

export default Home;