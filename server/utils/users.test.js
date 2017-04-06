const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.usersArr = [{
      id: '1',
      name: 'Mark',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Holly',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Harry',
      room: 'Node room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.usersArr).toEqual([user]);
    expect(users.usersArr).toInclude(user);
  });

  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mark', 'Holly']);
  });

  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

  it('should remove a user', () => {
    var userId = '3';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.usersArr.length).toBe(2);
  });

  it('should not remove a user', () => {
    var userId = '44';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.usersArr.length).toBe(3);
  });

  it('should find a user by id', () => {
    var userId = '1';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find a user that does not exist', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toNotExist();
  });

});
