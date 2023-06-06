const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const debug = require('debug')("node-angular")

const app = express()


// Express configurations
const corsOptions = {
  origin: ['http://localhost:4200'],
};
app.use(cors(corsOptions))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// MiddleWare
const requestLogger = (request: any, response: any, next: any) => {
  response.setHeader('Authorization', 'Bearer 0000')
  //console.log(response)
  next();
};
app.use(requestLogger)


// Routes
const postsRoutes = require("./router/posts")
app.use('/posts', postsRoutes)

module.exports = app
