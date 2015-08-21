Messages = new Mongo.Collection('messages'); // jshint ignore:line
Locations = new Mongo.Collection('locations'); // jshint ignore:line

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

        Messages.insert(message); // jshint ignore:line
    },
    updateUser: function (data) {
        'use strict';

        var user = Meteor.user();
        var update = {};

        if (!!data.email && _.first(user.emails).address !== data.email) {
            update['emails.0.address'] = data.email;
        }

        if (!!data.name && data.name !== user.profile.name) {
            update['profile.name'] = data.name;
        }

        if (!!data.location && !data.location.equals(user.profile.location)) {
            update['profile.location'] = data.location;
        }

        if (!_.isEmpty(update)) {
            Meteor.users.update({ _id: user._id }, {
                $set: update
            });
        }
    }
});
