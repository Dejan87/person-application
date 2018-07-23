const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Create Person Schema, this is how our object/document will look like in database
const personSchema = new Schema({
    name: String,
    surname: String,
    createdDate: String,
    city: String,
    address: String,
    phone: String
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;