const paths = require('./paths')

module.exports = app => {
  // app.get( string route , controller here)
  app.post( paths.NEW_TRAVEL,  app.src.api.travel.controller.travelController.saveNewTravelData)
}