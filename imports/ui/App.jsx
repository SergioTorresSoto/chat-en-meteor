

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import Usuarios from './Usuarios';
import Conversaciones from './Conversaciones';
import { Mensajes } from '../api/mensajes.js';
import AccountsUIWrapper from './AccountsUIWrapper';


// App component - represents the whole app

class App extends Component {
  handleSubmit(event) {

    event.preventDefault();
    // Find the text field via the React ref

    const texto = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Mensajes.insert({
      texto,
      idEmisor: Meteor.userId(),
      createdAt: new Date(), // current time

    });
    // Clear form

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }


  render() {

      return (
        <div className="main_section">
            <div className="container">
                <div className="chat_container">

                    <div className="col-sm-3 chat_sidebar">

                        <div className="row">
                            <div className="dropdown all_conversation">
           

                                <button className="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-weixin" aria-hidden="true"></i>Conversations</button> 
                            </div>
                            <div className="member_list">
                                <ul className="list-unstyled">
                                    <Usuarios />
                                    <Usuarios />
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-9 message_section">

                        <div className="row">

                            <div className="new_message_head ">
                          
                                <div className="pull-right">
                                      <AccountsUIWrapper />
                                </div>
                            </div>

                            <Conversaciones/>

                            <form className="new-task" onSubmit={this.handleSubmit.bind(this)}  >

                                <input

                                type="text"

                                ref="textInput"

                                placeholder="Escribe mensaje"

                                />

                            </form>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
      );

  }

}

 

export default withTracker(() => {

  return {

    

  };

})(App);