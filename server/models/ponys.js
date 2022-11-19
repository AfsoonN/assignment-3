let mongoose = require('mongoose');
//create pony model
let ponyModel = mongoose.Schema
({
    name: String,
    colour: String,
    skill: String,
    age: Number
},
{
    collection: "ponys",
}
);

module.exports = mongoose.model('Pony', ponyModel);
