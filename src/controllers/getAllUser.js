const { User } = require('../models');

module.exports = () => {
  const userList = User.forge();

  return userList.fetchAll();
}