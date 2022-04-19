const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// checks to see if JAWSDB is connected and uses those variables
if (process.env.JAWSDB_URL) {

  sequelize = new Sequelize(process.env.JAWSDB_URL);

// otherwise use the .env file
} else {

  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
  
}

module.exports = sequelize;