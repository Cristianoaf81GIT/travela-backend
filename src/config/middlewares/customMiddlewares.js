const bodyParser = require('body-parser')
const compress = require('compression')
const jsonErrorHandler = require('../../api/travel/exception/malformedException')()

module.exports = app => {
  app.use( bodyParser.json() )  // requests in json
  app.use( compress({level: 2}) ) // compress response body for all requests
  app.use( jsonErrorHandler.malformedJsonError ) // custom json error handler
}