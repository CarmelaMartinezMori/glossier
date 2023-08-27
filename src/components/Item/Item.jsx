import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'; 
import  {CartContext} from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

function Item({ id, img, name, description, price, quantity }) {
  const nombre = useContext(CartContext);
  
  return (
    <Link to={`/item/${id}`} className="link-no-underline">
      <Card className="card-container" style={{ width: "18rem", margin: '10px' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <div className="product-info">
            <div className="name-and-price">
              <Card.Title>{name}</Card.Title>
              <span className="price">${price}</span>
            </div>
            <Card.Text>{description}</Card.Text>
            <div className="card-buttons">
              <Button variant="none" className="card-button">Add to Cart</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Item;
