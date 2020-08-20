const travelModel = {Travel } = require('../model/travel.model')

module.exports = (req, res, travelData) => {

  let errorMessage = 'falha ao registrar sua viagem'
  errorMessage+=', por favor tente novamente mais tarde'

  let validationMessage = 'favor preencha todos os campos antes de prosseguir!'

  if (!req.body.name || !req.body.phone 
    || !req.body.datefrom || !req.body.dateto
    || !req.body.origin || !req.body.destination) {
      return res.status(400).json({'message':validationMessage})
  }
    
  let userTravelData = { ...req.body }  
  userTravelData.travelers = req.body.travelers ? req.body.travelers : 1

  const saveTravel = travelModel( userTravelData )  
  .save()
  .then( _ => res.status(201).json({'message': 'registro salvo com sucesso!'}))
  .catch( _ => res.status(500).json({'message':errorMessage}))

}