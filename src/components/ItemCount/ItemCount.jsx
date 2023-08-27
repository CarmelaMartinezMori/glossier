import React, { useState, useEffect } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

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
    onAdd(count);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="item-count">
      <button
        className="add-to-bag-button"
        disabled={stock <= 0}
        onClick={handleAddClick}
      >
        Add to Bag
      </button>

      <button disabled={count <= 0} onClick={decrease}>
        -
      </button>
      <span className="count-display">{count}</span>
      <button disabled={count >= stock} onClick={increase}>
        +
      </button>
    </div>
  );
};

export default ItemCount;
