const { User } = require('../models');

module.exports = async (args) => {
  console.log("args", args);
  
  try {
    const {
      user_id,
      reqBody
    } = args;

    const {
      first_name, 
      last_name, 
      address, 
      post_code,
      contact_no,
      password,
      username,
      email
    } = reqBody;

    const user = await User.where({id: user_id}).fetch().catch(function (error) {
      var UserNotFound = error instanceof User.NotFoundError
      return !UserNotFound
    })
    let message = "Error in creating user";

    if (!user) {
      message = "User not Found!"
      return {message}
    }

    let toUpdate = {};

    if (first_name) {
      toUpdate = {...toUpdate, first_name}
    }
    
    if (last_name) {
      toUpdate = {...toUpdate, last_name}
    }

    if (address) {
      toUpdate = {...toUpdate, address}
    }

    if (post_code) {
      toUpdate = {...toUpdate, post_code}
    }

    if (contact_no) {
      toUpdate = {...toUpdate, contact_no}
    }

    if (email) {
      toUpdate = {...toUpdate, email}
    }

    if (username) {
      toUpdate = {...toUpdate, username}
    }

    if (password) {
      toUpdate = {...toUpdate, password}
    }

    const userUpdate = user.save(toUpdate);

    if (userUpdate.get('id')) {
      message = 'User updated successfuly!';
    }

    return {message}

  } catch (err) {
    throw err
  }  
}