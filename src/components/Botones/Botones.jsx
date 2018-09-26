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
            <a className="btn btn-primary paisajes" name="Paisaje" href="#"  role="button" onClick={this.actualizarBusqueda}>Paisajes</a>
            <a className="btn btn-primary comida" name="Comida" href="#" role="button" onClick={this.actualizarBusqueda}>Comida</a>
            <a className="btn btn-primary bodas" name="Bodas" href="#" role="button" onClick={this.actualizarBusqueda}>Bodas</a>
            <a className="btn btn-primary idiomas" name="Idiomas" href="#" role="button" onClick={this.actualizarBusqueda}>Idiomas</a>
            <a className="btn btn-primary reposteria" name="Reposteria" href="#" role="button" onClick={this.actualizarBusqueda}>Repostería</a>
            <a className="btn btn-primary decoracion" name="Decoracion" href="#" role="button" onClick={this.actualizarBusqueda}>Decoración</a>
            <a className="btn btn-primary tecnologia" name="Tecnologia" href="#" role="button" onClick={this.actualizarBusqueda}>Tecnología</a>
            <a className="btn btn-primary moda" name="Moda" href="#" role="button" onClick={this.actualizarBusqueda}>Moda</a>
            <a className="btn btn-primary populares" name="Populares" href="#" role="button" onClick={this.actualizarBusqueda}>Populares</a>
            <a className="btn btn-primary regalos" name="Regalos" href="#" role="button" onClick={this.actualizarBusqueda}>Regalos</a>
            <a className="btn btn-primary arquitectura" name="Arquitectura" href="#" role="button" onClick={this.actualizarBusqueda}>Arquitectura</a>
            <a className="btn btn-primary logos" name="Logos" href="#" role="button" onClick={this.actualizarBusqueda}>Logos</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Botones;