const { User } = require('../models');
const Promise = require('bluebird');

module.exports = async (args) => {
  console.log("args", args);
  
  try {
    const {user_ids} = args;
    let message = "Error in creating user";
    let users = await user_ids.map( async uId => {
      const user = await User.forge().where({id: uId.id}).fetch({require: false})
      
      if (!user) {
        return {
          message: "User Not Found!"
        }
      }else{
        return {
          message: "User successfully deleted!"
        }
        user.destroy();
      }
      
    });
    users = await Promise.map(users, res => {
      return res.message
    });

    const allUsersAreDeleted = users.filter(u => u === "User Not Found!").length > 0;
    
    if (allUsersAreDeleted) {
      message = "There are users not found!"
    } else {
      message= "All Users successfuly deleted!"
    }
   
    return {
      message
    }
  } catch (err) {
    throw err
  }
}