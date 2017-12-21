import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Mensajes } from '../api/mensajes.js';
import Mensaje from './Mensaje';


class Conversacion extends Component {

  renderMensajes() {

    return this.props.mensajes.map((mensaje) => (

      <Mensaje key={mensaje._id} mensaje={mensaje} />

    ));

  }

  render() {
    return (

    	  <div className="chat_area">
                <ul className="list-unstyled">
         
                   {this.renderMensajes()}
                </ul>
           </div>
    );
  }
}
export default withTracker(() => {

  return {

    //mensajes: Mensajes.find({idEmisor: Meteor.userId(), idReceptor:Session.get('isUser')}).fetch(),


    mensajes: Mensajes.find({
    	$or:[
                {idEmisor: Meteor.userId(), idReceptor:Session.get('isUser')},
                {idEmisor: Session.get('isUser') , idReceptor:Meteor.userId()}
            ]}).fetch(),	

  };

  

})(Conversacion);