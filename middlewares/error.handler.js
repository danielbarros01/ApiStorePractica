function logErrors(err, req, res, next) {
  console.log('logErrors')
  console.error(err);
  next(err);//siguiente middleware
}

//Este no va al siguiente middleware, tener cuidado cuando lo usemos
function errorHandler(err, req, res, next) {
  console.log('errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err; //boom guarda toda la info en output
    res.status(output.statusCode).json(output.payload);
  }

  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };
