const mysql = require("mysql");

const { config } = require("../config/index");

class MySql {
  dataDb = {
    host: config.mysqlHost,
    user: config.mysqlUser,
    password: config.mysqlPassword,
    database: config.mysqlDatebase
  };
  constructor() {}

  connection = () => Promise.resolve(mysql.createConnection(this.dataDb));
}
module.exports = MySql;
