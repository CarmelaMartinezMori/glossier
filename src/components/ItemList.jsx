import React from 'react'
import Item from './Item'

const ItemList = ({data = []}) => {
  return (
        data.map(p => <Item key={p.id} img={p.img} name={p.name} description={p.description}/>)

  )
}

export default ItemList