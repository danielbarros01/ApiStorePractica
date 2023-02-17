//dtos o schemas es lo mismo
//la responsabilidad de ellos es validar la data que nos envian del cliente

const Joi = require('joi');

const id =
  Joi
    .string()
    .uuid();

const name =
  Joi.string()
    .min(3)
    .max(15);

const lastname =
  Joi.string()
    .min(3)
    .max(15);

const age =
  Joi
    .number()
    .min(14)

const createUserShema = Joi.object({
  name: name.required(),
  lastname: lastname.required(),
  age: age.required()
});

const updateUserShema = Joi.object({
  name: name,
  lastname: lastname,
  age: age
});

const getUserShema = Joi.object({
  id: id.required()
});

module.exports = {
  createUserShema,
  updateUserShema,
  getUserShema
}
