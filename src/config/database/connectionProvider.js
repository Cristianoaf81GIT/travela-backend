const mongoose = require('mongoose')

const connectionData = {
  user: process.env.DBUSER,
  pass: process.env.DBPASS,
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  auth: process.env.DBAUTHSOURCE
}



module.exports = app => {

  var mongoURL = 'mongodb://'+connectionData.user
  mongoURL += ':' + connectionData.pass
  mongoURL += '@' + connectionData.host
  mongoURL += ':' + connectionData.port
  mongoURL += '/travela'
  mongoURL += '?authSource=' + connectionData.auth

  // alternate mongodbURL
  const AltmongoURL = process.env.ALTMONGOURL

  const db = mongoose.connect(
    mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
}
