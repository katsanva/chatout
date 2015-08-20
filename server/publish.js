/* globals Locations, Messages */
'use strict';

Meteor.publish("userData", function () {
    return Meteor.users.find({ _id: this.userId }, { fields: { _id: 1, profile: 1, emails: 1 } });
});

Meteor.publish("allUserData", function () {
    return Meteor.users.find({}, { fields: { _id: 1, profile: 1, emails: 1 } });
});

Meteor.publish('messages', function () {
    return Messages.find();
});

Meteor.publish('locations', function () {
    return Locations.find();
});

Meteor.users.allow({
    update: function (userId, doc) {
        return doc._id === userId;
    }
});
