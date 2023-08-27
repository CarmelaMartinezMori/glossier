import React from 'react';
import { Bag } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const CartWidget = () => {
  const {totalProducts} = useCartContext()

  return (
    <div className='d-flex flex-row-reverse'>
      <Link to="/cart">
        <Bag />
        <span>{totalProducts() || ''}</span>
      </Link>
    </div>
  );
};

export default CartWidget;
