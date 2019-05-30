'use strict';
var bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  const SystemUser = sequelize.define('SystemUser', {
    FullName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Status: DataTypes.INTEGER
  }, {});
  SystemUser.beforeSave((user, options) => {
    if (user.changed('Password')) {
      user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10), null);
    }
  });
  SystemUser.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  SystemUser.associate = function (models) {
    SystemUser.hasMany(models.Task, {
      foreignKey: 'UserId',
      as: 'Tasks'
    });
  };
  return SystemUser;
};