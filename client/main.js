import { Template } from 'meteor/templating';
import './main.html';

Template.user.helpers({
  user(){
    return Meteor.user();
  },
  stringUser(){
    const strProfile = JSON.stringify(Meteor.user().profile, null, 4);
    return strProfile.substr(1, strProfile.length - 2);
  }
});

Template.user.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Meteor.logout();
  }
});

Template.login.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    Meteor.loginWithAuth0(() => console.log('Login complete'));
  }
});
