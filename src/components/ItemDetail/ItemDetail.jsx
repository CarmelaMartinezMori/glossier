import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({ img, name, description, price }) => {
  const [goToCart, setGoToCart] = useState(false);

  const handleAddToBag = (count) => {
    setGoToCart(true)
  };

  return (
    <div className="item-detail">
      <div className="item-detail-content">
        <div className="item-info">
          <h1 className="item-name">{name}</h1>
          <p className="item-description">{description}</p>
          <div className="item-price">{price}</div>
          <div className="add-to-bag-button-container">
            {
              goToCart ? <Link to='/cart'>End Purchase</Link>
              :<ItemCount initial={1} stock={10} onAdd={handleAddToBag} />
            }
            
          </div>
        </div>
        <div className="item-image-container">
          <img src={img} alt={name} className="item-image" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
