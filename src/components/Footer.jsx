import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container-fluid bg-primary p-4 text-light'>
                <Row>
                    <Col md={5}>
                        <h1 className='fw-bold'>E-Cart</h1>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt fuga ab asperiores nulla eos accusamus soluta. Obcaecati eos harum optio labore provident molestias, tenetur eaque non cum perspiciatis aut mollitia.</p>
                    </Col>
                    <Col md={2}>
                        <h4 className='fw-bold'>Links</h4>
                        <div className='d-flex flex-column justify-content-between'>
                            <Link to={'/'} className='text-decoration-none text-light'>Home</Link>
                            <Link to={'/wish'} className='text-decoration-none text-light'>Wish</Link>
                            <Link to={'/view'} className='text-decoration-none text-light'>View</Link>
                            <Link to={'/cart'} className='text-decoration-none text-light'>Cart</Link>
                        </div>
                    </Col>
                    <Col md={5}>
                        <h3 className='fw-bold'>Feedbacks</h3>
                        <textarea name="" id="" className='form-control'></textarea>
                        <button className='btn btn-success mt-3'>Send</button>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Footer