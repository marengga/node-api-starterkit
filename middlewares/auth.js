const jwt = require('jsonwebtoken');
const config = require('../config/appconfig');

const checkAuth = (req, res, next) => {
	const authorization = req.headers['authorization'];
	if (!authorization)
		return res.status(403).send({ auth: false, message: 'No token provided.' });

	const bearer = authorization.split(' ');
	const token = bearer[1];
	console.log(authorization)
	console.log(bearer)
	console.log(token)
	jwt.verify(token, config.jwtSecret, (err, decoded) => {
		if (err)
			return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

		req.user = {
			Username: decoded.Username,
			id: decoded.id
		};
		next();
	});
}

module.exports = {
	checkAuth
}