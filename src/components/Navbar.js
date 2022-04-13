import CartWidget from './CartWidget';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (     
        <>
        <Navbar id="nav">
          <Navbar.Brand id="marca" href="#home">Vamos pa' la playa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#QuienesSomos">Quienes somos</Nav.Link>
            <Nav.Link href="#Mujeres">Mujeres</Nav.Link>
            <Nav.Link href="#Hombres">Hombres</Nav.Link>
            <Nav.Link href="#Chicos">Chicos</Nav.Link>             
            <Nav.Link href="#contacto">Contacto</Nav.Link>            
          </Nav>
          <Nav className="navRight" >
            <Nav.Link href="#registrarse">Registrarse</Nav.Link>
            <Nav.Link href="#inicioSesion">Iniciar Sesion</Nav.Link>
          </Nav>
          <CartWidget/>
        </Navbar>
      </>
    );
}

export default NavBar; 
                    