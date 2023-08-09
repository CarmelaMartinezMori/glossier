import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';

const products = [
  {
    id: 1,
    img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=916",
    name: 'Cloud Paint',
    category: 'skincare',
    description: 'Seamless cheek color',
    price: '$20',
    stock: 10,
  },
  {
    id: 2,
    img: "https://glossier-prod.imgix.net/products/glossier-boybrow-black-01.png?auto=compress,format&cs=srgb&w=720",
    category:'makeup',
    name: 'Boy Brow',
    description: 'Grooming Pomade',
    price: '$18',
    stock: 5,
  },
  {
    id: 3,
    img: "https://glossier-prod.imgix.net/products/glossier-ultralip-catchet-01.png?auto=compress,format&cs=srgb&w=720",
    category:'makeup',
    name: 'Ultralip',
    description: 'Nourishing shine and color',
    price: '$18',
    stock: 8,
  },
  {
    id: 4,
    img: "https://glossier-prod.imgix.net/files/glossier-boybrow-bdc-futuredew-carousel-01_fb8cc493-42dd-426c-9f3b-7e51a3ee21fc.png?auto=compress,format&cs=srgb&w=900",
    category:'makeup',
    name: 'Fresh-Faced Set',
    description: 'Boy Brow + Balm Dotcom + Futuredew',
    price: '$48',
    stock: 6,
  },
  {
    id: 5,
    img: "https://glossier-prod.imgix.net/products/glossier-deo-you-carousel-01.png?auto=compress,format&cs=srgb&w=1296",
    category:'body',
    name: 'Deodorant',
    description: 'Smooth glide odor defence',
    price: '$22',
    stock: 4,
  },
];
  
  
  const ItemDetailContainer = () => {
    const [data, setData] = useState({});
    const { itemId } = useParams();
    console.log(itemId)
  
    useEffect(() => {
      const getData = new Promise((resolve) => {
        setTimeout(() => {
          resolve(products.find((p) => p.id === parseInt(itemId)));
        }, 2000);
      });
      getData.then((res) => setData(res));
    }, [itemId]);
  
    return data.id ? (
      <ItemDetail id={data.id} img={data.img} name={data.name} description={data.description} />
    ) : (
      <p>Loading...</p>
    );
    
  };

export default ItemDetailContainer;
