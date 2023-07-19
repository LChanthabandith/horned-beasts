import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function HornedBeast(props) {
  const [favorites, setFavorites] = useState(0);
  const handleClick = () => {
    setFavorites(favorites + 1);
  };

  return (
    <Card style={{ width: '20rem', marginBottom: '20px', marginTop: '20px' }} className="mx-auto">
    <Card.Img variant="top" src={props.imageUrl} alt={props.title} title={props.title} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.description}</Card.Text>
      <Button variant="primary" onClick={handleClick}>
        ❤️ Favorites: {favorites}
      </Button>
    </Card.Body>
  </Card>
  );
}

export default HornedBeast;
