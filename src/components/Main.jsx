import React, { Component } from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import { Container, Row, Col, Form } from 'react-bootstrap';

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form.Select aria-label="Select number of horns" onChange={this.props.handleSelect}>
              <option value="0">All</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
            </Form.Select>
          </Col>
        </Row>
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
