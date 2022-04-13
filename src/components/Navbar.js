import CartWidget from './CartWidget';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (     
        <>
        <Navbar id="nav">
          <Navbar.Brand id="marca" href="home">Vamos pa' la playa</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className="nav-link">Home</Link>
            {/* <Nav.Link href="QuienesSomos">Quienes somos</Nav.Link> */}
            <Link to='/category/1' className="nav-link">Mujeres</Link>
            <Link to='/category/2' className="nav-link">Hombres</Link>
            <Link to='/category/3' className="nav-link">Niños</Link>
            <Link to='/contactos' className="nav-link">Contacto</Link>
            {/* <Nav.Link href="category/1">Mujeres</Nav.Link>
            <Nav.Link href="category/2">Hombres</Nav.Link>
            <Nav.Link href="category/3">Chicos</Nav.Link>              */}
            {/* <Nav.Link href="contacto">Contacto</Nav.Link>             */}
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
                    