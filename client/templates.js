/* globals Locations, moment, accountsUIBootstrap3 */
'use strict';

Meteor.subscribe('messages');
Meteor.subscribe('locations');

Tracker.autorun(function () {
    Meteor.subscribe("userData");
    Meteor.subscribe("allUserData");
});

var persons = ['Lone Wanderer', 'Mercenary', 'Ted', 'Bill Wilson', 'Jack Smith', 'Jenny Wilson', 'Junior Smith',
    'Linda Smith', 'Martha Wilson', 'Old Man Harris', 'Brailee Ewers', 'Davis West', 'Evan King', 'Karen Schenzy',
    'Ken Ewers', 'Matilda West', 'Bittercup', 'Dusty', 'Flash', 'Kimba', 'Pappy', 'Red', 'Shorty', 'Timebomb',
    'Derek Pacion', 'Dominic D\'Ellsadro', 'Joe Porter', 'Machete', 'Tanya Christoff', 'Scott Wollinski', 'Ernest Roe',
    'Jennings', 'Reddin', 'Colvin', 'Vargas', 'Sarah Lyons', 'Owyn Lyons', 'Artemis', 'Durga', 'Dusk', 'Irving Gallows',
    'Bael', 'Glade', 'Gunny', 'Kodiak', 'Sawbones', 'Bowditch', 'Elizabeth Jameson', 'Peabody', 'Reginald Rothchild',
    'Arthur Maxson', 'Cross', 'Cherry', 'Dukov', 'Fantasia', 'Madame', 'Northern shack raider',
    'Northern shack raider\'s partner', 'Smiling Jack', 'Southern shack raider', 'Pek', 'Hoss', 'Anne Marie Morgan',
    'Rococo Rockfowl', 'Henry Casdin', 'Brotherhood of Steel GNR commander', 'Dillon', 'Finley', 'Wilks', 'Three Dog',
    'Ronald Laren', 'Sierra Petrovita', 'Bryan Wilks', 'Weston Lesko', 'Fred Wilks', 'Lug-Nut', 'William Brandice',
    'Alex Dargon', 'Catherine', 'Daniel Agincourt', 'Prime', 'Pumpkin', 'Ryan Brigg', 'Leroy Walker', 'Silas', 'Biwwy',
    'Bumble', 'Child slaver', 'Eclair', 'Joseph', 'Knick Knack', 'Knock Knock', 'Lucy', 'Robert Joseph MacCready',
    'Princess', 'Sticky', 'Zip', 'Andy Stahl', 'Billy Creel', 'Colin Moriarty', 'Cromwell', 'Deputy Weld',
    'Deputy Steel', 'Church', 'Gob', 'Harden Simms', 'Jenny Stahl', 'Jericho', 'Leo Stahl', 'Lucas Simms', 'Lucy West',
    'Maggie', 'Manya Vargas', 'Micky', 'Moira Brown', 'Maya', 'Nathan Vargas', 'Nova', 'Stockholm', 'Wadsworth',
    'Walter', 'Alan', 'Brianna', 'Holly', 'Ian West', 'Justin', 'Karl', 'Robert', 'Vance', 'Barrett', 'Murphy',
    'Poplar', 'Bob', 'Cypress', 'Linden', 'Maple', 'Harold', 'Laurel', 'Yew', 'Birch', 'Bleak', 'Breadbox', 'Bronson',
    'Carolina Red', 'Carter', 'Clover', 'Crimson', 'Cutter', 'Eulogy Jones', 'Forty', 'Frank', 'Grouse Jurley', 'Jotun',
    'Jeanette', 'Penny', 'Pronto', 'Richter', 'Rory Maclaren', 'Sammy', 'Squirrel', 'Ymir', 'Augustus Autumn',
    'John Henry Eden', 'Williams', 'Dubois', 'Ledoux', 'Stefan', 'The Surgeon', 'Gervais', 'Bob', 'Dave', 'Flower',
    'Jessica', 'Mary', 'Rachael', 'Ralph', 'Rosie', 'Shawna', 'Abraham Washington', 'Angela Staley', 'Anna Holt',
    'Armitage', 'Bannon', 'Belle Bonny', 'Brock', 'C.J. Young', 'Carlos', 'Christie Young', 'Cindy Cantelli', 'Diego',
    'Madison Li', 'Preston', 'Zimmer', 'Clifford', 'Flak', 'Gary Staley', 'Garza', 'Harkness', 'Henry Young',
    'James Hargrave', 'Janice Kaplinski', 'Lana Danvers', 'Mei Wong', 'Mister Buckingham', 'Lopez', 'Paulie Cantelli',
    'Horace Pinkerton', 'Jones', 'Seagrave Holmes', 'Shrapnel', 'Sister', 'Tammy Hargrave', 'Ted Strayer', 'Trinnie',
    'Vera Weatherly', 'Victoria Watts', 'Sergeant RL-3', 'Tinker Joe', 'Ghoul scientist', 'Talon Company boss',
    'Daniel Littlehorn', 'Dogmeat', 'Silver', 'Raider miniboss', 'Raider leader', 'Brick', 'Butcher', 'Donovan',
    'Theo', 'Isabella Proud', 'Jason Proud', 'Samuel', 'Alejandra Torres', 'Bill Seward', 'Caleb Smith', 'Four Score',
    'Hannibal Hamlin', 'Simone Cameron', 'Allistair Tenpenny', 'Anthony Ling', 'Gustavo', 'Julius Banfield',
    'Edgar Wellington II', 'Godfrey', 'Herbert Dashwood', 'Irving Cheng', 'Lydia Montenegro', 'Margaret Primrose',
    'Michael Hawthorne', 'Millicent Wellington', 'Burke', 'Shakes', 'Susan Lancaster', 'Tiffany Cheng', 'Willy',
    'Bill Foster', 'James', 'George Neusbaum', 'James', 'Janet Rockwell', 'Mabel Henderson', 'Martha Simpson',
    'T. Dithers', 'Pat Neusbaum', 'Roger Rockwell', 'Stanislaus Braun', 'Timmy Neusbaum', 'Ahzrukhal', 'Carol',
    'Cerberus', 'Charon', 'Barrows', 'Ethyl', 'Greta', 'Meat', 'Crowley', 'Moira Brown', 'Graves', 'Patchwork',
    'Quinn', 'Reilly', 'Snowflake', 'Tulip', 'Willow', 'Winthrop', 'Amata Almodovar', 'Andy', 'Beatrice Armstrong',
    'Butch DeLoria', '2James', 'Jonas Palmer', 'Herman Gomez', 'John Kendall', 'Lucy Palmer', 'Paul Hannon Jr.',
    'Stanley Armstrong', 'Alphonse Almodovar', 'Wally Mack', 'Allen Mack', '2Amata Almodovar', 'Butch DeLoria',
    'Christine Kendall', 'Ellen DeLoria', 'Floyd Lewis', 'Freddie Gomez', 'Agnes Taylor', 'James', '2Jonas Palmer',
    'Mary Holden', 'Edwin Brotch', 'Herman Gomez', 'John Kendall', 'Stevie Mack', 'O\'Brian', 'Park', 'Richards',
    'Wolfe', 'Paul Hannon Jr.', 'Paul Hannon Sr.', '2Stanley Armstrong', 'Susie Mack', 'Alphonse Almodovar',
    'Tom Holden', 'Wally Mack', 'Amata Almodovar', 'Andy', 'Beatrice Armstrong', 'Butch DeLoria', 'Christine Kendall',
    'Ellen DeLoria', 'Edwin Brotch', 'Armstrong', 'Herman Gomez', 'John Kendall', 'Allen Mack', 'Richards', 'Taylor',
    'Wilkins', 'Lucy Palmer', 'Allen Mack', 'Pepper Gomez', 'Paul Hannon Sr.', 'Stanley Armstrong', 'Susie Mack',
    'Alphonse Almodovar', 'Wally Mack', 'Gary 1', 'Gary 12', 'Gary 17', 'Gary 25', 'Gary 27', 'Gary 29', 'Gary 32',
    'Gary 33', 'Gary 36', 'Gary 41', 'Gary 42', 'Gary 43', 'Gary 47', 'Bessie Lynn', 'Michael Masters', 'Roy Phillips',
    'Ben Canning', 'Crazy Wolfgang', 'Crow', 'Dead Chinese commando', 'Hoff', 'Emaline', 'John', 'Laszlo Radford',
    'Lucky Harith', 'Mel', 'Sam Warrick', 'Uncle Leo', 'A wanderer', 'Agatha Egglebrecht', 'Ant researcher', 'Arkansas',
    'Raider leader', 'Jabsco', 'Drifter', 'Fawkes', 'Fluffy', 'Gallo', 'Gibson', 'Grandma Sparkle', 'Jaime Palabras',
    'Jitters', 'Junders Plunkett', 'Mad Johnny Wes', 'Masterbrain', 'Milo, shipping foreman', 'Muffy McClellan',
    'Potomac fisherman', 'Recon craft Theta pilot', 'Rocksalt', 'Yearling', 'Sid', 'Sonora Cruz', 'Survivor', 'Sydney',
    'Tara', 'The Preacher', 'Preacher\'s hostage', 'The Roach King', 'Torcher', 'Mercier', 'Prosper', 'Ramsey',
    'Wernher', 'Adan', 'Beth', 'Bingo', 'Friday', 'Harris', 'Jackson', 'Kai', 'Mex', 'Midea', 'Milly', 'Nola',
    'Pitt slave lead conspirator', 'Trouble Man', 'Ishmael Ashur', 'Marie', 'Sandra Kundanika', 'Billy', 'John-John',
    'Wild Bill', 'Bone', 'Brand', 'Everett', 'Faydra', 'Grudd Bear', 'Gruber', 'Hammer', 'John Bear', 'Marco', 'Spook',
    'Duke', 'Krenshaw', 'Lulu', 'Mona', 'O-Dog', 'Phantom', 'Reddup', 'Squill', 'Vikia', 'Billy McShady',
    'Raider fighter', 'American war correspondent', 'Adrienn Adami', 'Constantine Chase', 'Jingwei', 'Thomas Morgan',
    'Quartermaster', 'Benjamin Montgomery', 'Sibley', 'McGraw', 'Morrill', 'Olin', 'Gary 23', 'Armory master',
    'Enclave doctor', 'Enclave Sigma Leader', 'Hoover', 'Sparky', 'Stiggs', 'Atom\'s Champion', 'Gerard', 'Curie III',
    'Novice', 'Sun of Atom', 'Badger', 'Carl', 'Connelly', 'Dunbar', 'Kidd', 'Sanders', 'Wint', 'Davis', 'Lepelletier',
    'Lorin', 'Edwards', 'Griffon', 'Jensen', 'Lag-Bolt', 'Rosa Meitner', 'Bigsley', 'Vallincourt', 'Split Jack',
    'Tristan', 'Catherine', 'Tobar', 'Croatoa', 'Jackson', 'Jimson', 'Nadine', 'Woodrose', 'Desmond Lockheart',
    'Freki', 'Geri', 'Jacob Humboldt', 'Plik', 'Rip Smithy', 'Haley', 'Kenny', 'Marcella', 'Marguerite',
    'Obadiah Blackhall', 'Panada', 'Calvert', 'Ruzka', 'Dead pilot', 'Twigbag', 'Alien captain', 'Hartigan', 'Rheems',
    'Spurlock', 'Elliott Tercorien', 'Paulson', 'Beckett', 'Lawrence Mears', 'Sally', 'Daniels', 'Somah',
    'Toshiro Kago'];


accountsUIBootstrap3.setCustomSignupOptions = function () {

    return {
        profile: {
            location: Locations.findOne()._id,
            name: persons[Math.floor(Math.random() * persons.length)]
        }
    };
};

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
