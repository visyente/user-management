const { User } = require('../models');

module.exports = async (args) => {
  try {
    const {user_id} = args;

    const user = await User.forge().where({id: user_id}).fetch({require: false});
    let message = "Error in creating user";

    if (!user) {
      message = "User not Found!"
      return {message}
    }

    user.destroy();

    return {
      message: "User successfully deleted!"
    }
  } catch (err) {
    throw err
  }
}