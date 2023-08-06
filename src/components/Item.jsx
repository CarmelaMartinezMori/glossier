import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({name, description, stock, img}) {
  return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
  );
}

export default Item;