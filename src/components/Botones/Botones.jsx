import React, { Component } from "react";
import "./Botones.css";

class Botones extends Component {
  actualizarBusqueda = (event)=>{
    this.props.actualizarBusqueda(event.target.name)
  }

  render() {
    return (
      <div>
        <div className="col-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
          <div className="buttons">
            <a className="btn btn-primary paisajes" name="Paisaje" href="#"  role="button" onClick={this.actualizarBusqueda} >Paisajes</a>
            <a className="btn btn-primary comida" name="Comida" href="#" role="button" onClick={this.actualizarBusqueda}>Comida</a>
            <a className="btn btn-primary bodas" href="#" role="button">Bodas</a>
            <a className="btn btn-primary idiomas" href="#" role="button">Idiomas</a>
            <a className="btn btn-primary reposteria" href="#" role="button">Repostería</a>
            <a className="btn btn-primary decoracion" href="#" role="button">Decoración</a>
            <a className="btn btn-primary tecnologia" href="#" role="button">Tecnología</a>
            <a className="btn btn-primary moda" href="#" role="button">Moda</a>
            <a className="btn btn-primary populares" href="#" role="button">Populares</a>
            <a className="btn btn-primary regalos" href="#" role="button">Regalos</a>
            <a className="btn btn-primary arquitectura" href="#" role="button">Arquitectura</a>
            <a className="btn btn-primary logos" href="#" role="button">Logos</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Botones;