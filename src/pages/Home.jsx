import React, { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../Redux/Slice/productSlice';
import Spinner from 'react-bootstrap/Spinner';
import { nexPage, prevPage } from '../Redux/Slice/productSlice';

function Home() {

  const { products, error, loading, productsPerPage, currentPage } = useSelector((state) => state.productReducer)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProductThunk())
    console.log(products);
  }, [])

  const totalPages = Math.ceil(products?.length / productsPerPage)
  const lastProductIndex = currentPage * productsPerPage
  const firstProductIndex = lastProductIndex - productsPerPage
  const visibleProducts = products?.slice(firstProductIndex, lastProductIndex)

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(nexPage())
    }
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(prevPage())
    }
  }

  return (
    <>
      <header className="bg-secondary">
        <div className="container">
          <div className="text-center text-white">
            <Carousel>
              <Carousel.Item>
                <img src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg" alt="img1" width={'80%'} height={'400px'} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="img2" width={'80%'} height={'400px'} />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://static.vecteezy.com/system/resources/previews/004/707/493/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg" alt="img3" width={'80%'} height={'400px'} />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {
              loading ?
                <h3>
                  <Spinner animation='border' role='status'></Spinner>
                  <span>Loading...</span>
                </h3>
                :

                (
                  error ?
                    <h3>{error}</h3>
                    :
                    <>

                      {visibleProducts?.map(
                        item => (
                          <div className="col mb-5">
                            <div className="card h-100">
                              <img className="card-img-top" src={item?.thumbnail} alt="..." />
                              <div className="card-body p-4">
                                <div className="text-center">
                                  <h5 className="fw-bolder">{item?.title}</h5>
                                  ${item?.price}
                                </div>
                              </div>
                              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                                <Link to={`/view/${item?.id}`} className='btn btn-outline-info'>View More..</Link>
                              </div>
                            </div>
                          </div>
                        )
                      )}

                    </>
                )
            }

          </div>
        </div>
      </section>

      <div className="mb-2 d-flex justify-content-center">
        <div>
          <button className='btn' onClick={handlePrev}>
            <i className='fa-solid fa-angles-left' />
          </button>
          {' '}
          {currentPage}/{totalPages}
          {' '}
          <button className='btn' onClick={handleNext}>
            <i className='fa-solid fa-angles-right' />
          </button>
        </div>
      </div>
    </>
  )
}

export default Home