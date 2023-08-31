import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import './Cart.css';
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className='cartContainer'>
        <div className="emptyCart">
          <p className="emptyMessage">No hay elementos en el carrito</p>
          <Link to="/" className="shopLink">Hacer compras</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {cart.map(product => <ItemCart key={product.id} product={product} />)}
      <p className="subtotal">Subtotal: <span className="subtotal-price">${totalPrice()}</span></p>
      <div className="checkout-container">
        <Link to='/checkout' className="checkout-link">Checkout</Link>
      </div>
    </div>
  );
}

export default Cart;
