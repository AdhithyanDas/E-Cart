import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishList } from '../Redux/Slice/wishSlice'
import { addToCart } from '../Redux/Slice/cartSlice'

function Wish() {

  const { items } = useSelector((state) => state.wishReducer)
  console.log(items);

  const dispatch = useDispatch()

  const handleAddToCart = (data) => {
    console.log(data);
    dispatch(addToCart({ ...data }))
    dispatch(removeFromWishList(data.id))
  }

  return (
    <>
      <h2 className='my-3 text-center'>WishList</h2>
      <div className='row container-fluid p-3'>

        {
          items?.length > 0 ?
            items?.map(wish => (
              <div className='col-3'>
                <div className="card h-100">
                  <img className="card-img-top" src={wish.thumbnail} alt="..." />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{wish.title}</h5>
                      ${wish.price}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
                    <button className='btn' onClick={() => { dispatch(removeFromWishList(wish.id)) }}>
                      <i className="fa-solid fa-heart-circle-xmark" style={{ color: "#ff0000", }} />
                    </button>
                    <button className='btn ms-auto' onClick={() => { handleAddToCart(wish) }}>
                      <i className="fa-solid fa-cart-plus" style={{ color: "#1de619", }} />
                    </button>
                  </div>
                </div>
              </div>
            ))
            :
            <h3 className='text-warning text-center'>NO Items Added Yet!!</h3>
        }

      </div>
    </>
  )
}

export default Wish