import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import { Lateral } from './Lateral';
import { Productos } from './Productos';

export const Principal = () => {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState(()=>{
        const produc = window.localStorage.getItem('productos')
        return produc ? JSON.parse(produc) : []

    });


    const [listo, setListo] = useState(false);

    const traerProductos = async () => {

        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const productos = await data.json()
        if(productos){
            setListo(true)
        }
        setProductos(productos);
    }

    useEffect(() => {
        
        traerProductos()

    }, [])

    const agregar = (producto) =>{

        const existe = carrito.find(x => x.id === producto.id);

        if(existe){

            setCarrito(carrito.map((x) =>
                x.id === producto.id ? { ...existe, qty: existe.qty + 1 } : x ));

            window.localStorage.setItem("productos",JSON.stringify(carrito));

        }else{
            setCarrito([...carrito, {...producto, qty :1}]);

            const paraCarrito = [...carrito, {...producto, qty :1}];

            window.localStorage.setItem("productos",JSON.stringify(paraCarrito));
        }
    }
    
    const eliminar = (producto) => {
        
        const existe = carrito.find((x) => x.id === producto.id);

        if(existe.qty === 1){
            setCarrito(carrito.filter((x) => x.id !== producto.id));

            window.localStorage.setItem("productos",JSON.stringify(carrito));

        }else{
            setCarrito(
                carrito.map((x)=>
                    x.id === producto.id ? {...existe, qty: existe.qty -1 }: x
                )
            )
            window.localStorage.setItem("productos",JSON.stringify(carrito));

        }
    }

    return (
        <Container fluid>
            <Row className="etiqueta-principal">
            <Col sm={9}>
                {listo?
                    <Productos productos={productos} agregar={agregar}/>
                :
                <div>
                    <br/><br/><br/><br/><br/>
                    <h3>Cargando...</h3>
                </div>
                }
                
            </Col>
            <Col>
                <Lateral carrito={carrito} agregar={agregar} eliminar={eliminar}/>
                
            </Col>
            </Row>
        </Container>
    )
}
