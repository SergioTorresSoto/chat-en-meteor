import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Usuarios extends Component {

  handleSubmit(idUsuarios) {
    texto = idUsuarios,
    Session.set('isUser', texto),
    sesion = Session.get('isUser')
   // console.log(sesion)
  }

  render() {
    idusuario = Meteor.userId();
    console.log(idusuario);
    return (
      <div>
        {idusuario!=this.props.usuario._id ?(
           <button type="submit"  key={this.props.usuario._id} className="btn btn-default" onClick={this.handleSubmit.bind(this, this.props.usuario._id)} >
             

              <li className="left clearfix">
                  <span className="chat-img pull-left">
                     <img src="https://lh6.googleusercontent.com/-y-MY2satK-E/AAAAAAAAAAI/AAAAAAAAAJU/ER_hFddBheQ/photo.jpg" alt="User Avatar" className="img-circle"/>
                  </span>
                  <div className="chat-body clearfix">
                      <div className="header_sec">
                          <strong className="primary-font" ref="textInput">{this.props.usuario.emails[0].address}</strong> 
                      </div>                              
                  </div>
              </li>
             
            </button>
        ):(
           <div>
           </div>
           )}
      </div>
    );

  }

}