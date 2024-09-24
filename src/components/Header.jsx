import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { searchWithKey } from '../Redux/Slice/productSlice';

function Header() {

    const { items } = useSelector((state) => state.wishReducer)
    console.log(items);

    const { cart } = useSelector((state => state.cartReducer))

    const [key,setKey]=useState("")
    
    const dispatch=useDispatch()
    
    return (
        <>
            <Navbar className="bg-body-tertiary p-3">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to={'/'} className='text-decoration-none text-black fw-bold'>
                            <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "#0abaf5", }} />
                            {' '}
                            E-Cart
                        </Link>
                    </Navbar.Brand>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <input type="text" placeholder='Enter Keyword to Search' className='form-control' onChange={(e)=>setKey(e.target.value)} />
                            <button className='btn btn-success ms-2' onClick={()=>dispatch(searchWithKey(key))}>Search</button>
                        </div>
                        <Link to={'/wish'} className='btn border border-dark me-3 text-black ms-5'>
                            <i className="fa-solid fa-heart" style={{ color: "#f7021b" }} />
                            {' '}
                            WishList
                            {' '}
                            <span className='badge bg-dark'>
                                {items?.length}
                            </span>
                        </Link>
                        <Link to={'/cart'} className='btn border border-dark me-3 text-black'>
                            <i className="fa-solid fa-cart-shopping" style={{ color: "#3df50a" }} />
                            {' '}
                            Cart
                            {' '}
                            <span className='badge bg-dark'>
                                {cart?.length}
                            </span>
                        </Link>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header