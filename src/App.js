import React, { Component } from 'react';
import Barra from "../src/components/Barra/Barra";
import Botones from "../src/components/Botones/Botones";
import './App.css';
import Imagenes from './components/Imagenes/Imagenes';

class App extends Component {
  state={
    busqueda:"",
    resultadoBusqueda: [],
  }

  actualizarBusqueda(nuevaBusqueda){
    this.setState({
      busqueda: nuevaBusqueda,
    })
  }

  render() {
    return (
      <div > {/* barra llama a funcion y regresa con el nuevo valor q se obtuvo del input del componente barra */}
       <Barra actualizarBusqueda={this.actualizarBusqueda.bind(this)} /> {/* actualizarBusqueda1 es el props y el segundo es el valor de ese props q es una funcion */}
       <Botones />
       <Imagenes />
       <p>{this.state.busqueda}</p>
      </div>
    );
  }
}

export default App;
