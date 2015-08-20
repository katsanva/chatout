/* globals Locations */
'use strict';

var locationsData = [{ name: "Andale" }, { name: "Garden shed" }, { name: "Old Man Harris' house" },
    { name: "The Smith's house" }, { name: "The Wilson's house" }, { name: "Arefu" }, { name: "Abandoned residence" },
    { name: "Evan King's house" }, { name: "Ewer residence" }, { name: "Schenzy residence" },
    { name: "West residence" }, { name: "Big Town" }, { name: "Clubhouse" }, { name: "Common house" },
    { name: "Red's clinic" }, { name: "Town hall" }, { name: "Canterbury Commons" },
    { name: "Dominic and Machete's house" }, { name: "Porter's Café" }, { name: "Uncle Roe's house" },
    { name: "Citadel" }, { name: "Citadel A ring" }, { name: "Citadel B ring" }, { name: "Citadel bailey" },
    { name: "Citadel laboratory" }, { name: "Citadel armory" }, { name: "Evergreen Mills" },
    { name: "Evergreen Mills bazaar" }, { name: "Northern shack" }, { name: "Southern shack" }, { name: "Guard shack" },
    { name: "Evergreen Mills foundry" }, { name: "Fairfax ruins" }, { name: "Girdershade" },
    { name: "Ronald Laren's home" }, { name: "Sierra Petrovita's home" }, { name: "Grayditch" },
    { name: "Abandoned home" }, { name: "Brandice's house" }, { name: "Dot's Diner" }, { name: "Recently built shack" },
    { name: "Wilks' house" }, { name: "Little Lamplight" }, { name: "Lamplight restrooms" },
    { name: "Little Lamplight office building" }, { name: "Murder Pass" }, { name: "Souvenir shop" },
    { name: "Spelunkers" }, { name: "Megaton" }, { name: "Billy Creel's house" }, { name: "Brass Lantern" },
    { name: "Church of the Children of Atom" }, { name: "Common house" }, { name: "Craterside Supply" },
    { name: "Jericho's house" }, { name: "Lucas Simms' house" }, { name: "Lucy West's house" },
    { name: "Megaton armory" }, { name: "Megaton clinic" }, { name: "Men's restroom" },
    { name: "Mister Burke's house" }, { name: "Moriarty's Saloon" }, { name: "My Megaton house" },
    { name: "Nathan and Manya's house" }, { name: "Water processing plant" }, { name: "Women's restroom" },
    { name: "Oasis" }, { name: "Paradise Falls" }, { name: "Lock and Load" }, { name: "Eulogy's pad" },
    { name: "Child slave house" }, { name: "Slaver barracks" }, { name: "Slave house" },
    { name: "Cutter's clinic" }, { name: "Toilets" }, { name: "Raven Rock" }, { name: "Reilly's Rangers compound" },
    { name: "Republic of Dave" }, { name: "Museum of Dave" }, { name: "Republic of Dave capitol building" },
    { name: "Republic of Dave men's quarters" }, { name: "Republic of Dave women's quarters" }, { name: "Rivet City" },
    { name: "Rivet City bow" }, { name: "Common room" }, { name: "Bridge tower" }, { name: "Rivet City market" },
    { name: "Flak 'N Shrapnel's" }, { name: "Rivet City Supply" }, { name: "Gary's Galley" }, { name: "A Quick Fix" },
    { name: "Potomac Attire" }, { name: "Capitol Preservation Society" }, { name: "The Muddy Rudder" },
    { name: "Rivet City clinic" }, { name: "Rivet City science lab" }, { name: "Saint Monica's Church" },
    { name: "Weatherly Hotel" }, { name: "Temple of the Union" }, { name: "Tenpenny Tower" },
    { name: "Boutique Le Chic" }, { name: "Café Beau Monde" }, { name: "Federalist Lounge" },
    { name: "Gustavo's armory" }, { name: "New Urban Apparel" }, { name: "Underworld" }, { name: "Carol's Place" },
    { name: "The Chop Shop" }, { name: "The Ninth Circle" }, { name: "Underworld Outfitters" },
    { name: "Vault 101" }, { name: "Vault 112/Tranquility Lane" }, { name: "Abandoned house" },
    { name: "Dithers residence" }, { name: "Henderson residence" }, { name: "Neusbaum residence" },
    { name: "Rockwell residence" }, { name: "Simpson residence" }, { name: "Warrington station" },
    { name: "Wasteland gypsy village" }, { name: "Wilhelm's Wharf}" }];

Meteor.startup(function () {
    if (Locations.find().count() === 0) {
        _.each(locationsData, function (location) {
            location._id = new Mongo.ObjectID();

            Locations.insert(location);
        });
    }
});
