import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.beasts.map(beast => 
            <Col xs={12} sm={6} md={4} key={beast._id}>
              <HornedBeast 
                title={beast.title} 
                imageUrl={beast.image_url} 
                description={beast.description}
                selectBeast={this.props.selectBeast} 
                beast={beast} 
              />
            </Col>
          )}
        </Row>
      </Container>
    );
  }
}

export default Main;
