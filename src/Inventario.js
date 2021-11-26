import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import axios from 'axios';

export const Inventario = () => {

    const [formulario, setFormulario] = useState({
        nombre:"",
        descripcion:"",
        precio:""
    })

    const url = "https://jsonplaceholder.typicode.com/posts";

    const enviarFormulario = (e) =>{
        e.preventDefault();
        console.log(formulario);

        axios
            .post(url,formulario)
            .then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    const entradaFormulario = (e) =>{
        setFormulario({...formulario ,[e.target.name]: e.target.value});
    }

  return (
    <Container>
        <br />
        <br />
        <br />
      <Row>
        <Col sm={4}>

        </Col>
        <Col sm={4}>
          <h3 style={{textAlign:'center'}}>Agregar Producto</h3>
          <Form style={{border:'1px solid #ddcbcb', padding:'30px', borderRadius:'5px'}} onSubmit={enviarFormulario} autocomplete="off">
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control onChange={entradaFormulario} name="nombre" value={formulario.nombre} type="text" placeholder="Nombre..."/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Descripción del producto</Form.Label>
              <Form.Control onChange={entradaFormulario} type="text" name="descripcion" value={formulario.descripcion} placeholder="Descripción..."/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Precio</Form.Label>
              <Form.Control onChange={entradaFormulario} type="text" name="precio" value={formulario.precio} placeholder="S/"/>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Cantidad al stock</Form.Label>
              <Form.Control onChange={entradaFormulario} type="text" name="cantidad" value={formulario.cantidad} placeholder=""/>

            </Form.Group>
            <Button variant="success" type="submit">
              Agregar
            </Button>
          </Form>
        </Col>
        <Col sm={4}>

        </Col>
      </Row>
    </Container>
  );
};
