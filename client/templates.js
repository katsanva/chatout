/* globals moment */
'use strict';

Template.registerHelper('formatDate', function (date) {
    return moment(date).format('LT');
});

Template._loginButtonsLoggedInDropdown.events({
    'click #login-buttons-edit-profile': function (event) {
        event.preventDefault();

        Router.go('editProfile');
    }
});

Template.home.events({
    'submit': function (event) {
        event.preventDefault();

        Meteor.call('postMessage', event.target.message.value);
        event.target.message.value = "";
    }
});

Template.editProfile.events({
    'submit': function (event) {
        event.preventDefault();

        var data = {
            name: event.target.name.value,
            email: event.target.email.value,
            location: event.target.location.value ? new Mongo.ObjectID(event.target.location.value) : false
        };

        Meteor.call('updateUser', data);
    }
});
