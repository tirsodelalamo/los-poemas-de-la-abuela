import React, {useEffect} from 'react';
import AuthService from '../../service/AuthService'

import Logo from '../../public/logo512.png'
import './Navbar.css'

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


const Navigation = (props) => {

    const authService = new AuthService();
    
    const logout = () => {
      authService.logout()
        .then(() => {
          props.setTheUser(false);
        })
        .catch((err) => console.log(err));
    };

    return (

      <Navbar
        className="navbar"
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand className="brand" href="/" id="nav">
          <img src={Logo} alt='Logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className='links' href="/poesias">Poemas</Nav.Link>
            <Nav.Link className='links' href="/indice">Índice</Nav.Link>
            <Nav.Link className='links' href="/quien-soy">Sobre mí</Nav.Link>
          </Nav>

          {props.loggedInUser ? (
             <Nav>
               <Nav.Link className='links' href="/perfil">Administración</Nav.Link>
               <Nav.Link className='links' href="/" onClick={logout}>
                 Cerrar sesión
               </Nav.Link>
             </Nav>
           ) : (
             <Nav>
               <Nav.Link className='links' href="/iniciar-sesion">Iniciar sesión</Nav.Link>
               <Nav.Link className='links' href="/registro">Registro</Nav.Link>
             </Nav>
           )}
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default Navigation;