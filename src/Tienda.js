import React from 'react';
import { Row, Col, Container } from "react-bootstrap";

export const Tienda = () => {
    return (

        <Container fluid style={{ backgroundColor: '#282c34' }}>
            <br/><br/><br/>
            <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Col sm={6} style={{ textAlign: 'center' }}>
                    <img src="https://i.pinimg.com/originals/e5/b5/76/e5b576b4c9b1b2f96b1abac0cca40ab0.gif" alt="Tienda"/>
                </Col>
                <Col sm={6} style={{ color: 'white', textAlign: 'center'}}>
                    <h3>Productos MINRA</h3>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum aspernatur architecto magni officiis natus ducimus, eos suscipit vel ad maiores, similique consequatur soluta deserunt beatae! Odio molestias ex provident officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quisquam voluptas ullam iure hic ad. Possimus corrupti dolor consequuntur optio atque veritatis libero excepturi quasi ipsum in aliquid, assumenda repudiandae?
                    </p>
                </Col>
            </Row>
            <hr style={{color:'white'}}/>
            <Row style={{marginTop:'15px', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Col style={{ color: 'white', textAlign: 'center', justifyContent:'center', alignItems:'center'}}>
                    <h3>¿Cómo llegar?</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, a recusandae quod dolorem quae soluta aperiam. Quam praesentium rerum, nam ut consequatur autem blanditiis molestias iusto alias velit dolore fugit!Lorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, quae maxime temporibus provident dolor, doloribus earum eos iste, adipisci assumenda perferendis fugit libero at fugiat blanditiis deleniti.</p>
                </Col>
                <img style={{width:'40%', height:'40%'}} src="https://depor.com/resizer/tWkgaFkRSfQvJrxQJP3zxVe35K4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DOSTJYG5PVBK3ELX3UXALXJYPQ.jpg" alt="direccion"/>
            </Row>
            <br/>
        </Container>
    )
}
