const express = require('express');

const UserService = require('./../services/user.service')
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserShema, updateUserShema, getUserShema } = require('./../schemas/user.schema');

const router = express.Router();
const service = new UserService();

router.get('/', (req, res) => {
  const users = service.find();
  res.status(200).json(users);
});

router.get('/:id', validatorHandler(getUserShema, 'params') ,(req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});

module.exports = router;
