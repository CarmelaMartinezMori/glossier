import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { CardGroup } from 'react-bootstrap'
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [dataTitle, setDataTitle] = useState(''); // Variable para almacenar el título de la categoría
  const { categoryId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, 'productos');
    if (categoryId) {
      const queryFilter = query(queryCollection, where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}) )))
    } else{
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(product => ({id: product.id, ...product.data()}) )))
    }
  }, [categoryId]);

  return (
    <React.Fragment>
      <h4 className="category-title">{dataTitle}</h4>
      <CardGroup className='item-list-container'>
        <ItemList className='item-list' data={data} />
      </CardGroup>
    </React.Fragment>
  );
}

export default ItemListContainer

