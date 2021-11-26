import React from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Contacto } from "./Contacto";
import { Tienda } from "./Tienda";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Principal } from "./Principal";
import { Inventario } from "./Inventario";

export const NavbarP = () => {
  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark" fixed="top">

        <Container>
          <Nav.Link>
            <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Productos MINRA</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/" style={{ textDecoration: 'none', color:'white' }}>Productos</Link>
          </Nav.Link>
            <Link to="/tienda" style={{ textDecoration: 'none', color:'white' }}>Tienda</Link>
          <Nav.Link>

          </Nav.Link>
          <Nav.Link>
            <Link to="/contacto" style={{ textDecoration: 'none', color:'white' }}>Contactanos</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/inventario" style={{ textDecoration: 'none', color:'white' }}>Inventario</Link>
          </Nav.Link>
        </Container>

      </Navbar>
        

      <Routes>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/tienda" element={<Tienda />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route path="/inventario" element={<Inventario />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
