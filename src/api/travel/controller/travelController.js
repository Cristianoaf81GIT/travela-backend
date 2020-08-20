const travelService = require('../service/travel.service')


module.exports = app => {

  const saveNewTravelData = (req, res) => {
    travelService(req,res)
  }


  return {saveNewTravelData}

}