import CartWidget from './CartWidget';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (     
        <>
        <Navbar id="nav">
            <Link to='/' id="marca">Vamos pa' la playa</Link>
            <Nav className="me-auto">
            <Link to='/quienessomos' className="nav-link">Quienes Somos</Link>
            <Link to='/category/Mujeres' className="nav-link">Mujeres</Link>
            <Link to='/category/Hombres' className="nav-link">Hombres</Link>
            <Link to='/category/Niños' className="nav-link">Niños</Link>
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
                    