const Mysql = require('../lib/sql')

class Users {
    constructor() {
        this._mysql = new Mysql()
    }

    getUsers = () => {
        return new Promise((resolve, reject) => {
            this._mysql.connection()
                .then((connection) => {
                    const SQL = `SELECT * FROM usuarios;`
                    connection.query(SQL, (error, result) => {
                        if (error) {
                            reject(error)
                        } else {
                            const data = JSON.parse(JSON.stringify(result))
                            resolve(data)
                        }
                    })
                })
                .catch(reject)
        })
    }
    insertUser = (name, password) => {
        return new Promise((resolve, reject) => {
            this._mysql.connection()
                .then((connection) => {
                    const SQL = 'INSERT INTO usuarios(Usuario,Clave) VALUES (?,?)'
                    connection.query(SQL, [name, password], (error, result) => {
                        if (error) {
                            reject(error)
                        } else {
                            const resultado = JSON.parse(JSON.stringify(result))
                            const { insertId } = resultado
                            resolve({ id: insertId, message:"Usuario ingresado" })
                        }
                    })
                    connection.end()
                })
                .catch(reject)
        })
    }
}

module.exports = Users