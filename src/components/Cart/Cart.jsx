import React from 'react'
import { useCartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import ItemCart from '../ItemCart/ItemCart'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
  const {cart, totalPrice} = useCartContext()

  const order = {
    buyer: {
      name: 'Carmela',
      email: 'carmemm@gmail.com',
      phone: '12345678',
      address: 'asdd'
    },
    items: cart.map(product =>({ id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice()
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))
  }

  if(cart.length === 0){
    return(
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    )
  } 

  return (
    <div>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>
        total: $ {totalPrice()}
      </p>
      <button onClick={handleClick}>Emitir compra</button>
    </div>
  )
}

export default Cart