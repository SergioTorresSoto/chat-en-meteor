import React, { Component } from 'react';


export default class Mensaje extends Component {

  
  render() {

    return (
        <div>
        	{
        		Meteor.userId()==this.props.mensaje.idEmisor ?(
        			

        		 		<li className=" text-right ">{this.props.mensaje.texto}</li>
        		 
        		 ):(
        		 	<li>{this.props.mensaje.texto}</li>
        		 )
        	}
        	 
        </div>                     
      );

  }

}