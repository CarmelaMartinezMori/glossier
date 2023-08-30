import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

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
        setOrderId(id); // Guarda el ID de la orden en el estado
      });
  }

  return (
    <div>
      {orderId ? (
        <div>
          <p>Compra realizada con éxito. ID de la orden: {orderId}</p>
        </div>
      ) : (
        <CheckoutForm onSubmit={handleSubmitOrder} />
      )}
    </div>
  );
}

export default Checkout;
