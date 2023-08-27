import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

const products = [
  {
    id: 1,
    img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=916",
    name: 'Cloud Paint',
    category: 'skincare',
    description: 'A seamless, buildable gel-cream blush that looks so natural it’s like your cheeks made it. Enjoyable to apply and easy to wear, it´s just sheer enough to easily blend and layer without going overboard—simply dab it on cheeks and tap into skin for a natural-looking, flushed-from-within glow.',
    price: 20,
    //quantity: 10,
  },
  {
    id: 2,
    img: "https://glossier-prod.imgix.net/products/glossier-boybrow-black-01.png?auto=compress,format&cs=srgb&w=720",
    category:'makeup',
    name: 'Boy Brow',
    description: 'Inspired by the flexible formula of mustache pomade, Boy Brow visibly defines, thickens and shapes for face-framing brows in seconds. A creamy, conditioning formula and a precision brush coats even the smallest and finest hairs for a soft, flexible hold that won’t stiffen or flake. Available in a range of subtly-tinted shades that seamlessly blend in with your natural hairs plus Clear (that won’t leave a trace).',
    price: 18,
    //quantity: 5,
  },
  {
    id: 3,
    img: "https://glossier-prod.imgix.net/products/glossier-ultralip-catchet-01.png?auto=compress,format&cs=srgb&w=720",
    category:'makeup',
    name: 'Ultralip',
    description: 'Nourishing shine and color',
    price: 18,
    //quantity: 8,
  },
  {
    id: 4,
    img: "https://glossier-prod.imgix.net/files/glossier-boybrow-bdc-futuredew-carousel-01_fb8cc493-42dd-426c-9f3b-7e51a3ee21fc.png?auto=compress,format&cs=srgb&w=900",
    category:'makeup',
    name: 'Fresh-Faced Set',
    description: 'Boy Brow + Balm Dotcom + Futuredew',
    price: 48,
    //quantity: 6,
  },
  {
    id: 5,
    img: "https://glossier-prod.imgix.net/products/glossier-deo-you-carousel-01.png?auto=compress,format&cs=srgb&w=1296",
    category:'body',
    name: 'Deodorant',
    description: 'Smooth glide odor defence',
    price: 22,
    //quantity: 4,
  },
];
  
const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { itemId } = useParams();
  const { addProduct } = useCartContext();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => p.id === parseInt(itemId)));
      }, 2000);
    });
    getData.then((res) => setData(res));
  }, [itemId]);

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
