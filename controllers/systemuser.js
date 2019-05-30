const userService = require('../services/systemuser');

function getUsersWithTasks(req, res){
	return userService.getUsersWithTasks()
	.then(data => res.send(data));
};

module.exports = {
	getUsersWithTasks
}