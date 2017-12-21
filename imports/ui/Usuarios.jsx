import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Mensajes } from '../api/mensajes.js';

export default class Usuarios extends Component {

  handleSubmit(idUsuarios) {
    texto = idUsuarios,
    Session.set('isUser', texto),
    sesion = Session.get('isUser')
   // console.log(sesion)

    
    // Find the text field via the React ref

    const myMessages = Mensajes.find({ texto: Meteor.userId() }).fetch();

  }

  render() {
    
    return (
      <div>
        {Meteor.userId()!=this.props.usuario._id ?(
           <button type="submit"  key={this.props.usuario._id} className="btn btn-default" onClick={this.handleSubmit.bind(this, this.props.usuario._id)} >

             
                          <span className="primary-font" ref="textInput">{this.props.usuario.emails[0].address}</span> 
          
             
            </button>
        ):(
           <div>
           </div>
           )}
      </div>
    );

  }

}