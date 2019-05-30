// const sequelize = require('../db');
const SystemUser = require('../models').SystemUser;
const Task = require('../models').Task;

const addUser = user => SystemUser.create(user);
const getUserByUsername = Username => SystemUser.findOne({ where: { Username } });
const getUsersWithTasks = () => {
  return SystemUser.findAll({
    attributes: ['FullName', 'Username'],
    include: [{
      model: Task,
      as: 'Tasks',
      attributes: ['Title', 'Description', 'Due', 'Status']
    }],
  })
    // .then(sequelize.getValues);
}

module.exports = {
  addUser,
  getUsersWithTasks,
  getUserByUsername
}
