
import { Mongo } from 'meteor/mongo';

 

export const Users= Meteor.users;

if (Meteor.isServer) {

  // This code only runs on the server

  Meteor.publish('users', function usersPublication() {

    return Users.find();

  });

}