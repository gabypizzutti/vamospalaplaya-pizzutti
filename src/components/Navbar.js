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
            <Link to='/quienessomos' className="nav-link">Quienes Somos</Link>
            <Link to='/category/1' className="nav-link">Mujeres</Link>
            <Link to='/category/2' className="nav-link">Hombres</Link>
            <Link to='/category/3' className="nav-link">Niños</Link>
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
                    