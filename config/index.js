const config = require("./config");

module.exports = {

    getConnectionString: () => `mongodb://${config.username}:${config.password}@ds247121.mlab.com:47121/persons-database`

}