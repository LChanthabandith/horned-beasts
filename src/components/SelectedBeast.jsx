import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.selectedBeast.image_url} alt={this.props.selectedBeast.title} style={{ width: '100%' }} />
          <p>{this.props.selectedBeast.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;

