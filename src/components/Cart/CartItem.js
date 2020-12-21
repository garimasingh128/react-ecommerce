import React from 'react'

export default function CartItem({item, value}) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="row my-2 text-center text-capitalize">
      <div className="col-10 mx-auto col-lg-2">
       
       
        <img 
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" 
          alt={title}
          style={{width: "5rem", height: "5rem"}} 
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: £</span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span 
              className="btn btn-black mx-1" 
              onClick={() => {decrement(id)}}>
                -
            </span>
            <span className="btn btn-black mx-1">
              {count}
            </span>
            <span 
              className="btn btn-black mx-1" 
              onClick={() => {increment(id)}}>
                +
            </span>
          </div>
        </div>
      </div>

      {/* Remove Item */}
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
        <i className="fa fa-trash" onClick={() => removeItem(id)}></i></div>
      </div>

      {/* Total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>Item total: £{total}</strong>
      </div>
    </div>
  )
}
