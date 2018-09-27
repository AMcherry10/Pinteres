import React, { Component } from "react";
import Imagen from "../Imagen/Imagen";
import "./Imagenes.css";

class Imagenes extends Component{
  dibujarImagenes(){
    return this.props.dataImagenes.map((infoFetch)=>{
      return <Imagen img={infoFetch.webformatURL} titulo={"Pixabay"} likes={infoFetch.likes} user={infoFetch.user} />
    })
  }

  render(){
    return(
      <div className="Imagenes">
        {this.dibujarImagenes()}
      </div>
    )
  }
}

export default Imagenes;