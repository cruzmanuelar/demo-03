import React, {useState} from "react";
import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import "./App.css";
import { RiShoppingCartFill } from "react-icons/ri";
import toast, { Toaster } from "react-hot-toast";

export const Productos = ({ productos, agregar }) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const urlImagen =
    "https://res.cloudinary.com/mtree/image/upload/q_auto:eco,f_auto,dpr_auto/Vick_ES_MX/O5jeFEtnxGvDIZj7P3jjT/8d4f5d2ae32ef717f5927c93b1c3d9b2/Vick_Prod_Large_1000x1000_Jarabe44_120ml.jpg";

    const notify = () =>
        toast("Agregado al carrito!", {
        duration: 2000,
        icon: "👏",
    });

  const agregarCarrito = (pr) => {
    notify();
    agregar(pr);
  };

  return (
    <>
      <br />
      <br />
      <h4 className="titulo">Productos principales</h4>
      <Row>
        {productos.map((pr) => (
          <Col sm={3} key={pr.id} style={{ marginTop: "10px" }}>
            <Card>
              <Card.Img variant="top" src={urlImagen} />
              <Card.Body>
                <Card.Title>{pr.name}</Card.Title>
                <Card.Text>{pr.email}</Card.Text>
                <Row>
                  <Col className="botones">
                    <Button  onClick={handleShow} variant="success">Ver más</Button>
                  </Col>
                  <Col className="botones">
                    <Button
                      onClick={() => agregarCarrito(pr)}
                      variant="primary"
                    >
                      <RiShoppingCartFill />
                    </Button>
                  </Col>
                  <Toaster />
                </Row>
              </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{pr.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{}}>
                    <div>
                        <h3>{pr.company.catchPhrase}</h3>
                    </div>
                    <div>
                        <img style={{ width:'50%', height:'50%'}} src={urlImagen} alt="foto"/>
                        <p>{pr.email}</p>
                        <p>{pr.username}</p>
                    </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Añadir al carrito
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        ))}
      </Row>
    </>
  );
};
