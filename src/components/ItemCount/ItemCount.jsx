import React, { useState, useEffect } from 'react';
import './ItemCount.css'

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));
  const [showButtons, setShowButtons] = useState(false); // Estado para mostrar/ocultar los botones

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleAddClick = () => {
    setShowButtons(true); // Mostrar los botones al hacer clic en "Add to Bag"
    onAdd(count);
  };

  useEffect(() => {
    setCount(parseInt(initial));
    setShowButtons(false); // Ocultar los botones al cambiar el valor inicial
  }, [initial]);

  return (
    <div className="item-count">
      <div className="count-controls">
        {showButtons && (
          <>
            <button disabled={count <= 0} onClick={decrease}>
              -
            </button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>
              +
            </button>
          </>
        )}
      </div>
      <button
        className="add-to-bag-button"
        disabled={stock <= 0}
        onClick={handleAddClick}
      >
        Add to Bag
      </button>
    </div>
  );
};

export default ItemCount;
