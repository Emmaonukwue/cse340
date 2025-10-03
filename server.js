/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const env = require("dotenv").config()
const app = express()
const static = require("./routes/static")
const expressEjsLayouts = require("express-ejs-layouts")

const path = require('path')

//Index route
//Express app watches the get object within the http request, identifies the "/" for the index or default route
app.get("/", function(req, res){ //function that handles the request and the response objects
  res.render("index", {title:"Home"}) //The response returned to the browser is the index page with the tile of Home
})


/* ***********************
 * View Engine and Templates
 *************************/
app.set("view engine", "ejs") //Set EJS as the view engine
app.use(expressEjsLayouts) //Tell the application to use EJS
app.set("layout", "./layouts/layout") //Direct the application to look for EJS template views in the layouts folder



/* ***********************
 * Routes
 *************************/
app.use(static)

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT
const host = process.env.HOST

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`)
})
