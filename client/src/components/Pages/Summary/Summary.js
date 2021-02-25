/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import PoetryService from "../../../service/PoetryService";

import './Summary.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal' 
import PoetryDetail from '../Poetry/PoetryDetail' 

const Summary = (props) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const poetryService = new PoetryService();

    const [allPoetry, updateAllPoetry] = useState([]);
    
    const [selectedPoetry, updateSelectedPoetry] = useState([])
    
    const updatePoetry = (e) => {

      updateSelectedPoetry(e)
    }

    const loadPoetry = () => {
      poetryService
        .getAllPoetry()
        .then((response) => updateAllPoetry(response.data))
        .catch((err) => console.log(err));
    };

    useEffect(() => {
      loadPoetry();
    }, [updateAllPoetry]);

    allPoetry.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });

    const loveArray = allPoetry.filter(elm => elm.tags === 'Amor')
    const natureArray = allPoetry.filter((elm) => elm.tags === "Naturaleza");
    const religionArray = allPoetry.filter((elm) => elm.tags === "Religión");
    const familyFriendshipArray = allPoetry.filter((elm) => elm.tags === "Familia/Amistad");
    const othersArray = allPoetry.filter((elm) => elm.tags === "Otros");


  return (
    <Container className='summary-container'>
      <h2>INDICE</h2>
      <div className="summary-general">
        <div className="summary-section">
          <h3>AMOR</h3>
          <Row md={4}>
            {loveArray.map((elm) => (
              <Col className="index-section">
                <p onClick={() => { handleShow();updatePoetry(elm) }}>{elm.title.toUpperCase()}</p>
              </Col>
            ))}
          </Row>
        </div>
        <div className="summary-section">
          <h3>NATURALEZA</h3>
          <Row md={4}>
            {natureArray.map((elm) => (
              <Col className="index-section">
                <p onClick={() => { handleShow();updatePoetry(elm) }}>{elm.title.toUpperCase()}</p>
              </Col>
            ))}
          </Row>
        </div>
        <div className="summary-section">
          <h3>RELIGIÓN</h3>
          <Row md={4}>
            {religionArray.map((elm) => (
              <Col className="index-section">
                <p onClick={() => { handleShow();updatePoetry(elm) }}>{elm.title.toUpperCase()}</p>
              </Col>
            ))}
          </Row>
        </div>
        <div className="summary-section">
          <h3>FAMILIA/AMISTAD</h3>
          <Row md={4}>
            {familyFriendshipArray.map((elm) => (
              <Col className="index-section">
                <p onClick={() => { handleShow();updatePoetry(elm) }}>{elm.title.toUpperCase()}</p>
              </Col>
            ))}
          </Row>
        </div>
        <div className="summary-section">
          <h3>NOSTALGIA</h3>
          <Row md={4}>
            {loveArray.map((elm) => (
              <Col className="index-section">
                <p onClick={() => { handleShow();updatePoetry(elm) }}>{elm.title.toUpperCase()}</p>
              </Col>
            ))}
          </Row>
        </div>
        <div className="summary-section">
          <h3>OTROS</h3>
          <Row md={4}>
            {othersArray.map((elm) => (
              <Col className="index-section">
                <p onClick={() => { handleShow();updatePoetry(elm) }}>{elm.title.toUpperCase()}</p>
              </Col>
            ))}
          </Row>
        </div>

        <Modal show={show} onHide={handleClose}>
          <PoetryDetail {...selectedPoetry} handleClose={handleClose} />
        </Modal>
      </div>
    </Container>
  );
}
 
export default Summary;