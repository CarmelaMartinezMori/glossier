import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import { getFirestore, doc, getDoc } from "firebase/firestore";

  
const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { itemId } = useParams();
  const { addProduct } = useCartContext();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', itemId);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }));
  }, []);
  
  const handleAddToCart = (count) => {
    if (data.id) {
      addProduct(data, count); // Pasar la cantidad seleccionada al agregar al carrito
    }
  };

  return data.id ? (
    <ItemDetail
      img={data.img}
      name={data.name}
      description={data.description}
      price={data.price}
      onAddToCart={handleAddToCart} // Pasar la función para agregar al carrito
    />
  ) : (
    <p>Loading...</p>
  );
};

export default ItemDetailContainer;
