import React, { Component } from "react";
import "./Imagen.css";

class Imagen extends Component{

  render(){
    return(
      <div className="Imagen-content">
        <img src={this.props.img} alt="foto" className="Imagen-img"/>
        <h5>{this.props.titulo}</h5>
        <h6>{this.props.likes}</h6>
        <p>{this.props.user}</p>
      </div>
    )
  }
}

export default Imagen;