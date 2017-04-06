class Users {
  constructor () {
    this.usersArr = [];
  }
  addUser (id, name, room) {
    var user = { id, name, room };
    this.usersArr.push(user);
    return user;
  }
  removeUser (id) {
    // return user that was removed
    var user = this.getUser(id);

    if (user) {
      this.usersArr = this.usersArr.filter(user => user.id !== id);
    }

    return user;
  }
  getUser (id) {
    return this.usersArr.filter(user => user.id === id)[0];
  }
  getUserList (room) {
    var users = this.usersArr.filter(user => user.room === room);
    var namesArr = users.map(user => user.name);

    return namesArr;
  }
}

module.exports = { Users };
