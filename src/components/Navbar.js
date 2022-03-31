import CartWidget from './CartWidget';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (     
        <>
        <Navbar className="nav">
          <Navbar.Brand className="marca" href="#home">Vamos pa' la playa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#quienesSomos">Quienes somos</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#promociones">Promociones</Nav.Link>
            <Nav.Link href="#locales">Locales</Nav.Link>            
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
                    