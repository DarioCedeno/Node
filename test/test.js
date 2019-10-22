const UserService = require('../Services/users')

const us = new UserService()

us.insertUser("Dario","1234")
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })
