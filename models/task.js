'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    Title: DataTypes.STRING,
    Description: DataTypes.STRING,
    Due: DataTypes.DATE,
    Status: DataTypes.INTEGER
  }, {});
  Task.associate = function (models) {
    // associations can be defined here
  };
  return Task;
};