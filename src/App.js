import React, { Component } from "react";
import Barra from "../src/components/Barra/Barra";
import Botones from "../src/components/Botones/Botones";
import "./App.css";
import Imagenes from "./components/Imagenes/Imagenes";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      busqueda: "",
      resultadoBusqueda: [],
      page: 1,
      cargando: true,
    }

    window.onscroll = () => {
      if (this.state.cargando === true) {
        return
      }
      if (
        window.innerHeight + document.documentElement.scrollTop /* obtiene alto del elemento raiz en este caso html */
        === document.documentElement.offsetHeight /* mide alto de pagina */
      ) {
        this.cargarMasImagenes();
      }
    };
  }

  cargarMasImagenes = () => {
    let pageNew = this.state.page + 1
    let imagenesAntiguas = this.state.resultadoBusqueda
    fetch(`https://pixabay.com/api/?key=9828833-9a15a3dc938016b93df55afe1&q=${this.state.busqueda}&image_type=photo&lang=es&page=${pageNew}`)
      .then(response => response.json())
      .then(datos => {
        this.setState({
          resultadoBusqueda: imagenesAntiguas.concat(datos.hits),
          page: pageNew,
          cargando: false,
        })
      })
  }

  componentDidMount() {
    this.actualizarBusqueda()
  }

  actualizarBusqueda(nuevaBusqueda = "") { /* esto es para q si o si nuevabusqueda tenga algo y se pueda ocupar replace, sino, lo toma como nulo y tira error */
    nuevaBusqueda.replace(" ", "+") /* esto es para q cuando se busque algo con espacio en url se ponga + */
    fetch(`https://pixabay.com/api/?key=9828833-9a15a3dc938016b93df55afe1&q=${nuevaBusqueda}&image_type=photo&lang=es`)
      .then(response => response.json())
      .then(datos => {
        this.setState({
          resultadoBusqueda: datos.hits,
          busqueda: nuevaBusqueda,
          page: 1,
          cargando: false,
        })
      })
  }

  render() {
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
