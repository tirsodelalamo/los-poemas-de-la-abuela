import React from 'react';

import './Description.css'
import Dioni2 from '../../../public/dioni-pink1.jpg'
import Dioni from "../../../public/abuelajovenedit.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

const Description = () => {
    return (
      <div className='description-container'>
        <h2>SOBRE MI</h2>
        <Container>
          <Row className="section" >
            <Col xs lg="8">
              <div className="text-description">
                Hola, mi nombre es Dioni, Dionisia, nacida en Urda (Toledo) un
                26 de Febrero de 1938 en una familia numerosa de 7 hermanos y,
                actualmente aficionada a la poesía y madre de dos hijos y una
                hija.
                <br></br>
                <br></br>
                Vivimos una posguerra donde pasó de todo y nada bueno.
                <br></br>
                Mi padre, hombre inteligente y trabajador que después de la dura
                faena, por las noches, sentaba a sus hijos alrededor de la mesa
                y les enseñaba a leer y escribir.
                <br></br>
                Mi madre, ama de casa incansable, cuidaba a sus hijos y se
                esforzaba en tenerlos limpios y aseados.
                <br></br>
                <br></br>
                Yo soy la quinta de los siete hermanos y desde muy pequeña me
                pusieron a cuidar niños ya que a mi me gustaban mucho y no
                podíamos permitirnos el ir a una escuela, pues en casa no había
                mucho.
                <br></br>
                <br></br>A los 16 años me eché novio, era lo que se hacía antes
                y lo que se suponía que había que hacer. Fué un noviazgo largo y
                hasta los 26 años no nos casamos.
                <br></br>
                Eran otros tiempos, tiempos duros, el marido a trabajar y la
                mujer en casa a cuidar de él y de los niños.
              </div>
            </Col>
            <Col xs lg="4">
              <Image className="avatar" src={Dioni} />
            </Col>
          </Row>
          <Row className="section second">
            <Col xs lg="4">
              <Image className="avatar" src={Dioni2} />
            </Col>
            <Col xs lg="8">
              <div className="text-description">
                Ya de mayor fui a la Escuela de Adultos en la Casa de la
                Cultura, donde empecé a darme cuenta de lo que me gustaba
                aprender, sobre todo Historia, y lo importante que era la
                cultura, no faltaba nunca a clase.
                <br></br>
                <br></br>
                Comencé a leer libros y me di cuenta de que la vida de una mujer
                no estaba solo en su casa, así que cuando mi marido se jubiló
                tuve que plantarle cara porque no estaba de acuerdo con que
                faltase tanto en casa.
                <br></br>
                <br></br>
                Me hice catequista durante un tiempo porque los niños me seguían
                gustando, y ahora voy al Centro Cívico desde hace ya un tiempo,
                donde hacemos radio, tenemos nuestras tertulias, y escribimos
                poemas.
                <br></br>
                <br></br>
                <em>
                  Me encanta la poesía, y aunque ya soy muy mayor y veo poco, el
                  esfuerzo no cesa.
                </em>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
 
export default Description;