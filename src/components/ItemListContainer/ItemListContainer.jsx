import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemCount from '../ItemCount'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { CardGroup } from 'react-bootstrap'



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


///
const ItemListContainer = () => {
 
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
    <CardGroup className='item-list-container'>
      <ItemList className='item-list' data={data}/>
    </CardGroup>

  )
}

export default ItemListContainer

