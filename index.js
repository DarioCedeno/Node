const express = require('express')
const app = express()
const AppRoutes = require('./Routes/routes')

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(AppRoutes)

app.listen(3000,()=>{
    console.log('Esta escuchando en http://localhost:3000')
})