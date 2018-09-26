import React, { Component } from 'react';
import Barra from "../src/components/Barra/Barra";
import Botones from "../src/components/Botones/Botones";
import './App.css';
import Imagenes from './components/Imagenes/Imagenes';

class App extends Component {
  state = {
    resultadoBusqueda: [],
  }

  actualizarBusqueda(nuevaBusqueda){
    nuevaBusqueda.replace(" ","+")
    fetch(`https://pixabay.com/api/?key=9828833-9a15a3dc938016b93df55afe1&q=${nuevaBusqueda}&image_type=photo&lang=es`)
      .then(response => response.json()) 
      .then(datos =>{ 
        this.setState({resultadoBusqueda: datos.hits})
      })
  }

  render() {
    console.log("Render!")
    return (
      <div > {/* barra llama a funcion y regresa con el nuevo valor q se obtuvo del input del componente barra */}
       <Barra actualizarBusqueda={this.actualizarBusqueda.bind(this)} /> {/* actualizarBusqueda1 es el props y el segundo es el valor de ese props q es una funcion */}
       <Botones actualizarBusqueda={this.actualizarBusqueda.bind(this)} />
       <Imagenes dataImagenes={this.state.resultadoBusqueda} />
      </div>
    );
  }
}

export default App;
