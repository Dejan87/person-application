const Person = require("../models/personModel");

// Export the function that takes an app (Express app) as an argument
module.exports = (app) => {

    // Function will add an endpoint
    app.get("/api/setupPersons", (req, res) => {

        // Seed database
        const starterPersons = [
            {
                name: "Dejan",
                surname: "Miric",
                createdDate: "23 July 2018",
                city: "Sid",
                address: "15 Example street",
                phone: "022/555-333"
            },
            {
                name: "Zoran",
                surname: "Miric",
                createdDate: "23 July 2018",
                city: "Ruma",
                address: "35 Unknown street",
                phone: "022/222-444"
            }
        ];

        // Add those two Persons to the database
        Person.create(starterPersons, (err, results) => {
            if(err) console.log(err);

            res.send(results);
        });

    });

};