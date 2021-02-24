import React, { useState } from 'react';
import './PoetryCard.css'

import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button'

import Modal from 'react-bootstrap/Modal' 
import PoetryDetail from './PoetryDetail' 

const PoetryCard = (props) => {

    const  { title, body } = props
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return (

      <Container className="card-container">
        <h1>{title}</h1>
        <aside>{body}</aside>
        <br></br>
        <p className="property">~Dioni</p>
        <div className="btn-detail" onClick={handleShow}>
          <Button className="card-btn">Ampliar</Button>
        </div>

        <Modal {...props} show={show} onHide={handleClose}>
          <PoetryDetail {...props} handleClose={handleClose}/>
        </Modal>
      </Container>
    );
}
 
export default PoetryCard;