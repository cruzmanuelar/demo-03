import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
export const Contacto = () => {
  return (
    <Container fluid style={{ backgroundColor: "#282c34",minHeight: '100vh' }}>
      <br />
      <br />
      <br />
      <Row style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
        <Col style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <img src="https://www.linkaform.com/hubfs/linkaform-2021/img-contactanos.png" style={{ width:'80%', height:'80%'}} alt="contacto"/>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form style={{ color: "black", textAlign:'center', border:'1px solid black', padding:'40px', borderRadius:'5px', backgroundColor:'#eeeeee'}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="email" placeholder="Asunto..." />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mensaje</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};