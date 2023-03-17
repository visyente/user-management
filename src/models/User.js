const Bookshelf = require('../db/bookshelf');
const Base = require('./Base')

const User = Base.extend({
  tableName: 'users'
});


module.exports = Bookshelf.model('User', User);