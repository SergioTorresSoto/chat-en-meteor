

import { Mongo } from 'meteor/mongo';

 

export const Mensajes = new Mongo.Collection('mensajes');

if (Meteor.isServer) {

  // This code only runs on the server

  Meteor.publish('mensajes', function tasksPublication() {

    return Mensajes.find();

  });

}