/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      first_name: 'Admin', 
      last_name: 'Admin',
      address: 'Quezon City',
      post_code: '1115',
      contact_no: '12345678901',
      password: '$2b$10$fz2xiuHnuyjNRMGLrjw4P.LidcPH0hLAC9SGflvBaiILEqYlx7Ouq',
      username: 'admin',
      email: 'admin@gmmail.com',
    },
  ]);
};
