import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
  return (
        data.map(p => <Item id={p.id} img={p.img} name={p.name} description={p.description} price={p.price} quantity={p.quantity}/>)

  )
}

export default ItemList