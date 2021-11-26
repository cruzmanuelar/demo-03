import React from "react";
import { Button } from "react-bootstrap";
import './App.css';

export const Lateral = ({carrito, agregar, eliminar}) => {

  const pagarCompra = (e) =>{
    e.prevenDefault();
  }

  return (
    <> 
      <br/><br/>
      <h4 className="titulo">Carrito de compras</h4>
      <div>
  
            {carrito.map((item) => (
                <div key={item.id}>
                    {item.qty} x {item.name}
                    <Button style={{margin:"10px"}} variant="success" size="sm" onClick={() => agregar(item)}>+</Button>
                    <Button variant="danger" size="sm" onClick={() => eliminar(item)}>-</Button>
                </div>
            ))}
            <hr/>
            {carrito.length === 0 ? <div>Carrito vacío</div>:
              <div>
                <form className="d-grid gap-2" onSubmit={pagarCompra}>
                  <Button variant="success" type="submit">Pagar</Button>
                </form>
                
              </div>}
      </div>
    </>
  );
};
