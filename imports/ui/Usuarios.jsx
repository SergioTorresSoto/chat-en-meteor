
import React, { Component } from 'react';

export default class Usuarios extends Component {

  
  render() {

    return (

        <li className="left clearfix">
            <span className="chat-img pull-left">
               <img src="https://lh6.googleusercontent.com/-y-MY2satK-E/AAAAAAAAAAI/AAAAAAAAAJU/ER_hFddBheQ/photo.jpg" alt="User Avatar" className="img-circle"/>
            </span>
            <div className="chat-body clearfix">
                <div className="header_sec">
                    <strong className="primary-font">Jack Sparrow</strong> 
                </div>                              
            </div>
        </li>


      );

  }

}