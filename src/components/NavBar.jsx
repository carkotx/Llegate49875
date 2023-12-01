import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/">LLEGATE</NavLink>
          </Navbar.Brand>
           <Nav className="me-auto">
            <NavLink to="category/Anteojos">Anteojos</NavLink>
            <NavLink to="category/Autos">Autos</NavLink>
           </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    );
};

