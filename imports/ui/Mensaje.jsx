import React, { Component } from 'react';


export default class Mensaje extends Component {

  
  render() {

    return (
                        
         <li>{this.props.mensaje.texto}</li>
                           
      );

  }

}