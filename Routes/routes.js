const express = require("express");

const router = express.Router();

const UserService = require("../Services/users");

const{successMesagge,errorMessaje}=require('../responses/responses')
router.get("/", (req, res) => {
  const us = new UserService();
  us.getUsers()
    .then(result => {
      res.status(200).json({
        status: "ok",
        data: result
      });
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        status: "ok",
        data: [],
        error: err
      });
    });

});

router.post("/create-user", (req, res) => {
  const us = new UserService()
  const { Usuario, Clave } = req.body
  if (Usuario && Clave){
    us.insertUser(Usuario, Clave)
      .then((data) => 
        successMesagge(res, 201,"Usuario Agregado",data))
      .catch((error) => 
        errorMessaje(res, 400,"Usuario no ingresado",error));
  }else{
    errorMessage(res,400,"Los campos deber ser name y password")
  } 
})
  

  // nos permite exportar el contenido del archivo
  module.exports = router;
