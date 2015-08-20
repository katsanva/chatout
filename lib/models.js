Messages = new Mongo.Collection('messages');
Locations = new Mongo.Collection('locations');

Meteor.methods({
    postMessage: function (text) {
        'use strict';

        if (!Meteor.user()) {
            return Meteor.Error('non-authorized');
        }

        var message = {
            text: text,
            author: Meteor.userId(),
            location: Meteor.user().profile.location,
            createdAt: new Date()
        };

        Messages.insert(message);
    },
    updateUser: function(data) {
        var user = Meteor.user();

        if (!!data.email && _.first(user.emails).address !== data.email) {
            Meteor.users.update({ _id: user._id }, {
                $set: {
                    'emails.0.address': data.email
                }
            });
        }

        if (!!data.name && data.name !== user.profile.name) {
            Meteor.users.update({ _id: user._id }, {
                $set: {
                    'profile.name': data.name
                }
            });
        }

        if (!!data.location && !data.location.equals(user.profile.location)) {
            Meteor.users.update({ _id: user._id }, {
                $set: {
                    'profile.location': data.location
                }
            });
        }
    }
});
