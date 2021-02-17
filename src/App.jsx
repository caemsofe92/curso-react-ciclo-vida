import React from 'react';
import './App.css';
import Titulo from './components/titulo';


export default class App extends React.Component{
  constructor(props){
    super(props);
    console.log("Se ejecuto constructor");
    
    this.state = {
      titulo: "Clase"
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    console.log("Se ejecuto componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("Se ejecuto shouldComponentUpdate", nextState.titulo, this.state.titulo !== nextState.titulo);
    return this.state.titulo !== nextState.titulo;
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Se ejecuto componentDidUpdate", prevState.titulo, this.state.titulo !== prevState.titulo);
  }

  handleChange(miTitulo){
    this.setState({titulo: miTitulo});
  }

  render(){
    console.log("Se ejecuto render");

    return(
      <div className="contenedor">
        
        <div className="contenedor-interno">
          
          <p className="titulo-principal">Ciclo de vida</p> 
          
          {this.state.titulo === "Clase" ? <Titulo className="texto-cambiante" txt={this.state.titulo} /> : null}
          
          <button onClick={()=> this.handleChange("Curso")} className="boton-interno">Cambiar Titulo</button>
        
        </div>

      </div>
    )
  }
}