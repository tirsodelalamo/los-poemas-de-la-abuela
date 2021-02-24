/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PoetryService from '../../../service/PoetryService'

import Spinner from '../../UI/Spinner/Spinner'
import PoetryList from './PoetryList'
import './Poetry.css'
import { Container, Form, Row } from 'react-bootstrap'

const Poetry = (props) => {

    const poetryService = new PoetryService()

    const [allPoetry, updateAllPoetry] = useState([])
    
    const [spinner, updateSpinner] = useState(true);

    const [theme, setTheme] = useState({}) //SETTEAR ESTADO DE FILTRO

    const loadPoetry = () => {
        poetryService
          .getAllPoetry()
          .then((response) => {
            updateAllPoetry(response.data)
            updateSpinner(false)
          })
          .catch((err) => console.log(err));
    }

    useEffect(() => {
        loadPoetry()
    }, [updateAllPoetry])
  
    const handleInputChange = (e) => {
      const { value } = e.target;
      setTheme(value)
    };
    
    return (
      <div className='poet-container'>
        <h2>POEMAS</h2>
        <Form.Group as={Row} controlId="formGridState" className="filter">
          <Form.Label className="filter-title">Filtrar por temática</Form.Label>
          <Form.Control
            as="select"
            onChange={handleInputChange}
            value={theme}
            type="string"
          >
            <option>Escoja un tema</option>
            <option>Amor</option>
            <option>Naturaleza</option>
            <option>Religión</option>
            <option>Familia/Amistad</option>
            <option>Nostalgia</option>
            <option>Otros</option>
          </Form.Control>
        </Form.Group>

        {spinner ? (
          <div className="spinner-container">
            <Spinner />
          </div>
        ) : (
          <Container>
              <PoetryList allPoetry={allPoetry} theme={theme} {...props}/>
          </Container>
        )}
      </div>
    );
}
 
export default Poetry;

