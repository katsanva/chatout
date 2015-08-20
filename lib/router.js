/* globals Locations, Messages */
'use strict';

Router.route('/', function () {
    var userLocation;
    var query = {};

    if (Meteor.user() && Meteor.user().profile.location) {
        var hex = Meteor.user().profile.location.toHexString();
        var objectId = new Mongo.ObjectID(hex);

        userLocation = Locations.findOne(objectId);
        query = { location: objectId };
    } else {
        userLocation = { name: 'all over the world' };
    }

    var messages = Messages.find(query, { limit: 10, sort: { createdAt: -1 } }).map(function (message) {
        message.author = Meteor.users.findOne({ _id: message.author }, { fields: { profile: 1 } });
        message.location = Locations.findOne({ _id: message.location });

        return message;
    });

    this.render('home', {
        data: function () {
            return {
                userLocation: userLocation,
                messages: messages
            };
        }
    });
});

Router.route('/editProfile', function () {
    if (!Meteor.user()) {
        return Meteor.Error('non-authorized');
    }

    var user = Meteor.user();
    var data;
    var locations = [];

    data = {
        email: _.first(user.emails).address,
        name: user.profile.name
    };

    locations = Locations.find({}, { sort: { name: 1 } }).map(function (location) {
        if (location._id.equals(user.profile.location)) {
            location.selected = true;
        }

        return location;
    });

    this.render('editProfile', {
        data: function () {
            return {
                user: data,
                locations: locations
            };
        }
    });
});
