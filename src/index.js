const express = require('express') // express needed to create a sercer
const consign = require('consign') // consign to share application middlewares and data
const dotenv = require('dotenv').config() // config an load .env file
const port = require('./config/portconfig')(process.env.APPPORT || '3000')// server port
const app = express()// instantiate aplication

consign()
.then('./src/config/database/connectionProvider.js') // database connection provider
.then('./src/config/middlewares/customMiddlewares.js') //  application middlewares like: body-parser, cors ...
.then('./src/api/travel/controller/')
.then('./src/config/routes/routes.js')// application routes
.into( app )

//https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
app.listen( port , () => {
   console.log('\x1b[35m','backend up  ¯\\_(ツ)_/¯ ') 
})


