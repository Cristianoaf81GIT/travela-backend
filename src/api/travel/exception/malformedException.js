module.exports = () => {

  const malformedJsonError = (err,req,res,next) => {
    if (err instanceof SyntaxError)
      return res.status(400).json(
        {
          'message':'erro na requisição, json mal estruturado!'
        }
      )
      next()
  }
  
  return { malformedJsonError }

}