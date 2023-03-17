const { User } = require('../models');

module.exports = async (args) => {
  try {
    const {
      first_name, 
      last_name, 
      address, 
      post_code,
      contact_no,
      password,
      username,
      email
    } = args

   const user = await User.forge().save({
      first_name, 
      last_name, 
      address, 
      post_code,
      contact_no,
      password,
      username,
      email
    })

    let message = "Error in creating user";

    if (user.get('id')) {
      message = 'User created successfuly!';
    }

    return {message};
    
  } catch (err) {
    throw err
  }
}