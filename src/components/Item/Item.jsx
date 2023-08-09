import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Item.css'

function Item({id, img, name, description}) {
  return (
    <Link to={`/item/${id}`}>
      <Card style={{ width: "18rem",  margin: '5px'}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title >{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default Item;