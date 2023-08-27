import React from 'react'
import './itemCart.css'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext()

  return (
    <div className='itemCart'>
        <img src={product.img} alt={product.name} />
        <div>
            <p>{product.name}</p>
            <p>{product.quantity}</p>
            <p>{product.price}</p>
            <p>Subtotal {product.quantity * product.price}</p>
            <button onClick={() => removeProduct(product.id)}>eliminar</button>
        </div>
    </div>
  )
}

export default ItemCart