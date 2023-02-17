const faker = require('faker');

class UserService{
  constructor(){
    this.users = [];
    this.generate();
  }

  generate(){
    const limit = 10;

    for (let index = 0; index < limit; index++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        age: faker.datatype.number({ max: 94 })
      })
    }
  }

  find(){
    return this.users;
  }

  findOne(id){
    return this.users.find(user => user.id === id);
  }
}

module.exports = UserService;
