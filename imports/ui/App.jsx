

import React, { Component } from 'react';

import { withTracker } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper';
import Usuarios from './Usuarios';
import Mensajes from './Mensajes';

import { Tasks } from '../api/tasks';

 

import Task from './Task';

 

// App component - represents the whole app

class App extends Component {

  renderTasks() {

    return this.props.tasks.map((task) => (

      <Task key={task._id} task={task} />

    ));

  }

 

  render() {

      return (
        <div class="main_section">
            <div class="container">
                <div class="chat_container">
                    <div class="col-sm-3 chat_sidebar">
                        <div class="row">
                            <div class="dropdown all_conversation">
                                <button class="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-weixin" aria-hidden="true"></i>Conversations</button> 
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
                            <div className="new_message_head">
                                <div className="pull-right">
                                    <AccountsUIWrapper />
                                </div>
                            </div>

                            <div className="chat_area">
                                <ul className="list-unstyled">
                                   <Mensajes />
                                </ul>
                            </div>
                                <div className="message_write">
                                    <textarea className="form-control" placeholder="type a message"></textarea>
                                        <div className="clearfix">
                                        </div>
                                        <div className="chat_bottom">
                                            <a href="#" className="pull-right btn btn-success">Send</a>
                                        </div>
                                </div>
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

    tasks: Tasks.find({}).fetch(),

  };

})(App);