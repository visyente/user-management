const Bookshelf = require('../db/bookshelf');

const Base = Bookshelf.Model.extend({
  hasTimestamps: true,
  softDelete: true,
  
});


module.exports = Base