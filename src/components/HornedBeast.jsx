import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends Component {
  render() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img 
          variant="top" 
          src={this.props.imageUrl} 
          alt={this.props.title} 
          onClick={() => this.props.selectBeast(this.props.beast)}
        />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Button variant="primary" onClick={() => this.props.selectBeast(this.props.beast)}>
            View Details
          </Button>

        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeast;
