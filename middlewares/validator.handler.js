const boom = require('@hapi/boom');

//necesitamos contruir middlewares de forma dinamica, por eso esto es asi
function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, {abortEarly: false}); //Que en vez de que largue el Joi error de a 1, nos diga todos los que tenemos de una vez.

    if (error) {
      next(boom.badRequest(error)); //Nos envia un error de tipo 400
    }

    next();
  }
}

module.exports = validatorHandler;
