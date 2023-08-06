import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemCount from '../ItemCount'
import ItemList from '../ItemList'

const products = [
  {
    id: '1',
    img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    stock: 10,
  },
  {
    id: '2',
    img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    stock: 5,
  },
  {
    id: '3',
    img: "https://glossier-prod.imgix.net/products/glossier-cloudpaint-beam-carousel-01.png?auto=compress,format&cs=srgb&w=180",
    name: 'Producto 3',
    description: 'Descripción del producto 3',
    stock: 8,
  },
];


///
const ItemListContainer = ({greeting}) => {
 
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    });
    getData.then(res => setData(res));

  }, [])
  
  const onAdd = (quant) => {
    console.log(`Compraste ${quant}`)
  }

  return (
    <div>
        <div className="jumbotron">
          <h1 className="display-4">{greeting}</h1>
          <p className="lead">Discover a curated collection of makeup essentials designed to enhance your natural beauty and embrace your unique style. </p>
          <hr className="my-4"/>
          <p>Glossier is all about celebrating your individuality and empowering you to shine from within</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          <ItemCount initial={0} stock={10} onAdd={onAdd}/>
          <ItemList data={data}/>
        </div>
    </div>
  )
}

export default ItemListContainer