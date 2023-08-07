import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom'
import { CardGroup } from 'react-bootstrap'



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
  {
    id: 4,
    img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
    category:'body',
    name: 'Producto 4',
    description: 'Descripción del producto 4',
    stock: 6,
  },
  {
    id: 5,
    img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
    category:'body',
    name: 'Producto 5',
    description: 'Descripción del producto 5',
    stock: 4,
  },
];


///
const ItemListContainer = ({greeting}) => {
 
  const [data, setData] = useState([])

  const {categoryId} = useParams()

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
    if (categoryId) {
      getData.then(res => setData(res.filter(p => p.category === categoryId)));
    }else{
      getData.then(res => setData(res));
    }
  }, [categoryId])
  
  const onAdd = (quant) => {
    console.log(`Compraste ${quant}`)
  }

  return (
    <CardGroup>
      <ItemList data={data}/>
    </CardGroup>

  )
}

export default ItemListContainer

