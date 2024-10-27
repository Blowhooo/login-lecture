'use strict';

class UserStorage {
  static #users = {
    id: ["testyjh1", "testyjh2", "testyjh3"],
    psword : ['1234', "5678", "9101"],
    name : ["윤준후1", "윤준후2", "윤준후3"]
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if(users.hasOwnProperty(field)){
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;