/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return Promise.all([
    knex.schema.hasTable('users').then(exists => {
      if(!exists) 
        return knex.schema.createTable('users', table => {
          table.increments()
          table.string('first_name')
          table.string('last_name')
          table.text('address')
          table.string('post_code')
          table.string('contact_no')
          table.string('password')
          table.string('username')
          table.string('email')
          table.timestamp('deleted_at').nullable()
          table.timestamps()
        }) 
    })
  ])
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTableIfExists('users'),
  ])
};
