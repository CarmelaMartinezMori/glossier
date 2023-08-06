import React from 'react'


const ItemDetail = ({img, name}) => {
  return (
    <div>
        <div>
            <img src={img} alt="" />
            <div>
                <h1>{name}</h1>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail