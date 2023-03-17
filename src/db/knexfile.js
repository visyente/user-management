// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  client: 'mysql',
	connection: {
		host     : 'localhost',
		user     : 'root',
		password : 'visyente',
		database : 'user-management',
		charset  : 'utf8'
	},
	pool: { min: 0, max: 151 },
  useNullAsDefault: true
};
