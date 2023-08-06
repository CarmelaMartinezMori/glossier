import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const products = [
    {
      id: 1,
      img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
      name: 'Producto 1',
      category: 'skincare',
      description: 'Descripción del producto 1',
      stock: 10,
    },
    {
      id: 2,
      img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
      category:'makeup',
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      stock: 5,
    },
    {
      id: 3,
      img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
      category:'body',
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      stock: 8,
    },
  ];
  
  
const ItemDetailContainer = () => {
    const [data, setData] = useState({})
    const {itemId} = useParams()
   console.log(itemId)

   useEffect(() => {
     const getData = new Promise((resolve) => {
       setTimeout(() => {
         resolve(products);
       }, 2000);
     });
        getData.then(res => setData(res.find(p => p.id === parseInt(itemId))));
     
    }, [])

   return (
        <ItemDetail data = {data}/>
   );
}

export default ItemDetailContainer