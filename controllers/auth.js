const authService = require('../services/auth');
const userService = require('../services/systemuser');

function login(req, res) {
	return authService.authenticate(req.body)
		.then(token => {
			res.send({
				success: true,
				data: { token }
			});
		})
		.catch(err => {
			if (err.type === 'custom') {
				return res.status(401).send({
					success: false,
					message: err.message
				});
			}
			return res.status(401).send({
				success: false,
				message: 'Authentication failed. Unexpected Error.'
			});
		})
};

function register(req, res) {
	var username = req.body.Username;
	return userService.getUserByUsername(username || '')
		.then(exists => {

			if (exists) {
				return res.send({
					success: false,
					message: 'Registration failed. User with this email already registered.'
				});
			}

			var user = {
				FullName: req.body.FullName,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Username: req.body.Username,
        Password: req.body.Password,
        Status: 0
			}

			return userService.addUser(user)
				.then(() => res.send({ success: true }));
		})
		.catch(err => {
			return res.status(400).send({
				success: false,
				message: err.message
			});
		})
};

module.exports = {
	login,
	register
}
