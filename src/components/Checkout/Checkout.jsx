import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import './Checkout.css'; // Importa tu archivo CSS

const Checkout = () => {
  const { cart, totalPrice } = useCartContext();
  const [orderId, setOrderId] = useState(null);

  const handleSubmitOrder = formData => {
    const order = {
      buyer: formData,
      items: cart.map(product => ({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity
      })),
      total: totalPrice()
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);
      });
  }

  return (
    <div className="checkoutContainer">
      {orderId ? (
        <div className="checkoutSuccess">
          <p>Compra realizada con éxito. ID de la orden: {orderId}</p>
        </div>
      ) : (
        <div className="checkoutFormContainer">
          <CheckoutForm onSubmit={handleSubmitOrder} />
        </div>
      )}
    </div>
  );
}

export default Checkout;
