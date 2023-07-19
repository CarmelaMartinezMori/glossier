import React from 'react'
import { Bag } from 'react-bootstrap-icons';

const CartWidget = () => {
  return (
    <div className='d-flex flex-row-reverse'>
       <p>5</p>
       <Bag />
    </div>
  )
}

export default CartWidget