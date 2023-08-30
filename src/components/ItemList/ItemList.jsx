import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
  return (
        data.map(p => <Item key={p.id} id={p.id} img={p.img} name={p.name} subdescription={p.subdescription} price={p.price} quantity={p.quantity}/>)

  )
}

export default ItemList