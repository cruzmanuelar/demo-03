import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navegacion = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">Productos MINRA</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/" >Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tienda" >Tienda</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contacto" >Contáctanos</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
