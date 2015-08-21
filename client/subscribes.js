'use strict';

Meteor.subscribe('messages');
Meteor.subscribe('locations');

Tracker.autorun(function () {
    Meteor.subscribe("userData");
    Meteor.subscribe("allUserData");
});
