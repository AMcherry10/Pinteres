import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Imagen.css";

class Imagen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className="Imagen-content">
        <img src={this.props.img} alt="foto" className="Imagen-img" onClick={this.toggle} />
        <h5>{this.props.titulo}</h5>
        <h6>{this.props.likes}</h6>
        <p>{this.props.user}</p>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            <h5>{this.props.titulo}</h5>
          </ModalHeader>
          <ModalBody>
            <img src={this.props.img} alt="foto" className="Imagen-img" />
          </ModalBody>
          <ModalFooter className="text-left">
            <p className="userModal">Usuario: {this.props.user} <br/> Likes: {this.props.likes}</p>            
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default Imagen;