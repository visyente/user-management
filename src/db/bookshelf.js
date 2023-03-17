let knexfile = require('./knexfile')
let knex = require('knex')(knexfile)
let bookshelf = require('bookshelf')(knex)

// Add the plugins
bookshelf.plugin(require('bookshelf-modelbase').pluggable)
bookshelf.plugin(require('bookshelf-paranoia'))
bookshelf.plugin(require('bookshelf-eloquent'));

module.exports = bookshelf