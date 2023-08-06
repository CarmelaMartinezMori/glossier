import React from 'react'
import { useState, useEffect } from 'react'

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount]=useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        setCount(parseInt(initial))
    }, [initial])

  return (
    <div>
        <button disabled={count <= 0} onClick={decrease}>-</button>
        <span>{count}</span>
        <button disabled={count >= stock}onClick={increase}>+</button>
        <div>
            <button disabled={stock <= 0} onClick={()=> onAdd(count + 1)}>Añadir</button>
        </div>
    </div>
  )
}

export default ItemCount