import React, { Component } from "react";
import "./Barra.css"

class Barra extends Component {
  handleyKeyPress= (event)=>{
    if(event.key==="Enter"){
      this.props.actualizarBusqueda(event.target.value)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
          <div className="row">
            <i id="iconoPinterest" className="fab fa-pinterest col-1"></i>
            <input id="inputSearch" className="col-8" type="text" placeholder="Buscar" onKeyPress={this.handleyKeyPress} />
            <select id="opciones" className="col-2">
              <option value="Todos los pines">Todos los pines</option>
            </select>
            <i id="iconoUser" className="fas fa-user-circle icono">Noelia</i>
            <i id="barras" className="fas fa-bars icono"></i>
            <i id="msn" className="fas fa-comment-dots icono"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Barra;