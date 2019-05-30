const SystemUser = require('../models').SystemUser;
const config =  require('../config/appconfig');
const CustomError = require('../services/customError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticate = params => {
	return SystemUser.findOne({
		where: {
			Username: params.Username
		},
		raw: true
	}).then(user => {
		if (!user)
			throw new CustomError('Authentication failed. User not found.');

		if (!bcrypt.compareSync(params.Password || '', user.Password))
			throw new CustomError('Authentication failed. Wrong password.');

		const payload = {
			Username: user.Username,
			id: user.id,
			time: new Date()
		};

		var token = jwt.sign(payload, config.jwtSecret, {
			expiresIn: config.tokenExpireTime
		});

		return token;
	});
}

module.exports = {
	authenticate
}
