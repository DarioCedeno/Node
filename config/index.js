require('dotenv').config()

const config = {
    // mysql
    mysqlHost:process.env.DB_HOST,
    mysqlUser:process.env.DB_USER,
    mysqlPassword:process.env.DB_PASSWORD,
    mysqlDatebase:process.env.DB_DATABASE
}

module.exports.config = config