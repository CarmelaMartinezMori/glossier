import React from 'react';
import './itemCart.css';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();

    return (
        <div className='itemCartWrapper'>
            <div className='itemCart'>
                <img src={product.img} alt={product.name} />
                <div className='productInfo'>
                    <div className='nameAndPrice'>
                        <p className='productName'>{product.name}</p>
                        <p className='productPrice'>Price: ${product.price}</p>
                    </div>
                    <p className='productQuantity'>Quantity: {product.quantity}</p>
                </div>
                <button onClick={() => removeProduct(product.id)}>Remove item</button>
            </div>
        </div>
    );
}

export default ItemCart;
