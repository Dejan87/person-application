const Person = require("../models/personModel");
const bodyParser = require("body-parser");

module.exports = (app) => {

    // bodyParser is a middleware that is going to "take a look" at http request and parse json out of http body
    app.use(bodyParser.json());
    // Make sure that it can handle urlencoded data
    app.use(bodyParser.urlencoded({ extended: true }));

    // Fetch all persons
    app.get("/api/persons", (req, res) => {

        Person.find({}, (err, persons) => {
            if(err) throw err;

            res.send(persons);
        });

    });

    // Find a specific person by id
    app.get("/api/person/:id", (req, res) => {

        Person.findById({ _id: req.params.id }, (err, person) => {
            if(err) throw err;

            res.send(person);
        }); // Find that person

    });

    // Add another person to collection, or update existing
    app.post("/api/person", (req, res) => {

        // Look at the http body, check the id property
        if (req.body.id) {

            // if there is an id property - update the person
            Person.findByIdAndUpdate(req.body.id, {
                name: req.body.name,
                surname: req.body.surname,
                city: req.body.city,
                address: req.body.address,
                phone: req.body.phone
            });

        } else { 

            // else create a new person in database
            const newPerson = Person({
                name: req.body.name,
                surname: req.body.surname,
                city: req.body.city,
                address: req.body.address,
                phone: req.body.phone
            });

            newPerson.save((err) => {
                if (err) throw err;
            }); // Save a new person

        }

    });

    // Delete a person from collection
    app.delete("/api/person", (req, res) => {

        Person.findByIdAndRemove(req.body.id, (err) => {
            if (err) throw err;
        });

    });

}